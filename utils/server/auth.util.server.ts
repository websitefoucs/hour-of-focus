import { jwtVerify, SignJWT } from "jose";
import { cookies } from "next/headers";
import { sanitizeUtil } from "./sanitize.util";
import { validationUtil } from "../validation.util";
import { AppError } from "./Error.util.server";
import { TAuthDto, TJWTPayload } from "@/types/auth.type";

const formDataToDto = (
  formData: FormData
): { dto: TAuthDto; passwordConfirm: string } => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const passwordConfirm = formData.get("passwordConfirm") as string;
  const username = formData.get("username") as string;

  return { dto: { email, password, username }, passwordConfirm };
};
const sanitizeAuthDto = (dto: TAuthDto): TAuthDto => {
  const username = sanitizeUtil.SanitizedObjectField(dto?.username) || "";
  const password = sanitizeUtil.SanitizedObjectField(dto?.password) || "";
  const email = sanitizeUtil.SanitizedObjectField(dto?.email) || "";

  return {
    username,
    password,
    email,
  };
};
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
const validateAuthSignUpDto = (
  userDto: TAuthDto,
  passwordConfirm: string
): Record<keyof TAuthDto, string> => {
  const errors: Record<string, string> = {};

  const userNameError = _validateNames(userDto?.username, "username");
  if (userNameError) errors.username = userNameError;

  const passwordError = _validatePassword(userDto?.password);
  if (passwordError) errors.password = passwordError;

  if (!passwordError && passwordConfirm) {
    const passwordMatch = validationUtil.compareStr(
      "Password",
      userDto?.password,
      passwordConfirm
    );
    if (passwordMatch) errors.password = passwordMatch;
  }

  const emailError = _validateEmail(userDto?.email);
  if (emailError) errors.email = emailError;

  if (Object.keys(errors).length > 0) {
    throw AppError.create("Validation Error", 400, true, errors);
  }
  return errors;
};
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
const createCookie = async (token: string) => {
  const _cookies = await cookies();
  _cookies.set("session", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    sameSite: "lax",
    maxAge: 24 * 60 * 60, // 24 hours
  });
};
const verifyAuth = async () => {
  const token = (await cookies()).get("session")?.value;
  if (!token) {
    throw AppError.create("Unauthorized", 401, true, {
      message: "Unauthorized",
    });
  }
  const decodedToken = await decodeToken(token);
  const userId = decodedToken?.userId;
  if (!userId) {
    throw AppError.create("Unauthorized", 401, true, {
      message: "Unauthorized",
    });
  }

  return userId;
};
const createJWT = async (userId: string) => {
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  return new SignJWT({ userId })
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("24h")
    .sign(secret);
};
const _validatePassword = (password?: string): string | null => {
  if (!password) {
    return "Password is required.";
  }
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;
  if (!passwordPattern.test(password)) {
    return "Password must contain at least one uppercase letter, one lowercase letter, and one number.";
  }
  return null;
};
const _validateEmail = (email?: string): string | null => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailPattern.test(email)) {
    return "Please provide a valid email address.";
  }
  return null;
};
const _validateNames = (name: string | undefined, fieldName: string) => {
  const errorLen = validationUtil.validateStrLength(fieldName, 2, name);
  if (errorLen) {
    return errorLen;
  }

  const error = validationUtil.validateLetters(fieldName, name);
  if (error) {
    return error;
  }

  return null;
};
export const authServerUtils = {
  decodeToken,
  createCookie,
  createJWT,
  validateAuthSignUpDto,
  validateAuthSignInDto,
  sanitizeAuthDto,
  verifyAuth,
  formDataToDto,
};
