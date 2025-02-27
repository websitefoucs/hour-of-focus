const STYLES = {
  full: {
    style:
      "bg-mainOrange-700 text-white-0 hover:bg-mainOrange-800 rounded-base",
    loading: "bg-mainOrange-800",
  },
  coloredBorder: {
    style:
      "bg-inherit shadow-border shadow-mainOrange-700 text-mainOrange-700 hover:shadow-mainOrange-800 hover:text-mainOrange-700",
    loading: "shadow-mainOrange-600 text-mainOrange-600",
  },
  grayBorder: {
    style:
      "bg-inherit shadow-border shadow-white-0 text-white-0 hover:shadow-mainGray-600 text-mainGray-600",
    loading: "shadow-mainGray-800 text-mainGray-800",
  },
  redirect: {
    style:
      "border-b border-mainOrange-700 text-mainOrange-700 hover:text-mainOrange-800 hover:border-mainOrange-800",
    loading: "border-mainOrange-600 text-mainOrange-600",
  },
  none: {
    style: "",
    loading: "",
  },
} as const;

const SIZES = {
  small: " py-[0.625rem] px-8",
  medium: "h-[2.75rem] w-[22.125rem]",
  large: "h-12 w-60",
  none: "",
} as const;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  styleMode?: "full" | "coloredBorder" | "grayBorder" | "none";
  styleSize?: "small" | "medium" | "large" | "none";
  children?: React.ReactNode;
  className?: string;
}

export default function Button({
  styleMode = "none",
  styleSize = "none",
  children,
  className,
  ...props
}: ButtonProps) {
  const style = className
    ? className
    : `flex self-center justify-center items-center transition-colors duration-300 ${
        STYLES[styleMode].style
      } ${SIZES[styleSize]} ${
        props.disabled ? STYLES[styleMode]?.loading : ""
      }`;
  return (
    <button {...props} className={style}>
      {children}
    </button>
  );
}
