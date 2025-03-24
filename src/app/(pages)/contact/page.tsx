import { ContactForm } from "@/features/contact/contact-form/contact-form";
import { ContactInfo } from "@/features/contact/contact-info/contact-info";

const HireMePage = () => {
  return (
    <main className="mx-auto max-w-screen-lg px-4 xl:px-0">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="col-span-2 order-2 md:order-1">
          <ContactForm />
        </div>
        <div className="self-center justify-self-center order-1 md:order-2">
          <ContactInfo />
        </div>
      </div>
    </main>
  );
};

export default HireMePage;
