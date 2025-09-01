"use client";
import Image from "next/image";
import GradientButtonsRow from "@/components/GradientButtonsRow";
import React from "react";
import { motion } from "motion/react";
import { LampContainer } from "../../components/ui/lamp";


export default function AboutPage() {
  return (
    <section className="relative isolate w overflow-hidden flex flex-col items-center justify-center min-h-screen w-[92%] px-6 py-16 md:py-24 ">
    <LampContainer>
      <motion.h2
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-blue-100 py-8 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        About Me
      </motion.h2>
      <div className="mt-10 space-y-6 text-center">
           <p className="text-slate-200/90  md:text-lg text-justify leading-relaxed">
             I am a passionate front-end development enthusiast with a strong
             foundation in HTML, CSS, JavaScript, typescript,react, next.js,            
              tailwind css. With a strong passion for problem-solving and an
             innate curiosity to learn, I am dedicated to build engaging &
             user-friendly web experiences. Before diving into web development, I
             earned a master’s degree in Human Resources and spent nearly 5 years
             working as a tech-recruiter, honing my interpersonal skills and
             understanding of diverse needs. This unique combination of
             experiences equips me with a creative yet structured approach to
             tackling challenges and continuously growing as a developer. Now,
             I’m excited to blend my past experience with my new skills to craft
            meaningful digital experiences.
          </p>
          </div>
           <GradientButtonsRow className="mt-10" />

    </LampContainer>
</section>
  )};
