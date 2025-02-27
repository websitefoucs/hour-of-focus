import React from "react";
import Input from "../UI/Input";
import Label from "../UI/Label";

export default function HeadersHighlight() {
  return (
    <Input
      type="checkbox"
      id="highlight-headers"
      name="highlight-headers"
      hidden
      className="hidden"
    >
      <Label htmlFor="highlight-headers">הדגשת כותרות</Label>
    </Input>
  );
}
