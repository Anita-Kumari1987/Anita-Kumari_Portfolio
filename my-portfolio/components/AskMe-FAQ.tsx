"use client";

import Link from "next/link";

export default function AskMe() {
  return (
    <section className="
      relative isolate
      w-full min-h-[25vh]
      flex items-center
      
    ">
      {/* thin top rule like Jayden */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/20" />

      {/* content */}
      <div className="mx-auto w-full max-w-5xl ">
        <p className="
          text-2xl sm:text-3xl md:text-[17px]
          font-small font-extralight tracking-wide
          text-white/90
        ">
          Do you have any other questions?
        </p>

        <div className="mt-10">
          <Link
            href="/contact"
            className="
              text-lg sm:text-xl md:text-xl font-light
              text-white/90
               border-1 p-3 rounded-full py-3 px-6
                decoration-white/70
              hover:text-orange-300 hover:decoration-orange-400
              transition-colors
            "
          >
            Ask me directly
          </Link>
        </div>
      </div>
    </section>
  );
}
