import ArticlesOnUs from "./Articles/ArticlesOnUs";
import CallToAction from "./CallToAction";
import HomeHero from "./HomeHero/HomeHero";
import Testimonies from "./Testimonies/Testimonies";
import WhoWeAre from "./WhoWeAre";

export default function HomeIndex() {
  return (
    <section className="w-full flex flex-col gap-20 ">
      <HomeHero />
      <WhoWeAre />
      <Testimonies />
      <CallToAction />
      <ArticlesOnUs />
    </section>
  );
}
