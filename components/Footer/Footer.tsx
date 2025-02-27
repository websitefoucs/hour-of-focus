import React from "react";
import Image from "next/image";
import Details from "./Details";
import FollowUs from "./FollowUs";
import { LOGO } from "@/constants/images";

export default function Footer() {
  return (
    <footer className="w-full h-[21rem] py-16 bg-mainOrange-700 flex justify-around  text-white-0">
      <Details />
      <FollowUs />

      <Image
        src={LOGO}
        alt="logo"
        width={160}
        height={160}
        className="w-40 object-cover h-40 brightness-0 invert"
        priority
      />
    </footer>
  );
}
