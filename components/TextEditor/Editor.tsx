"use client";
import Quill, { Delta } from "quill";
import React, { forwardRef, useEffect, useRef } from "react";

// Editor is an uncontrolled React component
interface EditorProps {
  defaultValue: Delta;
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
      
    });

    quill.root.setAttribute("dir", "rtl");
    ref.current = quill;

    if (defaultValueRef.current) {
      quill.setContents(defaultValueRef.current);
    }

    return () => {
      ref.current = null;
      container.innerHTML = "";
    };
  }, [ref]);

  return <div ref={containerRef}></div>;
});

Editor.displayName = "Editor";

export default Editor;
