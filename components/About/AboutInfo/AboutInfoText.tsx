interface AboutInfoTextProps {
  header: string;
  text: string;
}
export default function AboutInfoText({ header, text }: AboutInfoTextProps) {
  return (
    <article className="flex flex-col justify-center gap-4 h-full mobile:h-fit">
      <h5 className="text-24">{header}</h5>
      <p className="text-mainGray-800 text-16 leading-30 mobile:leading-10">{text}</p>
    </article>
  );
}
