import { SIZES, STYLES } from "@/constants/Styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  styleMode?:
    | "full"
    | "coloredBorder"
    | "whiteBorder"
    | "borderB"
    | "arrow"
    | "center"
    | "none";
  styleSize?: "small" | "medium" | "large" | "long" | "none";
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
