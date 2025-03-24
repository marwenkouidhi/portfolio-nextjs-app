"use client";

import { ArrowDownRightIcon, ArrowLeft, ArrowRight, GithubIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import useWorkSection from "./use-work-section";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const WorkSection = () => {
  const { project, handleNext, handlePrev } = useWorkSection();
  const { num, title, description, img, tags, link, github } = project;
  return (
    <section className="mx-auto max-w-screen-lg px-4 xl:px-0 grid grid-cols-2 gap-8">
      <div className="space-y-8">
        <div className="space-y-3">
          <h1 className="text-6xl font-extrabold">{num}</h1>
          <h2>{title}</h2>
          <p className="text-sm">{description}</p>
        </div>
        <div className="flex space-x-5 text-xs">
          {tags.map((tag, _) => (
            <Badge key={_} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
        <Separator />
        <div className="flex space-x-5">
          <Link href={link} className="bg-muted p-4 rounded-full transition-all duration-700">
            <ArrowDownRightIcon />
          </Link>
          <Link href={github} className="bg-muted p-4 rounded-full transition-all duration-700">
            <GithubIcon />
          </Link>
        </div>
      </div>
      <div className="grid gap-3">
        <Image src={img} alt={title} height={500} width={500} />
        <div className="flex space-x-3 justify-self-end">
          <Button size="icon" className="cursor-pointer" onClick={handlePrev}>
            <ArrowLeft />
          </Button>
          <Button size="icon" className="cursor-pointer" onClick={handleNext}>
            <ArrowRight />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
