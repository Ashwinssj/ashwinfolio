import React, { useEffect } from "react";
import FolioCard from "./FolioCard";
import Title from "../ui/Title";
import { useView } from "@/contexts/ViewContext";

// @ts-ignore
import "intersection-observer";
import { useInView } from "react-intersection-observer";
import Timeline from "./Timeline";

export default function Works() {
  const { setSectionInView } = useView();

  const works = [
    {
      title: "Academy Management Android for PSA Nashik",
      // gitLink: "https://github.com/adex-hub/url-shortening-api-landing",
      liveLink: "https://psanashik.in/",
      about:
        "PSA Nashik is Sports Academy in Nashik, Maharashtra. This project is an android app for the academy to manage their students, staff, and courses. It features a clean, user-friendly interface for managing students, staff, and courses, and allows the academy to send notifications to students and staff.",
      stack: ["next.js", "typescript", "framer motion", "tailwindcss", "android","Java","Laravel","PHP"],
      img: "/psa.png",
    },
    {
      title: "SellerAI",
      //gitLink: "https://github.com/adex-hub/where-in-the-world",
      liveLink: "https://sellerai.in/",
      about:
        "SellerAi is an AI-powered platform designed to enhance e-commerce sales by providing advanced tools for sellers on platforms like Amazon, Flipkart, and Shopify. It offers a comprehensive suite of features aimed at optimizing product listings, generating creative content, and streamlining various aspects of online selling.",
      stack: ["react", "react-router", "javascript", "tailwindcss", "next.js","PHP","Laravel","Python","Pipeline"],
      img: "/sellerai.png",
    },
    {
      title: "SEO Analysis and Optimization For Global Study Aboard Consultancy",
      liveLink: "https://www.globaleducationconsultancy.in/",
      about:
        "This project focuses on AI-powered image generation, transformation, and enhancement using prompt-based image synthesis techniques. It employs advanced Fooocus AI models to generate images from text prompts while supporting image variation, face swapping, and upscaling functionalities. Users can provide specific image prompts and control weights to fine-tune the results.",
      stack: ["SEO", "Boosting", "Lead Generation", "Blogs", "Digital Marketing"],
      img: "/global.png",
    },
    {
      title: "Facultie Development Program for JIT College of Engineering, Nashik",
      liveLink: "https://colab.research.google.com/drive/1ae7LRU8RcAHgc6fxx3ZegY5DAtp0tB-X?usp=sharing",
      about:
        "This program is designed to empower teachers by enhancing their skills in the field of Artificial Intelligence (AI). It covers a wide range of topics, including AI fundamentals, data analysis with AI, AI for question generation, and AI in research. The program includes hands-on projects and practical offline acknowledgments to ensure comprehensive learning.",
      stack: [],
      img: "/jit.png",
    },
    {
      title: "Exploratory Data Analysis (EDA) on Car Specifications and Pricing",
      gitLink: "https://github.com/Ashwinssj/Exploratory-Data-Analysis-EDA-on-Car-Specifications-and-Pricing",
      liveLink: "https://colab.research.google.com/drive/19Z1k4wGAzsP2EwA0OCg5OPRa6StlhO-K?usp=sharing",
      about:
         "This project involves performing Exploratory Data Analysis (EDA) on a dataset containing car specifications and pricing details. The analysis includes data cleaning, statistical analysis, and visualization to gain insights into factors affecting car prices and performance. The project focuses on identifying data distributions, outliers, and correlations between key attributes like horsepower, fuel efficiency, and price.",
       stack: ["Python", "pandas", "numpy", "matplotlib", "seaborn", "scipy"],
       img: "/eda.png",
     },
    {
      title: "Car Price Prediction Using Machine Learning",
      gitLink: "https://github.com/Ashwinssj/Car-Price-Prediction-Using-Machine-Learning",
      liveLink: "https://colab.research.google.com/drive/1i0Vt6WgYp_2OXcGifKg29gxpyvB_g5Nk?usp=sharing",
      about:
        "This project develops a machine learning model to predict car prices based on various features such as engine specifications, fuel type, transmission, and mileage. The dataset is preprocessed, analyzed, and used to train regression models that estimate car prices based on input features.",
      stack: ["Python", "pandas", "numpy", "matplotlib", "seaborn", "scipy", "scikit-learn"],
      img: "/car.png",
    },
    {
      title: "Image Genration with Stable Diffusion AI",
      gitLink: "https://github.com/Ashwinssj/Text-to-image-generator",
      liveLink: "https://colab.research.google.com/drive/1ae7LRU8RcAHgc6fxx3ZegY5DAtp0tB-X?usp=sharing",
      about:
        "This project implements a Text-to-Image Generator using the Stable Diffusion model, allowing users to generate high-quality images from textual descriptions. It leverages pre-trained deep learning models to create AI-generated images based on user-provided prompts. The project is designed with an interactive interface using Gradio, making it user-friendly for deployment and experimentation.",
      stack: ["Python", "PIL", "Gradio", "diffusers", "StableDiffusionPipeline", "torch"],
      img: "/text-to-img.png",
    },
    {
      title: "AI Image Generation and Manipulation with ScadePro",
      gitLink: "https://github.com/Ashwinssj/AI-Image-Generation-and-Manipulation-with-Scade",
      liveLink: "https://app.scade.pro/shared-app/0e12df3eb783e7",
      about:
        "This project focuses on AI-powered image generation, transformation, and enhancement using prompt-based image synthesis techniques. It employs advanced Fooocus AI models to generate images from text prompts while supporting image variation, face swapping, and upscaling functionalities. Users can provide specific image prompts and control weights to fine-tune the results.",
      stack: ["Workflows", "Finetuning", "UI design", "Python", "ScadePro", "Fooocus AI"],
      img: "/scade.png",
    },
  ];

  const { ref, inView } = useInView({
    threshold: 0.1,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) setSectionInView("work");
  }, [inView, setSectionInView]);

  return (
    <section
      className="flex flex-col gap-6 md:gap-10 pt-[110px]"
      ref={ref}
      id="work"
    >
      <Title>Projects</Title>
      {works.map((work, index) => (
        <FolioCard
          key={index}
          img={work.img}
          title={work.title}
          gitLink={work.gitLink}
          liveLink={work.liveLink}
          about={work.about}
          stack={work.stack}
        />
      ))}

      <Timeline />
    </section>
  );
}
