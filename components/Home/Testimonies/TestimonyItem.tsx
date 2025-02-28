interface TestimonyItemProps {
  testimony: string;
}
export default function TestimonyItem({ testimony }: TestimonyItemProps) {
  return (
    <li className=" text-xmd mobile:text-sm font-normal leading-40 min-w-[46rem] max-w-[46rem] max-h-[13rem] mobile:max-w-full mobile:min-w-full mobile:h-32 mobile:leading-5 flex justify-center items-center">
      {testimony}
    </li>
  );
}
