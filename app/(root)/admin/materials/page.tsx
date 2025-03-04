import AdminMaterialsIndex from "@/components/Admin/AdminMaterials/AdminMaterialsIndex";
import { getMaterials } from "@/lib/actions/materials";

export default async function AdminMaterialsPage() {
  const materials = await getMaterials({ isFull: true });
  return <AdminMaterialsIndex materials={materials} />;
}
