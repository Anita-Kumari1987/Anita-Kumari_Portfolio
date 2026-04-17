"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Button } from "@/components/ui/moving-border";

export default function AboutMe() {
  return (
    <>
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
            I’m a Full Stack Developer with a unique professional journey that started in Human Resources
            and evolved into software development. With 5 years of experience as a recruiter, I developed a
            strong understanding of user needs, communication, and problem-solving — skills that now
            directly influence how I design and build applications.
          </p>
          <p className="text-slate-200/90 text-lg md:text-xl leading-relaxed max-[550px]:text-base max-[550px]:leading-7">
            My transition into tech was driven by a deep curiosity for building things and solving real-world
            problems through code. I began my journey in frontend development and have since expanded into full
            stack development, working with technologies like React, Next.js, Supabase, Node.js, Express, and
            MongoDB.
          </p>
          <p className="text-slate-200/90 text-lg md:text-xl leading-relaxed max-[550px]:text-base max-[550px]:leading-7">
            I enjoy building applications that are not only functional but also intuitive and user-centered.
            My background in HR gives me an edge in understanding user behavior, which helps me create better
            user experiences and more thoughtful product solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 pt-2 max-[550px]:gap-2 items-center justify-center w-full">
            <Link
              href="/images/Anita-Kumari_Resume.pdf"
              download
              aria-label="Download resume PDF"
              className="w-auto max-[550px]:w-auto"
            >
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
                className="w-auto px-5 py-2 text-base max-[550px]:py-2 max-[550px]:text-sm"
              >
                Let’s Connect
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
