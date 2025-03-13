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
    <div className="flex flex-col gap-10">
      <article className="flex flex-col gap-4 items-center">
        {isHome ? (
          <>
            <h3 className="text-center text-24 lg:text-44 px-36 mobile:px-2">
              הצטרפו עכשיו למשפחת המתנדבים שלנו
            </h3>
            <p className="text-mainGray-500 text-20 mobile:text-18 text-center mobile:px-2">
              יחד נוכל לעשות שינוי משמעותי בחיי תלמידים
            </p>
          </>
        ) : (
          <h3 className="text-center px-36 mobile:px-0 mobile:text-24">
            רוצים להתנדב?
          </h3>
        )}
      </article>

      <nav className="grid grid-cols-1 sm:grid-cols-2 sm:justify-items-center w-full gap-10 ">
        <LinkCmp
          styleMode="full"
          styleSize="large"
          className=""
          href={TEACHERS_SIGNUP}
        >
          הצטרפו כמורים
        </LinkCmp>
        <LinkCmp
          styleMode="coloredBorder"
          styleSize="large"
          className="font-bold "
          href={LOGISTIC_SIGNUP}
        >
          הצטרפו לצוות הלוגיסטי
        </LinkCmp>

        <LinkCmp
          styleMode="arrow"
          styleSize="long"
          className="text-mainOrange-700 border-mainOrange-700 hover:text-mainOrange-800 hover:border-mainOrange-800 sm:col-span-2 col-span-1"
          href={CONTACT_US}
        >
          יש לכם שאלות? דברו איתנו ונשמח לסייע
        </LinkCmp>
      </nav>
    </div>
  );
}
