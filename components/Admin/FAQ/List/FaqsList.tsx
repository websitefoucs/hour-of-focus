import ItemList from "@/components/UI/ItemList";
import FaqPreview from "../Preview/FaqPreview";
import { TFaq } from "@/types/faq";

interface FaqsListProps {
  faqs: TFaq[];
}
export default function FaqsList({ faqs }: FaqsListProps) {
  return (
    <div className="h-full">
      <ItemList
        listStyle=" grid gap-4 overflow-auto max-h-full"
        items={faqs}
        renderItem={(faq) => <FaqPreview faq={faq} />}
      />
    </div>
  );
}
