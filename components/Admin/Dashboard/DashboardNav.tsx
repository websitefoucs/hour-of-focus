"use client";
import LinkCmp from "@/components/UI/LinkCmp";
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
    { href: ADMIN_FAQS_PAGE_LINK, label: "שאלות ותשובות" },
    { href: ADMIN_MATERIALS_PAGE_LINK, label: "חומרי לימוד" },
    { href: ADMIN_ARTICLES_PAGE_LINK, label: "כתבות" },
    { href: ADMIN_TESTIMONIES_PAGE_LINK, label: "המלצות" },
    { href: "/admin/test", label: "aaa" },
  ];

  return (
    <nav className="bg-mainWhite-100 py-2 px-6 rounded-base h-fit flex gap-4 items-center">
      {navLinks.map(({ href, label }) => (
        <LinkCmp
          key={href}
          href={href}
          styleSize="small"
          styleMode={
            pathname.includes(href.split("/").pop()!) ? "full" : "coloredBorder"
          }
        >
          {label}
        </LinkCmp>
      ))}
    </nav>
  );
}
