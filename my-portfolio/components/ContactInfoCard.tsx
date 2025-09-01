import { MapPin, Clock, Linkedin, Github, Twitter, FileText } from "lucide-react";

export default function ContactInfoCard() {
  return (
    <div className="relative rounded-[28px] border border-white/10 bg-white/[0.04] backdrop-blur-xl shadow-2xl p-6 md:p-8 flex flex-col gap-6 overflow-hidden">
      {/* Globe image, optional */}
      <div className="pointer-events-none absolute bottom-0 right-0 z-0 h-32 w-32 opacity-60 bg-gradient-to-t from-[#0b0f1a]/60 to-transparent">
        {/* <Image src="/images/globe-dots.svg" alt="" fill className="object-contain" /> */}
      </div>
      <div className="relative z-10 flex flex-wrap gap-2 mb-2">
        <span className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/90">Open to freelance</span>
        <span className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/90">Part-time</span>
        <span className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/90">Remote</span>
      </div>
      <ul className="relative z-10 space-y-3 text-slate-200/90">
        <li className="flex items-center gap-3">
          <MapPin className="h-5 w-5 text-cyan-300" />
          Stockholm, Sweden (CET/CEST)
        </li>
        <li className="flex items-center gap-3">
          <Clock className="h-5 w-5 text-cyan-300" />
          Usually within 24h
        </li>
      </ul>
      <div className="relative z-10">
        <h3 className="mb-1 text-lg font-semibold text-white">Socials</h3>
        <div className="flex flex-wrap gap-2">
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-cyan-200 font-semibold hover:-translate-y-0.5 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400/60"
          >
            <Linkedin className="h-5 w-5" /> LinkedIn
          </a>
          <a
            href="https://github.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-cyan-200 font-semibold hover:-translate-y-0.5 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400/60"
          >
            <Github className="h-5 w-5" /> GitHub
          </a>
          <a
            href="https://twitter.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-cyan-200 font-semibold hover:-translate-y-0.5 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400/60"
          >
            <Twitter className="h-5 w-5" /> X/Twitter
          </a>
        </div>
      </div>
      <div className="relative z-10">
        <a
          href="/files/Anita_Kumari_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-2xl border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-cyan-200 font-semibold hover:bg-cyan-300/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400/60"
        >
          <FileText className="h-5 w-5" />
          Download CV
        </a>
      </div>
    </div>
  );
}