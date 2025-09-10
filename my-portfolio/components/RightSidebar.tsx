"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home, User, FolderOpenDot, BriefcaseBusiness, Layers, MessageSquare, Mail, Quote, LucideIcon,
} from "lucide-react";

type Item = { label: string; href: string; Icon: LucideIcon };

const ITEMS: Item[] = [
  { label: "Home", href: "/", Icon: Home },
  { label: "About", href: "/about", Icon: User },
  { label: "My Projects", href: "/myProjects", Icon: FolderOpenDot },
  { label: "My Experiences", href: "/about/experience", Icon: BriefcaseBusiness },
  { label: "Tech-Stack", href: "/about/tech-stack", Icon: Layers },
  { label: "Chat", href: "/lets-chat", Icon: MessageSquare },
  { label: "Mail", href: "/contact", Icon: Mail },
  { label: "Testimonials", href: "/testimonial", Icon: Quote },
];

export default function RightSidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed right-6 top-1/2 -translate-y-1/2 z-50">
      <nav className="relative isolate flex w-[72px] flex-col items-center gap-5 rounded-full border border-white/10 bg-gradient-to-b from-[#1a0f07] via-[#150c06] to-[#0d0704] py-6 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
        {/* Background glow */}
        <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-b from-orange-500/10 via-amber-500/5 to-transparent" />
        {/* Bottom blur gradient */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-orange-900/50 via-orange-800/20 to-transparent rounded-b-full pointer-events-none" />
        
        {ITEMS.map(({ label, href, Icon }) => {
          const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);
          return (
            <Link
              key={label}
              href={href}
              aria-current={isActive ? "page" : undefined}
              className="group relative grid h-12 w-12 place-items-center rounded-full text-slate-300/80 transition-all duration-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              title={label}
            >
              <span
                className={`absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-white/20 to-white/5 transition-all duration-300 ${
                  isActive 
                    ? "opacity-100 scale-100" 
                    : "opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100"
                }`}
              />
              <Icon 
                className={`h-6 w-6 transition-transform duration-300 ${
                  isActive ? "scale-110" : "group-hover:scale-110"
                }`} 
                strokeWidth={1.5} 
              />
              <span className="sr-only">{label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
