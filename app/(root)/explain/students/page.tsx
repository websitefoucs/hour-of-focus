import ExplainStudentsIndex from "@/components/Explain/Students/ExplainStudentsIndex";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "הסבר לתלמידים",
  description: "הסבר לתלמידים",
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
export default function ExplainStudentsPage() {
  return <ExplainStudentsIndex />;
}
