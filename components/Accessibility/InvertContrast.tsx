import React from "react";
import Input from "../UI/Input";
import Label from "../UI/Label";
import { InvertContrastSvg } from "../UI/icons/Icons";

export default function InvertContrast() {
  return (
    <Input
      type="checkbox"
      id="invertContrast"
      name="invertContrast"
      hidden
      className="hidden"
    >
      <Label htmlFor="invertContrast" className="flex gap-2 items-center">
        <InvertContrastSvg />
        <p className="text-mainGray-800">ניגודיות גבוהה</p>
      </Label>
    </Input>
  );
}
