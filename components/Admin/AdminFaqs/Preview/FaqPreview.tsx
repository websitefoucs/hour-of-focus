import { TFaq } from "@/types/faqs";
import HandleEdit from "../../HandleEdit";
import FaqItem from "@/components/Faq/FaqItem";
import FaqEdit from "../Edit/FaqEdit";
import DeleteBtn from "@/components/UI/DeleteBtn";
import { deleteFaq } from "@/lib/actions/faqs";

interface FaqPreviewProps {
  faq: TFaq;
}
export default function FaqPreview({ faq }: FaqPreviewProps) {
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
            <FaqEdit
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
