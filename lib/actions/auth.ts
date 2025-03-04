"use server";
import { TAuth, TUserDocument, TAuthDto } from "@/types/auth.type";
import { getCollection } from "../../lib/mongoClient";
import { AppError } from "@/utils/server/Error.util";
import bcrypt from "bcrypt";
import { cookies } from "next/headers";
import { ObjectId } from "mongodb";
import { authServerUtils } from "@/utils/server/auth.util";
import { redirect } from "next/navigation";
import { TFormState } from "@/types/app.type";

export const signIn = async (
  state: TFormState<TAuthDto>,
  formData: FormData
): Promise<TFormState<TAuthDto>> => {
  let authDto;

  try {
    const { dto } = authServerUtils.formDataToDto(formData);
    authDto = authServerUtils.sanitizeAuthDto(dto);
    authServerUtils.validateAuthSignInDto(authDto);

    const { password, email } = authDto;

    const userCollection = await getCollection<TUserDocument>("users");

    const user = await userCollection.findOne({ email });

    if (!user || !user?.passwordHash || !user?._id || !password || !email) {
      throw AppError.create("User not found", 404, true, {
        email: "Invalid credentials",
        password: "Invalid credentials",
      });
    }

    const match = await bcrypt.compare(password, user.passwordHash);
    if (!match) {
      throw AppError.create("Invalid credentials", 401, true, {
        email: "Invalid credentials",
        password: "Invalid credentials",
      });
    }

    const _id = user._id.toString();

    const token = await authServerUtils.createJWT(_id);

    await authServerUtils.createCookie(token);
  } catch (error) {
    const err = AppError.handleResponse(error);
    return {
      errors: err.errors as Record<keyof TAuthDto, string>,
      message: err.message,
      data: authDto,
    };
  }

  redirect("/admin");
};
export const signUp = async (
  state: TFormState<TAuthDto>,
  formData: FormData
): Promise<TFormState<TAuthDto>> => {
  let authDto;
  try {
    const { dto, passwordConfirm } = authServerUtils.formDataToDto(formData);
    authDto = authServerUtils.sanitizeAuthDto(dto);
    authServerUtils.validateAuthSignUpDto(authDto, passwordConfirm);

    const { username, password, email } = authDto;
    if (!email || !password) {
      throw AppError.create("missing credentials", 400);
    }
    const userCollection = await getCollection<TUserDocument>("users");

    const existingUser = await userCollection.findOne({ email });

    if (existingUser) {
      throw AppError.create("username taken", 400);
    }

    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);

    const user = await userCollection.insertOne({
      username,
      passwordHash,
      email,
    });

    if (!user.acknowledged) {
      throw AppError.create("Error creating user");
    }

    const _id = user.insertedId.toString();

    const token = await authServerUtils.createJWT(_id);

    await authServerUtils.createCookie(token);
  } catch (error) {
    const err = AppError.handleResponse(error);
    return {
      errors: err.errors as Record<keyof TAuthDto, string>,
      message: err.message,
      data: authDto,
    };
  }

  redirect("/admin");
};
export const signOut = async (): Promise<void> => {
  try {
    const _cookies = await cookies();

    _cookies.set("session", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      sameSite: "lax",
      expires: new Date(0),
    });
  } catch (error) {
    throw AppError.create(`${error}`, 500, false);
  }
};
export const getSessionUser = async (): Promise<TAuth | null> => {
  try {
    const token = (await cookies()).get("session")?.value;

    if (!token) {
      return null;
    }

    const payload = await authServerUtils.decodeToken(token);

    const userCollection = await getCollection<TUserDocument>("users");

    const user = await userCollection.findOne({
      _id: new ObjectId(payload?.userId),
    });
    return { username: user?.username, _id: user?._id.toString() };
  } catch (error) {
    AppError.create(`${error}`, 500, false);
    return null;
  }
};
