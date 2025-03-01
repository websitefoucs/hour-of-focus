import { TFaqType } from "@/types/faq";
import LinkCmp from "../UI/LinkCmp";

interface FaqProps {
  type: TFaqType;
}
export default function FaqSwitch({ type }: FaqProps) {
  const isVolunteers = type === "volunteers";
  return (
    <nav className="bg-white-100 py-2 px-6 rounded-base h-fit flex items-center">
      <LinkCmp
        styleMode={!isVolunteers ? "full" : "center"}
        styleSize="large"
        href="/faq/students"
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
