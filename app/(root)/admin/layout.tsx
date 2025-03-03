import DashboardNav from "@/components/Admin/Dashboard/DashboardNav";

interface Props {
  children: React.ReactNode;
}
export default function AdminLayout({ children }: Props) {
  return (
    <section className="w-full min-h-screen p-4 flex flex-col items-center">
      <DashboardNav />
      <div className="flex">{children}</div>
    </section>
  );
}
