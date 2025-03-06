"use client";
import SizeControl from "./SizeControl";
import Model from "../UI/Model";
import {
  AccessibilitySvg,
  GrayScaleSvg,
  HeaderHighlightSvg,
  InvertContrastSvg,
  LinkHighlightSvg,
  StopAnimationsSvg,
} from "../UI/icons/Icons";
import Input from "../UI/Input";
import Label from "../UI/Label";

export default function AccessibilityIndex() {
  return (
    <Model
      withOverlay={true}
      model={
        <div className="bg-mainWhite-0 fixed top-0 left-0 h-screen justify-center flex flex-col p-8 rounded-base z-50 gap-2 slide-in-class ">
          <h1 className="text-16 leading-28 pb-4 text-mainGray-800">
            כלי נגישות
          </h1>
          <SizeControl />
          {items.map(({ name, icon, text }, index) => (
            <Input
              key={index}
              type="checkbox"
              name={name}
              id={name}
              hidden
              className={"hidden " + name}
            >
              <Label htmlFor={name} className={"flex gap-2 items-center hover:cursor-pointer "+name}>
                {icon}
                <p className="text-mainGray-800"> {text}</p>
              </Label>
            </Input>
          ))}
        </div>
      }
      containerClassName="accessibility-container"
      button={{
        props: {
          className:
            "p-2 fixed top-96 left-0 bg-mainWhite-0  z-50 shadow-[0px_2px_4px_1px_#00000026] ",
        },
        content: <AccessibilitySvg />,
      }}
    ></Model>
  );
}

const items = [
  {
    name: "grayscale",
    text: "גווני אפור",
    icon: <GrayScaleSvg />,
  },
  {
    name: "invertContrast",
    text: "ניגודיות גבוהה",
    icon: <InvertContrastSvg />,
  },
  {
    name: "highlight-links",
    text: "הדגשת קישורים",
    icon: <LinkHighlightSvg />,
  },
  {
    name: "highlight-headers",
    text: "הדגשת כותרות",
    icon: <HeaderHighlightSvg />,
  },
  {
    name: "stop-animations",
    text: "עצירת אנימציות",
    icon: <StopAnimationsSvg />,
  },
];
