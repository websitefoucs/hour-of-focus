import FaqIndex from "@/components/Faq/FaqIndex";
import { getAllFaqs } from "@/lib/actions/faq";
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
const getFaqs = cache(getAllFaqs);
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `FAQs Page - Updated ${new Date().getFullYear()}`,
    description: "Frequently Asked Questions",
  };
}

export default async function FaqsPage({ params }: FaqPageProps) {
  const faqs = await getFaqs();
  const { type } = await params;
  return <FaqIndex type={type} faqs={faqs} />;
}
