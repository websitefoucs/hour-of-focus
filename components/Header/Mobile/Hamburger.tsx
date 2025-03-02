import Input from "@/components/UI/Input";
import Label from "@/components/UI/Label";
import React from "react";

export default function Hamburger() {
  return (
    <Input
      type="checkbox"
      id="menu-toggle"
      className="hidden hamburger-checkbox "
      divStyle="hamburger-con w-12 h-12"
      hidden
    >
      <Label
        aria-controls="primary-navigation"
        htmlFor="menu-toggle"
        className="hamburger fill-mainOrange-600"
        aria-expanded="false"
      >
        <svg className="hamburger" viewBox="0 0 100 100">
          <rect
            className="line top"
            width="80"
            height="10"
            x="10"
            y="25"
            rx="5"
          ></rect>
          <rect
            className="line middle"
            width="80"
            height="10"
            x="10"
            y="45"
            rx="5"
          ></rect>
          <rect
            className="line bottom"
            width="80"
            height="10"
            x="10"
            y="65"
            rx="5"
          ></rect>
        </svg>
      </Label>
    </Input>
  );
}
