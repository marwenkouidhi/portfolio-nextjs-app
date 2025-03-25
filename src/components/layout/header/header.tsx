"use client";

import React from "react";
import HeaderNav from "./header-nav";
import Link from "next/link";
import MobileNav from "./header-mobile-nav";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { useScrollToAnchor } from "@/hooks/use-scroll-to-anchor";

const Header = () => {
  const scrollToAnchor = useScrollToAnchor();

  return (
    <header className="xl:py-12 px-8 xl:px-0 max-w-screen-lg mx-auto flex items-center justify-between h-32">
      <Link href="/">
        <h1 className="text-3xl">Marwen.</h1>
      </Link>

      <div className="hidden xl:flex items-center gap-5">
        <HeaderNav />

        <Button
          className="cursor-pointer"
          onClick={() =>
            scrollToAnchor("#contact", {
              containerId: "landing-container",
            })
          }
        >
          Hire me
        </Button>
        <ModeToggle />
      </div>

      <MobileNav />
    </header>
  );
};

export default Header;
