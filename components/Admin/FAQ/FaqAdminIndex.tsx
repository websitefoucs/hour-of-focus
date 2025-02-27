import { TFaq } from "@/types/faq";
import FaqsList from "./List/FaqsList";
import HandleEdit from "../HandleEdit";

interface FaqIndexProps {
  faqs: TFaq[];
}
export default function FaqAdminIndex({ faqs }: FaqIndexProps) {
  return (
    <section className="border p-2 rounded w-full ">
      <div className="flex justify-between items-center">
        <h3 className="">שאלות נפוצות</h3>
        <HandleEdit
          itemId="new"
          itemType="faq"
          btnText="הוסף"
          action={""}
          className="shadow-border rounded w-fit p-2"
        />
      </div>
      <FaqsList faqs={faqs} />
    </section>
  );
}
