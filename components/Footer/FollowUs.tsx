import { FacebookSvg, GitSvg, LinkedinSvg } from "../UI/icons/Icons";
import LinkCmp from "../UI/LinkCmp";

export default function FollowUs() {
  return (
    <div className="w-56 grid content-around h-full">
      <div>
        <h6>עקבו אחרינו</h6>
        <nav className="flex items-center ">
          <LinkCmp href={"/linkedin"}>
            <LinkedinSvg className="w-8 h-8" />
          </LinkCmp>
          <LinkCmp href={"/facebook"}>
            <FacebookSvg className="w-7 h-7" />
          </LinkCmp>
        </nav>
      </div>

      <div className="text-sm flex flex-col items-center">
        <div className="flex items-center w-full justify-between">
          <p className="w-[9rem]">{`נבנה ע"י Eran Michaeli`}</p>
          <LinkCmp href={"/github"}>
            <GitSvg />
          </LinkCmp>
          <LinkCmp href={"/linkedin"}>
            <LinkedinSvg className="w-8 h-8" />
          </LinkCmp>
        </div>
        <div className="flex items-center w-full justify-between">
          <p className="w-[9rem]">{`עוצב ע"י BY.Creations`}</p>
          <LinkCmp href={"/facebook"}>
            <FacebookSvg className="w-8 h-8" />
          </LinkCmp>
          <LinkCmp href={"/linkedin"}>
            <LinkedinSvg className="w-8 h-8" />
          </LinkCmp>
        </div>
      </div>
    </div>
  );
}
