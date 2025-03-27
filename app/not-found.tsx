import LinkCmp from "@/components/UI/LinkCmp";
import Image from "next/image";
import React from "react";

export default function NotFound() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center justify-items-center">
      <Image src="/imgs/notFound.svg" alt="404" width={500} height={500} />
      <h1 className="text-mainGray-800">נראה לי הלכת לאיבוד</h1>
      <LinkCmp styleMode="borderB" href="/">חזור לדף הבית</LinkCmp>
    </div>
  );
}
