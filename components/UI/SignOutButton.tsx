import { signOut } from "@/lib/actions/auth";
import Button from "./Button";

export default function SignOutButton() {
  return (
    <form action={signOut}>
      <Button
        styleSize="small"
        styleMode="coloredBorder"
        className="border-mainGray-600 hover:border-mainGray-800 text-mainGray-600 hover:font-bold "
        type="submit"
      >
        התנתק
      </Button>
    </form>
  );
}
