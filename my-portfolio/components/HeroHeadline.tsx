import HeaderText from "./HeaderText";
import LocalTime from "./LocalTime";

type HeaderTextProps = { name?: string };

export default function HeroHeadline({ name = "Anita" }: HeaderTextProps) {
  return (
    <section className="relative isolate w overflow-hidden flex flex-col items-center justify-center min-h-screen w-[92%] px-6 py-16 md:py-24">
       <LocalTime /> 
      {/* subtle wash for readability */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/20 via-transparent to-black/20" />

      <div className="relative mx-auto max-w-5xl px-10 py-24 sm:py-32 md:py-40">
        {/* Slim pill badge */}
        <p className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[11px] sm:text-xs uppercase tracking-[0.32em] text-white/75 [backdrop-filter:blur(4px)]">
          Dynamic Web Designer/Developer
        </p>

        {/* Two-line headline, same size & style */}
        <h1
          className="mt-6 text-left font-light text-white
                     text-5xl sm:text-6xl md:text-7xl 
                     tracking-[0.02em] leading-[1.2]
                     [text-shadow:0_6px_18px_rgba(0,0,0,.35)]"
        >
          Transforming Concepts into
        </h1>
        <h1
          className="text-left font-light text-white
                     text-5xl sm:text-6xl md:text-7xl 
                     tracking-[0.02em] leading-[1.2]
                     [text-shadow:0_6px_18px_rgba(0,0,0,.35)]"
        >
          Seamless User Experiences
        </h1>

        {/* typed line + CTA */}
        <HeaderText name={name} />
      </div>
    </section>
  );
}
