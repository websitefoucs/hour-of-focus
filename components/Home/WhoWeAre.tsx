import Image from "next/image";

export default function WhoWeAre() {
  return (
    <div className="w-full px-20 medium:px-10 mobile:px-4 py-20 medium:py-10 flex mobile:flex-col-reverse mobile:h-fit medium:gap-6 mobile:gap-6  justify-around  ">
      <ul className=" flex flex-col gap-12  w-[calc(50%-5rem)] mobile:w-full">
        {items.map((item, index) => (
          <li key={index}>
            <h5 className="text-xmd medium:text-normal text-mainGray-600 font-semibold leading-28">
              {item.header}
            </h5>
            <p className="text-normal medium:text-[1rem] leading-30 text-mainGray-800">
              {item.text}
            </p>
          </li>
        ))}
      </ul>
      <div className="image-border h-[32rem] medium:h-[26rem] mobile:h-64 mobile:w-[21.8rem] mobile:max-w-[calc(100%-.5rem)]  aspect-square before:bg-mainGold-500 after:bg-mainGold-500 relative">
        <Image
          width={512}
          height={512}
          src={"/imgs/whoWeAre.svg"}
          alt="Who we are"
          className="object-cover h-full "
          priority
        />
      </div>
    </div>
  );
}

const items = [
  {
    header: "מי אנחנו?",
    text: `
    .אנחנו קבוצה של סטודנטים, מילואימניקים, מורים, עובדים בהייטק, ועוד
    רבים המתנדבים לסייע לאחינו המפונים מהדרום והצפון
 `,
  },
  {
    header: "מה המטרה שלנו",
    text: `
    להעניק תמיכה חינוכית ולימודית למפונים מהדרום ומהצפון, לסייע
    בהתאקלמות 💙 .ולתת לכל תלמיד שעה של פוקוס`,
  },
  {
    header: "איך זה עובד",
    text: `
    אנחנו נתאם חיבור בין המתנדבים לתלמידים, ונקצה לכל תלמיד מורה פרטי
    שיספק לו שיעור פרטי אונליין במשך שעה אחת בשבוע, בנושא אחד שיבחר.`,
  },
];
