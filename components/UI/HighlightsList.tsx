import { ClockSvg, GroupSvg, HeartSvg } from "./icons/Icons";

/**
 * HighlightsList component renders a list of highlight items.
 * Each item includes an icon, a title, and a text description.
 *
 * @component
 *
 * @returns {JSX.Element} A list of highlight items.
 */
export default function HighlightsList() {
  return (
    <ul className="flex mobile:flex-col-reverse justify-around mobile:gap-6 w-full">
      {items.map((item, index) => (
        <li
          key={index}
          className="grid justify-items-center gap-4 mobile:gap-1 text-mainOrange-700"
        >
          {item.icon}
          <h5 className="mobile:text-18 text-mainOrange-700 mobile:font-bold">
            {item.title}
          </h5>
          <p className="leading-30 mobile:text-center mobile:text-18">
            {item.text}
          </p>
        </li>
      ))}
    </ul>
  );
}

const items = [
  {
    icon: <ClockSvg className="w-14 h-14 fill-none" />,
    title: "גמישות מלאה",
    text: "התנדבות בזמנים שמתאימים לכם",
  },
  {
    icon: <GroupSvg className="w-14 h-14 fill-mainOrange-700" />,
    title: "ליווי אישי",
    text: "צוות תומך לאורך כל הדרך",
  },
  {
    icon: <HeartSvg className="w-14 h-14 stroke-mainOrange-700 fill-none" />,
    title: "השפעה אמיתית",
    text: "תרומה משמעותית למפונים",
  },
];
