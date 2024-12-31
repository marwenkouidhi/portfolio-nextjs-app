"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, User, Phone, Mail, Flag, Languages, Calendar } from "lucide-react";

const about = {
  title: "About Me",
  description: "Passionate data scientist with a knack for turning complex data into actionable insights.",
  infos: [
    { field: "Name", value: "Marwen KOUDHI", icon: User },
    { field: "Phone", value: "(+216) 29 507 332", icon: Phone },
    { field: "Email", value: "marwenkouidhi@gmail.com", icon: Mail },
    { field: "Nationality", value: "Tunisian", icon: Flag },
    { field: "Languages", value: "English, French, Arabic", icon: Languages },
  ],
};

const experience = {
  title: "My Experience",
  description: "A journey through data science internships, each contributing to my growing expertise.",
  items: [
    {
      position: "Data Science Intern",
      duration: "FEB 2024 — JUL 2024",
      company: "NA Consulting, Monastir, Tunisia",
      logo: "/nac.png",
      description: "Developing predictive models for client behavior analysis.",
    },
    {
      position: "Data Science Intern",
      duration: "JUL 2023 — SEP 2023",
      company: "PROXYM-IT, Sousse, Tunisia",
      logo: "/proxym.png",
      description: "Implemented machine learning algorithms for process optimization.",
    },
    {
      position: "Data Science Intern",
      duration: "JUN 2022 — AUG 2022",
      company: "WAND, Monastir, Tunisia",
      logo: "",
      description: "Conducted data analysis to improve product recommendations.",
    },
    {
      position: "Web Developer Intern",
      duration: "MAR 2021 — JUL 2021",
      company: "FSM, Monastir, Tunisia",
      logo: "/fsm.png",
      description: "Developed responsive web applications using modern frameworks.",
    },
  ],
};

const education = {
  title: "My Education",
  description: "A solid foundation in computer science with a focus on data science and software engineering.",
  items: [
    {
      degree: "Diploma in Software Engineering specializing in Data Science",
      duration: "SEP 2021 — SEP 2024",
      institution: "ESPRIT, Tunis, Tunisia",
      logo: "/esprit.png",
      description: "Focused on advanced data science techniques and software engineering principles.",
    },
    {
      degree: "Computer Science Bachelor's Degree",
      duration: "SEP 2017 — JUN 2021",
      institution: "FSM, Monastir, Tunisia",
      logo: "/fsm.png",
      description: "Gained a strong foundation in computer science and programming fundamentals.",
    },
    {
      degree: "High School Diploma in Mathematics",
      duration: "SEP 2014 — JUN 2017",
      institution: "Ksibet El Mediouni's High School, Monastir, Tunisia",
      logo: "",
      description: "Excelled in mathematics, laying the groundwork for future technical studies.",
    },
  ],
};

const sections = [
  { data: about, icon: User },
  { data: experience, icon: Briefcase },
  { data: education, icon: GraduationCap },
];

const Resume = () => {
  return (
    <section className="h-full mx-auto max-w-screen-lg px-4 xl:px-0">
      <Tabs defaultValue={about.title}>
        <TabsList>
          {sections.map(({ data, icon: Icon }, index) => (
            <TabsTrigger key={index} value={data.title} className="flex items-center justify-center space-x-2">
              <Icon className="h-5 w-5" />
              <span>{data.title}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value={about.title}>
          <AboutSection data={about} />
        </TabsContent>
        <TabsContent value={experience.title}>
          <ExperienceSection data={experience} />
        </TabsContent>
        <TabsContent value={education.title}>
          <EducationSection data={education} />
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default Resume;

const AboutSection = ({ data }: { data: typeof about }) => (
  <Card className="border-none">
    <CardHeader>
      <CardTitle className="text-3xl font-bold text-primary">{data.title}</CardTitle>
      <CardDescription className="text-lg text-secondary-foreground">{data.description}</CardDescription>
    </CardHeader>
    <CardContent>
      <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {data.infos.map((info, index) => (
          <motion.div
            key={index}
            className="flex items-center space-x-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <info.icon className="h-5 w-5 text-primary" />
            <div>
              <dt className="text-sm font-medium text-muted-foreground">{info.field}</dt>
              <dd className="text-sm font-semibold text-foreground">{info.value}</dd>
            </div>
          </motion.div>
        ))}
      </dl>
    </CardContent>
  </Card>
);

const ExperienceSection = ({ data }: { data: typeof experience }) => (
  <Card className="border-none">
    <CardHeader>
      <CardTitle className="text-3xl font-bold text-primary">{data.title}</CardTitle>
      <CardDescription className="text-lg text-secondary-foreground">{data.description}</CardDescription>
    </CardHeader>
    <CardContent>
      <ul className="space-y-8">
        {data.items.map((item, index) => (
          <motion.li
            key={index}
            className="flex gap-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="space-y-2">
              <h3 className="text-lg font-semibold leading-none text-foreground">{item.position}</h3>
              <p className="text-sm text-muted-foreground flex items-center">
                <Briefcase className="h-4 w-4 mr-1" /> {item.company}
              </p>
              <p className="text-sm text-muted-foreground flex items-center">
                <Calendar className="h-4 w-4 mr-1" /> {item.duration}
              </p>
              <p className="text-sm text-secondary-foreground">{item.description}</p>
              <div className="border-b w-full border-primary" />
            </div>
          </motion.li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

const EducationSection = ({ data }: { data: typeof education }) => (
  <Card className="border-none">
    <CardHeader>
      <CardTitle className="text-3xl font-bold text-primary">{data.title}</CardTitle>
      <CardDescription className="text-lg text-secondary-foreground">{data.description}</CardDescription>
    </CardHeader>
    <CardContent>
      <ul className="space-y-8">
        {data.items.map((item, index) => (
          <motion.li
            key={index}
            className="flex gap-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="space-y-2">
              <h3 className="text-lg font-semibold leading-none text-foreground">{item.degree}</h3>
              <p className="text-sm text-muted-foreground flex items-center">
                <GraduationCap className="h-4 w-4 mr-1" /> {item.institution}
              </p>
              <p className="text-sm text-muted-foreground flex items-center">
                <Calendar className="h-4 w-4 mr-1" /> {item.duration}
              </p>
              <p className="text-sm text-secondary-foreground">{item.description}</p>
              <div className="border-b w-full border-primary" />
            </div>
          </motion.li>
        ))}
      </ul>
    </CardContent>
  </Card>
);
