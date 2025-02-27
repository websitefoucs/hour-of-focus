import { ArrowSvg } from "@/components/UI/icons/Icons";
import LinkCmp from "@/components/UI/LinkCmp";
import Image from "next/image";
import React from "react";

interface ArticleProps {
  image: string;
  text: string;
  date: string;
  link: string;
}
export default function Article({ image, text, date, link }: ArticleProps) {
  return (
    <li className="w-[35rem] h-[26rem] flex flex-col items-start border-t-8 border-t-mainGold-500 px-4 pt-4 pb-8  justify-between shadow-[0px_3px_6px_0px_#00000026] rounded-base">
      <Image
        src={image}
        alt="Article image"
        width={560}
        height={104}
        className="w-fit h-28 object-cover"
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
