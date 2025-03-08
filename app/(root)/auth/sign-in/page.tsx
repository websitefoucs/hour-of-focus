import AuthIndex from "@/components/Auth/AuthIndex";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "התחברות",
  description: "התחברות",
  category: "auth",
  robots: {
    follow: true,
    index: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};
export default function SignInPage() {
  return <AuthIndex  />;
}
