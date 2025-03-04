import FaqAdminIndex from "@/components/Admin/AdminFaqs/FaqAdminIndex";
import { getFaqs } from "@/lib/actions/faqs";

export default async function FaqsPage() {
  const faqs = await getFaqs({ isFull: true });
  return <FaqAdminIndex faqs={faqs} />;
}
