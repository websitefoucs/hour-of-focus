import { PEOPLE_ON_LAWN_IMAGE } from "@/constants/images";
import Image from "next/image";
import React from "react";

export default function AboutOurStory() {
  return (
    <div className="grid grid-cols-2 mobile:grid-cols-1 mobile:grid-rows-[15rem,1fr] px-36 medium:px-16 mobile:px-4 gap-8 medium:gap-4 mobile:gap-8 ">
      <article className="flex flex-col gap-8 mobile:order-1">
        <h5 className="">הסיפור שלנו</h5>
        <p className="text-18 text-mainGray-800 leading-10">{`פרויקט 'שעה של פוקוס' נוצר בפברואר 2024 על ידי מילואימניקים שהחליטו כי חשוב להמשיך בערבות ההדדית גם בעורף. מה שהתחיל כיוזמה צנועה עם מספר מתנדבים בודדים, צמח בהדרגה לפרויקט חינוכי משמעותי, הודות למאות מתנדבים שפועלים מתוך תחושת אחריות ועזרה לזולת.
`}</p>
        <p className="text-18 text-mainGray-800 leading-10">
          במסגרת המיזם, מתנדבים רבים מעניקים תמיכה לימודית לתלמידים הזקוקים לה,
          תוך התאמה אישית לצרכיהם. הפרויקט ממשיך לגדול ולהתרחב, ומספר המתנדבים
          והתלמידים המשתתפים בו הולך ועולה, מתוך מחויבות מתמשכת לסיוע ולחיזוק
          הקהילה.
        </p>
      </article>

      <div className="image-border before:bg-mainOrange-700 after:bg-mainOrange-700 relative w-full h-full mobile:h-64 ">
        <Image
          width={512}
          height={256}
          src={PEOPLE_ON_LAWN_IMAGE}
          alt="people on lawn"
          className="w-full h-full rounded-tl-base rounded-br-base object-fill"
        />
      </div>
    </div>
  );
}
