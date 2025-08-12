//Components
import Testimonies from "@/components/Home/Testimonies/Testimonies";
//Actions
import { getTestimonies } from "@/lib/actions/testimonies";

export default async function HomeTestimoniesPage() {
  const testimonies = await getTestimonies(false);
  console.log("🚀 ~ HomeTestimoniesPage ~ testimonies:", testimonies)
  return <Testimonies testimonies={testimonies} />;
}
