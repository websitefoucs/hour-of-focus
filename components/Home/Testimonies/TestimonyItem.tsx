interface TestimonyItemProps {
  testimony: string;
}
export default function TestimonyItem({ testimony }: TestimonyItemProps) {
  return (
    <li className=" text-xmd font-normal leading-40 min-w-[46rem] max-w-[46rem] max-h-[13rem] flex justify-center items-center">
      {testimony}
    </li>
  );
}
