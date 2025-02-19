"use client";
import { Syne } from "next/font/google";
import Title from "../ui/Title";
import TimelineItem from "./TimelineItem";

const syne = Syne({ subsets: ["latin"] });

const TimelineData = [
  {
    companyImg: "/file.svg",
    jobTitle: "Artificial Intelligence Engineer",
    company: "BharatKa AI PVT. LTD.",
    jobType: "AI Engineer",
    duration: "Jan 2025",
    stuffIDid: [
      "Worked on the SellerAi Project, focusing on the development of the SellerAi base model and training the AI model.",
      "Developed a chatbot for the company that is now used to handle customer queries.",
    ],
  },
  {
    companyImg: "/co.svg",
    jobTitle: "Artificial Intelligence Intern",
    company: "Codec Technologies India",
    jobType: "Intership",
    duration: "Nov 2024 - Jan 2025",
    stuffIDid: [
      "AI Fundamentals - AI, Machine Learning, Deep Learning, and their applications.",
      "Python for AI – Data structures, NumPy, Pandas, data preprocessing, and visualization.",
      "I also helped interns grasp the basics of design enabling them to make meaningful contributions.",
    ],
    
  },
  {
    companyImg: "/aad.jpeg",
    jobTitle: "Graphic Designer",
    company: "AADI FOUNDATION",
    jobType: "Intership",
    duration: "Jan 2024 - May 2025",
    stuffIDid: [
      "Created designs for the company's social media platforms.",
      "Designed the company's logo and branding materials.",
      "Created UI designs for the company's website.",
    ],
    
  },
];

export default function Timeline() {
  return (
    <div className="mt-10 md:mt-[110px]">
      <Title> Work experience</Title>

      {/* THE THING, AFTER WHICH I WOULD DETERMINE THE HEIGHT */}
      <div className="flex mt-6 gap-4 pl-3">
        <div className="w-3 h-auto bg-gradient-to-b from-white to-transparent" />

        <div className="flex flex-col gap-10">
          {TimelineData.map((item, index) => (
            <TimelineItem
              key={index}
              companyImg={item.companyImg}
              jobTitle={item.jobTitle}
              company={item.company}
              jobType={item.jobType}
              duration={item.duration}
              stuffIDid={item.stuffIDid}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
