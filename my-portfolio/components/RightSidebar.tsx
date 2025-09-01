"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Home,User,  FolderOpenDot, BriefcaseBusiness, Layers, MessageSquare, Mail, PenTool, LucideIcon,
} from "lucide-react";

type Item = { label: string; href: string; Icon: LucideIcon };

const ITEMS: Item[] = [
  { label: "Home", href: "#home", Icon: Home },
  { label: "About", href: "#user", Icon: User },
  { label: "My Projects", href: "#print", Icon: FolderOpenDot },
  { label: "My Experiences", href: "#docs", Icon: BriefcaseBusiness },
  { label: "Tech-Stack", href: "#tags", Icon: Layers },
  { label: "Chat", href: "#chat", Icon: MessageSquare },
  { label: "Mail", href: "#mail", Icon: Mail },
  { label: "Write to me", href: "#write", Icon: PenTool },
];

export default function RightSidebar(){
  const [active, setActive] = useState<string>("Home");

  return (
    <aside className="fixed right-4 top-1/2 -translate-y-1/2 z-50">
      <nav className="flex w-16 flex-col items-center gap-3 rounded-full border border-white/10 bg-white/10 p-3 shadow-2xl backdrop-blur-xl dark:bg-black/20 dark:border-white/10">
        {ITEMS.map(({ label, href, Icon }) => {
          const isActive = active === label;
          return (
            <Link
              key={label}
              href={href}
              onClick={() => setActive(label)}
              aria-current={isActive ? "page" : undefined}
              className="group relative grid h-12 w-12 place-items-center rounded-full text-slate-200 transition hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              title={label}
            >
              <span
                className={`absolute inset-0 -z-10 rounded-full bg-white/15 shadow-sm backdrop-blur transition-opacity ${
                  isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                }`}
              />
              <Icon className="h-5 w-5" strokeWidth={1.75} />
              <span className="sr-only">{label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
