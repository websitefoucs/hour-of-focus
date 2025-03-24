//Components
import TestimonyItem from "@/components/Home/Testimonies/TestimonyItem";
import HandleEdit from "../HandleEdit";
import AdminTestimoniesEdit from "./AdminTestimoniesEdit";
//Types
import { TTestimony } from "@/types/testimonies.type";
//UI
import DeleteBtn from "@/components/UI/DeleteBtn";
//Actions
import { deleteTestimony } from "@/lib/actions/testimonies";
interface AdminTestimoniesPreviewProps {
  testimony: TTestimony;
}
/**
 * AdminTestimoniesPreview server component renders a single testimony item with edit and delete options.
 *
 * @component
 * @param {AdminTestimoniesPreviewProps} props - The props for the component.
 * @param {TTestimony} props.testimony - The testimony item to display.
 *
 * @returns {JSX.Element} The rendered AdminTestimoniesPreview component.
 */
export default function AdminTestimoniesPreview({
  testimony,
}: AdminTestimoniesPreviewProps) {
  const { createAt, _id } = testimony;
  return (
    <li className="p-4 w-full">
      <ul className="w-full grid md:grid-cols-[1fr_5rem] xl:grid-cols-[49rem_5rem] gap-4  ">
        <TestimonyItem testimony={testimony} />
        <li className="flex md:flex-col gap-2 items-center md:justify-start  ">
          <span className="border rounded-base  text-center py-1 px-2 gap-2 flex">
            <p className="text-sm">
              {new Date(createAt!).toLocaleDateString()}
            </p>
          </span>
          <HandleEdit
            item={testimony}
            EditCmp={({ item }) => (
              <AdminTestimoniesEdit
                testimonyToEdit={{
                  ...item,
                }}
              />
            )}
          />
          <DeleteBtn id={_id || ""} deleteAction={deleteTestimony} />
        </li>
      </ul>
    </li>
  );
}
