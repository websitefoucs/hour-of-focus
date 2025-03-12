"use client";
import { createTestimony, updateTestimony } from "@/lib/actions/testimonies";
import { TFormState } from "@/types/app.type";
import { TTestimonyDto } from "@/types/testimonies.type";
import { useActionState, useRef } from "react";
import AdminTestimoniesInputs from "./AdminTestimoniesInputs";
import Button from "@/components/UI/Button";
import Quill from "quill";

interface AdminTestimoniesEditProps {
  testimonyToEdit: TTestimonyDto;
}

const initialState: TFormState<TTestimonyDto> = {
  errors: null,
  message: "",
  data: {
    delta: [],
  },
};
export default function AdminTestimoniesEdit({
  testimonyToEdit,
}: AdminTestimoniesEditProps) {
  const [state, fromAction, isPending] = useActionState(
    testimonyToEdit?._id ? updateTestimony : createTestimony,
    { ...initialState, data: testimonyToEdit }
  );
  const quillRef = useRef<Quill | null>(null);

  const handleSubmit = async (e: FormData) => {
    if (!quillRef.current) return;

    const delta = quillRef.current.getContents();
    // Convert Delta to JSON and append to FormData
    e.append("quillOps", JSON.stringify(delta.ops));

    fromAction(e); // Send updated data to Next.js Action
  };

  return (
    <form
      action={handleSubmit}
      className="p-4 border rounded flex flex-col gap-2 h-full bg-mainWhite-50 w-96 edit-form"
    >
      <AdminTestimoniesInputs quillRef={quillRef} {...state} />

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
