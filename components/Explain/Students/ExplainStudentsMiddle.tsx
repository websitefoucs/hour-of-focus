import { ApproveSvg } from "@/components/UI/icons/Icons";
import LinkCmp from "@/components/UI/LinkCmp";
import { COORDINATOR_SIGNUP } from "@/constants/links";

export default function ExplainStudentsMiddle() {
  return (
    <div className="bg-mainWhite-50 py-20 mobile:py-10 mobile:px-4 items-center flex flex-col rounded-b-[160px] gap-28 mobile:gap-14">
      <div className="items-center flex flex-col gap-10 max-w-[39rem]">
        <h4 className="mobile:text-center mobile:text-24">
          כיצד נרשמים ל׳שעה של פוקוס׳?
        </h4>
        <p className="text-18 leading-30 text-mainGray-600 text-center">{`מעוניינים להצטרף ל"שעה של פוקוס"? ההרשמה פשוטה ומתבצעת דרך הרכז החינוכי או המחנך במוסד הלימודים שלכם!`}</p>

        <ul className=" bg-mainWhite-0 border-t-8 border-mainOrange-700 rounded-base p-8 mobile:p-2 mobile:py-4 flex flex-col gap-6">
          {items.map((item, i) => (
            <li key={i} className="flex gap-4 items-center">
              <ApproveSvg />
              <p className="text-18 leading-30 text-mainGray-600">{item}</p>
            </li>
          ))}
        </ul>
        <LinkCmp
          href={COORDINATOR_SIGNUP}
          styleMode="full"
          styleSize="large"
          className="mobile:w-fit px-2"
        >
          טופס רישום לרכזי חינוך
        </LinkCmp>
      </div>
    </div>
  );
}

const items = [
  "ההרשמה לתוכנית מתבצעת אך ורק דרך צוות בית הספר ולא דרך האתר.",
  "פנו אל הרכז החינוכי או המורה והם ידאגו לרשום אתכם.",
  "העבירו את המידע לחברים נוספים שעשויים להתעניין בתוכנית.",
];
