import React from "react";
import { EnvelopSvg } from "../UI/icons/Icons";
import LinkCmp from "../UI/LinkCmp";
import { CONTACT_US } from "@/constants/links";

export default function Details() {
  return (
    <div className="flex flex-col gap-4 footer-grid-one">
      <h6 className="pb-2"> שעה של פוקוס © </h6>
      <LinkCmp
        styleMode="none"
        styleSize="none"
        href={CONTACT_US}
        className="text-sm leading-[23.8px]"
      >
        צור קשר
      </LinkCmp>
      <span className="flex gap-2 items-center">
        <EnvelopSvg className="w-[1.125rem] h-[1.125rem]" />
        <p className="text-sm leading-[23.8px]">0focushour0@gmail.com</p>
      </span>
      <LinkCmp
        href={"/accessibility"}
        className="text-sm leading-[23.8px]  underline"
      >
        הצהרת נגישות
      </LinkCmp>
    </div>
  );
}
