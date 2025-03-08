//Next
import Image from "next/image";
//React
import React from "react";
//Constants
import { GINGER_KID_IMAGE } from "@/constants/images";
//UI
import ImageOverlay from "./ImageOverlay";

/**
 * HeroImage component renders an image with an overlay.
 *
 * @returns {JSX.Element} The HeroImage component.
 */
export default function HeroImage() {
  return (
    <ImageOverlay className="relative w-full h-[13rem] overflow-hidden grid-stack">
      <Image
        src={GINGER_KID_IMAGE}
        fill
        alt="Ginger kid in front of a screen"
        className=" w-full h-[13rem] object-cover"
      />
    </ImageOverlay>
  );
}
