"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";
import Link from "next/link";
import { Button } from "./ui/moving-border";

type Props = {
  name?: string;
};

export default function HeaderText({ name = "Anita" }: Props) {
  const typedEl = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!typedEl.current) return;

    const typed = new Typed(typedEl.current, {
      strings: ["Web Designer", "UI/UX Developer", "Web Developer"],
      typeSpeed: 70,
      backSpeed: 40,
      backDelay: 900,
      loop: true,
      smartBackspace: true,
      showCursor: false,
    });

    return () => typed.destroy();
  }, []);

  return (
    <div className="mt-16">
      <h2
  className="text-left mb-2
             text-2xl sm:text-3xl md:text-4xl
             tracking-[0.01em] leading-relaxed
             font-rajdhani
             [text-shadow:0_6px_24px_rgba(0,0,0,.35)]"
>
  <span className="inline-flex items-center gap-2 whitespace-nowrap">
    <span className="bg-gradient-to-r from-gray-100 via-gray-300 to-gray-100 text-transparent bg-clip-text">
      Hi! I'm <span className="font-semibold bg-gradient-to-r from-orange-800 via-orange-500 to-orange-100 text-transparent bg-clip-text">{name}</span>
      <span className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-100 text-transparent bg-clip-text"> and I am a passionate</span>
    </span>

    {/* fixed-width pill with typed text */}
    <span
      className="relative flex-none
                 w-[12ch] sm:w-[12ch] md:w-[13ch]
                 px-3 
                 bg-black/20
                 overflow-hidden
                 border border-orange-500/20
                 rounded-sm"
    >
      <span 
      ref={typedEl} 
      className="bg-gradient-to-r from-orange-800 via-orange-500 to-orange-100 text-transparent bg-clip-text" 
    />
    
    </span>
  </span>
</h2>
      <div className="mt-16">
        <Link href="/images/Anita-Kumari_Resume.pdf" download>
          <Button 
            borderRadius="1.75rem" 
            className="relative w-[200px] px-8 py-2.5 text-base font-rajdhani
                     bg-gradient-to-r from-black via-gray-800 to-cyan-900
                     hover:from-black hover:via-gray-700 hover:to-gray-500
                     border-gray-600/30 hover:border-gray-500/50
                     transition-all duration-300 ease-out
                     shadow-lg shadow-black/20
                     flex items-center justify-center">
            <span className="absolute text-center left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              Download CV
            </span>
          </Button>
        </Link>
      </div>
    </div>
  );
}
