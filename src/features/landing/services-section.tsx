import { ArrowDownRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const services = [
  {
    num: "01",
    title: "Data Science",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rutrum massa ut volutpat facilisis.",
    href: "",
  },
  {
    num: "02",
    title: "Data Engineering",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rutrum massa ut volutpat facilisis.",
    href: "",
  },
  {
    num: "03",
    title: "Web development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rutrum massa ut volutpat facilisis.",
    href: "",
  },
  {
    num: "04",
    title: "Automation",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rutrum massa ut volutpat facilisis.",
    href: "",
  },
];

const Services = () => {
  return (
    <section className="h-full mx-auto max-w-screen-lg px-4 xl:px-0  grid grid-cols-1 xl:grid-cols-2 gap-10">
      {services.map((service, _) => (
        <div key={_} className="group space-y-5">
          <div className="flex justify-between items-center">
            <h1 className="text-outline dark:text-outline-dark group-hover:text-outline-hover text-6xl transition-all duration-700">
              {service.num}
            </h1>
            <Link
              href={service.href}
              className="bg-muted group-hover:bg-accent p-4 group-hover:-rotate-45 rounded-full transition-all duration-700"
            >
              <ArrowDownRightIcon />
            </Link>
          </div>
          <h2>{service.title}</h2>
          <p>{service.description}</p>
          <div className="border-b" />
        </div>
      ))}
    </section>
  );
};

export default Services;
