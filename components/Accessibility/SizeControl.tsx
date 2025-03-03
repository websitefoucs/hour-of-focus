import { useEffect, useState } from "react";
import Button from "../UI/Button";
import { ZoomInSvg, ZoomOutSvg } from "../UI/icons/Icons";

export default function FontSizeControl() {
  const [zoom, setZoom] = useState(1);
  useEffect(() => {
    const savedZoom = localStorage.getItem("zoom");
    if (savedZoom) {
      setZoom(+savedZoom);
    }
  }, []);

  const updateFontSize = (dir: number) => {
    setZoom((prev) => {
      const newZoom = +(prev || 1) + dir;
      if (newZoom > 3) return prev;
      if (newZoom < 1) return prev;
      localStorage.setItem("zoom", newZoom.toString());
      return newZoom;
    });
  };

  const zoomClass = `zoom-${zoom}`;

  return (
    <div className={zoomClass + " flex flex-col gap-4"}>
      <Button
        onClick={() => updateFontSize(1)}
        className="flex items-center gap-2 "
      >
        <ZoomInSvg />
        <p className="text-mainGray-800">הגדל טקסט</p>
      </Button>
      <Button
        onClick={() => updateFontSize(-1)}
        className="flex items-center gap-2 text-mainGray-800"
      >
        <ZoomOutSvg />
        <p className="stroke-mainGray-800">הקטן טקסט</p>
      </Button>
    </div>
  );
}
