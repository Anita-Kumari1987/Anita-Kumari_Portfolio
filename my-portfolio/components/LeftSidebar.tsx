"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Facebook, Instagram, ArrowUpRight, Github, Linkedin } from "lucide-react";
import RightMenuDrawer from "./RightMenuDrawer";

type Props = {
  availabilityCount?: number;
  name: string;
  email: string;
  location: string;
  avatar: { src: string; alt?: string };
  socials?: { github?: string; linkedin?: string; instagram?: string; facebook?: string };
};

export default function SidebarCard({
  name,
  email,
  location,
  avatar,
  socials,
}: Props) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <div className="w-full flex justify-center md:block md:h-screen px-4 sm:px-6 overflow-x-hidden">
      <aside
        className="
          relative max-w-[550px] md:max-w-none mx-auto md:mx-0
          rounded-[20px] md:rounded-[28px] border border-white/10
          bg-[#0f1316]/80 backdrop-blur-xl
          p-4 md:p-6
          shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_40px_80px_-20px_rgba(0,0,0,0.6)]
          min-h-[520px] md:min-h-[600px]
        "
      >
        {/* Top: logo + availability */}
        <div className="flex items-center mb-4 md:mb-6">
          <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white flex items-center justify-center">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={40}
              height={40}
              className="animate-custom-spin rounded-full"
            />
          </div>
          <div className="flex-1 flex justify-center">
            <div className="flex items-center gap-2 px-2 py-1 rounded-full bg-white/5 border border-white/10">
              <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
              <span className="text-white/80 text-lg sm:text-base font-semibold">Available to work</span>
            </div>
          </div>
          {/* Orange circle indicator: always show on desktop, removed from mobile */}
          <span className="absolute top-1/2 right-[-10px] -translate-y-1/2 w-3 h-3 rounded-full bg-orange-500 hidden md:block" />
        </div>

        {/* Photo + signature */}
  <div className="mt-4 md:mt-6 rounded-[18px] md:rounded-[24px] relative w-full h-[90vw] max-h-[520px] md:h-96">
          <div className="absolute inset-0 rounded-[inherit] overflow-hidden">
            {/* soft blur base */}
            <div className="absolute inset-0 scale-105">
              <div className="absolute inset-x-0 bottom-0 h-1/2 blur-xl">
                <Image src={avatar.src} alt="" fill className="object-cover object-top" sizes="(max-width:768px) 90vw, 40vw" />
              </div>
            </div>
            {/* sharp portrait */}
            <div className="absolute inset-0">
              <Image
                src={avatar.src}
                alt={avatar.alt ?? `${name} portrait`}
                fill
                priority
                className="object-cover object-top"
                sizes="(max-width:768px) 90vw, 40vw"
              />
            </div>
            {/* overlays */}
            <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-orange-950/90 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-orange-950/95 via-orange-900/60 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_transparent_40%,_rgba(154,52,18,0.4)_100%)]" />
          </div>

          {/* Signature (kept inside so it won't be clipped) */}
          <div className="absolute inset-0 flex items-end justify-center z-20 pointer-events-none">
            <div className="w-full px-6 pb-0 sm:pb-2 absolute left-0 right-0 translate-y-1/4 md:translate-y-1/3 sm:static sm:translate-y-0 flex justify-center">
              <h2
                className="whitespace-nowrap leading-none text-8xl sm:text-9xl md:text-[80px] lg:text-[100px] text-white opacity-90 font-dancing-script drop-shadow-lg -rotate-12 md:-rotate-[16deg] sm:rotate-0"
                style={{
                  fontFamily: "var(--font-dancing-script)",
                  fontWeight: 700,
                  textShadow:
                    "0 2px 10px rgba(194,65,12,0.3), 0 4px 20px rgba(154,52,18,0.4)",
                  letterSpacing: "0.02em",
                }}
              >
                Anita
              </h2>
            </div>
          </div>
        </div>

  {/* Contact */}
  <div className="mt-15 sm:mt-8 md:pt-12 text-center">
          <a
            href={`mailto:${email}`}
            className="block text-base md:text-[20px] tracking-wide font-medium text-white/90 hover:text-white transition-colors break-all"
          >
            {email}
          </a>
          <p className="mt-2 md:mt-3 text-sm md:text-lg text-white/70">
            Based in {location}
          </p>
        </div>

        {/* Socials */}
        <div className="mt-6 md:mt-8 flex items-center justify-center gap-3 md:gap-4">
          <RoundIcon href={socials?.github ?? "https://github.com/Anita-Kumari1987"} sr="GitHub">
            <Github className="size-4 md:size-5 text-white/80" />
          </RoundIcon>
          <RoundIcon href={socials?.linkedin ?? "https://www.linkedin.com/in/anita-kumari-91160723/"} sr="LinkedIn">
            <Linkedin className="size-4 md:size-5 text-white/80" />
          </RoundIcon>
          <RoundIcon href={socials?.instagram ?? "https://www.instagram.com/anita60682024/"} sr="Instagram">
            <Instagram className="size-4 md:size-5 text-white/80" />
          </RoundIcon>
          <RoundIcon href={socials?.facebook ?? "https://www.facebook.com/anita.kumari.1614"} sr="Facebook">
            <Facebook className="size-4 md:size-5 text-white/80" />
          </RoundIcon>
        </div>

        {/* CTA */}
        <div className="mt-6 md:mt-8">
          <div className="relative">
            <Link
              href="/lets-chat"
              className="block w-full text-left text-lg md:text-xl tracking-wide rounded-[18px] md:rounded-[24px] px-4 md:px-5 py-3 md:py-4 pr-16 md:pr-20 bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
            >
              Get Started
            </Link>
            <Link
              href="/lets-chat"
              aria-label="Go"
              className="absolute right-2.5 md:right-3 top-1/2 -translate-y-1/2 grid place-items-center size-10 md:size-12 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 transition-all"
            >
              <ArrowUpRight className="size-5 md:size-7" />
            </Link>
          </div>
        </div>
      </aside>
    </div>
  );
}

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
      target="_blank"
      rel="noopener noreferrer"
      aria-label={sr}
      className="inline-flex items-center justify-center rounded-full bg-white/5 hover:bg-orange-500/20 transition p-1.5 md:p-2"
    >
      {children}
    </a>
  );
}

