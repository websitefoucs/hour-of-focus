//Next
import dynamic from "next/dynamic";
//UI
import ErrorLabel from "@/components/UI/ErrorLabel";
import Input from "@/components/UI/Input";
//Types
import { TValidationError } from "@/types/app.type";
import { TTestimonyDto } from "@/types/testimonies.type";
//Quill
import Quill from "quill";
//force dynamic import of Quill editor to avoid server-side rendering
const RichTextEditor = dynamic(
  () => import("@/components/TextEditor/TextEditor"),
  {
    ssr: false,
  }
);
interface AdminTestimoniesInputsProps {
  quillRef: React.RefObject<Quill | null>;
  errors?: TValidationError<TTestimonyDto> | null;
  data?: TTestimonyDto;
}
/**
 * AdminTestimoniesInputs client component renders the input fields for editing a testimony entry.
 *
 * @component
 * @param {AdminTestimoniesInputsProps} props - The props for the component.
 * @param {RefObject} props.quillRef - A reference to the Quill editor for the testimony field.
 * @param {TValidationError} props.errors - An object containing validation errors for the testimony entry.
 * @param {TTestimonyDto} props.data - The testimony entry to edit.
 *
 * @returns {JSX.Element} The rendered AdminTestimoniesInputs component.
 */
export default function AdminTestimoniesInputs({
  data,
  quillRef,
  errors,
}: AdminTestimoniesInputsProps) {
  return (
    <>
      <Input type="hidden" name="_id" defaultValue={data?._id} />
      <ErrorLabel error={errors?.delta} />
      <RichTextEditor quillRef={quillRef} delta={data?.delta} />
    </>
  );
}
