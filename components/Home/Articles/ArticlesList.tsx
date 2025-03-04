"use client";
import ItemsScroll from "../../UI/ItemsScroll";
import ArticleItem from "./ArticleItem";

export default function ArticlesList() {
  return (
    <div className="h-fit w-full py-10 px-20 mobile:p-0 flex flex-col items-center  ">
      <h4 className="">כתבו אלינו</h4>
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

const articles = [
  {
    publishPlace: "על הצפון פלוס ,",
    preview:
      "“כך הפכה יוזמה צנועה של סטודנטית צעירה להנדסת חשמל ושל חייל מילואים משוחרר לפרויקט חינוכי-התנדבותי בן 350 מדריכים.”",
    publishDate: "אוקטובר 2024",
    link: "https://alhazafonplus.co.il/%D7%A9%D7%A2%D7%94-%D7%A9%D7%9C-%D7%94%D7%95%D7%A7%D7%95%D7%A1-%D7%A4%D7%95%D7%A7%D7%95%D7%A1/",
  },
  {
    publishPlace: "שלומי ,",
    preview:
      "“כך הפכה יוזמה צנועה של סטודנטית צעירה להנדסת חשמל ושל חייל מילואים משוחרר לפרויקט חינוכי-התנדבותי בן 350 מדריכים.”",
    publishDate: "ינואר 2025",
    link: "https://www.shelomi.org.il/news/671/",
  },
];
