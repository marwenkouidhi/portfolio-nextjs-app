"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";

const links = [
  {
    label: "services",
    path: "#services",
  },
  {
    label: "resume",
    path: "#resume",
  },
  {
    label: "work",
    path: "#work",
  },
];

const HeaderNav = () => {
  return (
    <nav className="flex gap-5 text-sm">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.path}
          className={cn("capitalize hover:underline font-medium transition-colors duration-200")}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
};

export default HeaderNav;
