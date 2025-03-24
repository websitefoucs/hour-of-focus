"use client";
//React
import { useActionState, useRef } from "react";
//UI
import ErrorLabel from "@/components/UI/ErrorLabel";
import Input from "@/components/UI/Input";
import Label from "@/components/UI/Label";
import TextArea from "@/components/UI/TextArea";
import FormSubmitButton from "@/components/UI/FormSubmitButton";
//Actions
import { createArticle, updateArticle } from "@/lib/actions/articles";
//Types
import { TFormState } from "@/types/app.type";
import { TArticleDto } from "@/types/articles.type";
import AdminArticleInputs from "./AdminArticleInputs";

interface AdminMaterialsEditProps {
  articleToEdit: TArticleDto;
}

const initialState: TFormState<TArticleDto> = {
  errors: null,
  message: "",
  data: {
    publishDate: "",
    link: "",
    preview: "",
    publishPlace: "",
    _id: "",
  },
};
export default function AdminArticleEdit({
  articleToEdit,
}: AdminMaterialsEditProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, fromAction, isPending] = useActionState(
    articleToEdit?._id ? updateArticle : createArticle,
    { ...initialState, data: articleToEdit }
  );
  const { data, message, errors } = state;

  return (
    <form
      ref={formRef}
      action={fromAction}
      className="p-4 min-w-72 xs:min-w-80 border rounded flex flex-col gap-6 h-fit backdrop-sepia shadow-[0px_0px_40000px_1000px_rgba(0,0,0,0.5)] bg-mainWhite-50 fixed z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
    >
      <Input type="hidden" name="_id" defaultValue={data?._id} />

      <TextArea
        divStyle="flex flex-col gap-2 bg-inherit h-[calc(35%-1rem)]"
        className="bg-inherit border rounded p-2 h-[calc(100%-2rem)] resize-none overflow-auto scrollbar-hidden"
        name="preview"
        id={`preview-${data?._id}`}
        defaultValue={data?.preview}
        placeholder="הקלד תקציר"
      >
        <Label htmlFor={`preview-${data?._id}`}>תקציר</Label>
        <ErrorLabel htmlFor={`preview-${data?._id}`} error={errors?.preview} />
      </TextArea>
      <AdminArticleInputs data={data} errors={errors} />

      {message ? (
        <ErrorLabel
          className="block p-2 rounded-base border"
          error={message}
        />
      ) : null}
      <FormSubmitButton isPending={isPending} />
    </form>
  );
}
