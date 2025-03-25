import React from "react";
import { ContactForm } from "./components/contact-form/contact-form";
import { ContactInfo } from "./components/contact-info/contact-info";
import {
  Section,
  SectionContent,
  SectionHeader,
  SectionHeading,
  SectionSubtitle,
  SectionTopline,
} from "../landing-section";

const ContactSection = () => {
  return (
    <Section
      id="contact"
      className="lg:snap-start lg:h-screen mx-auto max-w-screen-lg px-4 xl:px-0 "
    >
      <SectionHeader>
        <SectionTopline variant="secondary">Contact</SectionTopline>
        <SectionHeading>Let's Work Together</SectionHeading>
        <SectionSubtitle>
          Have a project in mind? Let's discuss how I can help bring your ideas to life.
        </SectionSubtitle>
      </SectionHeader>

      <SectionContent className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="col-span-2 order-2 md:order-1">
          <ContactForm />
        </div>
        <div className="self-start order-1 md:order-2">
          <ContactInfo />
        </div>
      </SectionContent>
    </Section>
  );
};

export default ContactSection;
