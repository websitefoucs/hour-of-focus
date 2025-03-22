"use client";
import LinkCmp from "@/components/UI/LinkCmp";
import SignOutButton from "@/components/Admin/Dashboard/SignOutButton";
import {
  ADMIN_ARTICLES_PAGE_LINK,
  ADMIN_FAQS_PAGE_LINK,
  ADMIN_MATERIALS_PAGE_LINK,
  ADMIN_TESTIMONIES_PAGE_LINK,
} from "@/constants/links";
import { usePathname } from "next/navigation";
import React from "react";

export default function DashboardNav() {
  const pathname = usePathname();

  const navLinks = [
    {
      href: ADMIN_FAQS_PAGE_LINK,
      label: "שאלות ותשובות",
      isActive: pathname === ADMIN_FAQS_PAGE_LINK,
    },
    {
      href: ADMIN_MATERIALS_PAGE_LINK,
      label: "חומרי לימוד",
      isActive: pathname === ADMIN_MATERIALS_PAGE_LINK,
    },
    {
      href: ADMIN_ARTICLES_PAGE_LINK,
      label: "כתבות",
      isActive: pathname === ADMIN_ARTICLES_PAGE_LINK,
    },
    {
      href: ADMIN_TESTIMONIES_PAGE_LINK,
      label: "המלצות",
      isActive: pathname === ADMIN_TESTIMONIES_PAGE_LINK,
    },
  ];

  return (
    <nav className="bg-mainWhite-100 rounded-base flex gap-4 justify-around md:grid grid-rows-[repeat(5,3rem)] h-fit px-6 py-4 transition-all duration-1000 overflow-auto md:overflow-visible">
      {navLinks.map(({ href, label, isActive }) => (
        <LinkCmp
          key={href}
          href={href}
          styleSize="none"
          styleMode="none"
          className={`${
            isActive ? "text-mainGray-600" : ""
          }  hover:text-mainGray-800 font-semibold transition-all duration-300 text-nowrap`}
        >
          {label}
        </LinkCmp>
      ))}
      <SignOutButton />
    </nav>
  );
}
