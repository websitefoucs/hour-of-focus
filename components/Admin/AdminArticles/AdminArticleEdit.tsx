"use client";
import Button from "@/components/UI/Button";
import ErrorLabel from "@/components/UI/ErrorLabel";
import Input from "@/components/UI/Input";
import Label from "@/components/UI/Label";
import { createArticle, updateArticle } from "@/lib/actions/articles";
import { TFormState } from "@/types/app.type";
import { TArticleDto } from "@/types/articles.type";
import { useActionState, useRef } from "react";
import TextArea from "@/components/UI/TextArea";

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
    createBy: "",
    updateBy: "",
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

  return (
    <form
      ref={formRef}
      action={fromAction}
      className="p-4 border rounded flex flex-col gap-2 h-full bg-mainWhite-50 w-96"
    >
      <Input type="hidden" name="_id" defaultValue={state?.data?._id} />
      <Input
        type="hidden"
        name="createBy"
        defaultValue={state?.data?.createBy}
      />
      <TextArea
        divStyle="flex flex-col gap-2 bg-inherit h-[calc(35%-1rem)]"
        className="bg-inherit border rounded p-2 h-[calc(100%-2rem)] resize-none overflow-auto scrollbar-hidden"
        name="preview"
        id={`preview-${state?.data?._id}`}
        defaultValue={state?.data?.preview}
        placeholder="הקלד תקציר"
      >
        <Label htmlFor={`preview-${state?.data?._id}`}>תקציר</Label>
        <ErrorLabel
          htmlFor={`preview-${state?.data?._id}`}
          error={state?.errors?.preview}
        />
      </TextArea>
      <Input
        type="text"
        name="link"
        id={`link-${state?.data?._id}`}
        defaultValue={state?.data?.link}
        placeholder="קישור לכתבה"
      >
        <Label htmlFor={`link-${state?.data?._id}`}>קישור</Label>
        <ErrorLabel
          htmlFor={`link-${state?.data?._id}`}
          error={state?.errors?.link}
        />
      </Input>
      <Input
        type="text"
        name="publishPlace"
        id={`subject-${state?.data?._id}`}
        defaultValue={state?.data?.publishPlace}
        placeholder="ידיעות, חדשות מקומיות וכו..."
      >
        <Label htmlFor={`publishPlace-${state?.data?._id}`}>מקום פרסום</Label>
        <ErrorLabel
          htmlFor={`publishPlace-${state?.data?._id}`}
          error={state?.errors?.publishPlace}
        />
      </Input>
      <Input
        type="text"
        name="publishDate"
        id={`subject-${state?.data?._id}`}
        defaultValue={state?.data?.publishDate}
        placeholder="חודש שנה, לדוגמה: אוקטובר 2024"
      >
        <Label htmlFor={`publishDate-${state?.data?._id}`}>זמן פרסום</Label>
        <ErrorLabel
          htmlFor={`publishDate-${state?.data?._id}`}
          error={state?.errors?.publishDate}
        />
      </Input>

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
