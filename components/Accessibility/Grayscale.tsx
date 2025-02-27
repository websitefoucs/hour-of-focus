import React from "react";
import Input from "../UI/Input";
import Label from "../UI/Label";

export default function Grayscale() {
  return (
    <Input
      type="checkbox"
      id="grayscale"
      name="grayscale"
      hidden
      className="hidden"
    >
      <Label htmlFor="grayscale">גווני אפור</Label>
    </Input>
  );
}
