import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactFormConfig, ContactFormSchema } from "./contact-form-config";
import { toast } from "sonner";
import { sendMail } from "@/lib/smtp/send-email";

const useContactForm = () => {
  type FormValues = z.infer<typeof ContactFormSchema>;
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      [ContactFormConfig.email.name]: ContactFormConfig.email.defaultValue,
      [ContactFormConfig.firstname.name]: ContactFormConfig.firstname.defaultValue,
      [ContactFormConfig.lastname.name]: ContactFormConfig.lastname.defaultValue,
      [ContactFormConfig.subject.name]: ContactFormConfig.subject.defaultValue,
      [ContactFormConfig.message.name]: ContactFormConfig.message.defaultValue,
    },
  });

  const onSubmit = async (values: z.infer<typeof ContactFormSchema>) => {
    setIsSubmitting(true);
    console.log(values);

    try {
      const fullName = `${values["firstname"]} ${values["lastname"]}`.trim();
      const emailSubject = values["subject"];
      const messageText = values["message"];
      const senderEmail = values["email"];

      const text = `
        Message from: ${fullName} (${senderEmail})
        Subject: ${emailSubject}
        ${messageText}
      `.trim();

      const html = `
        <p><strong>Message from:</strong> ${fullName} (${senderEmail})</p>
        <p><strong>Subject:</strong> ${emailSubject}</p>
        <hr>
        <p>${messageText.replace(/\n/g, "<br>")}</p>
      `.trim();

      await sendMail({
        email: senderEmail,
        subject: `Contact Form: ${emailSubject}`,
        text: text,
        html: html,
      });

      toast("Thank you! Your message has been sent successfully");
      form.reset();
    } catch (error) {
      console.error("Email sending failed:", error);
      toast("There was a problem sending your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    form,
    onSubmit,
    isSubmitting,
  };
};

export default useContactForm;
