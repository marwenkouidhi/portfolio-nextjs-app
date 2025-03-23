import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ContactFormConfig, ContactFormSchema } from "./contact-form-config";
import { toast } from "sonner";

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
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      toast("Thank you! Your message has been sent successfully");
      form.reset();
    } catch (error) {
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
