import {
  EXAM_IMAGE,
  GIRL_STUDY_ONE_IMAGE,
  HANDS_IMAGE,
} from "@/constants/images";
import AboutInfoImage from "./AboutInfoImage";
import AboutInfoText from "./AboutInfoText";

export default function AboutInfoMobile() {
  return (
    <ul className="about-info-mobile hidden">{items.map((item) => item)}</ul>
  );
}

const items = [
  <li key={1}>
    <AboutInfoText
      header="איך זה עובד?"
      text="בטופס ההרשמה, כל תלמיד מתבקש לציין מקצוע וזמנים מועדפים לקיום השיעור, ובהתאם משובץ למתנדב מתאים. יחד הם מקיימים שיעור אונליין שבועי בן 60 דקות במקצוע המבוקש. בנוסף, התלמידים יכולים לפנות למורים עם שאלות גם אחרי השיעור ולקבל תמיכה נוספת דרך הוואטסאפ."
    />
  </li>,
  <li key={2}>
    <AboutInfoImage
      key={2}
      src={GIRL_STUDY_ONE_IMAGE}
      alt="girl studying"
      borderColors="mainGold-500"
    />
  </li>,
  <li key={3}>
    <AboutInfoText
      key={3}
      header="תמיכה אישית"
      text="המורים במיזם מספקים לתלמידים חווית למידה אישית, תוך שמירה על קשר ישיר עם התלמידים לאחר השיעור. המורים, רבים מהם משרתי מילואים, מספקים תמיכה נוספת בזמן אמת, כשהם זמינים לשאלות והכוונה מעבר לשיעור עצמו."
    />
  </li>,
  <li key={4}>
    <AboutInfoImage
      key={4}
      src={EXAM_IMAGE}
      alt="girl studying"
      borderColors="mainGold-500"
      isBorderRight={false}
    />
  </li>,
  <li key={5}>
    <AboutInfoText
      key={5}
      header="היקף הפעילות"
      text="הפרויקט פועל בעיקר עם תלמידי חטיבה ותיכון, אך בשמחה מספק גם מענים לתלמידי יסודי תוך מודעות לאתגרים הטכנולוגיים. השיעורים מתקיימים במגוון מקצועות, כשהמובילים ביותר הם מתמטיקה, פיזיקה ואנגלית, אך אנו גמישים לצרכים האישיים של כל תלמיד."
    />
  </li>,
  ,
  <li key={6}>
    <AboutInfoImage
      key={6}
      src={HANDS_IMAGE}
      alt="hands together"
      borderColors="mainGold-500"
    />
  </li>,
];
