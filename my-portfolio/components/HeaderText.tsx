"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "./ui/moving-border";

type Props = { name?: string };
const roles = [
  "FullStack Developer",
  "Web Developer",
  "Backend Developer",
  "UI/UX Designer",
];

export default function HeaderText({ name = "Anita" }: Props) {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 1800);
    return () => window.clearInterval(interval);
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
        <span className="inline-flex items-center gap-3 flex-wrap max-[550px]:gap-2">
          <span className="bg-gradient-to-r from-gray-100 via-gray-300 to-gray-100 text-transparent bg-clip-text max-[550px]:text-3xl">
            Hi! I'm{" "}
            <span className="font-semibold bg-gradient-to-r from-orange-800 via-orange-500 to-orange-100 text-transparent bg-clip-text max-[550px]:text-3xl">
              {name}
            </span>{" "}
            <span className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-100 text-transparent bg-clip-text max-[550px]:text-3xl">
              and I am a passionate
            </span>
          </span>

          <span
            className="
              relative inline-flex items-center overflow-hidden rounded-md bg-black/20
              px-3 py-1.5 w-[15ch] h-[2.4rem] md:h-[3rem]
              max-[550px]:w-[16ch] max-[550px]:text-lg max-[550px]:py-1.5 max-[550px]:px-3
              max-[550px]:bg-transparent border-0 max-[550px]:border max-[550px]:border-orange-500/20
            "
          >
            <span
              className="inline-block w-full whitespace-nowrap text-orange-400 text-xl md:text-3xl font-medium"
            >
              {roles[roleIndex]}
            </span>
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
              relative min-w-[180px] px-8 py-2.5 text-base font-rajdhani whitespace-nowrap
              bg-gradient-to-r from-black via-gray-800 to-cyan-900
              hover:from-black hover:via-gray-700 hover:to-gray-500
              border-gray-600/30 hover:border-gray-500/50
              transition-all duration-300 ease-out shadow-lg shadow-black/20
              flex items-center justify-center gap-2
              /* Desktop left aligned */
              md:ml-0
              /* Mobile full-width */
              max-[550px]:w-full max-[550px]:text-sm max-[550px]:py-2 max-[550px]:mx-auto
            "
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24">
              <path d="M16 16v1a3 3 0 0 1-3 3H7a5 5 0 1 1 0-10c.29 0 .57.02.85.07A6 6 0 0 1 20 11.5c0 .34-.03.67-.08 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 12v6m0 0-2-2m2 2 2-2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Download CV
          </Button>
        </Link>
      </div>
    </div>
  );
}
