"use client";
import { useModel } from "@/hooks/useModel";
import { useRef } from "react";
import Button from "./Button";
import ModelOverlay from "./ModelOverlay";

interface Props {
  button: {
    props: React.ButtonHTMLAttributes<HTMLButtonElement>;
    content: React.ReactNode;
  };
  model: React.ReactNode;
  withOverlay?: boolean;
  containerClassName?: string;
}

export default function Model({
  button,
  model,
  withOverlay,
  containerClassName,
}: Props) {
  const modelRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useModel(modelRef);

  return (
    <div ref={modelRef} className={"relative " + containerClassName}>
      <Button
        {...button.props}
        className={button.props.className + " " + (isOpen ? "open" : "")}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setIsOpen((prev) => !prev);
        }}
      >
        {button.content}
      </Button>
      {withOverlay && isOpen && (
        <ModelOverlay>
          <div ref={modelRef}>{model}</div>
        </ModelOverlay>
      )}

      {!withOverlay && isOpen && <>{model}</>}
    </div>
  );
}
