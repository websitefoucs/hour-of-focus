import { EMAIL } from "@/constants/app";
import { EnvelopSvg } from "../UI/icons/Icons";
import LinkCmp from "../UI/LinkCmp";
import { ACCESSIBILITY_PAGE_LINK, CONTACT_US } from "@/constants/links";

export default function Details() {
  return (
    <div className="flex flex-col gap-4 footer-grid-one">
      <h6 className="pb-2"> שעה של פוקוס © </h6>
      <LinkCmp
        styleMode="none"
        styleSize="none"
        href={CONTACT_US}
        className="text-14 leading-23"
      >
        צור קשר
      </LinkCmp>
      <span className="flex gap-2 items-center">
        <EnvelopSvg className="w-[1.125rem] h-[1.125rem]  fill-white" />

        <a className="text-14 leading-23" href={`mailto:${EMAIL}`}>
          {EMAIL}
        </a>
      </span>
      <LinkCmp
        href={ACCESSIBILITY_PAGE_LINK}
        className="text-14 leading-23 underline"
      >
        הצהרת נגישות
      </LinkCmp>
    </div>
  );
}
