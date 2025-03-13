import { TMaterial } from "@/types/materials.type";
import Image from "next/image";
import LinkCmp from "../UI/LinkCmp";
import { ArrowSvg } from "../UI/icons/Icons";

interface MaterialItemProps {
  material: TMaterial;
}
export default function MaterialItem({ material }: MaterialItemProps) {
  const { imgPath, subject, link } = material;

  const text = `מאגר חומרי לימוד - ${subject}`;
  return (
    <>
      <Image
        src={imgPath || ""}
        alt={subject}
        width={360}
        height={360}
        className="object-cover h-1/2"
      />
      <div className="p-4 flex flex-col h-[calc(45%-.5rem)] justify-between">
        <h5>{text}</h5>
        <LinkCmp styleMode="arrow" styleSize="long" className="mobile:justify-between mobile:w-10 mobile-small:w-44" href={link}>
          <p>למאגר חומרי הלימוד</p>
          <ArrowSvg />
        </LinkCmp>
      </div>
    </>
  );
}
