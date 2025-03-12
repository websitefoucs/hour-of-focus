//Types
import { TFaq } from "@/types/faqs";
//Components
import HandleEdit from "../HandleEdit";
import FaqEdit from "./AdminFaqEdit";
import AdminFaqPreview from "./AdminFaqPreview";
//Utils
import { faqServerUtils } from "@/utils/server/faq.util";
//UI
import ItemList from "@/components/UI/ItemList";

interface FaqIndexProps {
  faqs: TFaq[];
}
/**
 * AdminFaqsIndex server component renders a section containing a list of FAQs with an edit option.
 *
 * @component
 * @param {FaqIndexProps} props - The props for the component.
 * @param {Array} props.faqs - An array of FAQ items to be displayed.
 *
 * @returns {JSX.Element} The rendered AdminFaqsIndex component.
 */
export default function AdminFaqsIndex({ faqs }: FaqIndexProps) {
  return (
    <section className="border p-2 rounded min-w-full ">
      <div className="flex justify-between items-center pb-8">
        <h3 className="">שאלות ותשובות</h3>
        <HandleEdit
          item={faqServerUtils.getEmpty()}
          EditCmp={({ item }) => <FaqEdit faqToEdit={item} />}
        />
      </div>
      <ItemList
        listStyle=" grid gap-4 overflow-auto max-h-full"
        items={faqs}
        renderItem={(faq) => <AdminFaqPreview faq={faq} />}
      />
    </section>
  );
}
