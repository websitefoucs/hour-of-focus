import React from "react";
import LinkCmp from "../UI/LinkCmp";
import { ClockSvg, GroupSvg, HeartSvg } from "../UI/icons/Icons";
import {
  CONTACT_US,
  LOGISTIC_SIGNUP,
  TEACHERS_SIGNUP,
} from "@/constants/links";

export default function CallToAction() {
  return (
    <div className="flex flex-col justify-center items-center w-[53rem] mobile:w-full self-center gap-6 ">
      <h3 className="text-center px-36 mobile:px-0">
        הצטרפו עכשיו למשפחת המתנדבים שלנו
      </h3>
      <p>יחד נוכל לעשות שינוי משמעותי בחיי תלמידים רבים</p>
      <div className="flex flex-col gap-6 mobile:gap-2 items-center">
        <div className="flex gap-6 mobile:gap-2">
          <LinkCmp
            styleMode="full"
            styleSize="large"
            className="mobile:w-fit px-1"
            href={TEACHERS_SIGNUP}
          >
            הצטרפו כמורים
          </LinkCmp>
          <LinkCmp
            styleMode="coloredBorder"
            styleSize="large"
            className="mobile:w-fit px-1"
            href={LOGISTIC_SIGNUP}
          >
            הצטרפו לצוות הלוגיסטי
          </LinkCmp>
        </div>
        <LinkCmp styleMode="borderB" styleSize="long" href={CONTACT_US}>
          יש לכם שאלות? דברו איתנו ונשמח לסייע
        </LinkCmp>
      </div>
      <ul className="flex justify-between content-between mobile:flex-wrap mobile:justify-center mobile:gap-4 w-full pt-10">
        {items.map((item, index) => (
          <li
            key={index}
            className="grid justify-items-center gap-6 mobile:gap-1 text-mainOrange-700"
          >
            {item.icon}
            <h5 className="mobile:text-normal">{item.title}</h5>
            <p className="leading-30 mobile:text-center mobile:text-14">
              {item.text}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

const items = [
  {
    icon: <ClockSvg />,
    title: "גמישות מלאה",
    text: "התנדבות בזמנים שמתאימים לכם",
  },
  {
    icon: <GroupSvg />,
    title: "ליווי אישי",
    text: "צוות תומך לאורך כל הדרך",
  },
  {
    icon: <HeartSvg />,
    title: "השפעה אמיתית",
    text: "תרומה משמעותית למפונים",
  },
];
