"use client";

// import React, { useRef } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import Editor from "./Editor";
// import { useFormStatus } from "react-dom";

// const Delta = Quill.import("delta");

interface Props {
  quillRef: React.RefObject<Quill | null>;
}

export default function RichTextEditor({ quillRef }: Props) {
  // const { pending, data } = useFormStatus();


  // const saveContent = async () => {
  //   if (!quillRef.current) return;
  //   const content = quillRef.current.getContents();
  //   console.log(" content:", content.ops);

  //   alert("התוכן נשמר בהצלחה!");
  // };

  return (
    <div className="p-4">
      <Editor ref={quillRef} />
    </div>
  );
}
