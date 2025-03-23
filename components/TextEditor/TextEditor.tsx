
import Quill from "quill";
import "quill/dist/quill.snow.css";
import Editor from "./Editor";
import { TTextBlock } from "@/types/app.type";

interface Props {
  quillRef: React.RefObject<Quill | null>;
  delta?: TTextBlock[];
}

export default function RichTextEditor({ quillRef, delta }: Props) {
  return (
    <div className="p-4 h-full">
      <Editor ref={quillRef} delta={delta} />
    </div>
  );
}
