//Types
import { TFaqType } from "@/types/faqs";
//UI
import LinkCmp from "../UI/LinkCmp";
//Constants
import {
  FAQ_STUDENTS_PAGE_LINK,
  FAQ_VOLUNTEERS_PAGE_LINK,
} from "@/constants/links";

interface FaqProps {
  type: TFaqType;
}
/**
 * Component that renders a navigation switch between FAQ pages for students/parents and volunteers.
 *
 * @param {FaqProps} props - The properties object.
 * @param {TFaqType} props.type - The type of FAQ, either "students" or "volunteers".
 *
 * @returns {JSX.Element} The rendered navigation switch component.
 */
export default function FaqSwitch({ type }: FaqProps) {
  const isVolunteers = type === "volunteers";
  return (
    <nav className="bg-mainWhite-100 py-2 px-6 mobile:px-2 rounded-base h-fit flex mobile:flex-col items-center mobile-small:w-full">
      <LinkCmp
        styleMode={!isVolunteers ? "full" : "center"}
        styleSize="large"
        href={FAQ_STUDENTS_PAGE_LINK}
        className=""
      >
        <h6>לתלמידים והורים</h6>
      </LinkCmp>
      <LinkCmp
        styleMode={isVolunteers ? "full" : "center"}
        styleSize="large"
        href={FAQ_VOLUNTEERS_PAGE_LINK}
      >
        <h6>למתנדבים</h6>
      </LinkCmp>
    </nav>
  );
}
