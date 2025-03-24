"use client";
import React from "react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { AlignRightIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useScrollToAnchor } from "@/hooks/use-scroll-to-anchor";
import HeaderNav from "./header-nav";

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

const MobileNav = () => {
  const scrollToAnchor = useScrollToAnchor();

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
          <HeaderNav />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
