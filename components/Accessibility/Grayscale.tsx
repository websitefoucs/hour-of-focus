import React from "react";
import Input from "../UI/Input";
import Label from "../UI/Label";
import { GrayScaleSvg } from "../UI/icons/Icons";

export default function Grayscale() {
  return (
    <Input
      type="checkbox"
      name="grayscale"
      id="grayscale"
      hidden
      className="hidden grayscale"
    >
      <Label htmlFor="grayscale" className="flex gap-2 items-center">
        <GrayScaleSvg />
        <p className="text-mainGray-800">גווני אפור</p>
      </Label>
    </Input>
  );
}
