import { TTestimony } from "@/types/testimonies.type";
import HandleEdit from "../HandleEdit";
import { TestimoniesServerUtils } from "@/utils/server/testimonies.util";
import ItemList from "@/components/UI/ItemList";
import AdminTestimoniesEdit from "./AdminTestimoniesEdit";
import AdminTestimoniesPreview from "./AdminTestimoniesPreview";

interface AdminArticlesIndexProps {
  testimonies: TTestimony[];
}
export default function AdminTestimoniesIndex({
  testimonies,
}: AdminArticlesIndexProps) {
  return (
    <section className=" p-2 rounded min-w-full h-fit pb-24">
      <div className="flex justify-between items-center pb-8">
        <h3 className="">המלצות</h3>
        <HandleEdit
          item={TestimoniesServerUtils.getEmpty()}
          EditCmp={({ item }) => (
            <AdminTestimoniesEdit testimonyToEdit={item} />
          )}
        />
      </div>
      <ItemList
        listStyle=" flex flex-wrap justify-around gap-6 w-full"
        items={testimonies}
        renderItem={(item) => <AdminTestimoniesPreview testimony={item} />}
      />
    </section>
  );
}
