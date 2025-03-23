import ItemList from "@/components/UI/ItemList";
import { TMaterial } from "@/types/materials.type";
import AdminMaterialPreview from "./AdminMaterialPreview";

interface AdminMaterialsListProps {
  materials: TMaterial[];
}
export default function AdminMaterialsList({
  materials,
}: AdminMaterialsListProps) {
  return (
    <div className="h-full w-full ">
      <ItemList
        listStyle="grid  grid-cols-1  sm:sm:grid-cols-[repeat(auto-fill,minmax(17rem,_1fr))]  items-center gap-gaps px-sides  "
        items={materials}
        renderItem={(item) => <AdminMaterialPreview material={item} />}
      />
    </div>
  );
}
