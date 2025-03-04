import { TFaq } from "@/types/faqs";
import FaqItem from "@/components/Faq/FaqItem";
import DeleteBtn from "@/components/UI/DeleteBtn";
import { deleteFaq } from "@/lib/actions/faqs";
import HandleEdit from "../HandleEdit";
import AdminFaqEdit from "./AdminFaqEdit";

interface FaqPreviewProps {
  faq: TFaq;
}
export default function AdminFaqPreview({ faq }: FaqPreviewProps) {
  const { question, answer, createBy, createdAt, _id } = faq;

  return (
    <li className="flex gap-2">
      <FaqItem
        answer={answer || ""}
        question={question || ""}
        _id={_id || ""}
      />

      <div className="flex flex-col gap-2">
        <span className="border rounded-base w-20 text-center py-1">
          <p className="text-sm">{createBy?.username}</p>
          <p className="text-sm">{new Date(createdAt!).toLocaleDateString()}</p>
        </span>
        <HandleEdit
          item={faq}
          EditCmp={({ item }) => (
            <AdminFaqEdit
              faqToEdit={{
                ...item,
                createBy: item?.createBy?._id,
                updateBy: item?.updateBy?._id,
              }}
            />
          )}
        />
        <DeleteBtn id={_id || ""} type={faq.faqType} deleteAction={deleteFaq} />
      </div>
    </li>
  );
}
