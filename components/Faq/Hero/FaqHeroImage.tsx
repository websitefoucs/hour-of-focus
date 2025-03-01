import { GINGER_KID } from "@/constants/images";
import Image from "next/image";
import React from "react";
import ImageOverlay from "../../UI/ImageOverlay";

export default function FaqHeroImage() {
  return (
    <ImageOverlay className="relative w-full h-[13rem] overflow-hidden grid-stack">
      <Image
        src={GINGER_KID}
        fill
        alt="Ginger kid in front of a screen"
        className=" w-full h-[13rem] object-cover"
      />
    </ImageOverlay>
  );
}
