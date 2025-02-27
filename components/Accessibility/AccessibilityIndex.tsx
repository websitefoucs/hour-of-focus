import React from "react";
import SizeControl from "./SizeControl";
import LinkHighlight from "./LinkHighlight";
import HeadersHighlight from "./HeadersHighlight";
import StopAnimations from "./StopAnimations";
import Model from "../UI/Model";
import { AccessibilitySvg } from "../UI/icons/Icons";
import Button from "../UI/Button";

export default function AccessibilityIndex() {
  return (
    <Model
      model={
        <form>
          <SizeControl />
          <LinkHighlight />
          <HeadersHighlight />
          <StopAnimations />
          <Button type="reset">Reset</Button>
        </form>
      }
      button={{
        props: {
          className: "p-2 hidden",
        },
        content: <AccessibilitySvg />,
      }}
    ></Model>
  );
}
