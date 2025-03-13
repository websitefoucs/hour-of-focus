//Types
import { TMaterial } from "@/types/materials.type";
//Next
import Image from "next/image";
//UI
import LinkCmp from "../UI/LinkCmp";
import { ArrowSvg } from "../UI/icons/Icons";

interface MaterialItemProps {
  material: TMaterial;
}
/**
 *Server Component that renders a students/teachers material item with an image, subject, and link to the google drive.
 *
 * @component
 * @param {MaterialItemProps} props - The properties object.
 * @param {Object} props.material - The material object.
 * @param {string} props.material.imgPath - The path to the image of the material.
 * @param {string} props.material.subject - The subject of the material.
 * @param {string} props.material.link - The link to the material google drive.
 * @returns {JSX.Element} The rendered MaterialItem component.
 */
export default function MaterialItem({ material }: MaterialItemProps) {
  const { imgPath, subject, link } = material;

  const text = `מאגר חומרי לימוד - ${subject}`;
  return (
    //Use React fragment to handle the edit list in the admin page
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
        <LinkCmp
          styleMode="arrow"
          styleSize="long"
          className="mobile:justify-between mobile:w-10 mobile-small:w-44"
          href={link}
        >
          <p>למאגר חומרי הלימוד</p>
          <ArrowSvg />
        </LinkCmp>
      </div>
    </>
  );
}
