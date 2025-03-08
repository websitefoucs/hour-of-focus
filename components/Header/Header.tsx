import { CONTACT_US } from "@/constants/links";
import LinkCmp from "../UI/LinkCmp";

import NavLinks from "./NavLinks";
import Image from "next/image";
import MobileHeader from "./MobileHeader";
import { LOGO } from "@/constants/images";

export default function Header() {
  return (
    <header className="flex justify-between items-center h-20 w-full px-[5%]">
      <Image
        src={LOGO}
        alt="logo"
        width={64}
        height={64}
        priority
        className="w-16 h-16"
      />

      <NavLinks />
      <LinkCmp
        styleMode="full"
        styleSize="large"
        href={CONTACT_US}
        className="mobile:hidden medium:w-32"
      >
        צור קשר
      </LinkCmp>
      <MobileHeader />
    </header>
  );
}
