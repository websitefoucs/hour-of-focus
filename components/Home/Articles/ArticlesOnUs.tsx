"use client";
import ItemsScroll from "../../UI/ItemsScroll";
import Article from "./Article";

export default function ArticlesOnUs() {
  return (
    <div className="h-fit py-10 p-20">
      <h4 className="text-1xl text-mainGray-600 leading-42">כתבו אלינו </h4>
      <ItemsScroll<{ image: string; text: string; date: string; link: string }>
        items={articles}
        listStyle="overflow-hidden flex w-[72rem] gap-8 px-4 h-fit py-4"
        renderItem={(article) => <Article {...article} />}
      />
    </div>
  );
}

const articles = [
  {
    image: "/imgs/onNorth.svg",
    text: "“כך הפכה יוזמה צנועה של סטודנטית צעירה להנדסת חשמל ושל חייל מילואים משוחרר לפרויקט חינוכי-התנדבותי בן 350 מדריכים.”",
    date: "אוקטובר 2024",
    link: "",
  },
  {
    image: "/imgs/shlomi.svg",
    text: "“כך הפכה יוזמה צנועה של סטודנטית צעירה להנדסת חשמל ושל חייל מילואים משוחרר לפרויקט חינוכי-התנדבותי בן 350 מדריכים.”",
    date: "ינואר 2025",
    link: "",
  },
];
