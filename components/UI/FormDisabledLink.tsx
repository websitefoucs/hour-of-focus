"use client";

import React from "react";
import { useFormStatus } from "react-dom";
import LinkCmp from "./LinkCmp";

interface FormDisabledLinkProps {
  isSignUp?: boolean;
  headerText?: string;
}
/**
 * A component that renders a link which can be disabled based on form status.
 *
 * @param {Object} props - The component props.
 * @param {boolean} props.isSignUp - Determines the link destination. If true, the link points to "sign-in", otherwise to "sign-up".
 * @param {string} props.headerText - The text to display inside the link.
 *
 * @returns {JSX.Element} The rendered link component.
 */
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
