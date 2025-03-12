import Input from "@/components/UI/Input";

import { TValidationError } from "@/types/app.type";
import { TTestimonyDto } from "@/types/testimonies.type";
import dynamic from "next/dynamic";
import Quill from "quill";
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
export default function AdminTestimoniesInputs({
  data,
  quillRef,
}: AdminTestimoniesInputsProps) {
  return (
    <>
      <Input type="hidden" name="_id" defaultValue={data?._id} />
      <RichTextEditor quillRef={quillRef} delta={data?.delta} />
    </>
  );
}
