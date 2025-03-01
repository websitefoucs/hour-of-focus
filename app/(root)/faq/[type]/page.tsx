import FaqIndex from "@/components/Faq/FaqIndex";
import { getFaqs } from "@/lib/actions/faq";
import { TFaqType } from "@/types/faq";
import { Metadata } from "next";
import { cache } from "react";

type Params = Promise<{ type: TFaqType }>;

interface FaqPageProps {
  params: Params;
}

export async function generateStaticParams() {
  return [{ type: "students" }];
}
const cacheGetFaqs = cache(getFaqs);
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `FAQs Page - Updated ${new Date().getFullYear()}`,
    description: "Frequently Asked Questions",
  };
}

export default async function FaqsPage({ params }: FaqPageProps) {

  const { type } = await params;
  const faqs = await cacheGetFaqs({ faqType: type, isFull: false });
  
  return <FaqIndex type={type} faqs={faqs} />;
}
