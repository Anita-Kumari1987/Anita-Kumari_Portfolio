"use client";

import { cn } from "@/lib/utils";
import React from "react";

export const RegularGradientButton = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    className?: string;
  }
>(({ className, children, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "relative w-full px-6 py-4 rounded-[1.75rem] text-white font-semibold text-lg",
        "bg-gradient-to-r from-black to-orange-900",
        "hover:from-orange-500 hover:to-orange-800",
        "transition-all duration-300",
        "border border-white/20",
        "shadow-[0_0_0_1px_rgba(255,115,0,0.4),0_4px_12px_rgba(255,115,0,0.5)]",
        "hover:shadow-[0_0_0_2px_rgba(255,115,0,0.5),0_6px_16px_rgba(255,115,0,0.6)]",
        className
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      {/* Glow effect */}
      <span className="absolute inset-0 -z-10 rounded-[inherit] bg-gradient-to-b from-orange-400/20 to-orange-600/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </button>
  );
});
