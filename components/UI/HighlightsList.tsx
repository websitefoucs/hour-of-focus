import { ClockSvg, GroupSvg, HeartSvg } from "./icons/Icons";

export default function HighlightsList() {
  return (
    <ul className="flex mobile:flex-wrap justify-around  mobile:gap-4 w-full">
      {items.map((item, index) => (
        <li
          key={index}
          className="grid justify-items-center gap-4 mobile:gap-1 text-mainOrange-700"
        >
          {item.icon}
          <h5 className="mobile:text-normal text-mainOrange-700">
            {item.title}
          </h5>
          <p className="leading-30 mobile:text-center mobile:text-14">
            {item.text}
          </p>
        </li>
      ))}
    </ul>
  );
}

const items = [
  {
    icon: <ClockSvg />,
    title: "גמישות מלאה",
    text: "התנדבות בזמנים שמתאימים לכם",
  },
  {
    icon: <GroupSvg />,
    title: "ליווי אישי",
    text: "צוות תומך לאורך כל הדרך",
  },
  {
    icon: <HeartSvg />,
    title: "השפעה אמיתית",
    text: "תרומה משמעותית למפונים",
  },
];
