import { url } from "inspector";

export const projects = [
  {
    num: "01",
    category: "AI Productivity",
    title: "PDF AI Assistant",
    description:
      "A cutting-edge application that transforms how you interact with PDF documents. Chat with your files using OpenAI's advanced AI, get instant answers, and extract key information effortlessly. Built with Next.js for performance, featuring secure Stripe Checkout, intelligent document indexing with Pinecone, and seamless user management via Clerk.",
    tags: [
      { name: "Next.js", url: "https://nextjs.org/docs" },
      { name: "TypeScript", url: "https://www.typescriptlang.org/docs/" },
      { name: "Tailwind CSS", url: "https://tailwindcss.com/docs" },
      { name: "OpenAI", url: "https://platform.openai.com/docs" },
      { name: "Pinecone", url: "https://docs.pinecone.io/" },
      { name: "Stripe", url: "https://stripe.com/docs" },
      { name: "Clerk", url: "https://clerk.com/docs" },
      { name: "Webhooks", url: "https://www.redhat.com/en/topics/automation/what-is-a-webhook" },
    ],
    img: "/projects/thumb1.webp",
    link: "https://chat-with-pdf-saas-ivory.vercel.app/",
    github: "https://github.com/marwenkouidhi/chat-with-pdf-saas",
  },
];
