import FaqHeroImage from "./FaqHeroImage";

export default function FaqHero() {
  return (
    <div className="grid grid-cols-1 grid-rows-1 w-full h-[13rem] items-center justify-items-center  ">
      <FaqHeroImage />
      <h4 className="grid-stack z-10 text-lg text-white-0">שאלות ותשובות</h4>
    </div>
  );
}
