"use client";
import LinkCmp from "@/components/UI/LinkCmp";
import { usePathname } from "next/navigation";
import React from "react";

export default function DashboardNav() {
  const pathname = usePathname();
  return (
    <nav className="bg-mainWhite-100 py-2 px-6 rounded-base h-fit flex  gap-4 items-center">
      <LinkCmp
        href="/admin/faqs"
        styleSize="small"
        styleMode={`${pathname.includes("faqs") ? "full" : "coloredBorder"}`}
      >
        שאלות ותשובות
      </LinkCmp>
      <LinkCmp
        href="/admin/materials"
        styleSize="small"
        styleMode={pathname.includes("materials") ? "full" : "coloredBorder"}
      >
        חומרי לימוד
      </LinkCmp>
    </nav>
  );
}
