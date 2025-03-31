/**
 * AdminFaqSwitch is a client component is responsible for rendering a switcher between different FAQ types
 * (e.g., "students" and "volunteers") in the admin panel. It determines the current FAQ
 * type based on the URL pathname and passes the appropriate type and links to the `FaqSwitch` component.
 *
 * @returns {JSX.Element} The rendered `FaqSwitch` component with the appropriate type and links.
 *
 * @remarks
 * - This component uses the `usePathname` hook from Next.js to extract the current URL pathname.
 * - The FAQ type is determined by extracting the fourth segment of the pathname.
 * - If no valid FAQ type is found in the pathname, it defaults to "students".
 *
 * @dependencies
 * - `FaqSwitch`: A child component that handles the actual switching logic.
 * - `usePathname`: A Next.js hook for accessing the current URL pathname.
 * - `ADMIN_FAQS_STUDENTS_PAGE_LINK` and `ADMIN_FAQS_VOLUNTEERS_PAGE_LINK`: Constants defining the links for each FAQ type.
 *
 * @see {@link FaqSwitch}
 * @see {@link ADMIN_FAQS_STUDENTS_PAGE_LINK}
 * @see {@link ADMIN_FAQS_VOLUNTEERS_PAGE_LINK}
 */
"use client";

//Components
import FaqSwitch from "@/components/Faq/FaqSwitch";
//Links
import {
  ADMIN_FAQS_STUDENTS_PAGE_LINK,
  ADMIN_FAQS_VOLUNTEERS_PAGE_LINK,
} from "@/constants/links";
//Types
import { TFaqType } from "@/types/faqs";
//Next
import { usePathname } from "next/navigation";

export default function AdminFaqSwitch() {
  const pathname = usePathname();

  const faqType = pathname.split("/").at(3) || "students";
  return (
    <div className="w-fit h-auto place-self-center">
      <FaqSwitch
        type={faqType as TFaqType}
        links={{
          students: ADMIN_FAQS_STUDENTS_PAGE_LINK,
          volunteers: ADMIN_FAQS_VOLUNTEERS_PAGE_LINK,
        }}
      />
    </div>
  );
}
