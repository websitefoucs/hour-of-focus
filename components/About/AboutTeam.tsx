import {
  ALON_IMAGE,
  AMIT_IMAGE,
  NOA_IMAGE,
  OHAD_IMAGE,
  ROTEM_IMAGE,
  SHALEV_IMAGE,
  SHIRA_IMAGE,
  VICTORIA_IMAGE,
  YOAV_IMAGE,
} from "@/constants/images";
import Image from "next/image";
import React from "react";

export default function AboutTeam() {
  return (
    <div className="bg-mainWhite-50 grid justify-items-center py-12 gap-10 w-full px-sides">
      <h4>{`צוות 'שעה של פוקוס'`}</h4>
      <ul className="flex flex-wrap items-center justify-center gap-gaps">
        {items.map((item) => (
          <li
            key={item.name}
            className="flex flex-col justify-center items-center gap-4"
          >
            <Image
              width={136}
              height={136}
              src={item.src}
              alt="avatar"
              className="rounded-full aspect-square object-fill"
            />
            <p className="text-18  text-mainGray-800 leading-30">{item.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

const items = [
  {
    src: SHALEV_IMAGE,
    name: "שלו שריקי",
  },
  {
    src: OHAD_IMAGE,
    name: "אהד תשובה",
  },
  {
    src: NOA_IMAGE,
    name: "נועה וקסלר",
  },
  {
    src: SHIRA_IMAGE,
    name: "שירה רוט",
  },
  {
    src: AMIT_IMAGE,
    name: "עמית שטרנברג",
  },
  {
    src: ROTEM_IMAGE,
    name: "רותם עמר",
  },
  {
    src: YOAV_IMAGE,
    name: "יואב וינוב",
  },
  {
    src: ALON_IMAGE,
    name: "אלון שור",
  },
  {
    src: VICTORIA_IMAGE,
    name: "ויקטוריה",
  },
];
