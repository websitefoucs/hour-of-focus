import TestimonyItem from "@/components/Home/Testimonies/TestimonyItem";
import { TTestimony } from "@/types/testimonies.type";
import HandleEdit from "../HandleEdit";
import AdminTestimoniesEdit from "./AdminTestimoniesEdit";
import DeleteBtn from "@/components/UI/DeleteBtn";
import { deleteTestimony } from "@/lib/actions/testimonies";

interface AdminTestimoniesPreviewProps {
  testimony: TTestimony;
}
export default function AdminTestimoniesPreview({
  testimony,
}: AdminTestimoniesPreviewProps) {
  const { text, createAt, _id } = testimony;
  return (
    <li className="p-4 border rounded-base w-full">
      <ul>
        <TestimonyItem testimony={text} />
        <li className="flex  gap-2 items-center p-4">
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
                  createBy: item?.createBy?._id,
                  updateBy: item?.updateBy?._id,
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
