import { useState } from "react";

const useWorkSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Get current project
  const project = projects[activeIndex];

  // Navigation functions
  const handleNext = () => {
    setActiveIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  return {
    project,
    handleNext,
    handlePrev,
  };
};
export default useWorkSection;
const projects = [
  {
    num: "01",
    category: "Web Development",
    title: "E-commerce Platform",
    description:
      "A fully responsive online store with shopping cart functionality, user authentication, and payment processing integration. Built with React and Node.js.",
    tags: ["React", "Node.js", "MongoDB", "Stripe", "Responsive"],
    img: "/projects/thumb1.png",
    link: "#",
    github: "#",
  },
  {
    num: "02",
    category: "Mobile App",
    title: "Fitness Tracker",
    description:
      "Cross-platform mobile application for tracking workouts, nutrition, and progress. Features include customizable routines and data visualization.",
    tags: ["React Native", "Firebase", "Redux", "iOS", "Android"],
    img: "/projects/thumb2.png",
    link: "#",
    github: "#",
  },
  {
    num: "03",
    category: "Data Visualization",
    title: "Climate Dashboard",
    description:
      "Interactive dashboard displaying global climate data with filters for different metrics and time periods. Uses D3.js for advanced visualizations.",
    tags: ["D3.js", "Python", "Pandas", "API", "Data Analysis"],
    img: "/projects/thumb3.png",
    link: "#",
    github: "#",
  },
];
