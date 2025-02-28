import { GINGER_KID } from "@/constants/images";
import Image from "next/image";
import React from "react";

export default function HeroImage() {
  return (
    <div className="relative grid-stack w-full h-full">
      <Image
         fill
        src={GINGER_KID}
        alt="Home main image"
        className="object-cover max-w-screen h-full"
        priority
      />
      <div className="absolute inset-0 bg-imageOverlay"></div>
    </div>
  );
}
