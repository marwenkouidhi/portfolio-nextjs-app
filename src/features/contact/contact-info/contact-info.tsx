"use client";

import { ContactInfoItemCard } from "./contact-info-item";
import { SocialLinks } from "./contact-form-social-links";
import { Github, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";

export const contactInfoData = {
  title: "Contact Information",
  description: "Feel free to reach out through any of these channels.",
  items: [
    {
      label: "Email",
      value: "marwenkouidhi@gmail.com",
      icon: Mail,
      link: "mailto:marwenkouidhi@gmail.com",
    },
    {
      label: "Phone",
      value: "(+216) 29 507 332",
      icon: Phone,
      link: "tel:+21629507332",
    },
    {
      label: "Location",
      value: "Monastir, Tunisia",
      icon: MapPin,
    },
  ],
  socialLinks: [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/marwenkoudhi",
      icon: Linkedin,
    },
    {
      name: "GitHub",
      url: "https://github.com/marwenkoudhi",
      icon: Github,
    },
    {
      name: "Twitter",
      url: "https://twitter.com/marwenkoudhi",
      icon: Twitter,
    },
  ],
};

export function ContactInfo() {
  return (
    <section className=" flex flex-col space-y-5">
      <div className="flex flex-col space-y-5">
        {contactInfoData.items.map((item, _) => (
          <ContactInfoItemCard key={_} item={item} />
        ))}
      </div>

      <div>
        <h3 className="text-sm font-medium text-muted-foreground mb-2">Connect with me</h3>
        <SocialLinks links={contactInfoData.socialLinks} />
      </div>
    </section>
  );
}
