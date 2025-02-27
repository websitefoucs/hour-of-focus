import { getAllFaqs } from "@/lib/actions/faq";
import { Metadata } from "next";
import { cache } from "react";



const getFaqs = cache(getAllFaqs);
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `FAQs Page - Updated ${new Date().getFullYear()}`,
    description: "Frequently Asked Questions",
  };
}

export default async function FaqsPage() {
  const faqs = await getFaqs();
  console.log(" faqs:", faqs);
  return (
    <div className="text-center pt-[25%] w-full h-full">

    </div>
  );
}
