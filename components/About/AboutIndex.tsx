import VolunteersJoinCmp from "../UI/VolunteersJoinCmp";
import AboutHero from "./AboutHero";
import AboutInfo from "./AboutInfo/AboutInfo";
import AboutJoinUs from "./AboutJoinUs";
import AboutOurStory from "./AboutOurStory";
import AboutTeam from "./AboutTeam";

export default function AboutIndex() {
  return (
    <div className="flex flex-col gap-32 justify-center items-center pb-32">
      <AboutHero />
      <AboutOurStory />
      <AboutTeam />
      <AboutInfo />
      <AboutJoinUs />
      <VolunteersJoinCmp />
    </div>
  );
}
