import Image from "next/image";
import React from "react";

export default function HeroImage() {
  return (
    <div className="relative grid-stack">
      <Image
        width={1440}
        height={750}
        src="/imgs/homeHero.svg"
        alt="Home main image"
        className=" object-cover w-full h-full  "
      />
      <div className="absolute inset-0 bg-imageOverlay"></div>
    </div>
  );
}
