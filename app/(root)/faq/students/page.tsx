import FaqIndex from "@/components/Faq/FaqIndex";
import { getFaqs } from "@/lib/actions/faqs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `שאלות נפוצות - עודכן ב:${new Date().getFullYear()}`,
  description: "  שאלות נפוצות של תלמידים והורים",
  robots: {
    follow: true,
    index: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default async function FaqsPage() {
  const faqs = await getFaqs({ faqType: "students", isFull: false });

  return <FaqIndex type={"students"} faqs={faqs} />;
}
