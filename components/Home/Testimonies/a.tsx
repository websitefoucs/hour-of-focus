"use client";
import ItemsScroll from "@/components/UI/ItemsScroll";
import TestimonyItem from "./TestimonyItem";

export default function Testimonies() {
  return (
    // <div className="p-20 text-center mobile:p-0">
    //   <h4 className="text-1xl text-mainGray-600 leading-42">
    //     מה התלמידים שלנו מספרים?
    //   </h4>
    //   <ItemsScroll
    //     items={testimoniesItems}
    //     listStyle="overflow-hidden flex w-full mx-24 mobile:w-full mobile:mx-0"
    //     renderItem={(testimony) => <TestimonyItem testimony={testimony} />}
    //   />
    // </div>

    <div className="overflow-hidden whitespace-nowrap relative w-full  py-4">
    <div className="animate-scroll flex w-max">
      {[...Array(2)].map((_, index) => (
        <div key={index} className="flex gap-8">
          {testimoniesItems.map((item, i) => (
            <div
              key={i}
              className="text-5xl text-white bg-blue-600 px-6 py-3 rounded-lg shadow-lg"
            >
              {item}
            </div>
          ))}
        </div>
      ))}
    </div>
  </div>
  );
}

const testimoniesItems = [
  `“לא האמנתי כמה שהמתנדבים בפרויקט הזה ישפיעו על חיינו. הבן שלי התחיל להאמין בעצמו במתמטיקה, וזה שינה הכל! תודה מכל הלב ”`,
  `“התרגשנו מאוד מהמסירות של המורה המתנדב שלנו. גם בתקופות לחוצות, הוא תמיד מצא זמן להיות שם בשבילנו!”`,
  `“רק רצינו להגיד תודה ענקית! הפרויקט הזה לא רק שעזר לבן שלנו בלימודים, הוא גם נתן לו מוטיבציה להצליח ולהתקדם.”`,
  `“הלמידה עם המתנדב הייתה חוויה מדהימה! השיעורים היו קבועים ומסודרים, והבן שלי פשוט התחיל ליהנות מלימודים בפעם הראשונה בחייו.”`,
  `“בזכות התמיכה וההשקעה של הצוות שלכם, בתי הצליחה במבחן בצורה מדהימה. תודה על הכל!”`,
  `“אני לא מאמינה איזו השפעה חיובית הייתה לפרויקט הזה על המשפחה שלנו. הילד שלי כבר לא חושש ממתמטיקה, להפך – הוא אפילו מחכה לשיעורים!”`,
  `“שירות מדהים, תודה על הזכות להשתתף בפרויקט הזה. אנחנו אסירי תודה לכל מי שלוקח חלק בזה!”`,
  `“לא רק שהבן שלי השתפר בלימודים, הוא גם רכש ביטחון עצמי וזה הדבר הכי חשוב. תודה שאתם כאן!”`,
  `“למדנו כל כך הרבה בזכותכם. לא רק על המקצועות, אלא גם על חשיבות הנתינה והעזרה לאחרים. הפרויקט הזה מדהים!”`,
  `“הבן שלי עלה להקבצה א׳ במתמטיקה בזכותכם! תודה על המסירות, האכפתיות והאהבה שאתם משקיעים.”`,
];
