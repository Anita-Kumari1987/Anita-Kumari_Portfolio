"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

type Testimonial = {
  id: number;
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    quote:
      "As Anita’s instructor during the Frontend program at Hyper Island, I was impressed by her curiosity, consistent enthusiasm, and creative way of approaching challenges and solving them. She brought a thoughtful energy to the classroom that enriched both her own learning and the experience of her peers.",
    name: "Ryan Pears",
    role: "Industry Lead / Teacher",
    company: "Hyper Island",
    avatar: "/images/testimonials/ ryan.png",          // <-- removed space
  },
  {
    id: 2,
    quote:
      "Anita worked as an HR & Recruitment Intern at foodora. She is a good public speaker. With her friendly personality she quickly became a part of the team. She supported the HR and Recruitment teams with various administrative tasks and showed great interest in learning new things and delivering good results..",
    name: "Reshma Sriram Ramamurthy",
    role: "Project & Delivery Manager",
    company: "Foodora AB",
    avatar: "/images/testimonials/reshma.png",
  },
  {
    id: 3,
    quote:
      "Anita and I was onboarded together within the HR logistics team at foodora. I can say that we all greatly enjoyed having her by our side with her infectious positive energy, insightful questions and valuable input. Having worked with Anita, I know that she would become a valuable member of any team she joins.",
    name: "Whitney Muzeyi",
    role: "HR Specialist",
    company: "Foodora AB",
    avatar: "/images/testimonials/ whitney.png",      // <-- removed space
  },
];

export default function TestimonialsJayden({
  className,
  title = "Testimonials",
  description = "What people say about me",
}: {
  className?: string;
  title?: string;
  description?: string;
}) {
  const [index, setIndex] = React.useState(0);
  const [dir, setDir] = React.useState<1 | -1>(1);

  // autoplay every 2s, stop on user interaction
  const [isAuto, setIsAuto] = React.useState(true);
  React.useEffect(() => {
    if (!isAuto) return;
    const id = window.setInterval(() => {
      setDir(1);
      setIndex((i) => (i + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => window.clearInterval(id);
  }, [isAuto]);

  const total = TESTIMONIALS.length;
  const current = TESTIMONIALS[index];

  const go = (d: 1 | -1) => {
    setIsAuto(false);         // stop autoplay after any manual click
    setDir(d);
    setIndex((i) => (i + d + total) % total);
  };

  return (
    <section
      className={cn(
        "relative isolate min-h-screen w-[92%] mrmx-auto px-2 py-16 md:py-20",
        className
      )}
    >
      {/* left-bottom shaded backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,94,0,0.7)_0%,#0a0a0a_50%)] pointer-events-none" />

      {/* Heading */}
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="mt-2 bg-clip-text text-center text-[72px] font-rajdhani tracking-tight text-transparent bg-gradient-to-b from-orange-200 to-orange-500">
          {title}
        </h2>
        <p className="mt-0 text-[5px] sm:text-[5px] md:text-lg text-center text-white/80">
          {description}
        </p>
      </div>

      {/* Quote */}
      <div className="mt-8 md:mt-2 max-w-7xl mx-auto relative z-10">
        <AnimatePresence initial={false} custom={dir} mode="wait">
          <motion.blockquote
            key={current.id}
            custom={dir}
            initial={{ opacity: 0, x: dir === 1 ? 40 : -40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: dir === 1 ? -40 : 40 }}
            transition={{ duration: 0.75, ease: "easeInOut" }}
            className={cn(
              "text-white/90 pl-5 pr-5 text-justify max-w-none",
              "text-[clamp(1.6rem,4.5vw,3.2rem)]",
              "leading-[1.35] sm:leading-[1.3] lg:leading-[1.25]"
            )}
          >
            <span className="mr-3 text-white/60">“</span>
            <div className="text-4xl leading-relaxed font-extralight">
              {current.quote}
            </div>
            <span className="ml-3 text-white/60">”</span>
          </motion.blockquote>
        </AnimatePresence>
      </div>

      {/* Controls + card row */}
      <div className="max-w-7xl mx-auto flex items-end gap-6 relative z-10">
        {/* LEFT: controls */}
        <div className="flex-1 shrink-0">
          <div className="absolute top-0 left-0 z-10 flex items-center gap-6">
            <button
              type="button"
              onClick={() => go(-1)}
              className="h-11 w-11 grid place-items-center rounded-full border border-white/25 text-white/80 hover:text-white hover:bg-white/40 transition"
              aria-label="Previous testimonial"
            >
              <span className="-translate-y-[1px]">❮</span>
            </button>

            <span className="text-white/70 text-sm tracking-wide">
              {index + 1} / {total}
            </span>

            <button
              type="button"
              onClick={() => go(1)}
              className="h-11 w-11 grid place-items-center rounded-full border border-white/25 text-white/80 hover:text-white hover:bg-white/10 transition"
              aria-label="Next testimonial"
            >
              <span className="-translate-y-[1px]">❯</span>
            </button>
          </div>
        </div>

        {/* RIGHT: image card */}
        <div className="shrink-0 z-0">
          <AnimatePresence initial={false} custom={dir} mode="wait">
            <motion.div
              key={current.id}
              custom={dir}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.75, ease: "easeInOut" }}
              className="relative"
            >
              <div
                className="
                  relative overflow-hidden rounded-[28px]
                  border border-white/12 bg-white/[0.05] backdrop-blur-xl
                  shadow-[0_25px_60px_-30px_rgba(0,0,0,.6)]
                  w-[400px] md:w-[350px] h-[420px] mr-2.5 md:h-[320px]
                "
              >
                <span className="pointer-events-none absolute inset-0 rounded-[inherit] [background:radial-gradient(50%_60%_at_20%_10%,rgba(255,255,255,.12),transparent_60%)]" />

                <div className="absolute bottom-0 right-0 w-[100%] h-[100%] overflow-hidden rounded-tl-[18px]">
                  <Image
                    src={current.avatar}
                    alt={current.name}
                    fill
                    className="object-cover object-[60%_50%]"
                    priority
                    sizes="(min-width:1024px) 30vw, 60vw"
                  />
                </div>

                <div className="absolute bottom-5 left-6">
                  <div className="text-white font-semibold text-lg">
                    {current.name}
                  </div>
                  <div className="text-white/75 text-sm">{current.role}</div>
                  <div className="text-white/60 text-xs uppercase tracking-wide">
                    {current.company}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
