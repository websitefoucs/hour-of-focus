import HeroImage from "./HeroImage";
/**
 * HeroCmp component renders a hero section with an image and a text overlay.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.text - The text to be displayed in the hero section.
 *
 * @returns {JSX.Element} The rendered hero component.
 */

export default function HeroCmp({ text }: { text: string }) {
  return (
    <div className="grid grid-cols-1 grid-rows-1 w-full h-[13rem] items-center justify-items-center">
      <HeroImage />
      <h4 className="grid-stack z-10 text-mainWhite-0 mobile:text-center">
        {text}
      </h4>
    </div>
  );
}
