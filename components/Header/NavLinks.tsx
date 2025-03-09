"use client";
import { usePathname } from "next/navigation";
import NavLink from "./NavLinkItem";
import RegularExplainNavLink from "./Regular/RegularExplainNavLink";
import {
  ABOUT_PAGE_LINK,
  FAQ_STUDENTS_PAGE_LINK,
  FAQ_VOLUNTEERS_PAGE_LINK,
  HOME_PAGE_LINK,
  MATERIALS_PAGE_LINK,
} from "@/constants/links";
import MobileExplainNavLink from "./Mobile/MobileExplainNavLink";

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-10 medium:gap-4 items-center text-mainGray-800 nav-links mobile:hidden text-18">
      <NavLink
        href={HOME_PAGE_LINK}
        isHighlighted={pathname === HOME_PAGE_LINK}
      >
        דף הבית
      </NavLink>
      <NavLink
        href={ABOUT_PAGE_LINK}
        isHighlighted={pathname === ABOUT_PAGE_LINK}
      >
        אודות
      </NavLink>

      <RegularExplainNavLink pathname={pathname} />
      <MobileExplainNavLink pathname={pathname} />
      <NavLink
        href={MATERIALS_PAGE_LINK}
        isHighlighted={pathname === MATERIALS_PAGE_LINK}
      >
        חומרי לימוד למתנדבים
      </NavLink>
      <NavLink
        href={FAQ_STUDENTS_PAGE_LINK}
        isHighlighted={
          pathname === FAQ_STUDENTS_PAGE_LINK ||
          pathname === FAQ_VOLUNTEERS_PAGE_LINK
        }
      >
        שאלות ותשובות
      </NavLink>
    </nav>
  );
}
