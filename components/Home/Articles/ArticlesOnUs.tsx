"use client";
import ItemsScroll from "../../UI/ItemsScroll";
import Article from "./Article";

export default function ArticlesOnUs() {
  return (
    <div className="h-fit w-full py-10 px-20 mobile:p-0 flex flex-col items-center  ">
      <h4 className="text-1xl text-mainGray-600 leading-42  font-bold font-open-sns">כתבו אלינו </h4>
      <ItemsScroll<{ image: string; text: string; date: string; link: string }>
        items={articles}
        listStyle="overflow-hidden flex w-[72rem] mobile:w-full mobile:grid mobile:grid-flow-row mobile:h-[26rem] gap-8 mobile:gap-0 px-4 mobile:p-0 h-fit py-4"
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
    link: "https://alhazafonplus.co.il/%D7%A9%D7%A2%D7%94-%D7%A9%D7%9C-%D7%94%D7%95%D7%A7%D7%95%D7%A1-%D7%A4%D7%95%D7%A7%D7%95%D7%A1/",
  },
  {
    image: "/imgs/shlomi.svg",
    text: "“כך הפכה יוזמה צנועה של סטודנטית צעירה להנדסת חשמל ושל חייל מילואים משוחרר לפרויקט חינוכי-התנדבותי בן 350 מדריכים.”",
    date: "ינואר 2025",
    link: "https://www.shelomi.org.il/news/671/",
  },
];
