//Encryption
import { jwtVerify, SignJWT } from "jose";
//Next
import { cookies } from "next/headers";
//Utils
import { sanitizeUtil } from "./sanitize.util";
import { AppError } from "./Error.util";
import { isValidObjectId } from "@/lib/mongoClient";
//Types
import { TAuthDto, TJWTPayload } from "@/types/auth.type";
/**
 * Converts FormData to an authentication DTO.
 *
 * @param formData - The FormData object containing the form data.
 * @returns An object containing the authentication DTO and the password confirmation.
 */
const formDataToDto = (
  formData: FormData
): { dto: TAuthDto; passwordConfirm: string } => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const passwordConfirm = formData.get("passwordConfirm") as string;

  return { dto: { email, password }, passwordConfirm };
};
/**
 * Sanitizes the authentication DTO by ensuring that each field is processed through a sanitization utility.
 *
 * @param dto - The authentication DTO to sanitize.
 * @returns A sanitized authentication DTO with sanitized `password` and `email` fields.
 */
const sanitizeAuthDto = (dto: TAuthDto): TAuthDto => {
  const password = sanitizeUtil.sanitizedObjectField(dto?.password) || "";
  const email = sanitizeUtil.sanitizedObjectField(dto?.email) || "";

  return {
    password,
    email,
  };
};
/**
 * Validates the sign-in DTO.
 *
 * @param userDto - The sign-in DTO.
 * @returns An object containing the errors, if any.
 */
const validateAuthSignInDto = (
  userDto: TAuthDto
): Record<keyof TAuthDto, string> => {
  const errors: Record<string, string> = {};

  const passwordError = _validatePassword(userDto?.password);
  if (passwordError) errors.password = passwordError;

  const emailError = _validateEmail(userDto?.email);
  if (emailError) errors.email = emailError;

  if (Object.keys(errors).length > 0) {
    throw AppError.create("Validation Error", 400, true, errors);
  }
  return errors;
};
/**
 * Decodes a JWT token and returns its payload.
 *
 * @param {string} token - The JWT token to decode.
 * @returns {Promise<TJWTPayload | null>} A promise that resolves to the decoded payload or null if decoding fails.
 *
 * @throws {AppError} If an error occurs during token verification, an AppError is created with the error message and a 500 status code.
 */
const decodeToken = async (token: string): Promise<TJWTPayload | null> => {
  try {
    if (!token) return null;
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const { payload } = await jwtVerify<TJWTPayload>(token, secret);

    if (!payload) return null;

    return payload;
  } catch (error) {
    if (error instanceof Error) {
      AppError.create(error.message, 500);
    }
    return null;
  }
};
/**
 * Creates a cookie with the given token.
 *
 * @param {string} token - The token to be set in the cookie.
 * @returns {Promise<void>} A promise that resolves when the cookie is set.
 *
 * The cookie is configured with the following options:
 * - `httpOnly`: true, making the cookie inaccessible to JavaScript on the client-side.
 * - `secure`: true if the environment is production, ensuring the cookie is only sent over HTTPS.
 * - `path`: "/", making the cookie available to the entire domain.
 * - `sameSite`: "lax", providing some protection against cross-site request forgery (CSRF) attacks.
 * - `maxAge`: 24 hours, specifying the duration for which the cookie is valid.
 */
const createCookie = async (token: string): Promise<void> => {
  const _cookies = await cookies();
  _cookies.set("session", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    sameSite: "lax",
    maxAge: 24 * 60 * 60, // 24 hours
  });
};
/**
 * Verifies the authentication of a user by checking the session token.
 *
 * @returns {Promise<string>} The user ID if authentication is successful.
 *
 * @throws {AppError} If the session token is missing, invalid, or the user ID is not valid.
 */
const verifyAuth = async (): Promise<string> => {
  const token = (await cookies()).get("session")?.value;
  if (!token) {
    throw AppError.create("שגיאת גישה", 401, true, {
      message: "שגיאת גישה",
    });
  }
  const decodedToken = await decodeToken(token);
  const userId = decodedToken?.userId;
  if (!userId) {
    throw AppError.create("שגיאת גישה", 401, true, {
      message: "שגיאת גישה",
    });
  }

  const validObjectId = isValidObjectId(userId);
  if (!validObjectId) {
    throw AppError.create("שגיאת גישה", 401, true, {
      message: "שגיאת גישה",
    });
  }

  return userId;
};
/**
 * Generates a JSON Web Token (JWT) for a given user ID.
 *
 * @param {string} userId - The unique identifier of the user for whom the JWT is being created.
 * @returns {Promise<string>} A promise that resolves to the signed JWT as a string.
 *
 * @throws {Error} If there is an issue with the signing process.
 */
const createJWT = async (userId: string): Promise<string> => {
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  return new SignJWT({ userId })
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("24h")
    .sign(secret);
};
/**
 * Validates a password based on specific criteria.
 * PRIVATE FUNCTION
 * @param {string} [password] - The password to validate.
 * @returns {string | null} - Returns an error message if the password is invalid, otherwise returns null.
 *
 * The password must meet the following criteria:
 * - Must be at least 6 characters long.
 * - Must contain at least one uppercase letter.
 * - Must contain at least one lowercase letter.
 * - Must contain at least one digit.
 *
 * Error messages:
 * - "סיסמה היא שדה חובה." if the password is not provided.
 * - "סיסמה חייבת להכיל לפחות 6 תווים, אות גדולה, אות קטנה ומספר." if the password does not meet the criteria.
 */
const _validatePassword = (password?: string): string | null => {
  if (!password) {
    return "סיסמה היא שדה חובה.";
  }
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;
  if (!passwordPattern.test(password)) {
    return "סיסמה חייבת להכיל לפחות 6 תווים, אות גדולה, אות קטנה ומספר.";
  }
  return null;
};
/**
 * Validates an email address based on a regular expression pattern.
 * PRIVATE FUNCTION
 * @param {string} [email] - The email address to validate.
 * @returns {string | null} - Returns an error message if the email is invalid, otherwise returns null.
 *
 * Error message:
 * - "אימייל לא תקין." if the email address is not provided or does not match the pattern.
 */
const _validateEmail = (email?: string): string | null => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailPattern.test(email)) {
    return "אימייל לא תקין.";
  }
  return null;
};

export const authServerUtils = {
  decodeToken,
  createCookie,
  createJWT,
  validateAuthSignInDto,
  sanitizeAuthDto,
  verifyAuth,
  formDataToDto,
};
