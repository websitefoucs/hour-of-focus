import Link, { LinkProps } from "next/link";

const STYLES = {
  full: {
    style:
      "bg-mainOrange-700 text-white-0 hover:bg-mainOrange-800 rounded-base flex justify-center items-center font-bold",
    loading: "bg-mainOrange-800",
  },
  coloredBorder: {
    style:
      "bg-inherit shadow-border shadow-mainOrange-700 text-mainOrange-700 hover:shadow-mainOrange-800 hover:text-mainOrange-800 rounded-base flex  justify-center items-center",
    loading: "shadow-mainOrange-600 text-mainOrange-600",
  },
  grayBorder: {
    style:
      "border-2 bg-inherit  border-white-0 text-white-0 hover:border-mainGray-600 text-mainGray-600 rounded-base flex  justify-center items-center",
    loading: "shadow-mainGray-800 text-mainGray-800",
  },
  borderB: {
    style:
      "font-bold border-b-2 border-mainOrange-700 text-mainOrange-700 hover:text-mainOrange-800 hover:border-mainOrange-800 flex  justify-center items-center",
    loading: "border-mainOrange-600 text-mainOrange-600",
  },
  arrow: {
    style:
      "font-bold border-b-2 text-normal leading-21 border-mainGray-800 text-mainGray-800 hover:text-mainGray-700 hover:border-mainGray-700 flex  justify-center items-center gap-1 w-fit",
    loading: "border-mainGray-800 text-mainGray-800",
  },
  none: {
    style: "",
    loading: "",
  },
} as const;

const SIZES = {
  extraSmall: "h-8 w-48",
  small: "h-8 w-32",
  medium: "h-12 w-[18.25rem]",
  large: "h-12 w-60 ",
  long: "h-[2.625rem] w-[20.875rem] leading-21",
  none: "",
} as const;

interface Props extends LinkProps {
  styleMode?:
    | "full"
    | "coloredBorder"
    | "grayBorder"
    | "borderB"
    | "arrow"
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
  const style =
    className +
    ` ${STYLES[styleMode].style} ${SIZES[styleSize]} ${
      isHighLighted ? "font-semibold" : ""
    } disabled:opacity-50 disabled:cursor-not-allowed`;
  return (
    <Link aria-disabled {...props} className={style}>
      {children}
    </Link>
  );
}
