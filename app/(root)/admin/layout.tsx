import DashboardNav from "@/components/Admin/Dashboard/DashboardNav";

interface Props {
  children: React.ReactNode;
}
export default function AdminLayout({ children }: Props) {
  return (
    <section className="w-full min-h-screen p-8 px-16 gap-8 flex flex-col items-center">
      <DashboardNav />
      {children}
    </section>
  );
}
