/**
 * Component for rendering a preview of an article in the admin panel.
 *
 * @component
 * @param {AdminArticlePreviewProps} props - The props for the component.
 * @param {TArticle} props.article - The article data to display in the preview.
 *
 * @returns {JSX.Element} A list item containing the article preview, edit, and delete controls.
 *
 * @remarks
 * - This component uses the `ArticleItem` component to display the article details.
 * - Includes an edit button (`HandleEdit`) and a delete button (`DeleteBtn`) for managing the article.
 * - The `AdminArticleEdit` component is used for editing the article.
 * - The `deleteArticle` function is used to handle article deletion.
 */

//Components
import HandleEdit from "../HandleEdit";
//UI
import DeleteBtn from "@/components/UI/DeleteBtn";
//Types
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
            EditCmp={({ item }) => <AdminArticleEdit articleToEdit={item} />}
          />
          <DeleteBtn id={_id || ""} deleteAction={deleteArticle} />
        </li>
      </ul>
    </li>
  );
}
