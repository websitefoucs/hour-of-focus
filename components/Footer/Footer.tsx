import React from "react";
import Image from "next/image";
import Details from "./Details";
import FollowUs from "./FollowUs";
import { LOGO } from "@/constants/images";

export default function Footer() {
  return (
    <footer className="w-full h-[21rem] mobile:h-[26rem] py-16 mobile:py-8 bg-mainOrange-700 flex justify-around text-mainWhite-0 mobile:grid footer-grid mobile:px-4">
      <Details />
      <FollowUs />

      <Image
        src={LOGO}
        alt="logo"
        width={160}
        height={160}
        className="w-40 mobile:w-28 h-40 mobile:h-28 object-contain brightness-0 invert footer-grid-two mobile:justify-self-end "
        priority
      />
    </footer>
  );
}
