"use client";

import { useState } from "react";
import Button from "./Button";
import { DirectionSvg } from "./icons/Icons";

interface ItemsScrollProps<T> {
  items: T[];
  renderItem: (item: T, isFading: boolean) => React.ReactNode;
}

export default function ItemsScroll<T>({
  items,
  renderItem,
}: ItemsScrollProps<T>) {
  const [currentItem, setCurrentItem] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const onClick = (index: number) => {
    setIsFading(true);

    setTimeout(() => {
      setCurrentItem((prev) => {
        const idx = prev + index;
        if (idx < 0) return items.length - 1;
        if (idx > items.length - 1) return 0;
        return prev + index;
      });

      setIsFading(false);
    }, 300);
  };

  return (
    <div className="flex items-center justify-between text-center p-4 mobile:w-full">
      <Button onClick={() => onClick(-1)}>
        <DirectionSvg className="-rotate-90 h-16 w-16 mobile:h-10 mobile:w-10" />
      </Button>

      <div
        className={`transition-opacity duration-300 ${
          isFading ? "opacity-0" : "opacity-100"
        }`}
      >
        {renderItem(items[currentItem], isFading)}
      </div>

      <Button onClick={() => onClick(1)}>
        <DirectionSvg className="rotate-90 h-16 w-16 mobile:h-10 mobile:w-10" />
      </Button>
    </div>
  );
}
