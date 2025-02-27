import React from "react";
import Input from "../UI/Input";
import Label from "../UI/Label";

export default function LinkHighlight() {
  return (
    <Input
      type="checkbox"
      id="highlight-links"
      name="highlight-links"
      hidden
      className="hidden"
    >
      <Label htmlFor="highlight-links">הדגשת קישורים</Label>
    </Input>
  );
}
