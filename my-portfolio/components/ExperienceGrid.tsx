"use client";

import Image from "next/image";
import { motion, MotionConfig } from "framer-motion";

type Card = {
  title: string;
  desc: string;
  icon?: string; 
  duration: string; // /public path
  glow?: "top" | "bottom";
};

const CARDS: Card[] = [
  {
    title: "HR-Coordinator - H&M Group AB",
    desc:
      "Worked on end-to-end recruitment cycle and keep track of the candidates via ATS",
    icon: "/images/experience1.png",
    duration: "Sept 2023 - March 2024",
    glow: "top",
  },
  {
    title: "HR Recruiter & Administrator - Foodora AB",
    desc:
      "Responded on average to 130-160 HR-related tickets/day and recruitment support",
    icon: "/images/experience2.png",
    duration: "Feb 2023 - June 2023",
    glow: "bottom",
  },
  {
    title: "Senior Recruiter - Tritium Consulting",
    desc:
      "worked on full life-cycle recruiting and hiring for 100+ positions within IT roles",
    icon: "/images/experience3.png",
    duration: "Feb 2011 - April 2014",
    glow: "bottom",
  },
  {
    title: "Consultant - CareerNet Consulting",
    desc:
      "worked on full life-cycle recruiting and hiring for 200+ positions within IT roles",
    icon: "/images/experience4.png",
    duration: "May 2010 - Jan 2011",
    glow: "top",
  },
];

export default function ExperienceGrid() {
  return (
    <MotionConfig reducedMotion="never">
      <section className="relative isolate overflow-hidden flex flex-col items-center justify-start rounded-3xl min-h-screen w-[92%] px-6 py-12 md:py-16">
        {/* Dark base layer */}
        <div className="pointer-events-none absolute inset-0 -z-30 bg-[#0b0f1a] opacity-60" />
        
        {/* shaded glossy background */}
        <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_bottom_left,rgba(255,94,0,0.35)_0%,transparent_60%)]" />
        
        {/* Gradient overlay */}
        <div className="pointer-events-none absolute inset-0 -z-20 bg-gradient-to-b from-[#0b0f1a]/60 via-transparent to-[#0b0f1a]/60" />
        
        {/* Subtle grid */}
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-30
          [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),
                             linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)]
          [background-size:80px_80px,80px_80px]"
        />

        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center bg-clip-text text-transparent text-[72px] font-rajdhani bg-gradient-to-b from-orange-200 to-orange-500"
        >
          My work experience
        </motion.h1>

        {/* Timeline container */}
        <div className="relative w-full flex flex-col items-center">
          {/* Cards container with timeline */}
          <div className="relative w-full max-w-[1200px] mx-auto flex flex-col">
            {/* Vertical line */}
            <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-200 to-orange-900/60 rounded-full z-0" />
            <div className="flex flex-col gap-8 w-full">
              {CARDS.map((card, i) => (
                <ExperienceCard key={card.title} card={card} index={i} isLast={i === CARDS.length - 1} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}

function ExperienceCard({
  card,
  index,
  isLast,
}: {
  card: Card;
  index: number;
  isLast: boolean;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.6, delay: 0.06 * index, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      className="group relative flex items-center w-full pl-12 sm:pl-16"
    >
      {/* Timeline circle */}
      <span className="absolute left-2.5 sm:left-6.5 z-10 flex items-center justify-center h-6 w-6">
        <span className="absolute h-6 w-6 rounded-full bg-gradient-to-br from-orange-200 to-orange-900 opacity-30" />
        <span className="h-3 w-3 rounded-full bg-gradient-to-br from-orange-400 to-orange-900" />
      </span>

      {/* Card body */}
      <div className="w-full">
        <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-8 md:p-10 shadow-xl w-full max-w-[900px] backdrop-blur-xl ml-2">
          {/* soft spotlights */}
          {card.glow === "top" && (
            <span className="pointer-events-none absolute left-1/2 top-0 -z-10 h-16 w-60 -translate-x-1/2 rounded-full bg-white/10 blur-2xl opacity-40 transition-opacity duration-300 group-hover:opacity-60" />
          )}
          {card.glow === "bottom" && (
            <span className="pointer-events-none absolute bottom-0 left-1/2 -z-10 h-16 w-60 -translate-x-1/2 rounded-full bg-white/10 blur-2xl opacity-40 transition-opacity duration-300 group-hover:opacity-60" />
          )}
          {/* sheen on hover */}
          <span className="pointer-events-none absolute -inset-1 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-15 [background:radial-gradient(600px_200px_at_30%_-10%,white,transparent_60%)]" />

          <div className="flex items-center gap-6 md:gap-8">
            <div className="shrink-0">
              {card.icon ? (
                <Image
                  src={card.icon}
                  alt=""
                  width={120}
                  height={120}
                  className="h-24 w-24 object-contain shadow-lg"
                  priority
                />
              ) : (
                <div className="grid h-24 w-24 place-items-center rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-500 text-3xl">
                  💡
                </div>
              )}
            </div>

            <div className="min-w-0">
              <h3 className="text-2xl md:text-3xl font-rajdhani text-white font-light">
                {card.title}
              </h3>
              <span className="text-sm text-white/60">{card.duration}</span>
              <p className="mt-3 max-w-3xl leading-relaxed text-base text-slate-200/80 md:text-[17px]">
                {card.desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
