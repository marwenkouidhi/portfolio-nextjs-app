"use client";

import { useScrollToAnchor } from "@/hooks/use-scroll-to-anchor";

const links = [
  {
    label: "services",
    anchor: "#services",
  },
  {
    label: "resume",
    anchor: "#resume",
  },
  {
    label: "work",
    anchor: "#work",
  },
];

const HeaderNav = () => {
  const scrollToAnchor = useScrollToAnchor();

  return (
    <nav className="flex flex-col gap-5 items-center xl:flex-row xl:text-sm">
      {links.map((link, index) => (
        <span
          key={index}
          className={
            "capitalize hover:underline font-medium transition-colors duration-200 cursor-pointer"
          }
          onClick={() =>
            scrollToAnchor(link.anchor, {
              containerId: "landing-container",
            })
          }
        >
          {link.label}
        </span>
      ))}
    </nav>
  );
};

export default HeaderNav;
