import { memo, FC } from "react";
import Button from "../UI/Button";
import { ZoomInSvg, ZoomOutSvg } from "../UI/Icons";

interface FontSizeControlProps {
  onZoomChange: (zoom: number) => void;
  zoom: number;
}

const FontSizeControl: FC<FontSizeControlProps> = ({ onZoomChange, zoom }) => {
  const zoomClass = `zoom-${zoom}`;

  return (
    <div className={zoomClass + " flex flex-col gap-2"}>
      <Button
        onClick={() => onZoomChange(1)}
        className="flex items-center gap-2 "
      >
        <ZoomInSvg />
        <p className="text-mainGray-800">הגדל טקסט</p>
      </Button>
      <Button
        onClick={() => onZoomChange(-1)}
        className="flex items-center gap-2 text-mainGray-800"
      >
        <ZoomOutSvg />
        <p className="stroke-mainGray-800">הקטן טקסט</p>
      </Button>
    </div>
  );
};

export default memo(FontSizeControl, (prevProps, nextProps) => {
  return prevProps.zoom === nextProps.zoom;
});
