"use client";
import GradientButtonsRow from "@/components/GradientButtonsRow";
import React from "react";
import { motion } from "motion/react";
import { LampContainer } from "@/components/ui/lamp";
import Link from "next/link";
import { Button } from "@/components/ui/moving-border";

export default function AboutPage() {
  return (
    <section className="relative isolate overflow-hidden flex flex-col items-center justify-start min-h-screen w-[92%] px-6 py-12 md:py-16">
      {/* orange radial like testimonial page */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_left,rgba(255,94,0,0.65)_0%,transparent_55%)] pointer-events-none" />
      <LampContainer>
        <motion.h2
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="mt-2 bg-clip-text text-center text-5xl md:text-6xl font-light tracking-tight text-transparent bg-gradient-to-b from-orange-200 to-orange-500"
        >
          About Me
        </motion.h2>

        <div className="mt-10 w-full max-w-5xl">
          <div className="space-y-6">
            <p className="text-slate-200/90 text-lg md:text-xl leading-relaxed">
              I’m a front‑end developer focused on crafting clean, accessible, and performant interfaces. I work with HTML, CSS, JavaScript, TypeScript, React, Next.js, and Tailwind CSS to build engaging, user‑friendly web experiences.
            </p>
            <p className="text-slate-200/90 text-lg md:text-xl leading-relaxed">
              Before transitioning to development, I earned a Master’s in Human Resources and spent nearly five years as a tech recruiter. That background sharpened my communication, empathy, and problem‑solving—skills I now apply to understanding users and delivering thoughtful UI.
            </p>
            <ul className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-200/90">
              <li className="flex items-start gap-2"><span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-orange-400" /> Accessible, responsive layouts</li>
              <li className="flex items-start gap-2"><span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-orange-400" /> Component‑driven architecture</li>
              <li className="flex items-start gap-2"><span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-orange-400" /> Smooth micro‑interactions</li>
              <li className="flex items-start gap-2"><span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-orange-400" /> Performance‑minded styling</li>
            </ul>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link href="/images/Anita-Kumari_Resume.pdf" download aria-label="Download resume PDF">
                <Button borderRadius="1.75rem" className="w-auto px-6 py-3 text-base">Download CV</Button>
              </Link>
              <Link href="/contact" aria-label="Go to contact page">
                <Button borderRadius="1.75rem" className="w-auto px-6 py-3 text-base">Let’s Connect</Button>
              </Link>
            </div>
          </div>
        </div>

        <GradientButtonsRow className="mt-12 w-full max-w-5xl" />
      </LampContainer>
    </section>
  );
}
