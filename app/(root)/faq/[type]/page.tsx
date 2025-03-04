import FaqIndex from "@/components/Faq/FaqIndex";
import { getFaqs } from "@/lib/actions/faqs";
import { TFaqType } from "@/types/faqs";
import { Metadata } from "next";
export const dynamic = "force-static";
type Params = Promise<{ type: TFaqType }>;

interface FaqPageProps {
  params: Params;
}

export async function generateStaticParams() {
  return [{ type: "students" }];
}
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `FAQs Page - Updated ${new Date().getFullYear()}`,
    description: "Frequently Asked Questions",
  };
}

export default async function FaqsPage({ params }: FaqPageProps) {
  const { type } = await params;
  const faqs = await getFaqs({ faqType: type, isFull: false });

  return <FaqIndex type={type} faqs={faqs} />;
}
