import ItemList from "@/components/UI/ItemList";
import { TFaq } from "@/types/faqs";
import AdminFaqPreview from "./AdminFaqPreview";

interface FaqsListProps {
  faqs: TFaq[];
}
export default function AdminFaqsList({ faqs }: FaqsListProps) {
  return (
    <div className="h-full">
      <ItemList
        listStyle=" grid gap-4 overflow-auto max-h-full"
        items={faqs}
        renderItem={(faq) => <AdminFaqPreview faq={faq} />}
      />
    </div>
  );
}
