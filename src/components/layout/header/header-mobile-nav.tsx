"use client";
import React from "react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AlignRightIcon } from "lucide-react";
import { cn } from "@/lib/utils";

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
            <h1>Marwen.</h1>
          </Link>
          <nav className="flex flex-col items-center gap-5">
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
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
