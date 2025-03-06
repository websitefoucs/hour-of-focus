import React from "react";
import Input from "../UI/Input";
import Label from "../UI/Label";
import { HighlightHeadersSvg } from "../UI/icons/Icons";

export default function HeadersHighlight() {
  return (
    <Input
      type="checkbox"
      id="highlight-headers"
      name="highlight-headers"
      hidden
      className="hidden"
    >
      <Label htmlFor="highlight-headers">
        <HighlightHeadersSvg />
        <p className="text-mainGray-800">הדגשת כותרות</p>
      </Label>
    </Input>
  );
}
