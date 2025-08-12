import ContactUsIndex from "@/components/Contact/ContactUsIndex";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "יצירת קשר",
  description: "צור קשר עם האתר",
  category: "contact us",
  robots: {
    follow: true,
    index: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};
export default function page() {
  return <ContactUsIndex />;
}
