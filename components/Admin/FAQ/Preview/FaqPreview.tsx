import { TFaq } from "@/types/faq";
import HandleEdit from "../../HandleEdit";

interface FaqPreviewProps {
  faq: TFaq;
}
export default function FaqPreview({ faq }: FaqPreviewProps) {
  const { question, answer, createBy, createdAt, _id } = faq;

  return (
    <li className=" border rounded flex justify-between items-center p-4">
      <div>
        <span className="flex items-center gap-1">
          <p>Q:</p>
          <h3 className="">{answer}</h3>
        </span>
        <span className="flex items-center gap-1">
          <p>A:</p>
          <h3>{question}</h3>
        </span>
      </div>
      <div className="flex gap-1 items-center">
        <h3>Created By:</h3>
        <span>
          <h4>{createBy?.username}</h4>
          <h4>{createdAt}</h4>
        </span>
      </div>
      <HandleEdit
        itemId={_id || ""}
        itemType="faq"
        btnText="Edit"
        action={""}
        className="shadow-border rounded w-fit h-fit p-2"
      />
    </li>
  );
}
