"use client";

import { useScroll } from "@/hooks/useScroll";
import { Fragment, useRef } from "react";
import Button from "./Button";
import { DirectionSvg } from "./icons/Icons";

interface ItemsScrollProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  listStyle?: string;
}

export default function ItemsScroll<T>({
  items,
  renderItem,
  listStyle,
}: ItemsScrollProps<T>) {
  const listRef = useRef<HTMLUListElement | null>(null);
  const [scrollBy] = useScroll(listRef);

  return (
    <div className="flex items-center justify-center text-center p-4 ">
      <Button onClick={() => scrollBy(1)}>
        <DirectionSvg className="-rotate-90 h-8 w-8" />
      </Button>
      <ul ref={listRef} className={listStyle}>
        {items.map((item, index) => (
          <Fragment key={index}>{renderItem(item)}</Fragment>
        ))}
      </ul>
      <Button onClick={() => scrollBy(-1)}>
        <DirectionSvg className="rotate-90 h-8 w-8 " />
      </Button>
    </div>
  );
}
