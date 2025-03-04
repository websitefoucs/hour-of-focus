import Image from "next/image";
import React from "react";

export default function AboutTeam() {
  return (
    <div className="bg-mainWhite-50 grid justify-items-center py-12 gap-10 w-full">
      <h4 className="">{`צוות 'שעה של פוקוס'`}</h4>
      <ul className="flex gap-8">
        <li className="flex flex-col justify-center items-center w-36 h-36  gap-4">
          <Image
            width={96}
            height={96}
            src="/imgs/team2.svg"
            alt="avatar"
            className="rounded-full"
          />
          <p className="text-18 text-mainGray-800 leading-30">שלו שריקי</p>
        </li>
        <li className="flex flex-col justify-center items-center w-36 h-36  gap-4">
          <Image
            width={96}
            height={96}
            src="/imgs/team1.svg"
            alt="avatar"
            className="rounded-full"
          />
          <p className="text-18 text-mainGray-800 leading-30">אהד תשובה</p>
        </li>
      </ul>
    </div>
  );
}
