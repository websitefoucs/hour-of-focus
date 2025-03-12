//Types
import { TFaq } from "@/types/faqs";
//Components
import FaqItem from "@/components/Faq/FaqItem";
import HandleEdit from "../HandleEdit";
import AdminFaqEdit from "./AdminFaqEdit";
//UI
import DeleteBtn from "@/components/UI/DeleteBtn";
//Actions
import { deleteFaq } from "@/lib/actions/faqs";

interface FaqPreviewProps {
  faq: TFaq;
}
/**
 * AdminFaqPreview server component renders a preview of a FAQ item with edit and delete options.
 *
 * @component
 * @param {FaqPreviewProps} props - The props for the component.
 * @param {TFaq} props.faq - The FAQ item to preview.
 *
 * @returns {JSX.Element} The rendered AdminFaqPreview component.
 */
export default function AdminFaqPreview({ faq }: FaqPreviewProps) {
  const { deltaQuestion, deltaAnswer, _id, createAt } = faq;

  return (
    <li className="flex gap-2">
      <FaqItem
        deltaAnswer={deltaAnswer!}
        deltaQuestion={deltaQuestion!}
        _id={_id!}
      />

      <div className="flex flex-col gap-2">
        <span className="border rounded-base w-20 text-center py-1">
          <p className="text-sm">{new Date(createAt!).toLocaleDateString()}</p>
        </span>
        <HandleEdit
          item={faq}
          EditCmp={({ item }) => <AdminFaqEdit faqToEdit={item} />}
        />
        <DeleteBtn id={_id || ""} type={faq.faqType} deleteAction={deleteFaq} />
      </div>
    </li>
  );
}
