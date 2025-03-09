"use client";

import React, { useRef } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css"; // Load Quill styles
import Editor from "./Editor";

const Delta = Quill.import("delta");

// **Main RichTextEditor Component**
const RichTextEditor = () => {
  const quillRef = useRef<Quill | null>(null);

  const saveContent = async () => {
    if (!quillRef.current) return;
    const content = quillRef.current.getContents();
    console.log(" content:", content);

    alert("התוכן נשמר בהצלחה!");
  };

  return (
    <div className="p-4">
      {/* Toolbar */}
      <div className="mb-4 flex space-x-2 bg-gray-100 p-2 rounded">
        <button
          className="px-3 py-1 border rounded bg-blue-500 text-white"
          onClick={() => quillRef.current?.format("bold", true)}
        >
          בולד
        </button>
        <button
          className="px-3 py-1 border rounded bg-blue-500 text-white"
          onClick={() => quillRef.current?.format("header", 1)}
        >
          כותרת 1
        </button>
        <button
          className="px-3 py-1 border rounded bg-blue-500 text-white"
          onClick={() => quillRef.current?.format("header", 2)}
        >
          כותרת 2
        </button>
        <button
          className="px-3 py-1 border rounded bg-blue-500 text-white"
          onClick={() => quillRef.current?.format("underline", true)}
        >
          קו תחתון
        </button>
        <button
          className="px-3 py-1 border rounded bg-blue-500 text-white"
          onClick={() => {
            const url = prompt("הכנס קישור:");
            if (url) quillRef.current?.format("link", url);
          }}
        >
          הוסף קישור
        </button>
      </div>

      {/* Text Editor */}
      <Editor
        ref={quillRef}
        defaultValue={new Delta([{ insert: "שלום עולם!" }])}
      />

      {/* Controls & Save */}
      <div className="mt-4 space-y-2">
        <button
          className="px-3 py-1 border rounded bg-green-500 text-white"
          onClick={saveContent}
        >
          שמור
        </button>
      </div>
    </div>
  );
};

export default RichTextEditor;
