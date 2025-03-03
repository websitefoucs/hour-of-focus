import MaterialsIndex from "@/components/Materials/MaterialsIndex";
import { getMaterials } from "@/lib/actions/materials";

export default async function MaterialsPage() {
  const materials = await getMaterials({ isFull: false });

  return <MaterialsIndex materials={materials} />;
}
