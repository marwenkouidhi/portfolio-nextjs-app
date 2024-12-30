import { DownloadIcon } from "lucide-react";

import Social from "@/components/social";
import { Button } from "@/components/ui/button";
import Photo from "@/components/photo";

export default function Home() {
  return (
    <div className="h-full mx-auto max-w-screen-lg px-4 xl:px-0">
      <div className="flex flex-col xl:flex-row items-center justify-between gap-8">
        {/* Left Section: Introduction */}
        <div className="text-center xl:text-left order-2 xl:order-none space-y-6">
          <span className="text-lg font-semibold text-accent">Data Scientist</span>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Hello, I am <br />
            <span className="">Marwen KOUDHI</span>
          </h2>
          <p className="max-w-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rutrum massa ut volutpat facilisis.</p>
          <div className="flex flex-col xl:flex-row items-center justify-center xl:justify-start gap-4">
            {/* Download CV Button */}
            <Button className="flex items-center gap-3 px-6 py-3">
              <span>Download CV</span>
              <DownloadIcon />
            </Button>
            {/* Social Links */}
            <Social />
          </div>
        </div>
        {/* Right Section: Photo Placeholder */}
        <div className="order-1 xl:order-none">
          <Photo />
        </div>
      </div>
    </div>
  );
}
