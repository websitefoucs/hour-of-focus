import React from "react";
import HeroImage from "./HeroImage";

export default function HeroCmp({ text }: { text: string }) {
  return (
    <div className="grid grid-cols-1 grid-rows-1 w-full h-[13rem] items-center justify-items-center">
      <HeroImage />
      <h4 className="grid-stack z-10 text-mainWhite-0 mobile:text-center">{text}</h4>
    </div>
  );
}
