import React from "react";
import LinkCmp from "../UI/LinkCmp";

interface NavLinkProps {
  href: string;
  isHighlighted?: boolean;
  children?: React.ReactNode;
}
export default function NavLink({
  href,
  children,
  isHighlighted,
}: NavLinkProps) {
  return (
    <LinkCmp className={` ${isHighlighted ? "font-bold" : ""} `} href={href}>
      {children}
    </LinkCmp>
  );
}
