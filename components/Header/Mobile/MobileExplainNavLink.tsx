"use client";
import Model from "@/components/UI/Model";
import React from "react";
import NavLinkItem from "../NavLinkItem";
import {
  EXPLAIN_STUDENTS_PAGE_LINK,
  EXPLAIN_VOLUNTEERS_PAGE_LINK,
} from "@/constants/links";
import { DirectionSvg } from "@/components/UI/Icons";

interface NavLinkProps {
  pathname: string;
}
export default function MobileExplainNavLink({ pathname }: NavLinkProps) {
  return (
    <Model
      containerClassName="flex md:hidden transition-all duration-1000 ease-in-out flex-col h-7 has-[.open]:h-[7.25rem] explain-mobile text-16"
      withOverlay={false}
      model={
        <div className="bg-mainWhite-0 rounded-base flex flex-col gap-4 pt-4 pr-4 overflow-hidden animate-grow-y">
          <NavLinkItem
            href={EXPLAIN_VOLUNTEERS_PAGE_LINK}
            isHighlighted={pathname === EXPLAIN_VOLUNTEERS_PAGE_LINK}
          >
            מתנדבים
          </NavLinkItem>
          <NavLinkItem
            href={EXPLAIN_STUDENTS_PAGE_LINK}
            isHighlighted={pathname === EXPLAIN_STUDENTS_PAGE_LINK}
          >
            תלמידים
          </NavLinkItem>
        </div>
      }
      button={{
        props: {
          className: "flex items-center gap-1 leading-7",
        },
        content: (
          <>
            <p
              className={
                pathname.includes("explain") ? "font-semibold" : "font-normal"
              }
            >
              הסברים
            </p>
            <DirectionSvg className="w-4 h-4 transition-all duration-300 ease-in-out " />
          </>
        ),
      }}
    ></Model>
  );
}
