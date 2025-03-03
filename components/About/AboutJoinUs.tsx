import React from "react";
import LinkCmp from "../UI/LinkCmp";

export default function AboutJoinUs() {
  return (
    <div className="bg-mainOrange-700 flex flex-col py-12 items-center gap-12 w-[90vw] rounded-[5rem]">
      <h3 className=" text-mainWhite-0">הצטרפות למיזם</h3>
      <p className="text-20 text-mainWhite-0 text-center leading-52 max-w-[40rem]">
        על מנת להצטרף למיזם, התלמידים מתבקשים לפנות דרך הצוות החינוכי האחראי
        עליהם, אשר יוכל ליצור איתנו קשר דרך האתר.
      </p>
      <nav className="flex gap-8">
        <LinkCmp
          styleMode="whiteBorder"
          styleSize="large"
          href="/explain/students"
        >
          מידע נוסף לתלמידים
        </LinkCmp>
        <LinkCmp
          styleMode="whiteBorder"
          styleSize="large"
          href="/explain/volunteers"
        >
          מידע נוסף לתלמידים
        </LinkCmp>
      </nav>
    </div>
  );
}
