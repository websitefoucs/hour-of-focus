//Links
import { SOCIAL_LINKS } from "@/constants/links";
//UI
import LinkCmp from "../UI/LinkCmp";
import React from "react";

/**
 * The `FollowUs` a server component renders a section with social media follow links.
 *
 * @component
 *
 * @returns {JSX.Element} The rendered follow us component.
 *
 * @remarks
 * This component includes:
 * - A title with the text "עקבו אחרינו".
 * - A navigation section with social media icons.
 *
 * @dependencies
 * - `items` array containing social media link and icon information.
 * - `LinkCmp` component for rendering links.
 *
 * @see {@link items}
 * @see {@link LinkCmp}
 */
export default function FollowUs() {
  return (
    <div className="col-span-2 md:col-span-1 md:order-2 md:w-fit md:justify-self-center">
      <h6 className="pb-6  text-right">עקבו אחרינו</h6>
      <nav className="flex gap-4 ">
        {SOCIAL_LINKS.map((item, index) => (
          <LinkCmp
            key={index}
            href={item.link}
            target="_blank"
            className="md:w-8 md:h-8 w-6 h-6"
          >
            <item.icon />
          </LinkCmp>
        ))}
      </nav>
    </div>
  );
}
