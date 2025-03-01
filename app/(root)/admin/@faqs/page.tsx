import FaqAdminIndex from "@/components/Admin/FAQ/FaqAdminIndex";
import { getFaqs } from "@/lib/actions/faq";

export default async function FaqsPage() {
  const faqs = await getFaqs({});
  return (
    <>
      <FaqAdminIndex faqs={faqs} />
    </>
  );
}
