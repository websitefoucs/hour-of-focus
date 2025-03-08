import HomeIndex from "@/components/Home/HomeIndex";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "דף הבית",
  description: "בית",
  category: "home",
  robots: {
    follow: true,
    index: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};
export default function HomePage() {
  return <HomeIndex />;
}
