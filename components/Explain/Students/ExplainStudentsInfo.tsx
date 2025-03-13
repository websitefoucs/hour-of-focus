//Images
import { GIRL_PAINTING_IMAGE } from "@/constants/images";
//Next
import Image from "next/image";

/**
 * ExplainVolunteersInfo is a server component that renders information
 * about the "שיטת המעשים הטובים 🌍💙" (Good Deeds Method) as part of the "שעה של פוקוס" (Hour of Focus) project.
 * 
 * The component consists of an article section with headings and paragraphs explaining
 * the importance of good deeds alongside learning, and a recommendation to perform a good deed
 * for each lesson in the project. It also includes a note emphasizing that participation is optional
 * but impactful.
 * 
 * Additionally, the component displays an image related to the content.
 * 
 * @returns {JSX.Element} A JSX element containing the information and image.
 */
export default function ExplainVolunteersInfo() {
  return (
    <div className="sm:px-24 px-4 py-20 items-center xl:items-start grid grid-cols-1 xl:grid-cols-[60%_35%] w-full gap-10">
      <article className="flex flex-col gap-3 xl:gap-6 font-normal ">
        <h5 className="">שיטת המעשים הטובים 🌍💙</h5>

        <h6 className="text-mainGray-500 leading-30 text-20 pb-3 font-normal">
          מעבירים את זה הלאה
        </h6>
        <p className="text-mainGray-800 leading-30 text-16 md:text-18">{`בפרויקט "שעה של פוקוס", אנחנו מאמינים שלא רק הלמידה חשובה, אלא גם מעשים טובים שמייצרים שינוי חיובי. לכן, אנחנו מזמינים אתכם לבחור, אם תרצו, מעשה טוב עבור כל שיעור שתעברו בפרויקט.`}</p>
        <p className="text-mainGray-800 leading-30 text-16 md:text-18">
          <b>שימו לב:</b> מדובר בהמלצה בלבד – אין חובה להשתתף, אבל כל מעשה קטן
          יכול להשפיע בענק! 🌟
        </p>
      </article>

      <div className="image-border before:bg-mainGold-500 after:bg-mainGold-500 relative max-h-96 md:max-w-[36rem] xl:max-h-full xl:max-w-full w-full h-full place-self-center">
        <Image
          width={512}
          height={256}
          src={GIRL_PAINTING_IMAGE}
          alt="people on lawn"
          className="w-full h-full object-fill rounded-tl-base rounded-br-base"
        />
      </div>
    </div>
  );
}
