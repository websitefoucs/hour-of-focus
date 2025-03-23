"use client";
import ErrorLabel from "@/components/UI/ErrorLabel";
import FormSubmitButton from "@/components/UI/FormSubmitButton";
import ImageUploadInput from "@/components/UI/ImageUploadInput";
import Input from "@/components/UI/Input";
import Label from "@/components/UI/Label";
import { createMaterial, updateMaterial } from "@/lib/actions/materials";
import { TFormState } from "@/types/app.type";
import { TMaterialDto } from "@/types/materials.type";
import { useActionState } from "react";

interface AdminMaterialsEditProps {
  materialToEdit: TMaterialDto;
}

const initialState: TFormState<TMaterialDto> = {
  errors: null,
  message: "",
  data: {
    imgPath: "",
    link: "",
    _id: "",
    subject: "",
  },
};
export default function AdminMaterialEdit({
  materialToEdit,
}: AdminMaterialsEditProps) {
  const [state, fromAction, isPending] = useActionState(
    materialToEdit?._id ? updateMaterial : createMaterial,
    { ...initialState, data: materialToEdit }
  );

  const { data, message, errors } = state;
  console.log(" data:", data)
  console.log(" state:", state)

  return (
    <form
      action={fromAction}
      className="p-4 min-w-72  border rounded flex flex-col gap-2 h-fit backdrop-sepia shadow-[0px_0px_40000px_1000px_rgba(0,0,0,0.5)] bg-mainWhite-50 fixed z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
    >
      <Input type="hidden" name="_id" defaultValue={data?._id} />

      <ImageUploadInput
        imgPath={data?.imgPath}
        itemId={data?._id}
      />
      <Input
        type="text"
        name="link"
        id={`link-${data?._id}`}
        defaultValue={data?.link}
        placeholder="קישור לתיקיית גוגל"
      >
        <Label htmlFor={`link-${data?._id}`}>קישור</Label>
        <ErrorLabel
          htmlFor={`link-${data?._id}`}
          error={errors?.link}
        />
      </Input>
      <Input
        type="text"
        name="subject"
        id={`subject-${data?._id}`}
        defaultValue={data?.subject}
        placeholder="מתמטיקה, פיזיקה וכו..."
      >
        <Label htmlFor={`subject-${data?._id}`}>נושא</Label>
        <ErrorLabel
          htmlFor={`subject-${data?._id}`}
          error={errors?.subject}
        />
      </Input>

         {message ? (
            <ErrorLabel
              className="block my-2 p-2 rounded-base border"
              error={message}
            />
          ) : null}
          <FormSubmitButton isPending={isPending} />
    </form>
  );
}
