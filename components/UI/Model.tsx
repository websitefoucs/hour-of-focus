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
}

export default function Model({ button, model, withOverlay }: Props) {
  const modelRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useModel(modelRef);

  return (
    <div className="relative" ref={modelRef}>
      <Button
        {...button.props}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setIsOpen((prev) => !prev);
        }}
      >
        {button.content}
      </Button>
      {withOverlay && isOpen && <ModelOverlay>{model}</ModelOverlay>}

      {!withOverlay && isOpen && <>{model}</>}
    </div>
  );
}
