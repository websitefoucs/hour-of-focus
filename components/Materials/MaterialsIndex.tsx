import { TMaterials } from "@/types/materials.type";
import React from "react";
import HeroCmp from "../UI/HeroCmp";
import ItemList from "../UI/ItemList";
import MaterialItem from "./MaterialItem";

interface MaterialsIndexProps {
  materials: TMaterials[];
}
export default function MaterialsIndex({ materials }: MaterialsIndexProps) {
  return (
    <section className="flex flex-col gap-16 pb-24 ">
      <HeroCmp text="מאגר חומרי לימוד למתנדבים" />
      <ItemList
        items={materials}
        listStyle="flex flex-warp gap-8 items-center justify-center px-20"
        renderItem={(material) => <MaterialItem material={material} />}
      />
    </section>
  );
}
