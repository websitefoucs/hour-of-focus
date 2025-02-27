import { TFaq } from "@/types/faq";
import FaqsList from "./List/FaqsList";
import HandleEdit from "../HandleEdit";

interface FaqIndexProps {
  faqs: TFaq[];
}
export default function FaqIndex({ faqs }: FaqIndexProps) {
  return (
    <section className="border p-2 rounded">
      <HandleEdit
        itemId="new"
        itemType="faq"
        btnText="Add FAQ"
        action={""}
        className="shadow-border rounded w-fit p-2"
      />
      <FaqsList faqs={faqs} />
    </section>
  );
}
