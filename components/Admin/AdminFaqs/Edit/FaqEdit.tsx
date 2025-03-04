"use client";
import Button from "@/components/UI/Button";
import ErrorLabel from "@/components/UI/ErrorLabel";
import Input from "@/components/UI/Input";
import Label from "@/components/UI/Label";
import TextArea from "@/components/UI/TextArea";
import { createFaq, updateFaq } from "@/lib/actions/faqs";
import { TFormState } from "@/types/app.type";
import { TFaqDto } from "@/types/faqs";
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
    faqType: "students",
    createBy: "",
    updateBy: "",
  },
};
export default function FaqEdit({ faqToEdit }: FaqEditProps) {
  const [state, fromAction, isPending] = useActionState(
    faqToEdit?._id ? updateFaq : createFaq,
    { ...initialState, data: faqToEdit }
  );
  console.log(" state:", state)

  const isStudents = state?.data?.faqType === "students";

  return (
    <form
      action={fromAction}
      className="p-4 border rounded flex flex-col gap-2 h-full bg-mainWhite-50"
    >
      <Input type="hidden" name="_id" defaultValue={state?.data?._id} />
      <Input
        type="hidden"
        name="createBy"
        defaultValue={state?.data?.createBy}
      />
      <div className="flex">
        <Input
          type="radio"
          id="students-radio"
          name="faqType"
          defaultValue="students"
          defaultChecked={isStudents}
          divStyle="flex items-center gap-2 w-full"
          className="h-full"
        >
          <Label htmlFor="students-radio">תלמידים</Label>
        </Input>
        <Input
          type="radio"
          id="volunteers-radio"
          name="faqType"
          defaultValue="volunteers"
          defaultChecked={!isStudents}
          divStyle="flex items-center gap-2 w-full"
          className="h-full"
        >
          <Label htmlFor="volunteers-radio">מתנדבים</Label>
        </Input>
      </div>
      <TextArea
        name="question"
        placeholder="מה תרצה לשאול"
        id="question-edit"
        defaultValue={state?.data?.question}
        divStyle="flex flex-col gap-2 bg-inherit h-[calc(35%-1rem)]"
        className="bg-inherit border rounded p-2 h-[calc(100%-2rem)] resize-none overflow-auto scrollbar-hidden"
      >
        <Label htmlFor="question-edit">שאלה</Label>
        <ErrorLabel htmlFor="question-edit" error={state?.errors?.question} />
      </TextArea>
      <TextArea
        name="answer"
        placeholder="ענה על השאלה"
        id="answer-edit"
        defaultValue={state?.data?.answer}
        divStyle="flex flex-col gap-2 bg-inherit  h-[calc(65%-1rem)]"
        className="bg-inherit border rounded p-2 h-[calc(100%-2rem)] resize-none overflow-auto scrollbar-hidden"
      >
        <Label htmlFor="question-edit">תשובה</Label>
        <ErrorLabel htmlFor="question-edit" error={state.errors?.answer} />
      </TextArea>
      <Button
        disabled={isPending}
        type="submit"
        styleMode="full"
        styleSize="large"
      >
        שמור
      </Button>
    </form>
  );
}
