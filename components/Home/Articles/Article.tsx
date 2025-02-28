import { ArrowSvg } from "@/components/UI/icons/Icons";
import LinkCmp from "@/components/UI/LinkCmp";
import Image from "next/image";
import React from "react";

interface ArticleProps {
  image: string;
  text: string;
  date: string;
  link: string;
  isFading?: boolean;
}
export default function Article({
  image,
  text,
  date,
  link,
  isFading,
}: ArticleProps) {
  return (
    <li
      className={`w-[35rem] overflow-hidden mobile:w-full h-[26rem] flex flex-col items-start mobile:items-center border-t-8 border-t-mainGold-500 px-4 pt-4 pb-8  justify-between shadow-[0px_3px_6px_0px_#00000026] rounded-base transition-opacity duration-300
       ${isFading ? "opacity-0" : "opacity-100"}`}
    >
      <Image
        src={image}
        alt="Article image"
        width={560}
        height={104}
        className="max-w-full w-fit h-28  self-start "
      />
      <p className="text-right text-mainGray-800">{text}</p>
      <p>{date}</p>
      <LinkCmp href={link} styleMode="arrow" styleSize="none">
        <h6>לכתבה המלאה</h6>
        <ArrowSvg />
      </LinkCmp>
    </li>
  );
}
