"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";
import Link from "next/link";
import { Button } from "./ui/moving-border";

type Props = { name?: string };

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
    <div className="mt-16 max-[550px]:mt-4 relative max-[550px]:min-h-[320px]">
      <h2
        className="
          text-left mb-2 font-rajdhani tracking-[0.01em] leading-relaxed
          text-2xl sm:text-3xl md:text-4xl lg:text-[34px]
          max-[550px]:text-xl max-[550px]:leading-8
          [text-shadow:0_6px_24px_rgba(0,0,0,.35)]
        "
      >
        {/* Flex row on desktop, stacked on mobile */}
        <span
          className="
            inline-flex flex-wrap items-center gap-3
            max-[550px]:whitespace-normal max-[550px]:flex-col max-[550px]:items-start max-[550px]:gap-1
          "
        >
          <span className="bg-gradient-to-r from-gray-100 via-gray-300 to-gray-100 text-transparent bg-clip-text max-[550px]:text-3xl">
            Hi! I'm{" "}
            <span className="font-semibold bg-gradient-to-r from-orange-800 via-orange-500 to-orange-100 text-transparent bg-clip-text max-[550px]:text-3xl">
              {name}
            </span>{" "}
            <span className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-100 text-transparent bg-clip-text max-[550px]:text-3xl">
              and I am a passionate
            </span>
          </span>

          {/* typed pill stays inline on desktop */}
          <span
            className="
              relative flex-none overflow-hidden rounded-md bg-black/20
              px-4 py-2 w-auto min-w-[15ch]
              max-[550px]:text-lg max-[550px]:py-2 max-[550px]:px-4 mt-3
              max-[550px]:bg-transparent border-0 max-[550px]:border max-[550px]:border-orange-500/20
            "
          >
            <span
              ref={typedEl}
              className="bg-gradient-to-r from-orange-800 via-orange-500 to-orange-100 text-transparent bg-clip-text whitespace-nowrap text-lg md:text-xl"
            />
          </span>
        </span>
      </h2>

      {/* CTA */}
      <div
        className="
          mt-8
          /* Mobile absolute bottom-center */
          max-[550px]:mt-6 max-[550px]:absolute max-[550px]:left-0 max-[550px]:right-0 max-[550px]:bottom-0
          max-[550px]:mb-2 max-[550px]:flex max-[550px]:justify-center max-[550px]:items-center max-[550px]:z-10
          /* Desktop keep inline left under typed line */
          md:flex md:justify-start
        "
      >
        <Link
          href="/images/Anita-Kumari_Resume.pdf"
          download
          className="max-[550px]:w-full max-[550px]:mt-1 max-[550px]:flex max-[550px]:justify-center"
        >
          <Button
            borderRadius="1.75rem"
            className="
              relative w-[200px] px-8 py-2.5 text-base font-rajdhani
              bg-gradient-to-r from-black via-gray-800 to-cyan-900
              hover:from-black hover:via-gray-700 hover:to-gray-500
              border-gray-600/30 hover:border-gray-500/50
              transition-all duration-300 ease-out shadow-lg shadow-black/20
              flex items-center justify-center
              /* Desktop left aligned */
              md:ml-0
              /* Mobile full-width */
              max-[550px]:w-full max-[550px]:text-sm max-[550px]:py-2 max-[550px]:mx-auto
            "
          >
            Download CV
          </Button>
        </Link>
      </div>
    </div>
  );
}
