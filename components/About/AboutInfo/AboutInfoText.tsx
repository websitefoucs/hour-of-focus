interface AboutInfoTextProps {
  header: string;
  text: string;
}
export default function AboutInfoText({ header, text }: AboutInfoTextProps) {
  return (
    <article className="flex flex-col justify-center gap-4 h-full">
      <h5 className="">{header}</h5>
      <p className="text-mainGray-800 text-18 leading-30">{text}</p>
    </article>
  );
}
