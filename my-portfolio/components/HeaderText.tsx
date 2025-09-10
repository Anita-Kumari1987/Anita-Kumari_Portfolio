"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";
import Link from "next/link";
import { Button } from "../components/ui/moving-border";

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
  className="text-left 
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
      <div className="mt-6">
        <Link href="/images/Anita-Kumari_Resume.pdf" download>
          <Button borderRadius="1.75rem" className="w-auto px-6 py-3 text-base">
            Download CV
          </Button>
        </Link>
      </div>
    </div>
  );
}
