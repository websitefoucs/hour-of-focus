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
    <li className="w-[35rem] overflow-hidden mobile:w-full h-[26rem] mobile:min-h-full  flex flex-col items-start mobile:justify-center mobile:items-center border-t-8 border-t-mainGold-500 px-4 pt-4 pb-8  justify-between shadow-[0px_3px_6px_0px_#00000026] rounded-base">
      <Image
        src={image}
        alt="Article image"
        width={560}
        height={104}
        className="w-10 mobile:max-w-full h-28 mobile:h-10 object-cover"
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
