import HomeIndex from "@/components/Home/HomeIndex";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "שעה של פוקוס - למען המפונים מהדרום והצפון",
  description:
    "פרויקט הפועל מתוך רוח של ערבות הדדית, במטרה להעניק תמיכה חינוכית ולימודית לתלמידים המפונים, לסייע בנחיתה רכה לאלו שחזרו לבתיהם, ולאפשר לכל תלמיד שעה של פוקוס",
  category: "home",
  robots: {
    follow: true,
    index: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};
export default function HomePage() {
  return <HomeIndex />;
}
