"use client";
import { useState } from "react";
import { Menu } from "lucide-react";
import RightMenuDrawer from "./RightMenuDrawer";

export default function TopRightGridButton() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        className="fixed top-10 right-10 z-50 w-16 h-16 rounded-full bg-gradient-to-br from-orange-200 via-orange-500 to-orange-900 p-[2px] shadow-xl hover:scale-110 transition-transform"
        aria-label="Open menu"
        onClick={() => setOpen(true)}
      >
        <span className="flex items-center justify-center w-full h-full rounded-full bg-white/90 hover:bg-white">
          <Menu size={24} className="text-orange-700 drop-shadow-[0_2px_8px_rgba(255,94,0,0.15)]" />
        </span>
      </button>
      <RightMenuDrawer open={open} onClose={() => setOpen(false)} />
    </>
  );
}
