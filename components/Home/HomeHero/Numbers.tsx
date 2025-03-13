export default function Numbers() {
  return (
    <ul className="flex w-full items-center justify-center gap-36  mobile:grid mobile:grid-cols-2 mobile:gap-0 ">
      {items.map((item, index) => (
        <li key={index}>
          <h4 className="">
            <span className="text-mainWhite-0 mobile:text-20">
              {item.number}
            </span>
            <span className=" text-mainGold-400 mobile:text-20">
              {item.symbol}
            </span>
          </h4>
          <p className="text-20 leading-34 font-normal">{item.text}</p>
        </li>
      ))}
    </ul>
  );
}

const items = [
  {
    number: 200,
    symbol: "+",
    text: "שיעורים שבועיים",
  },
  {
    number: 350,
    symbol: "+",
    text: "מתנדבים",
  },
  {
    number: 350,
    symbol: "+",
    text: "תלמידים",
  },
  {
    number: 100,
    symbol: "%",
    text: "סיוע למפונים",
  },
];
