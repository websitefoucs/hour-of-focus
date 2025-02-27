import type { Metadata } from "next";
import "./globals.css";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-alegreya",
  subsets: ["hebrew"],
});

export const metadata: Metadata = {
  title: "Hour Of Focus",
  description: "Hour Of Focus",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl">
      <body
        className={`${openSans.variable} antialiased  text-normal`}
      >
        {children}
      </body>
    </html>
  );
}
