import React, { ComponentType } from "react";
import Model from "../UI/Model";

interface HandleEditProps<T extends { _id?: string }> {
  item: T;
  EditCmp: ComponentType<{ item: T }>;
}
export default function HandleEdit<T extends { _id?: string }>({
  item,
  EditCmp,
}: HandleEditProps<T>) {
  const { _id } = item;

  const btnText = _id ? "ערוך" : "הוסף";
  return (
    <Model
      withOverlay
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
