import { ArrowSvg } from "@/components/UI/icons/Icons";
import LinkCmp from "@/components/UI/LinkCmp";
import React from "react";

interface ArticleProps {
  publishPlace: string;
  preview: string;
  publishDate: string;
  link: string;
  isFading?: boolean;
}
export default function ArticleItem({
  publishPlace,
  preview,
  publishDate,
  link,
  isFading,
}: ArticleProps) {
  
  return (
    <li
      className={`w-[35rem]  overflow-hidden mobile:w-full h-80 flex flex-col items-start mobile:items-center border-t-8 border-t-mainGold-500 px-6 pt-12 pb-8 justify-between shadow-[0px_3px_6px_0px_#00000026] rounded-base transition-opacity duration-300
       ${isFading ? "opacity-0" : "opacity-100"}`}
    >
      <p className="text-right text-mainGray-800 italic">{preview}</p>
      <span className="flex items-center gap-2">
        <h6 className="text-mainGray-500 text-18">{publishPlace}, </h6>
        <p className="text-mainGray-500 text-18">{publishDate}</p>
      </span>
      <LinkCmp href={link} styleMode="arrow" styleSize="none">
        <h6>לכתבה המלאה</h6>
        <ArrowSvg />
      </LinkCmp>
    </li>
  );
}
