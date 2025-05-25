/**
 * AccessibilityIndex Client Component
 *
 * Provides an accessibility tools panel with options like zoom control, grayscale, high contrast,
 * link/header highlighting, and animation stopping. Includes a reset button to restore defaults.
 *
 * @component
 * @returns {JSX.Element} The AccessibilityIndex component.
 *
 * @description
 * Uses `useAccessibility` hook to manage state. Renders a modal (`Model`) with tools like `SizeControl`,
 * `ItemList`, and `Button`.
 *
 */
"use client";

//Components
import SizeControl from "./SizeControl";
//UI
import Model from "../UI/Model";
import {
  AccessibilitySvg,
  GrayScaleSvg,
  HeaderHighlightSvg,
  InvertContrastSvg,
  LinkHighlightSvg,
  RestSvg,
  StopAnimationsSvg,
} from "../UI/Icons";
import Input from "../UI/Input";
import Label from "../UI/Label";
//Hooks
import { useAccessibility } from "@/hooks/useAccessibility";
//Types
import { TAcccibility } from "@/types/app.type";
import ItemList from "../UI/ItemList";
import Button from "../UI/Button";

export default function AccessibilityIndex() {
  const {
    accessibility,
    onZoomChange,
    onChangeAccessibility,
    restAccessibility,
  } = useAccessibility();
  const { zoom } = accessibility;
  return (
    <Model
      withOverlay={true}
      model={
        <div className="bg-mainWhite-0 w-56 fixed top-0 left-0 h-screen justify-center flex flex-col p-8 rounded-base z-50 gap-2  transition-all duration-300">
          <h2 className="text-16 leading-28 pb-4 text-mainGray-800">
            כלי נגישות
          </h2>
          <SizeControl zoom={zoom} onZoomChange={onZoomChange} />
          <ItemList
            listStyle="flex flex-col gap-2"
            items={items}
            renderItem={({ name, icon, text }, index) => (
              <Input
                key={index}
                type="checkbox"
                name={name}
                id={name}
                hidden
                checked={accessibility[name as keyof TAcccibility] === true}
                className={`hidden ${name}`}
                onChange={() =>
                  onChangeAccessibility(name as keyof TAcccibility)
                }
              >
                <Label
                  htmlFor={name}
                  className={
                    "flex gap-2 items-center hover:cursor-pointer " + name
                  }
                >
                  {icon}
                  <p className="text-mainGray-800"> {text}</p>
                </Label>
              </Input>
            )}
          />
          <Button
            onClick={restAccessibility}
            className="flex gap-2 items-center hover:cursor-pointer"
          >
            <RestSvg className="w-4 h-4  fill-mainGray-800 stroke-none" />
            <p className="text-mainGray-800 ">אפס הכל</p>
          </Button>
        </div>
      }
      containerClassName="accessibility-container"
      button={{
        props: {
          className:
            "p-2 fixed top-96 left-0 bg-mainWhite-0 z-50 shadow-[0px_2px_4px_1px_#00000026]  ",
          role: "button",
          "aria-label": "Open accessibility tools",
        },
        content: <AccessibilitySvg />,
      }}
    ></Model>
  );
}

const items = [
  {
    _id: "grayscale",
    name: "grayscale",
    text: "גווני אפור",
    icon: <GrayScaleSvg />,
  },
  {
    _id: "invert-contrast",
    name: "invert-contrast",
    text: "ניגודיות גבוהה",
    icon: <InvertContrastSvg />,
  },
  {
    _id: "highlight-links",
    name: "highlight-links",
    text: "הדגשת קישורים",
    icon: <LinkHighlightSvg />,
  },
  {
    _id: "highlight-headers",
    name: "highlight-headers",
    text: "הדגשת כותרות",
    icon: <HeaderHighlightSvg />,
  },
  {
    _id: "stop-animations",
    name: "stop-animations",
    text: "עצירת אנימציות",
    icon: <StopAnimationsSvg />,
  },
];
