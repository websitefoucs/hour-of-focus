import { GINGER_KID } from "@/constants/images";
import Image from "next/image";
import React from "react";

export default function FaqHeroImage() {
  return <Image src={GINGER_KID} width={1440} height={750} alt="Ginger kid in front of a screen" className="clipped-image" />;
}
