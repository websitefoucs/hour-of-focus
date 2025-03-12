import { TFaq } from "@/types/faqs";
import ItemList from "../UI/ItemList";
import FaqItem from "./FaqItem";
import FaqSwitch from "./FaqSwitch";
import FaqHero from "./Hero/FaqHero";

interface FaqIndexProps {
  type: "volunteers" | "students";
  faqs: TFaq[];
}
export default function FaqIndex({ type, faqs }: FaqIndexProps) {
  return (
    <section className="grid w-full items-center justify-items-center gap-24 mobile:gap-12 h-fit">
      <FaqHero />
      <div className="grid w-full items-center justify-items-center gap-12 px-16 mobile:px-4 pb-24 mobile:pb-12">
        <FaqSwitch type={type} />
        <ItemList
          items={faqs}
          listStyle="grid gap-6 w-full max-w-[80vw] mobile:max-w-full"
          renderItem={(faq) => <FaqItem {...faq} />}
        />
      </div>
    </section>
  );
}
