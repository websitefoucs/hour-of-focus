import FaqAdminIndex from "@/components/Admin/AdminFaqs/AdminFaqsIndex";
import { getFaqs } from "@/lib/actions/faqs";

export default async function FaqsPage() {
  const faqs = await getFaqs({ isFull: true, faqType: "volunteers" });
  return <FaqAdminIndex faqs={faqs} />;
}
