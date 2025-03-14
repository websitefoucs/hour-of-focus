//Types
import { TMaterial } from "@/types/materials.type";
//React
import React from "react";
//UI
import HeroCmp from "../UI/HeroCmp";
import ItemList from "../UI/ItemList";
//Components
import MaterialItem from "./MaterialItem";

interface MaterialsIndexProps {
  materials: TMaterial[];
}
/**
 * MaterialsIndex server component renders a section containing a hero component and a list of materials for student and teachers.
 *
 * @param {MaterialsIndexProps} props - The props object containing the materials array.
 * @param {Array} props.materials - An array of material objects to be displayed in the list.
 *
 * @returns {JSX.Element} The rendered MaterialsIndex component.
 */
export default function MaterialsIndex({ materials }: MaterialsIndexProps) {
  return (
    <section className="flex flex-col gap-gaps pb-gaps md:pb-gaps-md w-full ">
      <HeroCmp text="מאגר חומרי לימוד למתנדבים" />
      <ItemList
        items={materials}
        listStyle="grid grid-flow-row gap-gaps  px-sides lg:px-sides-sm  "
        renderItem={(material) => (
          <li className="flex flex-col justify-between gap-2 h-auto border-t-8 border-mainGold-500 rounded-base shadow-material">
            <MaterialItem material={material} />
          </li>
        )}
      />
    </section>
  );
}
