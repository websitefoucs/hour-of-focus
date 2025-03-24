"use client";
/**
 * AdminMaterialEdit Component
 *
 * This component is used to edit or create a material in the admin panel.
 * It provides a form with fields for uploading an image, entering a link, and specifying a subject.
 * The form dynamically handles both creation and update actions based on the presence of a material ID.
 *
 * @component
 * @param {AdminMaterialsEditProps} props - The props for the component.
 * @param {TMaterialDto} props.materialToEdit - The material data to edit. If not provided, the form will be used to create a new material.
 *
 * @returns {JSX.Element} A form for editing or creating a material.
 *
 * @typedef {Object} AdminMaterialsEditProps
 * @property {TMaterialDto} materialToEdit - The material data to edit.
 *
 * @typedef {Object} TFormState
 * @property {TMaterialDto} data - The form data for the material.
 * @property {string} message - A message indicating the result of the form submission.
 * @property {Record<string, string> | null} errors - Validation errors for the form fields.
 *
 * @remarks
 * - The form uses the `useActionState` hook to manage state and handle form submission.
 * - The `ImageUploadInput` component is used for uploading an image.
 * - The `Input` component is used for entering the link and subject fields.
 * - The `FormSubmitButton` component handles the submission button with a pending state.
 * - Error messages are displayed using the `ErrorLabel` component.
 *
 */

//React
import { useActionState } from "react";
//UI
import ErrorLabel from "@/components/UI/ErrorLabel";
import FormSubmitButton from "@/components/UI/FormSubmitButton";
import ImageUploadInput from "@/components/UI/ImageUploadInput";
import Input from "@/components/UI/Input";
import Label from "@/components/UI/Label";
//Actions
import { createMaterial, updateMaterial } from "@/lib/actions/materials";
//Types
import { TFormState } from "@/types/app.type";
import { TMaterialDto } from "@/types/materials.type";

interface AdminMaterialsEditProps {
  materialToEdit: TMaterialDto;
}

const initialState: TFormState<TMaterialDto> = {
  errors: null,
  message: "",
  data: {
    imgPath: "",
    link: "",
    public_id: "",
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

  return (
    <form
      action={fromAction}
      className="p-4 min-w-72 max-w-96  border rounded flex flex-col gap-2 h-fit backdrop-sepia shadow-[0px_0px_40000px_1000px_rgba(0,0,0,0.5)] bg-mainWhite-50 fixed z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
    >
      <Input type="hidden" name="_id" defaultValue={data?._id} />

      <ImageUploadInput
        imgPath={data?.imgPath}
        public_id={data?.public_id}
        itemId={data?._id}
        serverError={errors?.imgPath}
      />
      <Input
        type="text"
        name="link"
        id={`link-${data?._id}`}
        defaultValue={data?.link}
        placeholder="קישור לתיקיית גוגל"
      >
        <Label htmlFor={`link-${data?._id}`}>קישור</Label>
        <ErrorLabel htmlFor={`link-${data?._id}`} error={errors?.link} />
      </Input>
      <Input
        type="text"
        name="subject"
        id={`subject-${data?._id}`}
        defaultValue={data?.subject}
        placeholder="מתמטיקה, פיזיקה וכו..."
      >
        <Label htmlFor={`subject-${data?._id}`}>נושא</Label>
        <ErrorLabel htmlFor={`subject-${data?._id}`} error={errors?.subject} />
      </Input>

      {message ? (
        <ErrorLabel
          className="block my-2 p-2 rounded-base border break-words"
          error={message}
        />
      ) : null}
      <FormSubmitButton isPending={isPending} />
    </form>
  );
}
