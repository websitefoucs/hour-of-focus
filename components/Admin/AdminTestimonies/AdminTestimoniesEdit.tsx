"use client";
import { createTestimony, updateTestimony } from "@/lib/actions/testimonies";
import { TFormState } from "@/types/app.type";
import { TTestimonyDto } from "@/types/testimonies.type";
import { useActionState } from "react";
import AdminTestimoniesInputs from "./AdminTestimoniesInputs";
import Button from "@/components/UI/Button";

interface AdminTestimoniesEditProps {
  testimonyToEdit: TTestimonyDto;
}

const initialState: TFormState<TTestimonyDto> = {
  errors: null,
  message: "",
  data: {
    text: "",
  },
};
export default function AdminTestimoniesEdit({
  testimonyToEdit,
}: AdminTestimoniesEditProps) {
  const [state, fromAction, isPending] = useActionState(
    testimonyToEdit?._id ? updateTestimony : createTestimony,
    { ...initialState, data: testimonyToEdit }
  );

  return (
    <form
      action={fromAction}
      className="p-4 border rounded flex flex-col gap-2 h-full bg-mainWhite-50 w-96"
    >
      <AdminTestimoniesInputs data={state?.data} errors={state?.errors} />

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
