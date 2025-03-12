//React
import React, { JSX } from "react";
//Types
import { TTextBlock } from "@/types/app.type";

/**
 * Parses a Quill Delta object into React components.
 *
 * @param {TTextBlock[]} delta - The Quill Delta object to parse.
 *
 * @returns {React.ReactNode} The parsed React components.
 */
const parseQuillDelta = (delta?: TTextBlock[]) => {
  if (!delta) return null;
  return delta.map((block, index) => {
    let content: React.ReactNode = block.insert;

    if (block?.attributes) {
      if (block?.attributes?.bold)
        content = <strong key={index}>{content}</strong>;
      if (block.attributes.italic) content = <em key={index}>{content}</em>;
      if (block.attributes.underline) content = <u key={index}>{content}</u>;
      if (block.attributes.color)
        content = (
          <span key={index} style={{ color: block.attributes.color }}>
            {content}
          </span>
        );
      if (block.attributes.size) {
        const sizeMap = { huge: "h1", large: "h2", small: "h4" };
        const Tag = sizeMap[
          block.attributes.size
        ] as keyof JSX.IntrinsicElements;
        content = <Tag key={index}>{content}</Tag>;
      }
      if (block.attributes.link)
        content = (
          <a key={index} href={block.attributes.link}>
            {content}
          </a>
        );
    }

    return <React.Fragment key={index}>{content}</React.Fragment>;
  });
};

export const RichTextRender = ({ delta }: { delta?: TTextBlock[] }) => {
  return <>{parseQuillDelta(delta)}</>;
};
