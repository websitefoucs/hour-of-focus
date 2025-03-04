"use client";
import FormDisabledButton from "./FormDisabledButton";

interface DeleteBtnProps {
  deleteAction: (id: string, type?: string) => Promise<void>;
  id: string;
  type?: string;
}

export default function DeleteBtn({ deleteAction, id, type }: DeleteBtnProps) {
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await deleteAction(id, type);
  };

  return (
    <form onSubmit={onSubmit}>
      <FormDisabledButton type="submit">מחק</FormDisabledButton>
    </form>
  );
}
