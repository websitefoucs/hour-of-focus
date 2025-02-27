import { permanentRedirect } from "next/navigation";

export default function FaqRedirectPage() {
  permanentRedirect("/faq/students");
}
