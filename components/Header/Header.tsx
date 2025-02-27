import Button from "../UI/Button";

import NavLinks from "./NavLinks";
import Image from "next/image";

export default function Header() {
  return (
    <header className="flex justify-between items-center h-20 w-full px-32">
      <Image src="/imgs/logo.svg" alt="logo" width={166} height={157} />
      <NavLinks />
      <Button styleMode="full" styleSize="small">
        צור קשר
      </Button>
    </header>
  );
}
