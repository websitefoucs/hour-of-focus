"use client";
import Quill, { Delta } from "quill";
import React, { forwardRef, useEffect, useRef } from "react";

interface EditorProps {
  defaultValue?: Delta;
}

const Editor = forwardRef<Quill, EditorProps>(({ defaultValue }, ref) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const defaultValueRef = useRef(defaultValue);

  useEffect(() => {
    if (!containerRef.current) return;
    if (!ref) return;
    if (typeof ref === "function") return;

    const container = containerRef.current;
    const editorContainer = container?.appendChild(
      container.ownerDocument.createElement("div")
    );
    if (!editorContainer) return;

    editorContainer.className = "font-sans";
    const quill = new Quill(editorContainer, {
      theme: "snow",
      placeholder: "הקלד כאן...",
      modules: {
        toolbar: [
          [{ 'size': [] }],
          ["bold", "italic", "underline"],
          [{ 'color': [] }],
          ["link"],
        ],
      },
    });

    ref.current = quill;

    if (defaultValueRef.current) {
      quill.setContents(defaultValueRef.current);
    }

    const toolbar = container.querySelector(".ql-toolbar");
    if (toolbar) {
      const buttonTitles = {
        "ql-bold": "הדגש (Ctrl+B)",
        "ql-italic": "ציטוט (Ctrl+I)",
        "ql-underline": "קו תחתון (Ctrl+U)",
        "ql-header": "כותרת",
        "ql-link": "קישור",
        "ql-color": "צבע טקסט",
        "ql-size": "גודל פונט",
      };

      Object.keys(buttonTitles).forEach((className) => {
        const button = toolbar.querySelector(`.${className}`);
        if (button) {
          (button as HTMLElement).setAttribute(
            "title",
            buttonTitles[className as keyof typeof buttonTitles]
          );
        }
      });
    }
    return () => {
      ref.current = null;
      container.innerHTML = "";
    };
  }, [ref]);

  return <div className="text-16" ref={containerRef}></div>;
});

Editor.displayName = "Editor";

export default Editor;
