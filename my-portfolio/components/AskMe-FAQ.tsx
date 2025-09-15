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
          text-2xl sm:text-3xl md:text-[17px] max-[550px]:text-base
          font-small font-extralight tracking-wide
          text-white/90
        ">
          Do you have any other questions?
        </p>

        <div className="mt-10">
          <Link
            href="/contact"
            className="inline-block text-lg sm:text-xl font-semibold text-white rounded-full px-8 py-3 bg-gradient-to-r from-orange-500 via-orange-400 to-amber-500 shadow-lg hover:from-orange-600 hover:to-amber-400 hover:shadow-orange-400/30 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
          >
            Ask me directly
          </Link>
        </div>
      </div>
    </section>
  );
}
