import ItemList from "@/components/UI/ItemList";
import FaqPreview from "../Preview/FaqPreview";
import { TFaq } from "@/types/faq";

interface FaqsListProps {
  faqs: TFaq[];
}
export default function FaqsList({ faqs }: FaqsListProps) {
  return (
    <div>
      <h1>Faqs</h1>
      <ItemList
        listStyle=""
        items={faqs}
        renderItem={(faq) => <FaqPreview faq={faq} />}
      />
    </div>
  );
}
