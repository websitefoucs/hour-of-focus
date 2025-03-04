"use client";
import LinkCmp from "@/components/UI/LinkCmp";
import { usePathname } from "next/navigation";
import React from "react";

export default function DashboardNav() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/admin/faqs", label: "שאלות ותשובות" },
    { href: "/admin/materials", label: "חומרי לימוד" },
    { href: "/admin/articles", label: "כתבות" },
    { href: "/admin/testimonies", label: "המלצות" },
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
