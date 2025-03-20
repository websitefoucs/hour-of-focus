import HighlightsList from "../UI/HighlightsList";
import VolunteersJoinCmp from "../UI/VolunteersJoinCmp";

export default function CallToAction() {
  return (
    <div className="flex flex-col justify-center items-center w-full self-center gap-gaps sm:px-sides-sm order-4">
      <VolunteersJoinCmp isHome={true} />
      <HighlightsList />
    </div>
  );
}
