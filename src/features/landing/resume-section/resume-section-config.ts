import { Flag, Languages, Mail, Phone, User } from "lucide-react";
import type { AboutData, TimelineData } from "./resume-section-types";

export const aboutData: AboutData = {
  title: "About Me",
  description:
    "Passionate data scientist with a knack for turning complex data into actionable insights.",
  infos: [
    { field: "Name", value: "Marwen KOUDHI", icon: User },
    { field: "Phone", value: "(+216) 29 507 332", icon: Phone },
    { field: "Email", value: "marwenkouidhi@gmail.com", icon: Mail },
    { field: "Nationality", value: "Tunisian", icon: Flag },
    { field: "Languages", value: "English, French, Arabic", icon: Languages },
  ],
};

export const experienceData: TimelineData = {
  title: "My Experience",
  description:
    "A journey through data science internships, each contributing to my growing expertise.",
  items: [
    {
      title: "Data Science Intern",
      subtitle: "NA Consulting, Monastir, Tunisia",
      duration: "FEB 2024 — JUL 2024",
      logo: "/nac.png",
      description: "Developing predictive models for client behavior analysis.",
    },
    {
      title: "Data Science Intern",
      subtitle: "PROXYM-IT, Sousse, Tunisia",
      duration: "JUL 2023 — SEP 2023",
      logo: "/proxym.png",
      description: "Implemented machine learning algorithms for process optimization.",
    },
    {
      title: "Data Science Intern",
      subtitle: "WAND, Monastir, Tunisia",
      duration: "JUN 2022 — AUG 2022",
      logo: "",
      description: "Conducted data analysis to improve product recommendations.",
    },
    {
      title: "Web Developer Intern",
      subtitle: "FSM, Monastir, Tunisia",
      duration: "MAR 2021 — JUL 2021",
      logo: "/fsm.png",
      description: "Developed responsive web applications using modern frameworks.",
    },
  ],
};

export const educationData: TimelineData = {
  title: "My Education",
  description:
    "A solid foundation in computer science with a focus on data science and software engineering.",
  items: [
    {
      title: "Diploma in Software Engineering specializing in Data Science",
      subtitle: "ESPRIT, Tunis, Tunisia",
      duration: "SEP 2021 — SEP 2024",
      logo: "/esprit.png",
      description:
        "Focused on advanced data science techniques and software engineering principles.",
    },
    {
      title: "Computer Science Bachelor's Degree",
      subtitle: "FSM, Monastir, Tunisia",
      duration: "SEP 2017 — JUN 2021",
      logo: "/fsm.png",
      description: "Gained a strong foundation in computer science and programming fundamentals.",
    },
    {
      title: "High School Diploma in Mathematics",
      subtitle: "Ksibet El Mediouni's High School, Monastir, Tunisia",
      duration: "SEP 2014 — JUN 2017",
      logo: "",
      description: "Excelled in mathematics, laying the groundwork for future technical studies.",
    },
  ],
};
