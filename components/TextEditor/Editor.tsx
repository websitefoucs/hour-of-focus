"use client";
import { TTextBlock } from "@/types/app.type";
import Quill from "quill";
import React, { forwardRef, useEffect, useRef } from "react";

interface EditorProps {
  delta?: TTextBlock[];
}

const Editor = forwardRef<Quill, EditorProps>(({ delta }, ref) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const deltaRef = useRef(delta);

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

    // const toolbar = [
    //   [{ size: [] }],
    //   ["bold", "italic", "underline"],
    //   [
    //     {
    //       color: [
    //         "#e7e7e7",
    //         "#888888",
    //         "#6d6d6d",
    //         "#5d5d5d",
    //         "#292929",
    //         "#454545",
    //         "#fff7ed",
    //         "#ffeed5",
    //         "#f6f6f6",
    //         "#ea5d0c",
    //         "#cf4a0d",
    //         "#9a3712",
    //         "#f3c71c",
    //         "#dba80e",
    //       ],
    //     },
    //   ],
    //   ["link"],
    // ];
    const quill = new Quill(editorContainer, {
      theme: "snow",
      placeholder: "הקלד כאן...",
      modules: {
        toolbar: [
          [{ size: [] }],
          ["bold", "italic", "underline"],
          [
            {
              color: [
                "#e7e7e7",
                "#888888",
                "#6d6d6d",
                "#5d5d5d",
                "#292929",
                "#454545",
                "#fff7ed",
                "#ffeed5",
                "#f6f6f6",
                "#ea5d0c",
                "#cf4a0d",
                "#9a3712",
                "#f3c71c",
                "#dba80e",
              ],
            },
          ],
          ["link"],
        ],
      },
    });

    ref.current = quill;

    if (deltaRef.current) {
      quill.setContents(deltaRef.current);
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

  return <div className="text-16 " ref={containerRef}></div>;
});

Editor.displayName = "Editor";

export default Editor;
