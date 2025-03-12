import { ApproveSvg } from "@/components/UI/icons/Icons";
import HighlightsList from "@/components/UI/HighlightsList";

export default function ExplainVolunteersMiddle() {
  return (
    <div className="bg-mainWhite-50 mx-24 mobile:mx-0 py-12 items-center flex flex-col rounded-b-[160px] mobile:rounded-b-none gap-28">
      <div className="items-center flex flex-col gap-8">
        <h4 className="mobile:text-24">מה מצופה מהמתנדבים?</h4>
        <ul className="grid grid-cols-2 mobile:grid-cols-1 grid-rows-2 gap-8">
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <ApproveSvg />
              <p className=" leading-30 text-18 text-mainGray-800">{item}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="items-center flex flex-col gap-16 w-full px-8 mobile:px-1">
        <h4 className="mobile:text-center mobile:text-24">
          למה כדאי להצטרף אלינו?
        </h4>
        <HighlightsList />
      </div>
    </div>
  );
}

const items = [
  "מחויבות לשעת הוראה שבועית קבועה",
  "רצון להשקיע ולתרום מהידע שלך",
  "יכולת הוראה מרחוק (דרך זום או פלטפורמה דומה)",
  "עדיפות לסטודנטים או בעלי רקע אקדמי",
];
