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
      <style jsx global>{`
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

        @keyframes custom-spin {
          from {
            transform: rotateY(0deg);
          }
          to {
            transform: rotateY(360deg);
          }
        }

        .animate-custom-spin {
          animation: custom-spin 3s linear infinite;
          transform-style: preserve-3d;
        }
      `}</style>
      
      {/* Top section with logo and availability */}
      <div className="flex items-center justify-between mb-6">
        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={40}
            height={40}
            className="animate-custom-spin rounded-full"
            style={{ 
              perspective: '1000px'
            }}
          />
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
          <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
          <span className="text-white/80 text-sm">Available to work </span>
        </div>
      </div>

      {/* Profile section with gradient blur effect */}
      <div className="mt-6 rounded-[24px] relative h-96">
        {/* Image container with overflow and blur background */}
        <div className="absolute inset-0 rounded-[24px] overflow-hidden">
          {/* Blurred background for depth */}
          <div className="absolute inset-0 scale-105">
            <div className="absolute inset-x-0 bottom-0 h-1/2 blur-xl">
              <Image
                src="/images/myPhoto.jpeg"
                alt=""
                fill
                className="object-cover object-top"
              />
            </div>
          </div>
          
          {/* Main sharp image */}
          <div className="absolute inset-0">
            <Image
              src="/images/myPhoto.jpeg"
              alt={avatar.alt ?? `${name} portrait`}
              fill
              className="object-cover object-top"
              priority
            />
          </div>
          
          {/* Multiple gradient overlays for depth with darker orange theme */}
          <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-orange-950/90 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-orange-950/95 via-orange-900/60 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_transparent_40%,_rgba(154,52,18,0.4)_100%)]" />
        </div>

        {/* Large signature name overlay */}
        <div className="absolute inset-0 flex items-end justify-center z-20">
          <div className="absolute bottom-[-15px]">
            <h2 
              className="text-[100px] text-white opacity-0 leading-none"
              style={{ 
                fontFamily: 'var(--font-dancing-script)',
                fontWeight: 700,
                transformOrigin: 'center',
                textShadow: '0 2px 10px rgba(194,65,12,0.3), 0 4px 20px rgba(154,52,18,0.4)',
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
      <div className="pt-12 text-center">
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
      <div className="mt-8">
        <div className="relative">
          <Link
            href="/lets-chat"
            className="block w-full text-left text-xl tracking-wide rounded-[24px] px-5 py-4 pr-20 bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
          >
            Get Started
          </Link>
          <Link
            href="/lets-chat"
            aria-label="Go"
            className="absolute right-3 top-1/2 -translate-y-1/2 grid place-items-center size-12 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 transition-all"
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
