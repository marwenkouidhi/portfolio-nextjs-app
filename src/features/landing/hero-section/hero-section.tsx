import { Button } from "@/components/ui/button";
import { DownloadIcon, GithubIcon, LinkedinIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  const links = [
    {
      icon: <GithubIcon />,
      path: "https://github.com/marwenkouidhi",
    },

    {
      icon: <LinkedinIcon />,
      path: "https://www.linkedin.com/in/marwenkouidhi/",
    },
  ];

  return (
    <section className="lg:snap-start lg:h-[calc(100vh-8rem)]  flex items-center mx-auto max-w-screen-lg px-4 xl:px-0">
      <div className="flex flex-wrap justify-center items-start gap-5">
        <Image
          height={200}
          width={200}
          alt="me"
          src="/me.png"
          className="rounded-full bg-muted p-3 object-contain"
        />
        <div className="flex flex-col xl:flex-row items-start gap-10">
          {/* Left Section: Introduction */}
          <div className="text-center xl:text-left order-2 xl:order-none space-y-6">
            <span className="text-lg font-semibold leading-0.5">Data Scientist</span>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Hello, I am <br />
              <span className="">Marwen KOUDHI</span>
            </h2>
            <p className="max-w-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rutrum massa ut
              volutpat facilisis.
            </p>

            <div className="flex flex-col xl:flex-row items-center justify-center xl:justify-start gap-4">
              {/* Download CV Button */}
              <Button className="flex items-center gap-3 px-6 py-3">
                <span>Download CV</span>
                <DownloadIcon />
              </Button>

              {/* Social Links */}
              <div className="flex gap-5">
                {links.map((link, index) => (
                  <Link legacyBehavior key={index} href={link.path} rel="noreferrer">
                    <a target="_blank" className="p-2 rounded-full text-background bg-foreground">
                      {link.icon}
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
