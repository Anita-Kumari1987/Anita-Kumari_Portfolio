"use client";

import GradientButtonsRow from "@/components/GradientButtonsRow";
import AboutMe from "@/components/AboutMe";
import { LampContainer } from "@/components/ui/lamp";

export default function AboutPage() {
  return (
    <section
      className="
        relative isolate overflow-hidden flex flex-col items-center justify-start
        min-h-screen w-[92%] px-6 py-12 md:py-10
        max-[550px]:px-4 max-[550px]:py-8
      "
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_left,rgba(255,94,0,0.65)_0%,transparent_55%)] pointer-events-none" />

      <LampContainer>
        <AboutMe />
        <GradientButtonsRow className="mt-12 w-full max-w-5xl max-[550px]:mt-8" />
      </LampContainer>
    </section>
  );
}
