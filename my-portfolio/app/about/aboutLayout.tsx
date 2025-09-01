import type { ReactNode } from "react";

export default function AboutLayout({ children }: { children: ReactNode }) {
  return (
    <section className="relative isolate overflow-hidden flex flex-col items-center justify-start min-h-screen w-[92%] px-6 py-16 md:py-24">
      <div className="w-full max-w-4xl">{children}</div>
    </section>
  );
}
