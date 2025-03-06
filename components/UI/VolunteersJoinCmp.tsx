//Components
import LinkCmp from "./LinkCmp";
//Constants
import {
  CONTACT_US,
  LOGISTIC_SIGNUP,
  TEACHERS_SIGNUP,
} from "@/constants/links";

/**
 * A React component that renders a section for volunteers to join.
 *
 * @param {Object} props - The component props.
 * @param {boolean} [props.isHome] - A flag to determine if the component is rendered on the home page.
 *
 * @returns {JSX.Element} The rendered component.
 */
export default function VolunteersJoinCmp({
  isHome,
}: {
  isHome?: boolean;
}): React.JSX.Element {
  return (
    <div className="flex flex-col gap-12">
      <article className="flex flex-col gap-4 items-center">
        {isHome ? (
          <>
            <h3 className="text-center px-36 mobile:px-0">
              הצטרפו עכשיו למשפחת המתנדבים שלנו
            </h3>
            <p className="text-mainGray-500 text-20">
              יחד נוכל לעשות שינוי משמעותי בחיי תלמידים רבים
            </p>
          </>
        ) : (
          <h3 className="text-center px-36 mobile:px-0">רוצים להתנדב?</h3>
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
            <h6>הצטרפו כמורים</h6>
          </LinkCmp>
          <LinkCmp
            styleMode="coloredBorder"
            styleSize="large"
            className="mobile:w-fit px-1 font-bold  "
            href={LOGISTIC_SIGNUP}
          >
            <h6>הצטרפו לצוות הלוגיסטי</h6>
          </LinkCmp>
        </div>
        <LinkCmp
          styleMode="arrow"
          styleSize="long"
          className={`${
            isHome
              ? "text-mainOrange-700 border-mainOrange-700 hover:text-mainOrange-800 hover:border-mainOrange-800"
              : "text-mainGray-800"
          }`}
          href={CONTACT_US}
        >
          <h6>יש לכם שאלות? דברו איתנו ונשמח לסייע</h6>
        </LinkCmp>
      </nav>
    </div>
  );
}
