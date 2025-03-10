import {
  HomeSvg,
  HeartSvg,
  DonateSvg,
  PenAndPaperSvg,
  GroupSvg,
} from "@/components/UI/icons/Icons";

export default function ExplainIdeas() {
  return (
    <section className="px-20 mobile:px-4 mb-20">
      <h5 className="pb-8  ">
        רעיונות פשוטים ומשמעותיים
      </h5>
      <ul className="grid grid-cols-2 mobile:grid-cols-1 gap-y-8 ">
        {items.map(({ icon, header, text }, index) => (
          <li key={index} className="grid ideas-layout gap-x-4 gap-y-2">
            {icon}
            <h6 className="text-mainGray-600">{header}</h6>
            <p className="">{text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

const items: { header: string; text: string; icon: React.ReactNode }[] = [
  {
    header: "מכתב לחיילים",
    text: "כתבו מילים חמות שיחזקו את רוחם של המגנים עלינו",
    icon: (
      <HeartSvg className="h-14 w-14 p-2 rounded-base bg-mainOrange-700 fill-mainOrange-700 stroke-mainWhite-0" />
    ),
  },
  {
    header: "עזרה בלימודים",
    text: "הקדישו חצי שעה כדי לסייע לחבר מהכיתה שמתקשה",
    icon: (
      <PenAndPaperSvg className="h-14 w-14 p-2 rounded-base bg-mainOrange-700 fill-mainOrange-700 stroke-mainWhite-0" />
    ),
  },
  {
    header: "אחריות בבית",
    text: "קחו אחריות על מטלה משפחתית עבור כל שיעור שתעברו",
    icon: (
      <HomeSvg className="h-14 w-14 p-2 rounded-base bg-mainOrange-700 fill-mainOrange-700 stroke-mainWhite-0" />
    ),
  },
  {
    header: "צירוף חברים או התנדבות בעצמכם",
    text: "הצטרפו וסייעו לתלמידים צעירים יותר. במיוחד אם אתם תלמידי תיכון",
    icon: (
      <GroupSvg className="h-14 w-14 p-2 rounded-base bg-mainOrange-700 fill-mainWhite-0" />
    ),
  },
  {
    header: "תרומה לעמותה",
    text: `תרומה קטנה של 10 ש"ח יכולה ליצור שינוי גדול`,
    icon: (
      <DonateSvg className="h-14 w-14 p-2 rounded-base bg-mainOrange-700 fill-mainOrange-700 stroke-mainWhite-0" />
    ),
  },
];
