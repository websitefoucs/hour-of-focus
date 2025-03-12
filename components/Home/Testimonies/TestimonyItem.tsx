import { RichTextRender } from "@/components/UI/RichTextRender";
import { TTestimony } from "@/types/testimonies.type";

interface TestimonyItemProps {
  testimony: TTestimony;
  isFading?: boolean;
}
export default function TestimonyItem({
  testimony,
  isFading,
}: TestimonyItemProps) {
  const { delta } = testimony;
  return (
    <article
      className={`text-24 w-full  mobile:text-16 font-normal leading-40 h-[13rem] text-mainGray-800 italic mobile:h-32 mobile:leading-7 flex justify-center items-center transition-opacity duration-300 ${
        isFading ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="truncate text-wrap w-full px-2">
        <RichTextRender delta={delta} />
      </div>
    </article>
  );
}
