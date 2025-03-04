import ItemList from "@/components/UI/ItemList";

import { TArticle } from "@/types/articles.type";
import AdminArticlePreview from "./AdminArticlePreview";

interface AdminArticlesListProps {
  articles: TArticle[];
}
export default function AdminArticlesList({
  articles,
}: AdminArticlesListProps) {
  return (
    <div className="h-full w-full ">
      <ItemList
        listStyle=" flex flex-wrap justify-around gap-6 w-full"
        items={articles}
        renderItem={(item) => <AdminArticlePreview article={item} />}
      />
    </div>
  );
}
