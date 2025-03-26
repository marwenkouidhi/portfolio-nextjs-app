import type { Metadata } from "next";
import { Fira_Sans, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import Header from "@/components/layout/header/header";
import Footer from "@/components/layout/footer/footer";
import { Analytics } from "@vercel/analytics/react";
import "../globals.css";

const geistSans = Fira_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Marwen Koudhi | Data Science & Software Engineering Portfolio",
    template: "%s | Marwen Koudhi",
  },
  description:
    "Recent Software Engineering Graduate specializing in Data Science. Explore my projects, skills, and professional experience in machine learning, data analysis, and web development.",
  keywords: [
    "Marwen Koudhi",
    "Data Scientist",
    "Software Engineer",
    "Tunisia",
    "ESPRIT Graduate",
    "Machine Learning",
    "Data Analysis",
    "Python Developer",
    "Next.js Portfolio",
    "Web Developer",
  ],
  authors: [{ name: "Marwen Koudhi", url: "https://marwenkoudhi.com" }],
  creator: "Marwen Koudhi",
  publisher: "Marwen Koudhi",
  metadataBase: new URL("https://marwenkoudhi.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Marwen Koudhi | Data Science Portfolio",
    description:
      "Software Engineering Graduate specializing in Data Science. Explore my projects and technical skills.",
    url: "https://marwenkoudhi.com",
    siteName: "Marwen Koudhi Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Marwen Koudhi Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${jetBrainsMono.variable}   antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
          <Toaster />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
