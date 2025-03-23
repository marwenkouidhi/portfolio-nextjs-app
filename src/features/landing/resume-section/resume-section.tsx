"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Briefcase, GraduationCap, User } from "lucide-react";
import { AboutSection } from "./components/about-section";
import { ExperienceSection } from "./components/experience-section";
import { EducationSection } from "./components/education-section";
import { aboutData, educationData, experienceData } from "./resume-section-config";

const ResumeSection = () => {
  return (
    <section className="h-full mx-auto max-w-screen-lg px-4 xl:px-0">
      <Tabs defaultValue="about">
        <TabsList>
          <TabsTrigger value="about" className="flex items-center justify-center space-x-2">
            <User className="h-5 w-5" />
            <span>{aboutData.title}</span>
          </TabsTrigger>
          <TabsTrigger value="experience" className="flex items-center justify-center space-x-2">
            <Briefcase className="h-5 w-5" />
            <span>{experienceData.title}</span>
          </TabsTrigger>
          <TabsTrigger value="education" className="flex items-center justify-center space-x-2">
            <GraduationCap className="h-5 w-5" />
            <span>{educationData.title}</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="about">
          <AboutSection data={aboutData} />
        </TabsContent>
        <TabsContent value="experience">
          <ExperienceSection data={experienceData} />
        </TabsContent>
        <TabsContent value="education">
          <EducationSection data={educationData} />
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default ResumeSection;
