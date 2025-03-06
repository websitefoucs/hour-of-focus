"use client";
import SizeControl from "./SizeControl";
import LinkHighlight from "./LinkHighlight";
import HeadersHighlight from "./HeadersHighlight";
import StopAnimations from "./StopAnimations";
import Model from "../UI/Model";
import { AccessibilitySvg } from "../UI/icons/Icons";
import Grayscale from "./Grayscale";
import InvertContrast from "./InvertContrast";

export default function AccessibilityIndex() {
  return (
    <Model
      withOverlay={true}
      model={
        <div className="bg-mainWhite-0 accessibility-model w-56 fixed top-0 left-0 h-screen flex flex-col p-8 rounded-base z-50 gap-4">
          <h1 className="text-16 leading-28 pb-4 text-mainGray-800">
            כלי נגישות
          </h1>
          <SizeControl />
          <Grayscale />
          <InvertContrast />
          <LinkHighlight />
          <HeadersHighlight />
          <StopAnimations />
        </div>
      }
      containerClassName="accessibility-container"
      button={{
        props: {
          className:
            "p-2 fixed top-96 left-0 bg-mainWhite-0 accessibility-button z-50 shadow-[0px_2px_4px_1px_#00000026]",
        },
        content: <AccessibilitySvg />,
      }}
    ></Model>
  );
}

