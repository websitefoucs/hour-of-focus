import FaqAdminIndex from "@/components/Admin/FAQ/FaqAdminIndex";
import { getAllFaqs } from "@/lib/actions/faq";

export default async function FaqsPage() {
  const faqs = await getAllFaqs();
  return (
    <>
      <FaqAdminIndex faqs={faqs} />
    </>
  );
}
