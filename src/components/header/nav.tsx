"use client";

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
  {
    label: "contact",
    path: "/contact",
  },
];

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-5">
      {links.map((link, _) => (
        <Link key={_} href={link.path} className={`${pathname === link.path ? "text-accent" : ""}  capitalize hover:text-accent font-medium`}>
          {link.label}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
