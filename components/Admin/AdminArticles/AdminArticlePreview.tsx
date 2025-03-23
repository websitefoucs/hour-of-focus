import HandleEdit from "../HandleEdit";
import DeleteBtn from "@/components/UI/DeleteBtn";
import { TArticle } from "@/types/articles.type";
import ArticleItem from "@/components/Home/Articles/ArticleItem";
import AdminArticleEdit from "./AdminArticleEdit";
import { deleteArticle } from "@/lib/actions/articles";

interface AdminArticlePreviewProps {
  article: TArticle;
}
export default function AdminArticlePreview({
  article,
}: AdminArticlePreviewProps) {
  const { publishDate, link, preview, publishPlace, createAt, _id } = article;

  return (
    <li className="w-full">
      <ul className="w-full grid md:grid-cols-[1fr_5rem] xl:grid-cols-[49rem_5rem] gap-4  ">
        <ArticleItem
          publishDate={publishDate}
          link={link}
          preview={preview}
          publishPlace={publishPlace}
        />
        <li className="flex md:flex-col gap-2 items-center md:justify-start  ">
          <span className="border rounded-base  text-center py-1 px-2 gap-2 flex">
            <p className="text-sm">
              {new Date(createAt!).toLocaleDateString()}
            </p>
          </span>
          <HandleEdit
            item={article}
            EditCmp={({ item }) => (
              <AdminArticleEdit
                articleToEdit={{
                  ...item,
                  createBy: item?.createBy?._id,
                  updateBy: item?.updateBy?._id,
                }}
              />
            )}
          />
          <DeleteBtn id={_id || ""} deleteAction={deleteArticle} />
        </li>
      </ul>
    </li>
  );
}
