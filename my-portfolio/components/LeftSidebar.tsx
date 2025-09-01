"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Dribbble, Facebook, Instagram, Twitter } from "lucide-react";
import Logo3D from "./Logo3D";

type Props = {
  availabilityCount: number;
  name: string;
  email: string;
  location: string;
  avatar: { src: string; alt?: string };
  socials?: { x?: string; dribbble?: string; instagram?: string; facebook?: string };
};
export default function SidebarCard({
  name,
  email,
  location,
  avatar,
  socials,
}: Props) {
  return (
    <aside className="relative rounded-[28px] border border-white/10 bg-[#0f1316]/80 backdrop-blur-xl p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_40px_80px_-20px_rgba(0,0,0,0.6)]">
      {/* top row */}
      <div className="flex items-center flex-col gap-4">
        <Logo3D />
    <div className="rounded-full border  border-white/10 bg-white/5 px-4 py-2 flex items-center text-[20px] w-[18rem]my-">
      <span className="text-white/80">Empowering the FUTURE</span>
  
    </div>
      </div>

      {/* photo */}
      <div className="mt-6 rounded-[24px] overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-br from-[#ff6a3d] via-[#ff922e] to-[#ff3d43]" />
        <img
          src={avatar.src}
          alt={avatar.alt ?? `${name} portrait`}
          width={900}
          height={1125}
          className="relative object-cover w-full aspect-[4/5]"
        />
        {/* script name overlay */}
        {/* <div className="pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2">
          <span className="[font-family:var(--font-script,cursive)] text-[84px] leading-none text-amber-300 drop-shadow-[0_6px_24px_rgba(0,0,0,0.6)] select-none">
            {name}
          </span> */}
          <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-full text-center">
  <span className="[font-family:var(--font-script,cursive)] text-[84px] leading-none text-red-500 drop-shadow-[0_6px_24px_rgba(0,0,0,0.6)] select-none">
    {name}
  </span>
        </div>
      </div>

      {/* contact */}
      <div className="pt-16 text-center">
        <a
          href={`mailto:${email}`}
          className="block text-[20px] tracking-wide font-medium text-white/90 to-blue-50 hover:text-white transition-colors"
        >
          {email}
        </a>
        <p className="mt-3 text-lg text-white/70">Based in {location}</p>
      </div>

      {/* socials */}
      <div className="mt-8 flex items-center justify-center gap-4">
        <RoundIcon href={socials?.x} sr="X / Twitter">
          <Twitter className="size-5" />
        </RoundIcon>
        <RoundIcon href={socials?.dribbble} sr="Dribbble">
          <Dribbble className="size-5" />
        </RoundIcon>
        <RoundIcon href={socials?.instagram} sr="Instagram">
          <Instagram className="size-5" />
        </RoundIcon>
        <RoundIcon href={socials?.facebook} sr="Facebook">
          <Facebook className="size-5" />
        </RoundIcon>
      </div>

      {/* CTA */}
      <div className="mt-10">
        <div className="relative">
          <Link
            href="/lets-chat"
            className="block w-full text-left text-2xl tracking-wide rounded-[28px] px-6 py-6 pr-24 bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
          >
            Get Started
          </Link>
          <Link
            href="/lets-chat"
            aria-label="Go"
            className="absolute right-3 top-1/2 -translate-y-1/2 grid place-items-center size-16 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 transition-all"
          >
            <ArrowUpRight className="size-7" />
          </Link>
        </div>
      </div>
    </aside>
  );
}

// function LogoMark() {
//   return (
//     <div className="grid place-items-center size-10 rounded-md bg-white text-neutral-900 shadow-[0_6px_18px_rgba(0,0,0,0.3)]">
//       <svg viewBox="0 0 24 24" className="size-6" aria-hidden>
//         <path d="M12 2l5 4-5 4-5-4 5-4zm0 12l5 4-5 4-5-4 5-4z" fill="currentColor" />
//       </svg>
//     </div>
//   );
// }

function RoundIcon({
  href = "#",
  sr,
  children,
}: {
  href?: string;
  sr: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={sr}
      className="size-16 grid place-items-center rounded-full border border-white/10 bg-white/6 hover:bg-white/10 transition shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06),0_10px_30px_rgba(0,0,0,0.35)]"
    >
      {children}
    </a>
  );
}
