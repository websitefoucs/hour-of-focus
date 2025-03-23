//React
import React, { ComponentType } from "react";
//UI
import Model from "../UI/Model";

interface HandleEditProps<T extends { _id?: string }> {
  item: T;
  EditCmp: ComponentType<{ item: T }>;
}
/**
 * A generic component that handles the editing of an item from thr admin page.
 *
 * @template T - The type of the item being edited. Must have an optional `_id` property.
 *
 * @param {HandleEditProps<T>} props - The properties for the HandleEdit component.
 * @param {T} props.item - The item to be edited.
 * @param {React.ComponentType<{ item: T }>} props.EditCmp - The component used to edit the item.
 *
 * @returns {JSX.Element} The rendered HandleEdit component.
 */
export default function HandleEdit<T extends { _id?: string }>({
  item,
  EditCmp,
}: HandleEditProps<T>) {
  const { _id } = item;

  const btnText = _id ? "ערוך" : "הוסף";
  return (
    <Model
      withOverlay={false}
      button={{
        props: {
          className:
            "bg-inherit border-2 w-20 border-mainOrange-700 text-mainOrange-700 hover:shadow-mainOrange-800 hover:text-mainOrange-800 rounded-base flex  justify-center items-center",
        },
        content: btnText,
      }}
      model={<EditCmp item={item} />}
    ></Model>
  );
}
