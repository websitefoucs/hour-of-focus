import LinkCmp from "../UI/LinkCmp";
import {
  CONTACT_US,
  LOGISTIC_SIGNUP,
  TEACHERS_SIGNUP,
} from "@/constants/links";
import HighlightsList from "../UI/HighlightsList";

export default function CallToAction() {
  return (
    <div className="flex flex-col justify-center items-center w-[53rem] mobile:w-full self-center gap-6 home-layout-call-top-action">
      <h3 className="text-center px-36 mobile:px-0">
        הצטרפו עכשיו למשפחת המתנדבים שלנו
      </h3>
      <p>יחד נוכל לעשות שינוי משמעותי בחיי תלמידים רבים</p>
      <div className="flex flex-col gap-6 mobile:gap-4 items-center pb-4">
        <div className="flex gap-6 mobile:gap-4">
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
      <HighlightsList />
    </div>
  );
}
