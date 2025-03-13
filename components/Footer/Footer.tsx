//Next
import Image from "next/image";
//Components
import Details from "./Details";
import FollowUs from "./FollowUs";
import CreatorsLinks from "./CreatorsLinks";
//Images
import { LOGO } from "@/constants/images";
/**
 * Footer component that renders the footer section of the application.
 * It includes the Details, FollowUs, and CreatorsLinks components, as well as the application logo.
 *
 * @returns {JSX.Element} The rendered footer component.
 */
export default function Footer() {
  return (
    <footer className="w-full bg-mainOrange-700 px-sides py-10 text-mainWhite-0 grid grid-cols-[65%_35%] md:grid-cols-[35%_35%_30%] md:justify-items-center gap-y-10 gap-x-2 sm:gap-x-0">
      <Details />
      <Image
        src={LOGO}
        alt="logo"
        width={160}
        height={160}
        className=" brightness-0 invert md:order-3 justify-self-end md:justify-self-auto"
        priority
      />
      <FollowUs />
      <div className="hidden md:order-4 md:block"></div>
      <CreatorsLinks />
    </footer>
  );
}
