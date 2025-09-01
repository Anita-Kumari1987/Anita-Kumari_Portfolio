"use client";

import React from "react";
import { motion } from "motion/react";
import { cn } from "../../lib/utils"; // or "@/lib/utils" if you set up alias

type LampContainerProps = {
  children: React.ReactNode;
  className?: string;
};

/**
 * Transparent “lamp light” overlay with a glass content card.
 * - No opaque background (lets your hero video show through)
 * - Lights use blend modes so they feel like glow, not paint
 * - Content sits on a subtle glass card for perfect readability
 */
export function LampDemo({ children }: LampContainerProps) {
  return (
    <LampContainer>
      {children}
    </LampContainer>
  );
}

export const LampContainer = ({ children, className }: LampContainerProps) => {
  return (
    <section
      className={cn(
        "relative z-10 min-h-[70svh] w-full flex items-center justify-center px-6",
        className
      )}
    >
      {/* LAMP LIGHTS (pure overlay; do not block interactions) */}
      <div
        className="pointer-events-none absolute inset-0 z-0 isolate"
        aria-hidden="true"
      >
        {/* soft readability wash like home (very light) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30"></div>

        {/* Left conic glow */}
        <motion.div
          initial={{ opacity: 0.35, width: "16rem" }}
          whileInView={{ opacity: 0.6, width: "30rem" }}
          transition={{ delay: 0.1, duration: 0.8, ease: "easeInOut" }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute right-1/2 top-1/3 h-56 w-[30rem]
                     bg-gradient-conic from-cyan-400 via-transparent to-transparent
                     mix-blend-screen opacity-60
                     [--conic-position:from_70deg_at_center_top]"
        />

        {/* Right conic glow */}
        <motion.div
          initial={{ opacity: 0.35, width: "16rem" }}
          whileInView={{ opacity: 0.6, width: "30rem" }}
          transition={{ delay: 0.1, duration: 0.8, ease: "easeInOut" }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute left-1/2 top-1/3 h-56 w-[30rem]
                     bg-gradient-conic from-transparent via-transparent to-cyan-400
                     mix-blend-screen opacity-60
                     [--conic-position:from_290deg_at_center_top]"
        />

        {/* Bottom glow / bloom */}
        <div className="absolute left-1/2 top-[12%] -translate-x-1/2 h-32 w-[22rem] rounded-full bg-cyan-400/50 blur-3xl mix-blend-screen" />
      </div>

      {/* CONTENT CARD (glassmorphism) */}
      <div
        className="
          relative z-10 mx-auto max-w-5xl
          rounded-3xl border border-white/10
          bg-white/6 [backdrop-filter:blur(10px)]
          shadow-[0_8px_30px_rgba(0,0,0,0.25)]
          px-6 sm:px-10 py-10 sm:py-12
          text-white
        "
      >
        {children}
      </div>
    </section>
  );
};
