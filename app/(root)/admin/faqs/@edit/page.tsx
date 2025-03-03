"use server";
//Components
import FaqEditIndex from "@/components/Admin/FAQ/Edit/FaqEditIndex";

type SearchParams = Promise<{ [key: string]: string | undefined | "faq" }>;
interface EditPageProps {
  searchParams: SearchParams;
}
export default async function EditPage({ searchParams }: EditPageProps) {
  const { id, type } = await searchParams;

  switch (type) {
    case "faq":
      return <FaqEditIndex id={id} />;
    default:
      return <div>edit</div>;
  }
}
