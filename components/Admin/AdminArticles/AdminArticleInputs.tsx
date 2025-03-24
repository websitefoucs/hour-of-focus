import ErrorLabel from "@/components/UI/ErrorLabel";
import Input from "@/components/UI/Input";
import Label from "@/components/UI/Label";
import { TValidationError } from "@/types/app.type";
import { TArticleDto } from "@/types/articles.type";
import React from "react";

interface AdminArticleInputsProps {
  data?: TArticleDto;
  errors?: TValidationError<TArticleDto> | null;
}
export default function AdminArticleInputs({
  data,
  errors,
}: AdminArticleInputsProps) {
  const inputs = [
    {
      type: "text",
      name: "link",
      id: `link-${data?._id}`,
      defaultValue: data?.link,
      placeholder: "קישור לכתבה",
    },
    {
      type: "text",
      name: "publishPlace",
      id: `subject-${data?._id}`,
      defaultValue: data?.publishPlace,
      placeholder: "ידיעות, חדשות מקומיות וכו...",
    },
    {
      type: "text",
      name: "publishDate",
      id: `subject-${data?._id}`,
      defaultValue: data?.publishDate,
      placeholder: "חודש שנה, לדוגמה: אוקטובר 2024",
    },
  ];
  return (
    <>
      {inputs.map((input, index) => (
        <Input
          key={index}
          type="text"
          name={input.name}
          id={input.id}
          defaultValue={input.defaultValue}
          placeholder={input.placeholder}
          divStyle="flex flex-col gap-1"
        >
          <Label htmlFor={input.id}>{input.placeholder}</Label>
          <ErrorLabel
            htmlFor={input.id}
            error={errors?.[input.name as keyof TArticleDto]}
          />
        </Input>
      ))}
    </>
  );
}
