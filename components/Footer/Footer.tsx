import React from "react";
import Image from "next/image";
import Details from "./Details";
import FollowUs from "./FollowUs";

export default function Footer() {
  return (
    <footer className="w-full h-[21rem] bg-mainOrange-700 flex justify-around  items-center text-white-0">
      <Details />
      <FollowUs />
      <div className="relative grid-stack w-[166px] object-cover h-[157px] ">
        <Image
          src="imgs/logo.svg"
          alt="logo"
          width={166}
          height={157}
          className="w-[166px] object-cover h-[157px] brightness-0 invert"
        />
      </div>
    </footer>
  );
}
