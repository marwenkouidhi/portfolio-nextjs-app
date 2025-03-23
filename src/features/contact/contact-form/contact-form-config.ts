import { InputTypes } from "@/types/input.types";
import { z } from "zod";

export const ContactFormSchema = z.object({
  firstname: z.string().min(2, { message: "First Name must be at least 2 characters." }),
  lastname: z.string().min(2, { message: "Last Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export const ContactFormConfig = {
  firstname: {
    name: "firstname",
    label: "First Name",
    placeholder: "Your full first name",
    type: InputTypes.TEXT,
    defaultValue: "Marwen",
    className: "col-span-1",
  },
  lastname: {
    name: "lastname",
    label: "Last Name",
    placeholder: "Your full last name",
    type: InputTypes.TEXT,
    defaultValue: "Kouidhi",
    className: "col-span-1",
  },
  email: {
    name: "email",
    label: "Email",
    placeholder: "Your email",
    type: InputTypes.TEXT,
    defaultValue: "marwenkouidhi@gmail.com",
    className: "col-span-full",
  },
  subject: {
    name: "subject",
    label: "Subject",
    placeholder: "Subject",
    type: InputTypes.TEXT,
    defaultValue: "test subject",
    className: "col-span-full",
  },
  message: {
    name: "message",
    label: "Message",
    placeholder: "Your message",
    type: InputTypes.TEXTAREA,
    defaultValue: "this is test message",
    className: "col-span-full rows-6",
  },
};
