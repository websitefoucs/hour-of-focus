interface Props {
  faqs: React.ReactNode;
  edit: React.ReactNode;
}
export default function AdminLayout({ faqs, edit }: Props) {
  return (
    <section className="grid grid-cols-2 grid-rows-2 w-full min-h-screen gap-4 p-4 ">
      {faqs}
      {edit}
    </section>
  );
}
