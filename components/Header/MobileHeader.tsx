"use client";
import { CONTACT_US } from "@/constants/links";
import NavLinks from "./NavLinks";
import LinkCmp from "../UI/LinkCmp";
import Model from "../UI/Model";
import { HamburgerSvg } from "../UI/icons/Icons";

export default function MobileHeader() {
  return (
    <Model
      containerClassName="hidden mobile:block"
      withOverlay
      button={{
        content: <HamburgerSvg />,
        props: {
          className:
            "hamburger fill-mainOrange-600 w-12 h-12 hidden mobile:block",
          "aria-controls": "primary-navigation",
          "aria-expanded": "false",
        },
      }}
      model={
        <div className="bg-mainWhite-0 p-4 top-20 rounded-l-base absolute right-0 grid menu-model z-50">
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
