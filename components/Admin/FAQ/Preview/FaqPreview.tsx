import { TFaq } from "@/types/faq";
import HandleEdit from "../../HandleEdit";
import FaqItem from "@/components/Faq/FaqItem";

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

      <div className="bg-mainWhite-0">
        <span>
          <p className="text-sm">{createBy?.username}</p>
          <p className="text-sm">{new Date(createdAt!).toLocaleDateString()}</p>
        </span>
        <HandleEdit
          itemId={_id || ""}
          itemType="faq"
          btnText="Edit"
          action={""}
          className="shadow-border rounded w-fit h-fit p-2"
        />
      </div>
    </li>
  );
}
