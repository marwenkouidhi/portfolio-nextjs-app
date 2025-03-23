import { ContactForm } from "@/features/contact/contact-form/contact-form";
import { ContactInfo } from "@/features/contact/contact-info/contact-info";

const HireMePage = () => {
  return (
    <main className="mx-auto max-w-screen-lg px-4 xl:px-0">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ContactForm />
        <ContactInfo />
      </div>
    </main>
  );
};

export default HireMePage;
