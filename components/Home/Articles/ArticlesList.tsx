"use client";
import { TArticle } from "@/types/articles.type";
import ItemsScroll from "../../UI/ItemsScroll";
import ArticleItem from "./ArticleItem";

interface ArticleItemProps{
  articles:TArticle[]
}

export default function ArticlesList( {articles}:ArticleItemProps) {
  return (
    <div className="h-fit w-fit px-20 mobile:p-0 flex flex-col items-center home-layout-articles">
      <h4 className="">כתבו עלינו</h4>
      <ItemsScroll<{
        publishPlace: string;
        preview: string;
        publishDate: string;
        link: string;
      }>
        items={articles}
        renderItem={(article) => <ArticleItem {...article} />}
      />
    </div>
  );
}

