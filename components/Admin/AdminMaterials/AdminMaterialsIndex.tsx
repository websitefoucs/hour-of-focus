import { TMaterial } from "@/types/materials.type";
import HandleEdit from "../HandleEdit";
import { materialsServerUtils } from "@/utils/server/materials.util";
import AdminMaterialEdit from "./AdminMaterialEdit";
import AdminMaterialsList from "./AdminMaterialsList";

interface AdminMaterialsIndexProps {
  materials: TMaterial[];
}
export default function AdminMaterialsIndex({
  materials,
}: AdminMaterialsIndexProps) {
  return (
    <section className=" p-2 rounded w-full h-fit pb-24">
      <div className="flex justify-between items-center pb-8">
        <h3 className="text-24 sm:text-36">חומרי לימוד למתנדבים</h3>
        <HandleEdit
          item={materialsServerUtils.getEmpty()}
          EditCmp={({ item }) => <AdminMaterialEdit materialToEdit={item} />}
        />
      </div>
      <AdminMaterialsList materials={materials} />
    </section>
  );
}
