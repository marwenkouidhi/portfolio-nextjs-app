import Social from "@/components/social";
import { Button } from "@/components/ui/button";
import { DownloadIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="h-full mx-auto max-w-screen-lg">
      <div className="flex flex-col xl:flex-row items-center justify-between">
        <div className="text-center">
          <span>Data Scientist</span>
          <h2>
            Hello I am <br />
            <span>Marwen KOUDHI</span>
          </h2>
          <p className="max-w-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rutrum massa ut volutpat facilisis</p>

          <div className="flex flex-col xl:flex-row justify-center items-center gap-5">
            <Button className="gap-3">
              <p>Download CV</p>
              <DownloadIcon />
            </Button>
            <Social />
          </div>
        </div>
        <div>photo</div>
      </div>
    </div>
  );
}
