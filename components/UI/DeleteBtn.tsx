"use client";
import FormDisabledButton from "./FormDisabledButton";

interface DeleteBtnProps {
  deleteAction: (id: string, type?: string) => Promise<void>;
  id: string;
  type?: string;
}
/**
 * DeleteBtn component renders a form with a submit button to trigger a delete action.
 *
 * @param {Object} props - The properties object.
 * @param {Function} props.deleteAction - The function to call when the delete action is triggered.
 * @param {string | number} props.id - The identifier of the item to delete.
 * @param {string} props.type - The type of the item to delete.
 *
 * @returns {JSX.Element} The rendered DeleteBtn component.
 */
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
