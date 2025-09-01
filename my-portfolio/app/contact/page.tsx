import type { Metadata } from "next";
import ContactFormCard from "@/components/ContactFormCard";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch — I usually reply within 24–48 hours.",
};

export default function ContactPage() {
  return (
    <section
      className="relative isolate flex flex-col justify-center min-h-screen px-6 py-16 md:py-24 max-w-10xl ml-[-70px]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.06) 1px, transparent 1px)",
        backgroundSize: "80px 80px, 80px 80px",
      }}
    >
      <div className="relative max-w-4xl w-full overflow-visible rounded-[28px] border border-white/12 bg-white/[0.045] p-6 shadow-[0_25px_60px_-30px_rgba(0,0,0,.6)] backdrop-blur-xl md:p-10 mx-auto">
        <h1 className="text-center text-4xl font-extrabold text-white sm:text-5xl">
          Let’s{" "}
          <span className="bg-gradient-to-r from-violet-300 via-purple-400 to-cyan-300 bg-clip-text text-transparent">
            collaborate
          </span>
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-center text-slate-300/85">
          Based in Stockholm (CET/CEST). I usually reply within 24 hours.
        </p>
        <div className="mt-10">
          <ContactFormCard />
        </div>
      </div>
    </section>
  );
}