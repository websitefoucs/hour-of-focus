import FaqIndex from "@/components/Admin/FAQ/FaqIndex";
import { getAllFaqs } from "@/lib/actions/faq";

export default async function FaqsPage() {
  const faqs = await getAllFaqs();
  return (
    <>
      <FaqIndex faqs={faqs} />
    </>
  );
}
