import HomeIndex from "@/components/Home/HomeIndex";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Home Page",
    description: "Home Page Description",
    keywords: "Home Page Keywords",
  };
}
export default function HomePage() {
  return <HomeIndex />;
}
