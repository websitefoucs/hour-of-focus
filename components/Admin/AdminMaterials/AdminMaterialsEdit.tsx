"use client";
import Button from "@/components/UI/Button";
import ErrorLabel from "@/components/UI/ErrorLabel";
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
    createBy: "",
    updateBy: "",
  },
};
export default function AdminMaterialsEdit({
  materialToEdit,
}: AdminMaterialsEditProps) {
  const [state, fromAction, isPending] = useActionState(
    materialToEdit?._id ? updateMaterial : createMaterial,
    { ...initialState, data: materialToEdit }
  );
  console.log(" state:", state)

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
      <Input
        type="text"
        name="imgPath"
        id={`imgPath-${state?.data?._id}`}
        defaultValue={state?.data?.imgPath}
        placeholder="הכנס כתובת תמונה"
      >
        <Label htmlFor={`subject-${state?.data?._id}`}>תמונה</Label>
        <ErrorLabel
          htmlFor={`subject-${state?.data?._id}`}
          error={state?.errors?.imgPath}
        />
      </Input>
      <Input
        type="text"
        name="link"
        id={`link-${state?.data?._id}`}
        defaultValue={state?.data?.link}
        placeholder="קישור לתיקיית גוגל"
      >
        <Label htmlFor={`link-${state?.data?._id}`}>קישור</Label>
        <ErrorLabel
          htmlFor={`link-${state?.data?._id}`}
          error={state?.errors?.link}
        />
      </Input>
      <Input
        type="text"
        name="subject"
        id={`subject-${state?.data?._id}`}
        defaultValue={state?.data?.subject}
        placeholder="מתמטיקה, פיזיקה וכו..."
      >
        <Label htmlFor={`subject-${state?.data?._id}`}>נושא</Label>
        <ErrorLabel
          htmlFor={`subject-${state?.data?._id}`}
          error={state?.errors?.subject}
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
