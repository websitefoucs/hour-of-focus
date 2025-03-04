import { TMaterial } from "@/types/materials.type";
import React from "react";
import HeroCmp from "../UI/HeroCmp";
import ItemList from "../UI/ItemList";
import MaterialItem from "./MaterialItem";

interface MaterialsIndexProps {
  materials: TMaterial[];
}
export default function MaterialsIndex({ materials }: MaterialsIndexProps) {
  return (
    <section className="flex flex-col gap-16 pb-24 w-full ">
      <HeroCmp text="מאגר חומרי לימוד למתנדבים" />
      <ItemList
        items={materials}
        listStyle="flex flex-wrap gap-8 items-center justify-center px-20"
        renderItem={(material) => (
          <li className="flex flex-col gap-2 h-80 border-t-8 border-mainGold-500 rounded-base shadow-[0px_4px_8px_#00000026]">
            <MaterialItem material={material} />
          </li>
        )}
      />
    </section>
  );
}
