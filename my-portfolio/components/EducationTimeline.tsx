"use client";

import { motion } from "framer-motion";

/* -------------------- Data -------------------- */

type Item = {
  org: string;
  title: string;
  start: string;
  end?: string;
};

const ITEMS: Item[] = [
  {
    org: "Hyper Island • Stockholm",
    title: "Frontend Developer Program (Full Time)",
    start: "2024",
    end: "2026",
  },
  {
    org: "Bootcamp • Stockholm",
    title: "Self-learning Program (Java)",
    start: "2024",
  },
  {
    org: "ABF • Stockholm",
    title: "SAS-2 (Svenska som andraspråk)",
    start: "2020",
    end: "2021",
  },
  {
    org: "Harmods • Stockholm",
    title: "SFI (Svenska för invandrare)",
    start: "2019",
    end: "2020",
  },
  {
    org: "New Horizon Leadership Institute • India",
    title: "Master’s in Human Resource & Marketing (Full Time)",
    start: "2008",
    end: "2010",
  },
  {
    org: "MJK College Bettiah • India",
    title: "Bachelor’s in Science (Full Time)",
    start: "2004",
    end: "2008",
  },
];

/* -------------------- Page -------------------- */

export default function EducationPage() {
  return (
    <section className="relative flex flex-col w-[92%] px-6 py-16 md:py-12">
      {/* background wash */}
      <div className="pointer-events-none absolute inset-0 -z-10 " />

      {/* Heading */}
      <header className="mb-10 text-center">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-light text-white">
          Educational Journey
        </h1>
        <p className=" text-xl mx-auto mt-3 max-w-3xl font-extralight text-white/70">
          From foundational studies to specialized programs, each step has
          contributed to building expertise in technology and beyond.
        </p>
      </header>

      {/* Education rows */}
      <ul>
        {ITEMS.map((item, idx) => (
          <Row key={`${item.org}-${idx}`} item={item} />
        ))}
      </ul>
    </section>
  );
}

/* -------------------- Row -------------------- */

function Row({ item }: { item: Item }) {
  const pillText =
    item.end && item.end.toLowerCase() === "present"
      ? `${item.start} – Present`
      : item.end
      ? `${item.start} – ${item.end}`
      : item.start;

  return (
    <motion.li
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4 }}
      className="relative py-8 group"
    >
      {/* right date pill */}
      <div className="absolute right-0 top-6">
        <span
          className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium 
                     bg-white/10 text-white/80 backdrop-blur-md border border-white/15
                     group-hover:bg-gradient-to-r group-hover:from-cyan-500 group-hover:to-cyan-950
                     group-hover:text-white group-hover:shadow-[0_6px_20px_-6px_rgba(255,80,20,.7)] 
                     transition-all duration-300"
        >
          {pillText}
        </span>
      </div>

      {/* org / school */}
      <div className="text-[15px] text-white/60 mb-1">{item.org}</div>

      {/* program / degree */}
      <h3
        className="text-xl sm:text-2xl mb-6 font-light leading-snug text-white 
                   transition-colors duration-300 group-hover:text-cyan-300"
      >
        {item.title}
      </h3>

      {/* underline: always visible; color changes on hover via gradient overlay */}
      <div className="relative mt-4 h-[1.5px]">
        {/* base line (always visible) */}
        <span className="absolute inset-0 rounded-full bg-white/18" />
        {/* gradient overlay (only color on hover) */}
        <span className="absolute inset-0 rounded-full bg-gradient-to-r group-hover:from-cyan-500 group-hover:to-cyan-950 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
    </motion.li>
  );
}
