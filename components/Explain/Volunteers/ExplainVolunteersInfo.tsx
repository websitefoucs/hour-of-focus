import { GIRL_STUDY_TWO_IMAGE } from "@/constants/images";
import Image from "next/image";

export default function ExplainVolunteersInfo() {
  return (
    <div className="flex mobile:flex-col-reverse justify-around gap-12 mobile:gap-6 w-[70vw] mobile:w-full mobile:px-4  self-center ">
      <article className="flex flex-col gap-6">
        <h5 className="mobile:text-center">הצטרפו למיזם ׳שעה של פוקוס׳</h5>

        {item.map((item, index) => (
          <p key={index} className="text-mainGray-800 leading-30 text-18">
            {item}
          </p>
        ))}
      </article>

      <div className="image-border before:bg-mainGold-500 after:bg-mainGold-500 relative min-h-[27rem] aspect-square ml-2">
        <Image
          width={480}
          height={432}
          src={GIRL_STUDY_TWO_IMAGE}
          alt="people on lawn"
          className="w-full h-full rounded-none"
        />
      </div>
    </div>
  );
}

const item = [
  `התנדבות במיזם שלנו היא הזדמנות להשפיע, לחולל שינוי אמיתי ולהיות חלק
          מקהילה שתומכת בתלמידים המפונים הזקוקים לעזרה, במיוחד בתקופה מאתגרת זו.
          המתנדבים שלנו הם הכוח שמניע את המיזם, ומאפשרים לילדים להמשיך ללמוד,
          לשמור על רצף לימודי ולהרגיש שיש להם מישהו שתומך בהם.`,
  `אנו מחפשים מתנדבים מסורים ואכפתיים שיכולים להתחייב לליווי אישי של
          תלמידים במסגרת שיעורים פרטיים אונליין. כל מתנדב במיזם ממלא תפקיד חיוני
          בליווי התלמידים – לא רק בהעברת ידע, אלא גם בהענקת ביטחון, מוטיבציה
          ותחושת יציבות בתקופה לא פשוטה.`,
  `אנחנו מחפשים בנוסף מתנדבים שירצו לשמש כרכזים ומראיינים. כמו כן, מורים
          המעוניינים בכך יכולים לשמש כמנטורים וללוות את צוות המתנדבים הקיים.`,
];
