import { TMaterials } from "@/types/materials.type";
import Image from "next/image";
import LinkCmp from "../UI/LinkCmp";
import { ArrowSvg } from "../UI/icons/Icons";

interface MaterialItemProps {
  material: TMaterials;
}
export default function MaterialItem({ material }: MaterialItemProps) {
  const { imgPath, subject, link } = material;

  const text = `מאגר חומרי לימוד - ${subject}`;
  return (
    <li className="flex flex-col gap-2 h-80 border-t-8 border-mainGold-500 rounded-base shadow-[0px_4px_8px_#00000026]">
      <Image
        src={imgPath || ""}
        alt={subject}
        width={360}
        height={360}
        className="object-cover h-[calc(55%)]"
      />
      <div className="p-4 flex flex-col h-[calc(45%-.5rem)] justify-between">
        <h5>{text}</h5>
        <LinkCmp styleMode="arrow" styleSize="long" href={link}>
          <p>למאגר חומרי הלימוד</p>
          <ArrowSvg />
        </LinkCmp>
      </div>
    </li>
  );
}
