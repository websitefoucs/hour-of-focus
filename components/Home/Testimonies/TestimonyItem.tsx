interface TestimonyItemProps {
  testimony: string;
  isFading?: boolean;
}
export default function TestimonyItem({
  testimony,
  isFading,
}: TestimonyItemProps) {
  return (
    <li
      className={`text-24 mobile:text-16 font-normal leading-40 h-[13rem] mobile:h-32 mobile:leading-7 flex justify-center items-center transition-opacity duration-300 ${
        isFading ? "opacity-0" : "opacity-100"
      }`}
    >
      {testimony}
    </li>
  );
}
