import AboutIndex from "@/components/About/AboutIndex";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "אודות",
  description: "אודות",
  category: "about",
  robots: {
    follow: true,
    index: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};
export default function AboutPage() {
  return <AboutIndex />;
}
