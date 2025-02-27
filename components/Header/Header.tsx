import LinkCmp from "../UI/LinkCmp";

import NavLinks from "./NavLinks";
import Image from "next/image";

export default function Header() {
  return (
    <header className="flex justify-between items-center h-20 w-full px-32">
      <Image src="/imgs/logo.svg" alt="logo" width={64} height={64} />
      <NavLinks />
      <LinkCmp
        styleMode="full"
        styleSize="small"
        href={
          "https://docs.google.com/forms/d/e/1FAIpQLSf5bbkDHT4Cqpu25HmCzGGaUQo9R9WJvWCAygpF8I2PtCTO7A/viewform"
        }
      >
        צור קשר
      </LinkCmp>
    </header>
  );
}
