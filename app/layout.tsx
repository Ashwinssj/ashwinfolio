import type { Metadata } from "next";
import { Syne } from "next/font/google";
import { Kumbh_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Header from "./components/header-section/Header";
import { ViewProvider } from "@/contexts/ViewContext";

const kumbhSans = Kumbh_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ashwin Benke - Artificial Intelligence Engineer and Data Scientist",
  description:
    "A passionate Artificial Intelligence Engineer and Data Scientist dedicated to leveraging AI-driven solutions for business productivity and innovation. With expertise in machine learning, deep learning, and data science, he has worked on projects ranging from AI-powered e-commerce platforms to predictive analytics and image generation using state-of-the-art models like Stable Diffusion and Fooocus AI.",
    keywords: [
      "Artificial Intelligence",
      "Machine Learning",
      "Data Science",
      "AI Engineer",
      "Deep Learning",
      "Python Developer",
      "Computer Vision",
      "Natural Language Processing",
      "AI Automation",
      "Tech Innovator"
  ],
  openGraph: {
    title: "Ashwin Benke - Artificial Intelligence Engineer and Data Scientist",
    description:
      "Artificial Intelligence Engineer and Data Scientist dedicated to leveraging AI-driven solutions for business productivity and innovation. With expertise in machine learning, deep learning, and data science, he has worked on projects ranging from AI-powered e-commerce platforms to predictive analytics and image generation using state-of-the-art models like Stable Diffusion and Fooocus AI.",
    url: "https://www.linkedin.com/in/ashwin-benke-4015b1189/",
    siteName: "www.linkedin.com/in/ashwin-benke-4015b1189/",
    images: [
      
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashwin Benke - Artificial Intelligence Engineer and Data Scientist",
    description:
      "Artificial Intelligence Engineer and Data Scientist dedicated to leveraging AI-driven solutions for business productivity and innovation. With expertise in machine learning, deep learning, and data science, he has worked on projects ranging from AI-powered e-commerce platforms to predictive analytics and image generation using state-of-the-art models like Stable Diffusion and Fooocus AI.",
    creator: "@AshwinBenke",
    images: [],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      "max-image-preview": "large",
    },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${kumbhSans.className} max-w-[90%] xl:max-w-[1223px] w-full mx-auto overflow-x-hidden`}
      >
        <>
          <ViewProvider>
            <Header />
            {children}
          </ViewProvider>
          <Analytics />
          <SpeedInsights />
        </>
      </body>
    </html>
  );
}
