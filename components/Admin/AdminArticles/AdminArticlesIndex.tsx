import HandleEdit from "../HandleEdit";

import { TArticle } from "@/types/articles.type";
import AdminArticleEdit from "./AdminArticleEdit";
import { ArticlesServerUtils } from "@/utils/server/articles.util";
import AdminArticlesList from "./AdminArticlesList";

interface AdminArticlesIndexProps {
  articles: TArticle[];
}
export default function AdminArticlesIndex({
  articles,
}: AdminArticlesIndexProps) {
  return (
    <section className=" p-2 rounded min-w-full h-fit pb-24">
      <div className="flex justify-between items-center pb-8">
        <h3 className="">כתבות</h3>
        <HandleEdit
          item={ArticlesServerUtils.getEmpty()}
          EditCmp={({ item }) => <AdminArticleEdit articleToEdit={item} />}
        />
      </div>
      <AdminArticlesList articles={articles} />
    </section>
  );
}
