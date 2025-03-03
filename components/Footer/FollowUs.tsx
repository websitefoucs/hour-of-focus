import { FacebookSvg, GitSvg, GlobeSvg, LinkedinSvg } from "../UI/icons/Icons";
import LinkCmp from "../UI/LinkCmp";

export default function FollowUs() {
  return (
    <div className="w-56 flex flex-col footer-grid-three mobile:w-full mobile:flex-row mobile:justify-around mobile:justify-items-center">
      <div>
        <h6 className="pb-2">עקבו אחרינו</h6>
        <nav className="flex items-center gap-4 ">
          <LinkCmp href={"/linkedin"}>
            <LinkedinSvg className="w-6 h-6" />
          </LinkCmp>
          <LinkCmp href={"/facebook"}>
            <FacebookSvg className="w-6 h-6" />
          </LinkCmp>
        </nav>
      </div>

      <div className="text-14 flex flex-col items-center mt-auto">
        <div className="flex items-center w-full">
          <p className="w-[9rem]">{`עוצב ע"י BY.Creations`}</p>
          <div className="flex gap-1">
            <LinkCmp href={"https://batelyr224.wixsite.com/batelyuster"}>
              <GlobeSvg className="w-4 h-4 fill-mainWhite-0" />
            </LinkCmp>
          </div>
        </div>
        <div className="flex items-center w-full">
          <p className="w-[9rem]">{`נבנה ע"י Eran Michaeli`}</p>
          <div className="flex gap-1">
            <LinkCmp href={"https://github.com/P4t4m8n"}>
              <GitSvg />
            </LinkCmp>
            <LinkCmp href={"https://www.linkedin.com/in/michaelieran/"}>
              <LinkedinSvg className="w-4 h-4" />
            </LinkCmp>
          </div>
        </div>
      </div>
    </div>
  );
}
