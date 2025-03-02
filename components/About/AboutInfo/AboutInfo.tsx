import AboutInfoImage from "./AboutInfoImage";
import AboutInfoText from "./AboutInfoText";

export default function AboutInfo() {
  return (
    <ul className="grid grid-cols-2 grid-rows-3 px-24 ">
      <li className="pl-6">
        <AboutInfoText
          header="איך זה עובד?"
          text="בטופס ההרשמה, כל תלמיד מתבקש לציין מקצוע וזמנים מועדפים לקיום השיעור, ובהתאם משובץ למתנדב מתאים. יחד הם מקיימים שיעור אונליין שבועי בן 60 דקות במקצוע המבוקש. בנוסף, התלמידים יכולים לפנות למורים עם שאלות גם אחרי השיעור ולקבל תמיכה נוספת דרך הוואטסאפ."
        />
      </li>
      <li className="h-[30rem]">
        <AboutInfoImage
          src="/imgs/girl-study.png"
          alt="girl studying"
          borderColors="mainGold-500"
        />
      </li>
      <li className="h-[30rem]">
        <AboutInfoImage
          src="/imgs/exam.png"
          alt="girl studying"
          borderColors="mainGold-500"
          isBorderRight={true}
        />
      </li>
      <li className="pr-6">
        <AboutInfoText
          header="תמיכה אישית"
          text="המורים במיזם מספקים לתלמידים חווית למידה אישית, תוך שמירה על קשר ישיר עם התלמידים לאחר השיעור. המורים, רבים מהם משרתי מילואים, מספקים תמיכה נוספת בזמן אמת, כשהם זמינים לשאלות והכוונה מעבר לשיעור עצמו."
        />
      </li>
      <li className="pl-6">
        <AboutInfoText
          header="היקף הפעילות"
          text="הפרויקט פועל בעיקר עם תלמידי חטיבה ותיכון, אך בשמחה מספק גם מענים לתלמידי יסודי תוך מודעות לאתגרים הטכנולוגיים. השיעורים מתקיימים במגוון מקצועות, כשהמובילים ביותר הם מתמטיקה, פיזיקה ואנגלית, אך אנו גמישים לצרכים האישיים של כל תלמיד."
        />
      </li>
      <li className="h-[30rem]">
        <AboutInfoImage
          src="/imgs/hands.png"
          alt="hands together"
          borderColors="mainGold-500"
        />
      </li>
    </ul>
  );
}
