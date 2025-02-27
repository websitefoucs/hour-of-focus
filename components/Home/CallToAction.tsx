import React from "react";
import LinkCmp from "../UI/LinkCmp";
import { CLockSvg, GroupSvg, HeartSvg } from "../UI/icons/Icons";

export default function CallToAction() {
  return (
    <div className="flex flex-col justify-center items-center w-[53rem] self-center gap-6 ">
      <h3 className="text-2xl text-mainGray-800 text-center px-36 leading-[52.8px] ">
        הצטרפו עכשיו למשפחת המתנדבים שלנו
      </h3>
      <p>יחד נוכל לעשות שינוי משמעותי בחיי תלמידים רבים</p>
      <div className="flex flex-col gap-6  items-center">
        <div className="flex gap-6">
          <LinkCmp styleMode="full" styleSize="large" href="">
            הצטרפו כמורים
          </LinkCmp>
          <LinkCmp styleMode="coloredBorder" styleSize="large" href="">
            הצטרפו לצוות הלוגיסטי
          </LinkCmp>
        </div>
        <LinkCmp styleMode="borderB" styleSize="long" href="">
          יש לכם שאלות? דברו איתנו ונשמח לסייע
        </LinkCmp>
      </div>
      <ul className="flex justify-between content-between w-full pt-10">
        {items.map((item, index) => (
          <li
            key={index}
            className="grid justify-items-center text-mainOrange-700"
          >
            {item.icon}
            <h5 className="text-xmd font-semibold leading-28">{item.title}</h5>
            <p className="leading-30">{item.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

const items = [
  {
    icon: <CLockSvg />,
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
