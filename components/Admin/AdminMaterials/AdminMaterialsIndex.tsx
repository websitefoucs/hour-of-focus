import { TMaterial } from "@/types/materials.type";
import HandleEdit from "../HandleEdit";
import { materialsServerUtils } from "@/utils/server/materials.util";
import AdminMaterialsEdit from "./AdminMaterialsEdit";
import AdminMaterialsList from "./AdminMaterialsList";

interface AdminMaterialsIndexProps {
  materials: TMaterial[];
}
export default function AdminMaterialsIndex({
  materials,
}: AdminMaterialsIndexProps) {
  return (
    <section className=" p-2 rounded min-w-full h-fit pb-24">
      <div className="flex justify-between items-center pb-8">
        <h3 className="">חומרי לימוד למתנדבים</h3>
        <HandleEdit
          item={materialsServerUtils.getEmpty()}
          EditCmp={({ item }) => <AdminMaterialsEdit materialToEdit={item} />}
        />
      </div>
      <AdminMaterialsList materials={materials} />
    </section>
  );
}
