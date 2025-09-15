"use client";
import { useState } from "react";
import RightMenuDrawer from "./RightMenuDrawer";

export default function MobileMenuButton() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <>
      <button
        className="fixed top-4 right-4 z-50 p-2 rounded-full bg-white/10 border border-orange-200/40 text-orange-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 md:hidden cursor-pointer"
        onClick={() => setDrawerOpen(true)}
        aria-label="Open menu"
      >
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500"><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/><line x1="3" y1="21" x2="21" y2="21"/></svg>
      </button>
      <RightMenuDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}
