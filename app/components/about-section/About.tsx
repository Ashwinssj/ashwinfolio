import React, { useEffect } from "react";
import Link from "next/link";
import { Syne } from "next/font/google";
import { useView } from "@/contexts/ViewContext";
import { useInView } from "react-intersection-observer";
import AnimatedBody from "../ui/AnimatedBody";
import AnimatedTitle from "../ui/AnimatedTitle";

const syne = Syne({ subsets: ["latin"] });

export default function About() {
  const { setSectionInView } = useView();

  const { ref, inView } = useInView({
    threshold: 0.2,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) setSectionInView("about");
  }, [inView, setSectionInView]);

  return (
    <section ref={ref} className="pt-24 md:pt-[150px]" id="about">
      <AnimatedTitle
        wordSpace={"mr-[14px]"}
        charSpace={"mr-[0.001em]"}
        className={`uppercase ${syne.className} antialiased text-4xl md:text-5xl xl:text-6xl font-bold opacity-80`}
      >
        I Provide AI solutions and Services for businesses in boosting thier Growth
      </AnimatedTitle>

      <div className="grid grid-cols-1 lg:grid-cols-[8.5fr_3.5fr] gap-8 mt-6">
        <div className="grid grid-cols-1 antialiased gap-6 text-white/80 text-xl md:text-2xl">
          <AnimatedBody className="leading-[34px] md:leading-[39px]">
          My passion lies in leveraging AI-driven solutions to enhance business
          operations and marketing strategies. From developing intelligent 
          chatbots to optimizing digital presence through AI-powered techniques, 
          I thrive on solving complex challenges that drive growth and efficiency.
          </AnimatedBody>
          <AnimatedBody className="leading-[34px] md:leading-[39px]">
          Since writing my first lines of code, I have continuously refined my 
          expertise in AI, machine learning, and data science, integrating these 
          skills with digital marketing, SEO, and CRM solutions. Along the way, 
          I&apos;ve also developed a keen eye for UI/UX design and graphic creation, 
          ensuring that technology and aesthetics go hand in hand.
          </AnimatedBody>
          <AnimatedBody className="inline leading-[34px] md:leading-[39px]">
          Every project presents a unique challenge, and I embrace each one as 
          an opportunity to innovate, learn, and deliver impactful solutions. Whether 
          it&apos;s streamlining business processes, improving customer engagement, 
          or building AI-powered automation, I take pride in crafting solutions that 
          businesses can truly rely on.
          </AnimatedBody>
          <AnimatedBody >
          <br className="hidden md:block" />
            <Link
              className="underline"
              href={
                "https://drive.google.com/file/d/1A00TlcsFREw7E5UezW8V026hOuiSzyYF/view?usp=drive_link"
              }
            >
              my resume
            </Link>
            .
          </AnimatedBody>
        </div>

        <div className="grid grid-cols-1 gap-4">
        <div>
            <AnimatedTitle
              wordSpace={"mr-[0.5ch]"}
              charSpace={"mr-[0.001em]"}
              className="font-bold antialiased text-xl md:text-2xl mb-2"
            >
              Machine Learning & Data Science
            </AnimatedTitle>
            <AnimatedBody className="text-white/60 text-base md:text-xl leading-8">
              Python, TensorFlow, Keras, PyTorch, Scikit-Learn, Pandas, NumPy,
              Matplotlib, Seaborn, Jupyter Notebook, Kubernetics.
            </AnimatedBody>
            
          </div>
          <div>
            <AnimatedTitle
              wordSpace={"mr-[0.5ch]"}
              charSpace={"mr-[0.001em]"}
              className="font-bold antialiased text-xl md:text-2xl mb-2"
            >
              Frontend Tools
            </AnimatedTitle>
            <AnimatedBody className="text-white/60 text-base md:text-xl leading-8">
              JavaScript(ES6+), React, Next.js, TypeScript, Redux, Redux
              Toolkit, React Query, HTML5, Git/GitHub, React Hook Form, Formik.
            </AnimatedBody>
            
          </div>
          <div>
            <AnimatedTitle
              wordSpace={"mr-[0.5ch]"}
              charSpace={"mr-[0.001em]"}
              className="font-bold antialiased text-xl md:text-2xl mb-2"
            >
              UI Libraries
            </AnimatedTitle>
            <AnimatedBody className="text-white/60 text-base md:text-xl leading-8">
              CSS3/SCSS/SASS, Tailwind CSS, Styled Components, Chakra UI, Framer
              Motion, Bootstrap, ReCharts.
            </AnimatedBody>
          </div>
          <div>
            <AnimatedTitle
              wordSpace={"mr-[0.5ch]"}
              charSpace={"mr-[0.001em]"}
              className="font-bold antialiased text-xl md:text-2xl mb-2"
            >
              Design Tools
            </AnimatedTitle>
            <AnimatedBody className="text-white/60 text-base md:text-xl leading-8">
              Figma, FigJam, UX Research, UI Design, Prototyping.
            </AnimatedBody>
          </div>
        </div>
      </div>
    </section>
  );
}
