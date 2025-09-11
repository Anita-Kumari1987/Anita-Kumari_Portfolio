"use client";

import Link from "next/link";
import { RegularGradientButton } from "./ui/regular-gradient-button";

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
          <RegularGradientButton className="w-full h-16">
            {label}
          </RegularGradientButton>
        </Link>
      ))}
    </div>
  );
}
