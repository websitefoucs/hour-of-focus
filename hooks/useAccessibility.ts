import { TAcccibility } from "@/types/app.type";
import { useState } from "react";

export const useAccessibility = () => {
  const MIN_ZOOM = 1;
  const MAX_ZOOM = 3;

  const [accessibility, setAccessibility] = useState({
    zoom: 1,
    grayscale: false,
    "invert-contrast": false,
    "highlight-links": false,
    "highlight-headers": false,
    "stop-animations": false,
  });

  const onZoomChange = (dir: number) => {
    setAccessibility((prev) => {
      const { zoom } = prev;
      const newZoom = Number(zoom || MIN_ZOOM) + dir;
      if (newZoom > MAX_ZOOM) return prev;
      if (newZoom < MIN_ZOOM) return prev;
      return { ...prev, zoom: newZoom };
    });
  };

  const onChangeAccessibility = (name: keyof TAcccibility) => {
    setAccessibility((prev) => {
      return { ...prev, [name]: !prev[name] };
    });
  };

  return { accessibility, onZoomChange, onChangeAccessibility };
};
