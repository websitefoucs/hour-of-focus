import { TFaq } from "@/types/faqs";
import FaqsList from "./List/FaqsList";
import HandleEdit from "../HandleEdit";
import { faqServerUtils } from "@/utils/server/faq.util";
import FaqEdit from "./Edit/FaqEdit";

interface FaqIndexProps {
  faqs: TFaq[];
}
export default function FaqAdminIndex({ faqs }: FaqIndexProps) {
  return (
    <section className="border p-2 rounded min-w-full ">
      <div className="flex justify-between items-center pb-8">
        <h3 className="">שאלות נפוצות</h3>
        <HandleEdit
          item={faqServerUtils.getEmpty()}
          EditCmp={({ item }) => <FaqEdit faqToEdit={item} />}
        />
      </div>
      <FaqsList faqs={faqs} />
    </section>
  );
}
