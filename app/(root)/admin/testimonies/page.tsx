import AdminTestimoniesIndex from "@/components/Admin/AdminTestimonies/AdminTestimoniesIndex";
import { getTestimonies } from "@/lib/actions/testimonies";

export default async function AdminTestimoniesPage() {
  const testimonies = await getTestimonies(true);
  console.log(" testimonies:", testimonies);
  return <AdminTestimoniesIndex testimonies={testimonies} />;
}
