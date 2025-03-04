import AdminArticlesIndex from "@/components/Admin/AdminArticles/AdminArticlesIndex";
import { getArticles } from "@/lib/actions/articles";

export default async function AdminArticlesPage() {
  const articles = await getArticles(true);
  return <AdminArticlesIndex articles={articles} />;
}
