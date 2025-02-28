import { TFaq } from "@/types/faq";
import FaqHeroImage from "./FaqHeroImage";
import ItemList from "../UI/ItemList";
import FaqItem from "./FaqItem";
import FaqSwitch from "./FaqSwitch";

interface FaqIndexProps {
  type: "volunteers" | "students";
  faqs: TFaq[];
}
export default function FaqIndex({ type, faqs }: FaqIndexProps) {
  return (
    <section>
      <FaqHeroImage />
      <FaqSwitch type={type} />
      <ItemList
        items={faqs}
        renderItem={(faq) => (
          <FaqItem answer={faq.answer!} question={faq.answer!} _id={faq._id!} />
        )}
      />
    </section>
  );
}
