"use client";
import Model from "../UI/Model";
import { usePathname } from "next/navigation";
import NavLink from "./NavLinkItem";
import { DirectionSvg } from "../UI/icons/Icons";

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-[1vw] items-center text-mainGray-800 nav-links">
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
            <div className="absolute right-3/4 top-8 bg-white-0 p-4 rounded-base flex flex-col gap-2 shadow-border z-50">
              <NavLink
                href="explain/volunteers"
                isHighlighted={pathname === "/explain/volunteers"}
              >
                מתנדבים
              </NavLink>
              <NavLink
                href="explain/students"
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
                <h6
                  className={
                    pathname.includes("explain")
                      ? "font-semibold"
                      : "font-normal"
                  }
                >
                  הסברים
                </h6>
                <DirectionSvg className="w-4 h-4" />
              </>
            ),
          }}
        ></Model>
      </div>
      <NavLink href="materiels" isHighlighted={pathname === "/materiels"}>
        חומרי לימוד למתנדבים
      </NavLink>
      <NavLink href="faq" isHighlighted={pathname === "faq"}>
        שאלות ותשובות
      </NavLink>
    </nav>
  );
}
