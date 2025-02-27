import { CONTACT_US } from "@/constants/links";
import LinkCmp from "../UI/LinkCmp";

import NavLinks from "./NavLinks";
import Image from "next/image";

export default function Header() {
  return (
    <header className="flex justify-between items-center h-20 w-full px-32">
      <Image src="/imgs/logo.svg" alt="logo" width={64} height={64} />
      <NavLinks />
      <LinkCmp styleMode="full" styleSize="small" href={CONTACT_US}>
        צור קשר
      </LinkCmp>
    </header>
  );
}
