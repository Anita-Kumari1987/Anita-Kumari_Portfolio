import HeaderText from "./HeaderText";
import LocalTime from "./LocalTime";
import { TextAnimate } from "./magicui/text-animate";

type HeaderTextProps = { name?: string };

export default function HeroHeadline({ name = "Anita" }: HeaderTextProps) {
  return (
    <section
      className="
        relative isolate overflow-hidden flex flex-col rounded-3xl items-center justify-start
        min-h-screen w-[92%] px-6 py-12 md:py-24
        max-[550px]:px-4 max-[550px]:py-8
      "
    >
      <LocalTime />

      {/* readability wash */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/20 via-transparent to-black/20" />

      {/* grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-25
          [background-image:linear-gradient(rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.06)_1px,transparent_1px)]
          [background-size:80px_80px,80px_80px]
        "
      />

      {/* spotlight */}
      <div className="pointer-events-none absolute -inset-[20%] -z-10 bg-[radial-gradient(closest-side,rgba(255,255,255,0.08),transparent_60%)]" />

      <div
        className="
          relative mx-auto max-w-9xl px-10 py-24 sm:py-32 md:py-40
          max-[550px]:px-3 max-[550px]:py-10
        "
      >
        {/* badge */}
        <p
          className="
            inline-flex items-center rounded-full border border-white/15 bg-white/5
            px-4 py-1.5 text-[25px] sm:text-xs uppercase tracking-[0.32em] text-white/75 [backdrop-filter:blur(4px)]
            max-[550px]:text-[10px] max-[550px]:px-3 max-[550px]:py-1 max-[550px]:tracking-[0.24em]
          "
        >
          Dynamic Web Designer/Developer
        </p>

        {/* line 1 */}
        <h1
          className="
            mt-6 text-left font-rajdhani tracking-[0.02em] leading-[1.2] text-cyan-100
            text-[72px]
            max-[550px]:text-4xl max-[550px]:mt-12 max-[550px]:font-extrabold
          "

          style={{ fontFamily: "var(--font-rajdhani)" }}
        >
          <TextAnimate animation="slideUp" by="word">
            Transforming Concepts into
          </TextAnimate>
        </h1>

        {/* line 2 */}
        <h1
          className="
            text-left text-cyan-100 font-extralight tracking-[0.02em] leading-[1.2]
            text-6xl sm:text-6xl md:text-7xl
            max-[550px]:text-4xl max-[550px]:font-extrabold [text-shadow:0_6px_18px_rgba(0,0,0,.35)] max-[550px]:mb-12
          "
          style={{ fontFamily: "var(--font-rajdhani)" }}
        >
          <TextAnimate animation="slideUp" by="word">
            Seamless User Experiences
          </TextAnimate>
        </h1>

        {/* typed line + CTA */}
        <HeaderText name={name} />
      </div>
    </section>
  );
}
