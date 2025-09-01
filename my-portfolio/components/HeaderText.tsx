"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";

type HeaderTextProps = { name?: string };

export default function HeaderText({ name = "Anita" }: HeaderTextProps) {
  const typedEl = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!typedEl.current) return;

    const typed = new Typed(typedEl.current, {
      strings: ["Web Designer", "UI/UX developer", "Web Developer"],
      typeSpeed: 70,
      backSpeed: 40,
      backDelay: 900,
      loop: true,
      smartBackspace: true,
      showCursor: false,          // ⛔️ stop Typed.js cursor from affecting layout
    });

    return () => typed.destroy();
  }, []);

  return (
    <div className="mt-20">
      <h2
  className="text-left mask-b-from-neutral-600
             text-2xl sm:text-3xl md:text-4xl
             tracking-[0.01em] leading-relaxed
             text-white/95 [text-shadow:0_6px_24px_rgba(0,0,0,.35)]"
>
  <span className="inline-flex items-center gap-2 whitespace-nowrap">
    <span>
      Hi! I'm <span className="text-white/95 font-semibold">{name}</span>
      <span className="text-white/75"> and I am a passionate</span>
    </span>

    {/* fixed-width pill with typed text */}
    <span
      className="relative flex-none
                 w-[12ch] sm:w-[12ch] md:w-[13ch]
                 px-3 
                 bg-white/10 text-white/95 [backdrop-filter:blur(6px)]
                 overflow-hidden"
    >
      <span ref={typedEl} className="block truncate" />
    
    </span>
  </span>
</h2>

      <a
        href="/images/Anita-Kumari_Resume.pdf"
        download
        id="myResume"
        className="inline-block mt-15 md:text-2xl px-5 text-2xl py-3 rounded-full
                   border border-white/25 bg-white/10 text-gray-300
                   hover:bg-white/15 hover:border-white/40 transition
                   [backdrop-filter:blur(8px)]
                   shadow-[0_8px_30px_rgba(0,0,0,0.15)]"
      >
        Download CV
      </a>
    </div>
  );
}
