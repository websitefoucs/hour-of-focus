import Image from "next/image";

interface AboutInfoImageProps {
  src: string;
  alt: string;
  borderColors?: string;
  isBorderRight?: boolean;
}
export default function AboutInfoImage({
  src,
  alt,
  borderColors,
  isBorderRight,
}: AboutInfoImageProps) {
  const style = `image-border before:bg-${borderColors} after:bg-${borderColors} relative h-[30rem] w-full mobile:h-fit ${
    isBorderRight
      ? "before:-right-2 before:rounded-br-full after:-right-2 after:rounded-br-full"
      : ""
  }`;
  return (
    <div className={style}>
      <Image
        width={512}
        height={256}
        src={src}
        alt={alt}
        className="w-full h-full "
      />
    </div>
  );
}
