import AdminFaqSwitch from "@/components/Admin/AdminFaqs/AdminFaqSwitch";

interface FAQAdminLayoutProps {
  children: React.ReactNode;
}
export default function FAQAdminLayout({ children }: FAQAdminLayoutProps) {
  return <div className="px-sides md:pl-8 w-full pb-gaps py-sides flex flex-col">
    <AdminFaqSwitch/>
    {children}
  </div>;
}
