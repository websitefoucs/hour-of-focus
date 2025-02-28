import { table } from "console";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: {
          0: "#ffffff",
          50: "#fff7ed",
          100: "#ffeed5",
        },
        mainOrange: {
          600: "#ea5d0c",
          700: "#cf4a0d",
          800: "#9a3712",
        },

        mainGold: {
          400: "#f3c71c",
          500: "#dba80e",
        },
        mainGray: {
          400: "#888888",
          500: "#6d6d6d",
          600: "#5d5d5d",
          700: "#292929",
          800: "#454545",
        },
        imageOverlay: " rgba(90, 90, 90, 0.6)",
        // background: "var(--background)",
        // foreground: "var(--foreground)",
      },
      fontSize: {
        "1xl": "2.25rem",
        lg: "2rem",
        xmd: "1.5rem",
        md: "1.25rem",
        normal: "1.125rem",
        sm: "0.875rem",
        xl: "4.325rem",
        "2xl": "2.75rem",
      },
      screens: {
        medium: { max: "1200px" },
        mobile: { max: "830px" },
        "mobile-small": { max: "400px" },
      },

      borderRadius: {
        base: "4px",
      },
      boxShadow: {
        border: "0 0 0 1px rgba(0, 0, 0, 0.2)",
      },
      lineHeight: {
        21: "1.35rem",
        28: "1.8rem",
        30: "1.9125rem",
        34: "2.125rem",
        40: "2.55rem",
        42: "2.625rem",
      },
    },
  },
  safelist: ["text-xs", "text-sm", "text-base", "text-lg", "text-xl"],
  plugins: [
    function ({
      addVariant,
    }: {
      addVariant: (name: string, value: string) => void;
    }) {
      addVariant("highlight-links", "body:has(#highlight-links:checked) &");
      addVariant("highlight-headers", "body:has(#highlight-headers:checked) &");
      addVariant("stop-animations", "body:has(#stop-animations:checked) &");
      addVariant("grayscale", "body:has(#grayscale:checked) &");
      addVariant("invertContrast", "body:has(#invertContrast:checked) &");
    },
    function ({
      addUtilities,
    }: {
      addUtilities: (
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        utilities: Record<string, any>,
        options?: {
          variants?: string[];
          respectPrefix?: boolean;
          respectImportant?: boolean;
        }
      ) => void;
    }) {
      addUtilities({
        ".scrollbar-hidden": {
          "scrollbar-width": "none",
          "-ms-overflow-style": "none",
        },
        ".scrollbar-hidden::-webkit-scrollbar": {
          display: "none",
        },
      });
    },
  ],
} satisfies Config;
