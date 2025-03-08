import ExplainVolunteersIndex from "@/components/Explain/Volunteers/ExplainVolunteersIndex";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "הסבר למתנדבים",
  description: "הסבר למתנדבים",
  category: "explain",
  robots: {
    follow: true,
    index: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};
export default function ExplainVolunteersPage() {
  return <ExplainVolunteersIndex />;
}
