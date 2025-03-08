import FaqIndex from "@/components/Faq/FaqIndex";
import { getFaqs } from "@/lib/actions/faqs";
import { TFaqType } from "@/types/faqs";
import { Metadata } from "next";
export const dynamic = "force-static";
type Params = Promise<{ type: TFaqType }>;

interface FaqPageProps {
  params: Params;
}

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

export async function generateStaticParams() {
  return [{ type: "students" }];
}

export default async function FaqsPage({ params }: FaqPageProps) {
  const { type } = await params;
  const faqs = await getFaqs({ faqType: type, isFull: false });

  return <FaqIndex type={type} faqs={faqs} />;
}
