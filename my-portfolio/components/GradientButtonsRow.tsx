"use client";

import Link from "next/link";
import { Button } from "../components/ui/moving-border";

type Item = { label: string; href: string };

const ITEMS: Item[] = [
  { label: "My TechStack", href: "/about/tech-stack" },
  { label: "Education", href: "/about/education" },
  { label: "Experiences", href: "/about/experience" },
];

export default function GradientButtonsRow({ className = "" }: { className?: string }) {
  return (
    <div className={`grid grid-cols-1 gap-6 sm:grid-cols-3 ${className}`}>
      {ITEMS.map(({ label, href }) => (
        <Link key={label} href={href} aria-label={label}>
          <Button
            borderRadius="1.75rem"
            className="
              w-full h-16
              bg-black/60 dark:bg-slate-900
              text-white font-semibold text-lg
              border border-white/20
              hover:bg-black/70 hover:border-white/40
              transition-colors
            "
          >
            {label}
          </Button>
        </Link>
      ))}
    </div>
  );
}
