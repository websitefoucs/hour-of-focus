"use client";
import { CONTACT_US } from "@/constants/links";
import LinkCmp from "../UI/LinkCmp";
import Model from "../UI/Model";
import NavLinks from "./NavLinks";

export default function MobileHeader() {
  return (
    <Model
      containerClassName="hidden mobile:block"
      withOverlay
      button={{
        content: (
          <svg className="hamburger" viewBox="0 0 100 100">
            <rect
              className="line top"
              width="80"
              height="10"
              x="10"
              y="25"
              rx="5"
            ></rect>
            <rect
              className="line middle"
              width="80"
              height="10"
              x="10"
              y="45"
              rx="5"
            ></rect>
            <rect
              className="line bottom"
              width="80"
              height="10"
              x="10"
              y="65"
              rx="5"
            ></rect>
          </svg>
        ),
        props: {
          className:
            "hamburger fill-mainOrange-600 w-12 h-12 hidden mobile:block",
          "aria-controls": "primary-navigation",
          "aria-expanded": "false",
        },
      }}
      model={
        <div className="bg-mainWhite-0 p-4 top-20 rounded-l-base absolute right-4 grid menu-model z-50">
          <NavLinks />
          <LinkCmp
            styleMode="full"
            styleSize="small"
            href={CONTACT_US}
            className="content-us"
          >
            צור קשר
          </LinkCmp>
        </div>
      }
    ></Model>
  );
}
