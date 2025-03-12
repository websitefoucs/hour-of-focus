//Components
import FaqIndex from "@/components/Faq/FaqIndex";
//Actions
import { getFaqs } from "@/lib/actions/faqs";
//Types
import { Metadata } from "next";
//React
import { cache } from "react";

export const metadata: Metadata = {
  title: `שאלות נפוצות - עודכן ב:${new Date().getFullYear()}`,
  description: "שאלות נפוצות",
  robots: {
    follow: true,
    index: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};
const cachedGetFaqs = cache(getFaqs);

export default async function FaqsPage() {
  const faqs = await cachedGetFaqs({ faqType: "volunteers", isFull: false });
  return <FaqIndex type={"volunteers"} faqs={faqs} />;
}
