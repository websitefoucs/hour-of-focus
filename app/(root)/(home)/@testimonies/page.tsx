//Components
import Testimonies from "@/components/Home/Testimonies/Testimonies";
//Actions
import { getTestimonies } from "@/lib/actions/testimonies";

export default async function HomeTestimoniesPage() {
  const testimonies = await getTestimonies(false);
  return <Testimonies testimonies={testimonies} />;
}
