//Encryption
import { jwtVerify } from "jose";
//Next
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
//Types
import { TJWTPayload } from "./types/auth.type";
//Utils
import { AppError } from "./utils/server/Error.util";

/**
 * Middleware function to handle authentication for admin routes.
 *
 * @param {NextRequest} req - The incoming request object.
 * @returns {Promise<NextResponse>} - A promise that resolves to the appropriate response.
 *
 * This middleware checks if the request is for an admin route. If it is not, it allows the request to proceed.
 * If the request is for an admin route, it checks for the presence of an authentication token in the cookies.
 * If the token is not present, it redirects the user to the sign-in page.
 * If the token is present, it decodes the token and checks its validity.
 * If the token is invalid or expired, it redirects the user to the sign-in page.
 * If the token is valid, it allows the request to proceed.
 */
export function middleware(req: NextRequest) {
  const isAdminRoute = req.nextUrl.pathname.startsWith("/admin");
  if (!isAdminRoute) return NextResponse.next();

  const token = req.cookies.get("session")?.value;
  if (!token)
    return NextResponse.redirect(new URL("/auth/sign-in", req.nextUrl));

  return decodeToken(token).then((decodedToken) => {
    if (
      !decodedToken ||
      !decodedToken?.userId ||
      !decodedToken.exp ||
      decodedToken.exp < Date.now() / 1000
    ) {
      return NextResponse.redirect(new URL("/auth/sign-in", req.nextUrl));
    }
    return NextResponse.next();
  });
}

//Duplicate from authServerUtil to avoid Edge runtime error
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
