import React from "react";
import LinkCmp from "./LinkCmp";
import {
  CONTACT_US,
  LOGISTIC_SIGNUP,
  TEACHERS_SIGNUP,
} from "@/constants/links";

export default function VolunteersJoinCmp({ isHome }: { isHome?: boolean }) {
  return (
    <div className="flex flex-col gap-12">
      <article>
        {isHome ? (
          <>
            <h3 className="text-center px-36 mobile:px-0">
              הצטרפו עכשיו למשפחת המתנדבים שלנו
            </h3>
            <p>יחד נוכל לעשות שינוי משמעותי בחיי תלמידים רבים</p>
          </>
        ) : (
          <h3 className="text-center px-36 mobile:px-0">
            רוצים להתנדב?
          </h3>
        )}
      </article>

      <nav className="flex flex-col gap-12 mobile:gap-2 items-center">
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
            className="mobile:w-fit px-1 font-bold  "
            href={LOGISTIC_SIGNUP}
          >
            הצטרפו לצוות הלוגיסטי
          </LinkCmp>
        </div>
        <LinkCmp
          styleMode="arrow"
          styleSize="long"
          className="text-mainGray-800"
          href={CONTACT_US}
        >
          יש לכם שאלות? דברו איתנו ונשמח לסייע
        </LinkCmp>
      </nav>
    </div>
  );
}
