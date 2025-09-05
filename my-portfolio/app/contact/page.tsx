import type { Metadata } from "next";
import ContactFormCard from "@/components/ContactFormCard";
import { ShineBorder } from "../../components/magicui/shine-border";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch — I usually reply within 24–48 hours.",
};

export default function ContactPage() {
  return (
    <section className="relative isolate w overflow-hidden flex flex-col items-center justify-center min-h-screen w-[92%] px-6 py-16 md:py-6">
      <div className="mx-auto w-full max-w-4xl">
        <div className="relative overflow-visible rounded-[28px] border border-white/12 bg-white/[0.045] p-6 md:p-10 backdrop-blur-xl shadow-[0_25px_60px_-30px_rgba(0,0,0,.6)]">
          <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
          <h1 className="text-center text-4xl md:text-6xl font-semibold tracking-tight text-white">
            Contact Me
          </h1>
          <p className="mt-3 mx-auto max-w-3xl text-center text-white/75">
            Based in Stockholm (CET/CEST). I usually reply within 24 hours.
          </p>

          <div className="mt-10">
            <ContactFormCard />
          </div>
        </div>
      </div>
    </section>
  );
}
