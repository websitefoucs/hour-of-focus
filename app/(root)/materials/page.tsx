import MaterialsIndex from "@/components/Materials/MaterialsIndex";
import { getMaterials } from "@/lib/actions/materials";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "חומרי לימוד",
  description: "חומרי לימוד",
  category: "materials",
  robots: {
    follow: true,
    index: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};
export default async function MaterialsPage() {
  const materials = await getMaterials({ isFull: false });

  return <MaterialsIndex materials={materials} />;
}
