import React from "react";
import LinkCmp from "../../UI/LinkCmp";
import Numbers from "./Numbers";
import HeroImage from "./HeroImage";
import { LOGISTIC_SIGNUP, TEACHERS_SIGNUP } from "@/constants/links";

export default function HomeHero() {
  return (
    <div className="w-full grid grid-cols-1 grid-rows-1  ">
      <HeroImage />
      <div className="w-full h-full grid-stack z-10 flex flex-col items-center gap-8 text-white-0 text-center pt-24 medium:pt-10">
        <h5>למען המפונים מהדרום והמצפון</h5>

        <h1 className="">
          <span className="font-normal">שעה של </span>
          <span className=" text-mainGold-400">פוקוס</span>
        </h1>

        <p className="text-md leading-34 font-thin">
          מחברים בין תלמידים למתנדבים לשעה שבועית של למידה ממוקדת
        </p>

        <div className="flex flex-col gap-10 medium:gap-4 mobile:gap-2 items-center py-12 medium:py-4  ">
          <LinkCmp styleMode="full" styleSize="large" href={TEACHERS_SIGNUP}>
            הצטרפו כמורים
          </LinkCmp>
          <div className="flex gap-8 medium:gap-4 mobile:gap-2 mobile-small:flex-col">
            <LinkCmp
              styleMode="grayBorder"
              styleSize="large"
              href={LOGISTIC_SIGNUP}
              className="mobile:w-fit mobile:px-1 mobile-small:w-60"
            >
              <h6 className="leading-21">הצטרפו לצוות הלוגיסטי</h6>
            </LinkCmp>
            <LinkCmp
              styleMode="grayBorder"
              styleSize="large"
              href=""
              className="mobile:w-fit mobile:px-1 mobile-small:w-60"
            >
              <h6>מידע נוסף לתלמידים</h6>
            </LinkCmp>
          </div>
        </div>
        <Numbers />
      </div>
    </div>
  );
}
