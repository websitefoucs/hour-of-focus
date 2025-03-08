import { TFaqType } from "@/types/faqs";
import LinkCmp from "../UI/LinkCmp";
import {
  FAQ_STUDENTS_PAGE_LINK,
  FAQ_VOLUNTEERS_PAGE_LINK,
} from "@/constants/links";

interface FaqProps {
  type: TFaqType;
}
export default function FaqSwitch({ type }: FaqProps) {
  const isVolunteers = type === "volunteers";
  return (
    <nav className="bg-mainWhite-100 py-2 px-6 mobile:px-2 rounded-base h-fit flex mobile:flex-col items-center">
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
