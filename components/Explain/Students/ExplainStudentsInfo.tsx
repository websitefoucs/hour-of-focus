import { GIRL_STUDY_2 } from "@/constants/images";
import Image from "next/image";
import React from "react";

export default function ExplainVolunteersInfo() {
  return (
    <div className="px-24 mobile:px-2 flex mobile:flex-col-reverse justify-around gap-36 mobile:gap-12 w-full py-24 mobile:py-12">
      <article className="flex flex-col gap-6 mobile:gap-2 mobile:text-center">
        <h5 className="">שיטת המעשים הטובים 🌍💙</h5>

        <p className="text-mainGray-800 leading-30 text-18">
          מעבירים את זה הלאה
        </p>
        <p className="text-mainGray-800 leading-30 text-18">{`בפרויקט "שעה של פוקוס", אנחנו מאמינים שלא רק הלמידה חשובה, אלא גם מעשים טובים שמייצרים שינוי חיובי. לכן, אנחנו מזמינים אתכם לבחור, אם תרצו, מעשה טוב עבור כל שיעור שתעברו בפרויקט.`}</p>
        <p className="text-mainGray-800 leading-30 text-18">
          <b>שימו לב:</b> מדובר בהמלצה בלבד – אין חובה להשתתף, אבל כל מעשה קטן
          יכול להשפיע בענק! 🌟
        </p>
      </article>

      <div className="image-border before:bg-mainGold-500 after:bg-mainGold-500 relative  aspect-square min-w-[30rem] max-h-[30rem] mobile:min-w-0 mobile:h-64 ml-2 ">
        <Image
          width={512}
          height={256}
          src={GIRL_STUDY_2}
          alt="people on lawn"
          className="w-full h-full rounded-none"
        />
      </div>
    </div>
  );
}
