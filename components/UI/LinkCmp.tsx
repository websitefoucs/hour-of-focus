import { SIZES, STYLES } from "@/constants/Styles";
import Link, { LinkProps } from "next/link";

interface Props extends LinkProps {
  styleMode?:
    | "full"
    | "coloredBorder"
    | "whiteBorder"
    | "borderB"
    | "arrow"
    | "center"
    | "none";
  styleSize?: "small" | "medium" | "large" | "long" | "none";
  isHighLighted?: boolean;
  children?: React.ReactNode;
  className?: string;
}

export default function LinkCmp({
  styleMode = "none",
  styleSize = "none",
  isHighLighted,
  children,
  className,
  ...props
}: Props) {
  const style = `${className} ${STYLES[styleMode].style} ${SIZES[styleSize]} ${
    isHighLighted ? "font-bold" : ""
  } disabled:opacity-50 disabled:cursor-not-allowed`;
  return (
    <Link aria-disabled {...props} className={style}>
      {children}
    </Link>
  );
}
