import {
  BATEL_WEBSITE,
  ERAN_GIT,
  ERAN_LINKEDIN,
  FACEBOOK_LINK,
  INSTAGRAM_LINK,
  LINKEDIN_LINK,
} from "@/constants/links";
import {
  FacebookSvg,
  GitSvg,
  GlobeSvg,
  InstagramSvg,
  LinkedinSvg,
} from "../UI/icons/Icons";
import LinkCmp from "../UI/LinkCmp";

export default function FollowUs() {
  return (
    <div className="w-56 flex flex-col footer-grid-three mobile:w-full  mobile:justify-between mobile:pr-2 mobile:pl-6 mobile:justify-items-center">
      <div>
        <h6 className="pb-6">עקבו אחרינו</h6>
        <nav className="flex items-center gap-4 ">
          <LinkCmp href={LINKEDIN_LINK}>
            <LinkedinSvg className="w-8 h-8 mobile:w-6 mobile:h-6" />
          </LinkCmp>
          <LinkCmp href={FACEBOOK_LINK}>
            <FacebookSvg className="w-8 h-8 mobile:w-6 mobile:h-6" />
          </LinkCmp>
          <LinkCmp href={INSTAGRAM_LINK}>
            <InstagramSvg className="w-8 h-8 mobile:w-6 mobile:h-6 fill-mainWhite-0" />
          </LinkCmp>
        </nav>
      </div>

      <div className="text-14 flex flex-col gap-2 items-center mt-auto self-center ">
        <div className="flex items-center w-full mobile:justify-center">
          <p className="w-[9rem]">{`עוצב ע"י BY.Creations`}</p>
          <div className="flex gap-1">
            <LinkCmp href={BATEL_WEBSITE}>
              <GlobeSvg className="w-7 h-7 mobile:w-4 mobile:h-4 fill-mainWhite-0" />
            </LinkCmp>
          </div>
        </div>
        <div className="flex items-center w-full">
          <p className="w-[9rem]">{`נבנה ע"י Eran Michaeli`}</p>
          <div className="flex gap-1">
            <LinkCmp href={ERAN_GIT}>
              <GitSvg />
            </LinkCmp>
            <LinkCmp href={ERAN_LINKEDIN}>
              <LinkedinSvg className="w-8 h-8 mobile:w-4 mobile:h-4" />
            </LinkCmp>
          </div>
        </div>
      </div>
    </div>
  );
}
