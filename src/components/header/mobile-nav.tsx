"use client";
import React from "react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AlignRightIcon } from "lucide-react";

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

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <div className="xl:hidden">
      <Sheet>
        <SheetTitle>
          <SheetTrigger>
            <AlignRightIcon size={40} />
          </SheetTrigger>
        </SheetTitle>
        <SheetContent className="flex flex-col items-center gap-20 pt-20 ">
          <Link href="/">
            <h1>
              Marwen<span className="text-accent">.</span>
            </h1>
          </Link>

          <nav className="flex flex-col items-center gap-5 ">
            {links.map((link, _) => (
              <Link
                key={_}
                href={link.path}
                className={`${pathname === link.path ? "text-accent" : "text-foreground"}  capitalize hover:text-accent font-medium`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
