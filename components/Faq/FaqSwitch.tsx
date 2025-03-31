/**
 * Component that renders a navigation switch between FAQ pages for students/parents and volunteers.
 *
 * @param {FaqProps} props - The properties object.
 * @param {TFaqType} props.type - The type of FAQ, either "students" or "volunteers".
 * @param {Object} [props.links] - Optional links for the FAQ pages.
 *
 * @returns {JSX.Element} The rendered navigation switch component.
 */
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
  links?: {
    students: string;
    volunteers: string;
  };
}
export default function FaqSwitch({ type, links }: FaqProps) {
  const isVolunteers = type === "volunteers";
  return (
    <nav className="bg-mainWhite-100 rounded-base h-fit flex flex-col xs:flex-row items-center w-[min(31rem,calc(100%))] p-2  ">
      <LinkCmp
        styleMode={!isVolunteers ? "full" : "center"}
        styleSize="large"
        href={links?.students || FAQ_STUDENTS_PAGE_LINK}
        className=""
      >
        <h6>לתלמידים והורים</h6>
      </LinkCmp>
      <LinkCmp
        styleMode={isVolunteers ? "full" : "center"}
        styleSize="large"
        href={links?.volunteers || FAQ_VOLUNTEERS_PAGE_LINK}
      >
        <h6>למתנדבים</h6>
      </LinkCmp>
    </nav>
  );
}
