import ItemList from "@/components/UI/ItemList";
import { I_SCHOOL_IMAGE } from "@/constants/images";
import React from "react";
import ExplainStudentsCharitiesItem from "./ExplainStudentsCharitiesItem";

export default function ExplainStudentsCharities() {
  return (
    <div className="px-20 mobile:px-4 flex flex-col gap-4 pb-36 mobile:pb-16 max-w-[80svw] mobile:max-w-full">
      <h5>העמותות המומלצות שלנו</h5>
      <p className="text-20 text-mainGray-500">
        ביחד, ניצור שרשרת של מעשים טובים ונעביר את זה הלאה – כי כל מעשה קטן יכול
        לחולל שינוי גדול
      </p>
      <ItemList
        items={items}
        renderItem={(item) => <ExplainStudentsCharitiesItem item={item} />}
      />
    </div>
  );
}

const items = [
  {
    _id: undefined,
    name: "ISchool",
    img: I_SCHOOL_IMAGE,
    text: "מצמצמת פערים חינוכיים באמצעות פרויקטים טכנולוגיים",
    link: "https://www.i-school.co.il/",
  },
];
