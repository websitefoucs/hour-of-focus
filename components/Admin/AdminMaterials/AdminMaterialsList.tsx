import ItemList from "@/components/UI/ItemList";
import { TMaterial } from "@/types/materials.type";
import AdminMaterialsPreview from "./AdminMaterialsPreview";

interface AdminMaterialsListProps {
  materials: TMaterial[];
}
export default function AdminMaterialsList({
  materials,
}: AdminMaterialsListProps) {
  return (
    <div className="h-full w-full ">
      <ItemList
        listStyle=" flex flex-wrap justify-around gap-6 w-full"
        items={materials}
        renderItem={(item) => <AdminMaterialsPreview material={item} />}
      />
    </div>
  );
}
