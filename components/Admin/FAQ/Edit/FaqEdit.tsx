"use client";
import Button from "@/components/UI/Button";
import ErrorLabel from "@/components/UI/ErrorLabel";
import Input from "@/components/UI/Input";
import Label from "@/components/UI/Label";
import TextArea from "@/components/UI/TextArea";
import { createFaq, updateFaq } from "@/lib/actions/faq";
import { TFormState } from "@/types/app.type";
import { TFaqDto } from "@/types/faq";
import { useActionState } from "react";

interface FaqEditProps {
  faqToEdit: TFaqDto;
}
const initialState: TFormState<TFaqDto> = {
  errors: null,
  message: "",
  data: {
    question: "",
    answer: "",
    createBy: "",
    updateBy: "",
  },
};
export default function FaqEdit({ faqToEdit }: FaqEditProps) {
  const [state, fromAction, isPending] = useActionState(
    faqToEdit?._id ? updateFaq : createFaq,
    { ...initialState, data: faqToEdit }
  );

  return (
    <form
      action={fromAction}
      className="p-2 border rounded flex flex-col gap-2 h-full"
    >
      <Input type="hidden" name="_id" defaultValue={state?.data?._id} />
      <Input
        type="hidden"
        name="createBy"
        defaultValue={state?.data?.createBy}
      />
      <TextArea
        name="question"
        placeholder="Ask a question"
        id="question-edit"
        defaultValue={state?.data?.answer}
        divStyle="flex flex-col gap-2 bg-inherit h-[calc(35%-1rem)]"
        className="bg-inherit shadow-border rounded p-2 h-[calc(100%-2rem)] resize-none overflow-auto scrollbar-hidden"
      >
        <Label htmlFor="question-edit">Question</Label>
        <ErrorLabel htmlFor="question-edit" error={state?.errors?.question} />
      </TextArea>
      <TextArea
        name="answer"
        placeholder="Answer the question"
        id="answer-edit"
        defaultValue={state?.data?.question}
        divStyle="flex flex-col gap-2 bg-inherit  h-[calc(65%-1rem)]"
        className="bg-inherit shadow-border rounded p-2 h-[calc(100%-2rem)] resize-none overflow-auto scrollbar-hidden"
      >
        <Label htmlFor="question-edit">Question</Label>
        <ErrorLabel htmlFor="question-edit" error={state.errors?.question} />
      </TextArea>
      <Button
        disabled={isPending}
        className="shadow-border w-fit px-2 py-1 rounded h-8 self-center"
        type="submit"
      >
        Submit
      </Button>
    </form>
  );
}
