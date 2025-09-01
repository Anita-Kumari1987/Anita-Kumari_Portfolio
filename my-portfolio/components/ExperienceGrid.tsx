"use client";

import Image from "next/image";
import { motion, MotionConfig } from "framer-motion";

type Card = {
  title: string;
  desc: string;
  icon?: string; // /public path
  glow?: "top" | "bottom";
};

const CARDS: Card[] = [
  {
    title: "HR-Coordinator - H&M Group AB",
    desc:
      "Worked on end-to-end recruitment cycle and keep track of the candidates via ATS",
    icon: "/images/experience1.png",
    glow: "top",
  },
  {
    title: "HR Recruiter & Administrator - Foodora AB",
    desc:
      "Responded on average to 130-160 HR-related tickets/day and recruitment support",
    icon: "/images/experience2.png",
    glow: "bottom",
  },
  {
    title: "Senior Recruiter - Tritium Consulting",
    desc:
      "worked on full life-cycle recruiting and hiring for 100+ positions within IT roles",
    icon: "/images/experience3.png",
    glow: "bottom",
  },
  {
    title: "Consultant - CareerNet Consulting",
    desc:
      "worked on full life-cycle recruiting and hiring for 200+ positions within IT roles",
    icon: "/images/experience4.png",
    glow: "top",
  },
];

export default function ExperienceGrid() {
  return (
    <MotionConfig reducedMotion="never">
      <section className="relative isolate w overflow-hidden flex flex-col items-center justify-center min-h-screen w-[92%] px-6 py-16 md:py-24">
        {/* Dark base and subtle grid */}
        <div className="pointer-events-none absolute inset-0 -z-20 bg-[#0b0f1a] opacity-40" />
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-20
          [background-image:linear-gradient(rgba(255,255,255,.06)_1px,transparent_1px),
                             linear-gradient(90deg,rgba(255,255,255,.06)_1px,transparent_1px)]
          [background-size:80px_80px,80px_80px]"
        />

        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center text-4xl font-extrabold text-white sm:text-5xl"
        >
          My{" "}
          <span className="bg-gradient-to-r from-violet-300 via-purple-400 to-violet-300 bg-clip-text text-transparent">
            work experience
          </span>
        </motion.h1>

        {/* Timeline container */}
        <div className="relative w-full max-w-2xl mx-auto flex flex-col">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-violet-400/60 via-purple-400/40 to-cyan-400/60 rounded-full z-0" />
          <div className="flex flex-col gap-8">
            {CARDS.map((card, i) => (
              <ExperienceCard key={card.title} card={card} index={i} isLast={i === CARDS.length - 1} />
            ))}
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
      className="group relative flex items-center"
    >
      {/* Timeline circle */}
      <span className="relative z-10 flex items-center justify-center h-6 w-6">
        <span className="absolute h-6 w-6 rounded-full bg-white/20 border-2 border-violet-400" />
        <span className="h-3 w-3 rounded-full bg-gradient-to-br from-violet-400 to-cyan-400" />
      </span>

      {/* Card body */}
      <div className="ml-8 flex-1">
        <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-6 md:p-8 shadow-xl backdrop-blur-xl">
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
              <h3 className="text-[1.5rem] font-semibold text-white">
                {card.title}
              </h3>
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
