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
    id: 0,
    quote:
      "With a strong work ethic and excellent interpersonal skills Anita was a boost for our H&M Talent Acquisition team and a valuable asset for us to deliver on our assignments. From the very first day Anita showed she is not afraid of speaking up within larger groups, offering good perspectives. Interpersonal skills is a natural talent for Anita where she really excels. It was a joy to see her use those skills with more and more confidence also towards our stakeholders, including very senior Hiring managers across our company.\n\nAnita has a way of reaching out and connecting with people in a very pleasant and straightforward way. On several occasions when giving her additional assignments outside her ordinary scope, she took on these tasks very diligently and delivered on very short notice exceeding expectations.\n\nIt would be my pleasure to work with her again!",
    name: "Gustaf Geterud",
    role: "TA Lead & Senior Project Leader",
    company: "H&M Group AB",
    avatar: "/images/testimonials/Gustaf Geterud.png",
  },
  {
    id: 1,
    quote:
      "As Anita’s instructor during the Frontend program at Hyper Island, I was impressed by her curiosity, consistent enthusiasm, and creative way of approaching challenges and solving them. She brought a thoughtful energy to the classroom that enriched both her own learning and the experience of her peers.",
    name: "Ryan Pears",
    role: "Industry Lead / Teacher",
    company: "Hyper Island",
    avatar: "/images/testimonials/ ryan.png",
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
    avatar: "/images/testimonials/ whitney.png",
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
    setIsAuto(false);
    setDir(d);
    setIndex((i) => (i + d + total) % total);
  };

  return (
    <section
      className={cn(
        // mobile tweaks only; desktop preserved with md:*
  "relative isolate min-h-screen w-[92%] mx-auto px-4 md:px-12 py-12 md:py-8",
        className
      )}
    >
      {/* left-bottom shaded backdrop */}
      <div className="absolute rounded-3xl inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,94,0,0.7)_0%,#0a0a0a_50%)] pointer-events-none" />

      {/* Heading */}
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="mt-2 bg-clip-text text-center text-4xl md:text-[72px] leading-tight md:leading-none font-rajdhani tracking-tight text-transparent bg-gradient-to-b from-orange-200 to-orange-500">
          {title}
        </h2>
        <p className="mt-2 md:mt-0 text-sm md:text-lg text-center text-white/80">
          {description}
        </p>
      </div>

      {/* Quote */}
  <div className="mt-6 md:mt-2 max-w-7xl mx-auto relative z-10 px-1 md:px-6">
        <AnimatePresence initial={false} custom={dir} mode="wait">
          <motion.blockquote
            key={current.id}
            custom={dir}
            initial={{ opacity: 0, x: dir === 1 ? 40 : -40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: dir === 1 ? -40 : 40 }}
            transition={{ duration: 0.75, ease: "easeInOut" }}
            className={cn(
              "text-white/90 text-justify",
              "text-[clamp(1.1rem,4.5vw,3.2rem)]", // a bit smaller on tiny screens
              "leading-[1.45] sm:leading-[1.35] lg:leading-[1.25]"
            )}
          >
            <span className="mr-2 text-white/60">“</span>
            <div className="text-xl md:text-3xl leading-relaxed font-extralight">
              {current.quote}
            </div>
            <span className="ml-2 text-white/60">”</span>
          </motion.blockquote>
        </AnimatePresence>
      </div>

      {/* Controls + card row */}
      <div className="max-w-7xl mx-auto relative z-10 mt-6 md:mt-0 flex flex-col-reverse md:flex-row items-center md:items-end gap-6">
        {/* Controls (stacked & centered on mobile; absolute on desktop) */}
        <div className="w-full md:flex-1">
          <div className="relative md:absolute md:top-0 md:left-0 z-10 flex items-center justify-center md:justify-start gap-5">
            <button
              type="button"
              onClick={() => go(-1)}
              className="h-10 w-10 md:h-11 md:w-11 grid place-items-center rounded-full border border-white/25 text-white/80 hover:text-white hover:bg-white/10 transition"
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
              className="h-10 w-10 md:h-11 md:w-11 grid place-items-center rounded-full border border-white/25 text-white/80 hover:text-white hover:bg-white/10 transition"
              aria-label="Next testimonial"
            >
              <span className="-translate-y-[1px]">❯</span>
            </button>
          </div>
        </div>

        {/* Image card */}
        <div className="w-full md:w-auto flex justify-center shrink-0 z-0">
          <AnimatePresence initial={false} custom={dir} mode="wait">
            <motion.div
              key={current.id}
              custom={dir}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.75, ease: "easeInOut" }}
              className="relative flex flex-col items-center"
            >
              <div className="relative h-52 w-52 md:h-72 md:w-72 rounded-full overflow-hidden">
                <Image
                  src={current.avatar}
                  alt={current.name}
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="(min-width:1024px) 18rem, 13rem"
                />
              </div>

              <div className="mt-4 text-center">
                <div className="text-white font-semibold text-base md:text-lg">
                  {current.name}
                </div>
                <div className="text-white/75 text-xs md:text-sm">{current.role}</div>
                <div className="text-white/60 text-[10px] md:text-xs uppercase tracking-wide">
                  {current.company}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
