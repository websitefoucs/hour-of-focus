export const STYLES = {
  full: {
    style:
      "bg-mainOrange-700 text-mainWhite-0 hover:bg-mainOrange-800 rounded-base flex justify-center items-center font-bold",
    loading: "bg-mainOrange-800",
  },
  coloredBorder: {
    style:
      "bg-inherit border-2 border-mainOrange-700 text-mainOrange-700 hover:shadow-mainOrange-800 hover:text-mainOrange-800 rounded-base flex  justify-center items-center",
    loading: "shadow-mainOrange-600 text-mainOrange-600",
  },
  whiteBorder: {
    style:
      "border-2 bg-inherit border-mainWhite-0 text-mainWhite-0 hover:border-mainGray-300  hover:text-mainGray-300 rounded-base flex justify-center items-center",
    loading: "shadow-mainGray-800 text-mainGray-800",
  },
  borderB: {
    style:
      "font-bold border-b-2 border-mainOrange-700 text-mainOrange-700 hover:text-mainOrange-800 hover:border-mainOrange-800 flex justify-center items-center",
    loading: "border-mainOrange-600 text-mainOrange-600",
  },
  arrow: {
    style:
      "font-bold border-b-2 text-normal leading-21 border-mainGray-800 text-mainGray-800 hover:text-mainGray-700 hover:border-mainGray-700 flex  justify-center items-center gap-1 w-fit",
    loading: "border-mainGray-800 text-mainGray-800",
  },
  center: {
    style: "flex justify-center items-center",
    loading: "",
  },
  none: {
    style: "",
    loading: "",
  },
} as const;


