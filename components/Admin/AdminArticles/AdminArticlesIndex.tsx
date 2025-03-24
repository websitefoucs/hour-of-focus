import HandleEdit from "../HandleEdit";

import { TArticle } from "@/types/articles.type";
import AdminArticleEdit from "./AdminArticleEdit";
import { ArticlesServerUtils } from "@/utils/server/articles.util";
import ItemList from "@/components/UI/ItemList";
import AdminArticlePreview from "./AdminArticlePreview";

interface AdminArticlesIndexProps {
  articles: TArticle[];
}
export default function AdminArticlesIndex({
  articles,
}: AdminArticlesIndexProps) {
  return (
    <section className="p-2 rounded w-fit h-fit pb-24 min-w-72">
      <div className="flex justify-between items-center pb-8">
        <h3 className="text-24 sm:text-36">כתבות</h3>
        <HandleEdit
          item={ArticlesServerUtils.getEmpty()}
          EditCmp={({ item }) => <AdminArticleEdit articleToEdit={item} />}
        />
      </div>
      <ItemList
        listStyle="grid gap-6 w-fit"
        items={articles}
        renderItem={(item) => <AdminArticlePreview article={item} />}
      />
    </section>
  );
}
