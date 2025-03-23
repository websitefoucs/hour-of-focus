import DashboardNav from "@/components/Admin/Dashboard/DashboardNav";

interface Props {
  children: React.ReactNode;
}
export default function AdminLayout({ children }: Props) {
  return (
    <section className="w-full min-h-screen flex flex-col md:flex-row gap-4 has-[.open]:pointer-events-none">
      <DashboardNav />
      {children}
    </section>
  );
}
