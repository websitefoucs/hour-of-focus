import { TFaqType } from "@/types/faqs";
import LinkCmp from "../UI/LinkCmp";

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
        href="/faq/students"
        className=""
      >
        <h6>לתלמידים והורים</h6>
      </LinkCmp>
      <LinkCmp
        styleMode={isVolunteers ? "full" : "center"}
        styleSize="large"
        href="/faq/volunteers"
      >
        <h6>למתנדבים</h6>
      </LinkCmp>
    </nav>
  );
}
