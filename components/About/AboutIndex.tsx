import VolunteersJoinCmp from "../UI/VolunteersJoinCmp";
import AboutHero from "./AboutHero";
import AboutInfo from "./AboutInfo/AboutInfo";
import AboutInfoMobile from "./AboutInfo/AboutInfoMobile";
import AboutJoinUs from "./AboutJoinUs";
import AboutOurStory from "./AboutOurStory";
import AboutTeam from "./AboutTeam";

export default function AboutIndex() {
  return (
    <div className="flex flex-col gap-32 mobile:gap-16 justify-center items-center pb-32">
      <AboutHero />
      <AboutOurStory />
      <AboutTeam />
      <AboutInfo />
      <AboutInfoMobile />
      <AboutJoinUs />
      <VolunteersJoinCmp />
    </div>
  );
}
