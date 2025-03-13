import HighlightsList from "../UI/HighlightsList";
import VolunteersJoinCmp from "../UI/VolunteersJoinCmp";

export default function CallToAction() {
  return (
    <div className="flex flex-col justify-center items-center w-[53rem] mobile:w-full self-center gap-10 home-layout-call-top-action">
      <VolunteersJoinCmp isHome={true} />
      <HighlightsList />
    </div>
  );
}
