import React from "react";
import Input from "../UI/Input";
import Label from "../UI/Label";

export default function InvertContrast() {
  return (
    <Input
      type="checkbox"
      id="invertContrast"
      name="invertContrast"
      hidden
      className="hidden"
    >
      <Label htmlFor="invertContrast">ניגודיות הפוכה</Label>
    </Input>
  );
}
