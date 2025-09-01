"use client";

import { motion } from "framer-motion";
import { CalendarDays, MapPin } from "lucide-react";

type Item = {
  kind: "Program" | "Certification" | "Course" | "Self-Learning" | "Language" | "Degree";
  title: string;
  org: string;
  location?: string;
  start: string; // e.g. "Aug 2024"
  end?: string;  // e.g. "2026" or "Present"
  notes?: string;
};

const ITEMS: Item[] = [
  {
    kind: "Program",
    title: "Frontend Developer Program (Full Time)",
    org: "Hyper Island",
    location: "Stockholm",
    start: "Aug 2024",
    end: "March 2026",
  },
  {
    kind: "Self-Learning",
    title: "Learnt programming language, JAVA",
    location: "Stockholm",
    org: "Bootcamp",
    start: "2019",
  },
  
   {
    kind: "Language",
    title: "SAS-2 (Svenska som andraspråk)",
    org: "ABF Stockholm",
    location: "Stockholm",
    start: "2020",
    end: "2021",
  },
   {
    kind: "Language",
    title: "SFI(Svenska för invandrare)",
    org: "Harmods Stockholm",
    location: "Stockholm",
    start: "2019",
    end: "2020",
  },
   {
    kind: "Degree",
    title: "Masters in Human Resource and Marketing(Full Time)",
    org: "New Horizon Leaderrship Institute",
    location: "India",
    start: "2008",
    end: "2010",
  },
  {
    kind: "Degree",
    title: "Bachelor's degree in Science(Full Time)",
    org: "MJK College Bettiah",
    location: "India",
    start: "2008",
    end: "2004",
  },
  // add more items here…
];

export default function EducationTimeline(){
  return (
    <section className="rrelative isolate w overflow-hidden flex flex-col items-center justify-center min-h-screen w-[92%] px-6 py-16 md:py-24">
      {/* subtle grid bg */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-15"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.06) 1px, transparent 1px)",
          backgroundSize: "80px 80px, 80px 80px",
        }}
      />

      {/* VISIBLE PARENT CARD */}
      <div className="relative mt-6 overflow-visible rounded-[28px] border border-white/12 bg-white/[0.045] p-6 shadow-[0_25px_60px_-30px_rgba(0,0,0,.6)] backdrop-blur-xl md:p-10">
        {/* soft top sheen */}
        <span className="pointer-events-none absolute inset-0 -z-10 rounded-[inherit] [background:radial-gradient(32%_42%_at_18%_0%,rgba(255,255,255,.10),transparent_65%)]" />

        {/* Heading inside the parent */}
        <h1 className="text-center text-4xl font-extrabold text-white sm:text-5xl">
          Educational Journey
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-center text-slate-300/85">
          From foundational studies to specialized programs, each step has
          contributed to building expertise in technology and beyond.
        </p>

        {/* Timeline (line + cards) */}
        <div className="relative mt-10">
          {/* vertical line */}
          <span className="pointer-events-none absolute left-6 top-0 bottom-0 w-[2px] rounded-full bg-gray-300" />

          <ul className="space-y-10">
            {ITEMS.map((item, i) => (
              <li key={i} className="relative pl-16">
                {/* node on the line */}
                <span className="absolute left-[22px] top-8 h-3 w-3 rounded-full bg-gray-300 ring-4 ring-gray-200" />
                <EduCard item={item} index={i} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------- Card ---------- */

function EduCard({ item, index }: { item: Item; index: number }){
  const badge = getBadgeStyle(item.kind);

  return (
    <motion.article
      initial={{ opacity: 0, y: 16, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -3 }}
      className="relative w-full overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.04] p-6 shadow-xl backdrop-blur-xl md:p-8"
    >
      {/* sheen */}
      <span className="pointer-events-none absolute inset-0 -z-10 rounded-[inherit] [background:radial-gradient(30%_40%_at_20%_0%,rgba(255,255,255,.09),transparent_65%)]" />

      {/* a bit taller for breathing room */}
      <div className="min-h-[200px] md:min-h-[200px]">
        {/* Badge */}
        <span className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold ${badge}`}>
          {item.kind}
        </span>

        {/* Title */}
        <h3 className="mt-4 text-2xl font-semibold text-white md:text-[26px]">
          {item.title}
        </h3>

        {/* Org / location */}
        <div className="mt-3 space-y-1 text-slate-200/85">
          <div className="font-medium">{item.org}</div>
          {item.location && (
            <div className="flex items-center gap-2 text-slate-300/75">
              <MapPin className="h-4 w-4" />
              {item.location}
            </div>
          )}
        </div>

        {/* Dates */}
        <div className="mt-5 flex items-center gap-2 text-slate-300/85">
          <CalendarDays className="h-4 w-4" />
          <span>{item.start}</span>
          {item.end && <span>– {item.end}</span>}
        </div>

        {/* Notes */}
        {item.notes && <p className="mt-3 text-slate-300/80">{item.notes}</p>}
      </div>
    </motion.article>
  );
}

/* ---------- Helpers ---------- */

function getBadgeStyle(kind: Item["kind"]): string {
  switch (kind) {
    case "Program":
      return "bg-blue-600/20 text-blue-200 ring-1 ring-blue-500/30";
    case "Certification":
      return "bg-amber-500/20 text-amber-200 ring-1 ring-amber-400/30";
    case "Course":
      return "bg-emerald-500/20 text-emerald-200 ring-1 ring-emerald-400/30";
    default:
      return "bg-white/10 text-white";
  }
}
