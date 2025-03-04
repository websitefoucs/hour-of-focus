"use client";
import Model from "../UI/Model";
import { usePathname } from "next/navigation";
import NavLink from "./NavLinkItem";
import { DirectionSvg } from "../UI/icons/Icons";

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-10 items-center text-mainGray-800 nav-links mobile:hidden text-18">
      <NavLink href="/" isHighlighted={pathname === "/"}>
        דף הבית
      </NavLink>
      <NavLink href="/about" isHighlighted={pathname === "/about"}>
        אודות
      </NavLink>

      <div>
        <Model
          withOverlay={false}
          model={
            <div className="absolute right-3/4 top-8 bg-mainWhite-0 p-4 rounded-base flex flex-col gap-2 shadow-border z-50">
              <NavLink
                href="/explain/volunteers"
                isHighlighted={pathname === "/explain/volunteers"}
              >
                מתנדבים
              </NavLink>
              <NavLink
                href="/explain/students"
                isHighlighted={pathname === "/explain/students"}
              >
                תלמידים
              </NavLink>
            </div>
          }
          button={{
            props: {
              className: "flex items-center gap-1",
            },
            content: (
              <>
                <p
                  className={
                    pathname.includes("explain")
                      ? "font-semibold"
                      : "font-normal"
                  }
                >
                  הסברים
                </p>
                <DirectionSvg className="w-4 h-4" />
              </>
            ),
          }}
        ></Model>
      </div>
      <NavLink href="/materials" isHighlighted={pathname === "/materials"}>
        חומרי לימוד למתנדבים
      </NavLink>
      <NavLink
        href="/faq/students"
        isHighlighted={
          pathname === "/faq/students" || pathname === "/faq/volunteers"
        }
      >
        שאלות ותשובות
      </NavLink>
    </nav>
  );
}
