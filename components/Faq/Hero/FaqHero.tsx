import HeroImage from "../../UI/HeroImage";

export default function FaqHero() {
  return (
    <div className="grid grid-cols-1 grid-rows-1 w-full h-[13rem] items-center justify-items-center">
      <HeroImage />
      <h4 className="grid-stack z-10 text-mainWhite-0">שאלות ותשובות</h4>
    </div>
  );
}
