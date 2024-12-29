"use client";

import React from "react";
import { ModeToggle } from "../mode-toggle";
import { Button } from "../ui/button";
import Nav from "./nav";
import Link from "next/link";
import MobileNav from "./mobile-nav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 px-8 xl:px-0   max-w-screen-lg mx-auto flex items-center justify-between">
      <Link href="/">
        <h1>
          Marwen<span className="text-accent">.</span>
        </h1>
      </Link>

      <div className="hidden xl:flex items-center gap-5">
        <Nav />
        <Button variant="secondary">Hire me</Button>
        <ModeToggle />
      </div>

      <MobileNav />
    </header>
  );
};

export default Header;
