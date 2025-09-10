"use client";

import Image from "next/image";
import Link from "next/link";
import { Twitter, Dribbble, Facebook, Instagram, ArrowUpRight } from "lucide-react";
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
    <aside className="relative rounded-[28px] border border-white/10 bg-[#0f1316]/80 backdrop-blur-xl p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_40px_80px_-20px_rgba(0,0,0,0.6)] min-h-[600px]">
      <style jsx>{`
        @keyframes nameAppear {
          from { 
            opacity: 0; 
            transform: translateY(40px) rotate(6deg);
          }
          to { 
            opacity: 0.95; 
            transform: translateY(0) rotate(6deg);
          }
        }
      `}</style>
      
      {/* Top section with logo and availability */}
      <div className="flex items-center justify-between mb-6">
        <div className="w-8 h-8 rounded-md bg-white flex items-center justify-center">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={32}
            height={32}
            className="transition-transform duration-300 hover:rotate-180"
          />
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
          <div className="w-2 h-2 rounded-full bg-orange-400"></div>
          <span className="text-white/80 text-sm">Available for 3 projects</span>
        </div>
      </div>

      {/* Profile section with gradient blur effect */}
      <div className="mt-6 rounded-[24px] relative h-96">
        {/* Image container with overflow */}
        <div className="absolute inset-0 rounded-[24px] overflow-hidden">
          {/* Main image */}
          <div className="absolute inset-0">
            <Image
              src="/images/myPhoto.jpeg"
              alt={avatar.alt ?? `${name} portrait`}
              fill
              className="object-cover object-top"
              priority
            />
          </div>
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-orange-950/60 to-orange-950/90" />
        </div>

        {/* Large signature name overlay */}
        <div className="absolute inset-0 flex items-end justify-center z-20">
          <div className="absolute bottom-[-25px]">
            <h2 
              className="text-[130px] text-white opacity-0 leading-none rotate--6"
              style={{ 
                fontFamily: 'var(--font-dancing-script)',
                fontWeight: 700,
                transformOrigin: 'center',
                textShadow: '3px 3px 10px rgba(0,0,0,0.5)',
                animation: 'nameAppear 1.2s ease-out forwards',
                letterSpacing: '0.02em'
              }}
            >
              Anita
            </h2>
          </div>
        </div>

        {/* Text overlay */}
        <div className="relative z-10 h-full flex flex-col justify-end p-6">
        </div>
      </div>

      {/* Contact info */}
      <div className="pt-6 text-center">
        <a
          href={`mailto:${email}`}
          className="block text-[20px] tracking-wide font-medium text-white/90 hover:text-white transition-colors"
        >
          {email}
        </a>
        <p className="mt-3 text-lg text-white/70">Based in {location}</p>
      </div>

      {/* Social icons */}
      <div className="mt-8 flex items-center justify-center gap-4">
        <RoundIcon href={socials?.x} sr="X / Twitter">
          <Twitter className="size-5 text-white/80" />
        </RoundIcon>
        <RoundIcon href={socials?.dribbble} sr="Dribbble">
          <Dribbble className="size-5 text-white/80" />
        </RoundIcon>
        <RoundIcon href={socials?.instagram} sr="Instagram">
          <Instagram className="size-5 text-white/80" />
        </RoundIcon>
        <RoundIcon href={socials?.facebook} sr="Facebook">
          <Facebook className="size-5 text-white/80" />
        </RoundIcon>
      </div>

      {/* Get Started CTA */}
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
