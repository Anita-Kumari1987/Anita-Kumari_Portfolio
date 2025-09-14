"use client";
import GradientButtonsRow from "@/components/GradientButtonsRow";
import React from "react";
import { motion } from "motion/react";
import { LampContainer } from "@/components/ui/lamp";
import Link from "next/link";
import { Button } from "@/components/ui/moving-border";

export default function AboutPage() {
  return (
    <section
      className="
        relative isolate overflow-hidden flex flex-col items-center justify-start
        min-h-screen w-[92%] px-6 py-12 md:py-10
        max-[550px]:px-4 max-[550px]:py-8
      "
    >
      {/* orange radial like testimonial page */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_left,rgba(255,94,0,0.65)_0%,transparent_55%)] pointer-events-none" />

      <LampContainer>
        <motion.h2
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="
            mt-2 bg-clip-text text-center font-rajdhani tracking-tight text-transparent
            bg-gradient-to-b from-orange-200 to-orange-500
            text-5xl sm:text-6xl md:text-[72px]
            max-[550px]:text-4xl min-[375px]:max-[550px]:text-[40px]
          "
        >
          About Me
        </motion.h2>

        <div className="mt-10 w-full max-w-5xl max-[550px]:mt-6">
          <div className="space-y-6 max-[550px]:space-y-4">
            <p className="text-slate-200/90 text-lg md:text-xl leading-relaxed max-[550px]:text-base max-[550px]:leading-7">
              I’m a front-end developer focused on crafting clean, accessible, and performant interfaces. I work with HTML, CSS, JavaScript, TypeScript, React, Next.js, and Tailwind CSS to build engaging, user-friendly web experiences.
            </p>
            <p className="text-slate-200/90 text-lg md:text-xl leading-relaxed max-[550px]:text-base max-[550px]:leading-7">
              Before transitioning to development, I earned a Master’s in Human Resources and spent nearly five years as a tech recruiter. That background sharpened my communication, empathy, and problem-solving—skills I now apply to understanding users and delivering thoughtful UI.
            </p>

            <ul
              className="
                mt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-200/90
                max-[550px]:gap-2
              "
            >
              <li className="flex items-center gap-2.5 max-[550px]:gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-orange-400 flex-shrink-0" />
                <span className="text-lg max-[550px]:text-base">Accessible, responsive layouts</span>
              </li>
              <li className="flex items-center gap-2.5 max-[550px]:gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-orange-400 flex-shrink-0" />
                <span className="text-lg max-[550px]:text-base">Component-driven architecture</span>
              </li>
              <li className="flex items-center gap-2.5 max-[550px]:gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-orange-400 flex-shrink-0" />
                <span className="text-lg max-[550px]:text-base">Smooth micro-interactions</span>
              </li>
              <li className="flex items-center gap-2.5 max-[550px]:gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-orange-400 flex-shrink-0" />
                <span className="text-lg max-[550px]:text-base">Performance-minded styling</span>
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-3 pt-2 max-[550px]:gap-2 items-center justify-center w-full">
              <Link href="/images/Anita-Kumari_Resume.pdf" download aria-label="Download resume PDF" className="w-auto max-[550px]:w-auto">
                <Button
                  borderRadius="1.75rem"
                  className="w-auto px-5 py-2 text-base max-[550px]:py-2 max-[550px]:text-sm"
                >
                  Download CV
                </Button>
              </Link>

              <Link href="/contact" aria-label="Go to contact page" className="w-auto max-[550px]:w-auto">
                <Button
                  borderRadius="1.75rem"
                  className="w-auto px-6 py-3 text-base max-[550px]:py-2.5 max-[550px]:text-sm"
                >
                  Let’s Connect
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <GradientButtonsRow className="mt-12 w-full max-w-5xl max-[550px]:mt-8" />
      </LampContainer>
    </section>
  );
}
