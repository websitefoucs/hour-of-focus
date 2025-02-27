"use client";

import React from "react";
import { useFormStatus } from "react-dom";
import LinkCmp from "./LinkCmp";

interface FormDisabledLinkProps {
  isSignUp?: boolean;
  headerText?: string;
}
export default function FormDisabledLink({
  isSignUp,
  headerText,
}: FormDisabledLinkProps) {
  const { pending } = useFormStatus();

  return (
    <LinkCmp
      aria-disabled={pending}
      href={isSignUp ? "sign-in" : "sign-up"}
      styleMode="none"
      styleSize="none"
      className={`underline font-semibold hover:cursor-pointer ${
        pending ? "opacity-50" : ""
      }`}
    >
      {headerText}
    </LinkCmp>
  );
}
