"use client";
import { useState } from "react";
import RightMenuDrawer from "./RightMenuDrawer";

export default function MobileMenuButton() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <>
      <button
        className="fixed top-3 right-3 z-[70] p-1.5 rounded-full bg-white/10 border border-orange-200/40 text-orange-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 md:hidden cursor-pointer"
        onClick={() => setDrawerOpen(true)}
        aria-label="Open menu"
      >
        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500"><line x1="3" y1="7" x2="17" y2="7"/><line x1="3" y1="12" x2="17" y2="12"/><line x1="3" y1="17" x2="17" y2="17"/></svg>
      </button>
      <RightMenuDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} closeDrawer={() => setDrawerOpen(false)} />
    </>
  );
}
