import React from "react";
import Input from "../UI/Input";
import Label from "../UI/Label";

export default function StopAnimations() {
  return (
    <Input
      type="checkbox"
      id="stop-animations"
      name="stop-animations"
      hidden
      className="hidden"
    >
      <Label htmlFor="stop-animations">עצירת אנימציות</Label>
    </Input>
  );
}
