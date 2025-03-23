"use client";

/**
 * AdminFaqEdit client component allows editing or creating a FAQ entry.
 *
 * @component
 * @param {FaqEditProps} props - The properties for the component.
 * @param {Faq} props.faqToEdit - The FAQ entry to edit. If not provided, a new FAQ entry will be created.
 *
 * @returns {JSX.Element} The rendered component.
 *
 * @remarks
 * This component uses `useActionState` hook to manage the state of the FAQ entry being edited or created.
 * It also uses `useRef` to manage references to the Quill editors for the question and answer fields.
 *
 */

//React
import { useActionState, useRef } from "react";
//Actions
import { createFaq, updateFaq } from "@/lib/actions/faqs";
//Quill
import Quill from "quill";
//UI
import Input from "@/components/UI/Input";
import FormSubmitButton from "@/components/UI/FormSubmitButton";
//Components
import AdminFaqEditInputs from "./AdminFaqEditInputs";
//Types
import { TFormState } from "@/types/app.type";
import { TFaqDto } from "@/types/faqs";
import ErrorLabel from "@/components/UI/ErrorLabel";

interface FaqEditProps {
  faqToEdit: TFaqDto;
}
const initialState: TFormState<TFaqDto> = {
  errors: null,
  message: "",
  data: {
    deltaAnswer: [{ insert: "" }],
    deltaQuestion: [{ insert: "" }],
    faqType: "students",
  },
};
export default function AdminFaqEdit({ faqToEdit }: FaqEditProps) {
  const [state, fromAction, isPending] = useActionState(
    faqToEdit?._id ? updateFaq : createFaq,
    { ...initialState, data: faqToEdit }
  );

  const deltaAnswerRef = useRef<Quill | null>(null);
  const deltaQuestionRef = useRef<Quill | null>(null);

  const isStudents = state?.data?.faqType === "students";

  const handleSubmit = async (e: FormData) => {
    if (!deltaAnswerRef.current || !deltaQuestionRef.current) return;

    const deltaAnswer = deltaAnswerRef.current.getContents();
    const deltaQuestion = deltaQuestionRef.current.getContents();

    e.append("deltaAnswer", JSON.stringify(deltaAnswer.ops));
    e.append("deltaQuestion", JSON.stringify(deltaQuestion.ops));

    fromAction(e);
  };

  const { data, message, errors } = state;

  return (
    <form
      action={handleSubmit}
      className="p-4 min-w-64 border rounded flex flex-col gap-2 h-fit backdrop-sepia shadow-[0px_0px_40000px_1000px_rgba(0,0,0,0.5)] bg-mainWhite-50 fixed z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
    >
      <Input type="hidden" name="_id" defaultValue={data?._id} />

      <AdminFaqEditInputs
        isStudents={isStudents}
        deltaAnswerRef={deltaAnswerRef}
        deltaQuestionRef={deltaQuestionRef}
        errors={errors}
        data={data}
      />
      {message ? (
        <ErrorLabel
          className="block m-4 p-2 rounded-base border"
          error={message}
        />
      ) : null}
      <FormSubmitButton isPending={isPending} />
    </form>
  );
}
