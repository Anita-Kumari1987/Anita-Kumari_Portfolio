"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data"; // Adjust path if needed

export default function ProjectCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for next, -1 for prev

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setIndex((i) => (i + 1) % projects.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const project = projects[index];

  return (
    <div className="flex flex-col min-h-screen justify-center">
      <div className="relative w-[80vw] max-w-4xl aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl mx-auto md:ml-16">
  <AnimatePresence mode="wait" custom={direction}>
          <motion.img
            key={project.img}
            src={project.img}
            alt={project.title}
            custom={direction}
            initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction > 0 ? -300 : 300, opacity: 0 }}
            transition={{ duration: 0.7, ease: 'easeInOut' }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        {/* Glassy overlay, animated with image */}
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={project.title + '-details'}
            custom={direction}
            initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction > 0 ? -300 : 300, opacity: 0 }}
            transition={{ duration: 0.7, ease: 'easeInOut' }}
            className="absolute bottom-0 left-0 w-full flex justify-between items-end p-8 bg-gradient-to-t from-black/80 via-black/60 to-transparent"
          >
            <div>
              <div className="text-gray-300 text-lg mb-1">Project</div>
              <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-4">{project.title}</div>
              <div>
                <span className="inline-block bg-white/10 px-4 py-2 rounded-full text-gray-200 text-base">{project.des}</span>
              </div>
              {/* Tech icons */}
              <div className="flex gap-2 mt-4">
                {project.iconLists?.map((icon, i) => (
                  <img key={i} src={`/${icon}`} alt="" className="w-8 h-8 object-contain" />
                ))}
              </div>
            </div>
            <Link href={project.link} className="group">
              <div className="w-20 h-20 border-2 border-orange-500 flex items-center justify-center text-orange-500 text-3xl transition hover:bg-orange-500/10 duration-200 rounded-2xl">
                <ArrowUpRight size={36} />
              </div>
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>
      {/* Dots navigation */}
      <div className="flex gap-2 mt-6">
        {projects.map((_, i) => (
          <button
            key={i}
            className={`w-3 h-3 rounded-full transition ${i === index ? "bg-orange-500" : "bg-white/30"}`}
            onClick={() => {
              setDirection(i > index ? 1 : -1);
              setIndex(i);
            }}
            aria-label={`Go to project ${i + 1}`}
          />
        ))}
      </div>
      {/* View All Projects Button */}
      <Link href="/projects" className="mt-10">
        <button className="px-8 py-4 bg-orange-500 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-orange-600 transition">
          View All Projects
        </button>
      </Link>
    </div>
  );
}