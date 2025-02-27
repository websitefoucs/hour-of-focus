import { TFaqType } from "@/types/faq";
import LinkCmp from "../UI/LinkCmp";

interface FaqProps {
  type: TFaqType;
}
export default function FaqSwitch({ type }: FaqProps) {
  const isVolunteers = type === "volunteers";
  return (
    <nav>
      <LinkCmp
        styleMode={isVolunteers ? "full" : "none"}
        styleSize="large"
        href="/faq/volunteers"
      >
        <h6>למתנדבים</h6>
      </LinkCmp>
      <LinkCmp
        styleMode={!isVolunteers ? "full" : "none"}
        styleSize="large"
        href="/faq/students"
      >
        <h6>לתלמידים והורים</h6>
      </LinkCmp>
    </nav>
  );
}
