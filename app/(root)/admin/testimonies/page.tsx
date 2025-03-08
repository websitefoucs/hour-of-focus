import AdminTestimoniesIndex from "@/components/Admin/AdminTestimonies/AdminTestimoniesIndex";
import { getTestimonies } from "@/lib/actions/testimonies";

export default async function AdminTestimoniesPage() {
  const testimonies = await getTestimonies(true);
  return <AdminTestimoniesIndex testimonies={testimonies} />;
}
