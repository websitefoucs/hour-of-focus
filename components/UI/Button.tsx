export const STYLES = {
  full: {
    style:
      "bg-mainOrange-700 text-mainWhite-0 hover:bg-mainOrange-800 rounded-base flex justify-center items-center font-bold text-18 mobile:text-16 font-bold leading-21",
    loading: "bg-mainOrange-800",
  },
  coloredBorder: {
    style:
      "bg-inherit border-2 border-mainOrange-700 text-mainOrange-700 hover:border-mainOrange-800 hover:text-mainOrange-800 rounded-base flex  mobile:text-16  justify-center items-center",
    loading: "shadow-mainOrange-600 text-mainOrange-600",
  },
  whiteBorder: {
    style:
      "border-2 bg-inherit border-mainWhite-0 text-mainWhite-0 hover:border-mainGray-300  hover:text-mainGray-300 rounded-base flex justify-center items-center text-18  mobile:text-16 font-bold leading-21",
    loading: "shadow-mainGray-800 text-mainGray-800",
  },
  borderB: {
    style:
      "font-bold border-b-2 border-mainOrange-700 text-mainOrange-700 hover:text-mainOrange-800 hover:border-mainOrange-800 flex justify-center items-center  mobile:text-16",
    loading: "border-mainOrange-600 text-mainOrange-600",
  },
  arrow: {
    style:
      "font-bold border-b-2 text-normal leading-21 border-mainGray-800 text-mainGray-800 hover:text-mainGray-700 hover:border-mainGray-700 flex  mobile:text-16 justify-center items-center gap-1 w-fit",
    loading: "border-mainGray-800 text-mainGray-800",
  },
  center: {
    style: "flex justify-center items-center mobile:text-16",
    loading: "",
  },
  none: {
    style: "",
    loading: "",
  },
} as const;

export const SIZES = {
  extraSmall: "h-8 w-48",
  small: "h-8 w-32",
  medium: "h-12 w-[18.25rem]",
  large: "h-12 w-60 ",
  long: "h-[2.625rem] w-[20.875rem] leading-21",
  none: "",
} as const;

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
/**
 * Button component that renders a customizable button element.
 *
 * @param {Object} props - The properties object.
 * @param {string} [props.styleMode="none"] - The style mode for the button, which determines the button's appearance.
 * @param {string} [props.styleSize="none"] - The size mode for the button, which determines the button's size.
 * @param {React.ReactNode} props.children - The content to be displayed inside the button.
 * @param {string} [props.className] - Additional class names to apply to the button.
 * @param {boolean} [props.disabled] - If true, the button will be disabled and apply a loading style.
 * @param {Object} props - Additional properties to be passed to the button element.
 *
 * @returns {JSX.Element} The rendered button element.
 */
export default function Button({
  styleMode = "none",
  styleSize = "none",
  children,
  className,
  ...props
}: ButtonProps) {
  const style = ` transition-colors duration-300  ${
    STYLES[styleMode].style
  } ${className} ${SIZES[styleSize]} ${
    props.disabled ? STYLES[styleMode]?.loading : ""
  }`;
  return (
    <button {...props} className={style}>
      {children}
    </button>
  );
}
