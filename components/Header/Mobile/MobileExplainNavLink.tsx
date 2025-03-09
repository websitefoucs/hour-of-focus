"use client";
import Model from "@/components/UI/Model";
import React from "react";
import NavLink from "../NavLinkItem";
import {
  EXPLAIN_STUDENTS_PAGE_LINK,
  EXPLAIN_VOLUNTEERS_PAGE_LINK,
} from "@/constants/links";
import { DirectionSvg } from "@/components/UI/icons/Icons";

interface NavLinkProps {
  pathname: string;
}
export default function MobileExplainNavLink({ pathname }: NavLinkProps) {
  return (
    <Model
      containerClassName="hidden mobile:flex transition-all duration-300 ease-in-out h-7 flex-col explain-mobile"
      withOverlay={false}
      model={
        <div className="bg-mainWhite-0 p-4 rounded-base flex flex-col gap-2">
          <NavLink
            href={EXPLAIN_VOLUNTEERS_PAGE_LINK}
            isHighlighted={pathname === EXPLAIN_VOLUNTEERS_PAGE_LINK}
          >
            מתנדבים
          </NavLink>
          <NavLink
            href={EXPLAIN_STUDENTS_PAGE_LINK}
            isHighlighted={pathname === EXPLAIN_STUDENTS_PAGE_LINK}
          >
            תלמידים
          </NavLink>
        </div>
      }
      button={{
        props: {
          className: "flex items-center gap-1",
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
            <DirectionSvg className="w-4 h-4" />
          </>
        ),
      }}
    ></Model>
  );
}
