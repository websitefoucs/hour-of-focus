"use client";
import { TArticle } from "@/types/articles.type";
import ItemsScroll from "../../UI/ItemsScroll";
import ArticleItem from "./ArticleItem";

interface ArticleItemProps{
  articles:TArticle[]
}

export default function ArticlesList( {articles}:ArticleItemProps) {
  return (
    <div className="h-fit lg:px-sides-sm px-sides flex flex-col items-center home-layout-articles">
      <h4 className="pb-8">כתבו עלינו</h4>
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

