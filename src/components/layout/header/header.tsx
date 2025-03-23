"use client";

import React from "react";
import HeaderNav from "./header-nav";
import Link from "next/link";
import MobileNav from "./header-mobile-nav";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 px-8 xl:px-0   max-w-screen-lg mx-auto flex items-center justify-between">
      <Link href="/">
        <h1 className="text-3xl">Marwen.</h1>
      </Link>

      <div className="hidden xl:flex items-center gap-5">
        <HeaderNav />

        <Button asChild>
          <Link href="/contact">Hire me</Link>
        </Button>
        <ModeToggle />
      </div>

      <MobileNav />
    </header>
  );
};

export default Header;
