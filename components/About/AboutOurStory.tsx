import Image from "next/image";
import React from "react";

export default function AboutOurStory() {
  return (
    <div className="flex px-24 justify-around gap-10 h-[20rem] w-full">
      <article className="flex flex-col gap-8">
        <h5 className="">הסיפור שלנו</h5>
        <p className="text-18 text-mainGray-800">{`פרויקט 'שעה של פוקוס' נולד בפברואר 2024, כאשר שלו שריקי ואהד תשובה, סטודנטים בטכניון להנדסת חשמל, החליטו לפעול ולסייע. מה שהתחיל כיוזמה צנועה של כ-10 מתנדבים, הפך לאט לאט לפרויקט חינוכי משמעותי עם למעלה מ-350 מתנדבים.`}</p>
        <p className="text-18 text-mainGray-800">
          כיום פועלים במיזם כ-200 מתנדבים המסייעים לכ-200 תלמידים מפונים.
          התלמידים יכולים לבחור את הנושא שבו הם מעוניינים להתמקד, בהתאם לצרכיהם
          האישיים.
        </p>
      </article>

      <div className="image-border before:bg-mainOrange-700 after:bg-mainOrange-700 relative w-[50%] min-w-[30rem] ">
        <Image
          width={512}
          height={256}
          src="/imgs/people-on-lawn.png"
          alt="people on lawn"
          className="w-full h-full rounded-none"
        />
      </div>
    </div>
  );
}
