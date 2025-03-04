import { TFaq } from "@/types/faqs";
import HandleEdit from "../HandleEdit";
import { faqServerUtils } from "@/utils/server/faq.util";
import FaqEdit from "./AdminFaqEdit";
import AdminFaqsList from "./AdminFaqsList";

interface FaqIndexProps {
  faqs: TFaq[];
}
export default function AdminFaqsIndex({ faqs }: FaqIndexProps) {
  return (
    <section className="border p-2 rounded min-w-full ">
      <div className="flex justify-between items-center pb-8">
        <h3 className="">שאלות נפוצות</h3>
        <HandleEdit
          item={faqServerUtils.getEmpty()}
          EditCmp={({ item }) => <FaqEdit faqToEdit={item} />}
        />
      </div>
      <AdminFaqsList faqs={faqs} />
    </section>
  );
}
