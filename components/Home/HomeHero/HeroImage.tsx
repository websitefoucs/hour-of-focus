import { GINGER_KID } from "@/constants/images";
import Image from "next/image";
import React from "react";

export default function HeroImage() {
  return (
    <div className="relative grid-stack w-full h-full">
      <Image
         sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
         fill
        src={GINGER_KID}
        alt="Home main image"
        className="inset-0 object-cover"
        priority
      />
      <div className="absolute inset-0 bg-imageOverlay"></div>
    </div>
  );
}
