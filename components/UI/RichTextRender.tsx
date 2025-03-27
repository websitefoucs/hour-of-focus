//React
import React, { JSX } from "react";
//Types
import { TTextBlock } from "@/types/app.type";
import LinkCmp from "./LinkCmp";

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
          <LinkCmp className="sm:text-16 underline hover:text-mainOrange-700 transition-all duration-200" key={index} href={block.attributes.link}>
            {content}
          </LinkCmp>
        );
    }

    return <React.Fragment key={index}>{content}</React.Fragment>;
  });
};

export const RichTextRender = ({ delta }: { delta?: TTextBlock[] }) => {
  return <>{parseQuillDelta(delta)}</>;
};
