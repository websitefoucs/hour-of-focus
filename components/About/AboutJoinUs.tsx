import React from "react";
import LinkCmp from "../UI/LinkCmp";

export default function AboutJoinUs() {
  return (
    <div className="bg-mainOrange-700 flex flex-col py-12 mobile:px-4 items-center gap-12 mobile:gap-6 w-[90vw] rounded-[5rem]">
      <h3 className=" text-mainWhite-0">הצטרפות למיזם</h3>
      <p className="text-18 text-mainWhite-0 text-center max-w-[40rem]">
        על מנת להצטרף למיזם, התלמידים מתבקשים לפנות דרך הצוות החינוכי האחראי
        עליהם, אשר יוכל ליצור איתנו קשר דרך האתר.
      </p>
      <nav className="flex mobile flex-col gap-8 mobile:gap-4">
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
          מידע נוסף למתנדבים
        </LinkCmp>
      </nav>
    </div>
  );
}
