"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    label: "home",
    path: "/",
  },
  {
    label: "services",
    path: "/services",
  },
  {
    label: "resume",
    path: "/resume",
  },
  {
    label: "work",
    path: "/work",
  },
];

const HeaderNav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-5">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.path}
          className={cn(
            "capitalize hover:underline font-medium transition-colors duration-200",
            pathname === link.path && "underline"
          )}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
};

export default HeaderNav;
