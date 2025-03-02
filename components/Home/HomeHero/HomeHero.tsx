import LinkCmp from "../../UI/LinkCmp";
import Numbers from "./Numbers";
import { LOGISTIC_SIGNUP, TEACHERS_SIGNUP } from "@/constants/links";
import ImageOverlay from "@/components/UI/ImageOverlay";
import Image from "next/image";
import { GINGER_KID } from "@/constants/images";

export default function HomeHero() {
  return (
    <div className="w-full grid grid-cols-1 grid-rows-1">
      <ImageOverlay>
        <Image
          fill
          src={GINGER_KID}
          alt="Home main image"
          className="object-cover max-w-screen h-full"
          priority
        />
      </ImageOverlay>
      <div className="w-full h-full grid-stack z-10 flex flex-col items-center gap-8 text-mainWhite-0 text-center pt-24 medium:pt-10">
        <h5 className="text-mainWhite-0">למען המפונים מהדרום והמצפון</h5>

        <h1 className="">
          <span className="font-normal">שעה של </span>
          <span className=" text-mainGold-400">פוקוס</span>
        </h1>

        <p className="text-20 leading-34">
          מחברים בין תלמידים למתנדבים לשעה שבועית של למידה ממוקדת
        </p>

        <nav className="flex flex-col gap-10 medium:gap-4 mobile:gap-2 items-center py-12 medium:py-4 ">
          <LinkCmp styleMode="full" styleSize="large" href={TEACHERS_SIGNUP}>
            הצטרפו כמורים
          </LinkCmp>
          <div className="flex gap-8 medium:gap-4 mobile:gap-2 mobile-small:flex-col">
            <LinkCmp
              styleMode="grayBorder"
              styleSize="large"
              href={LOGISTIC_SIGNUP}
              className="mobile:w-fit mobile:px-1 mobile-small:w-60"
            >
              <h6 className="leading-21">הצטרפו לצוות הלוגיסטי</h6>
            </LinkCmp>
            <LinkCmp
              styleMode="grayBorder"
              styleSize="large"
              href=""
              className="mobile:w-fit mobile:px-1 mobile-small:w-60"
            >
              <h6>מידע נוסף לתלמידים</h6>
            </LinkCmp>
          </div>
        </nav>
        <Numbers />
      </div>
    </div>
  );
}
