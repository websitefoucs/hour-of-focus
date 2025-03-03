import React from "react";
import Input from "../UI/Input";
import Label from "../UI/Label";
import { LinkHighlightSvg } from "../UI/icons/Icons";

export default function LinkHighlight() {
  return (
    <Input
      type="checkbox"
      id="highlight-links"
      name="highlight-links"
      hidden
      className="hidden highlight-links"
    >
      <Label htmlFor="highlight-links" className="flex gap-2 items-center">
        <LinkHighlightSvg />
        <p className="text-mainGray-800">הדגשת קישורים</p>
      </Label>
    </Input>
  );
}
