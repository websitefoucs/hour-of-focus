//Types
import { TTestimony } from "@/types/testimonies.type";
//Components
import HandleEdit from "../HandleEdit";
import AdminTestimoniesEdit from "./AdminTestimoniesEdit";
import AdminTestimoniesPreview from "./AdminTestimoniesPreview";
//Utils
import { TestimoniesServerUtils } from "@/utils/server/testimonies.util";
//UI
import ItemList from "@/components/UI/ItemList";

interface AdminArticlesIndexProps {
  testimonies: TTestimony[];
}
/**
 * AdminTestimoniesIndex server component renders a section containing a list of testimonies with an edit option.
 *
 * @component
 * @param {AdminArticlesIndexProps} props - The props for the component.
 * @param {Array} props.testimonies - An array of testimonies items to be displayed.
 *
 * @returns {JSX.Element} The rendered AdminTestimoniesIndex component.
 */
export default function AdminTestimoniesIndex({
  testimonies,
}: AdminArticlesIndexProps) {
  return (
    <section className=" p-2 rounded w-fit h-fit pb-24 min-w-72">
      <div className="flex justify-between items-center pb-8 pl-4">
        <h3 className="text-24 sm:text-36">המלצות</h3>
        <HandleEdit
          item={TestimoniesServerUtils.getEmpty()}
          EditCmp={({ item }) => (
            <AdminTestimoniesEdit testimonyToEdit={item} />
          )}
        />
      </div>
      <ItemList
        listStyle="grid gap-6 w-fit"
        items={testimonies}
        renderItem={(item) => <AdminTestimoniesPreview testimony={item} />}
      />
    </section>
  );
}
