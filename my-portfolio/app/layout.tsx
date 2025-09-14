import type { ReactNode } from "react";
import "./globals.css";
import SidebarCard from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";
import TopRightGridButton from "../components/TopRightGridButton";
import { Outfit, Dancing_Script, Rajdhani } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing-script",
  weight: ["500", "700"],
});
const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-rajdhani",
});

// sidebar widths by breakpoint
const SIDEBAR_W_BASE = 380; // default / desktop
const SIDEBAR_W_XL = 420;   // xl+

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${outfit.variable} ${dancingScript.variable} ${rajdhani.variable} font-sans text-white relative overflow-x-hidden`}
        style={
          {
            ["--sidebar-w" as any]: `${SIDEBAR_W_BASE}px`,
            ["--sidebar-w-xl" as any]: `${SIDEBAR_W_XL}px`,
          } as React.CSSProperties
        }
      >
        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only absolute top-2 left-2 bg-orange-500 text-white px-4 py-2 z-50 rounded"
        >
          Skip to main content
        </a>

        {/* ---- GLOBAL BACKGROUND (fixed, edge-safe) ---- */}
        <div className="fixed inset-0 -z-10" aria-hidden="true">
          <div className="absolute inset-0 overflow-hidden">
            {/* Make the animating layer larger than the viewport to avoid edge gaps */}
            <div className="absolute inset-0 scale-[1.12] animate-kenburns will-change-transform">
              <video
                className="w-full h-full min-w-full min-h-full object-cover brightness-[.55] contrast-[1.15] saturate-[1.2]"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/videos/backgroundImage3.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          {/* overlays */}
          <div className="absolute inset-0 pointer-events-none mix-blend-multiply bg-[linear-gradient(to_bottom,rgba(12,13,25,.4),rgba(7,7,10,.50))]" />
          <div className="absolute -inset-[8%] pointer-events-none bg-[radial-gradient(closest-side,transparent_65%,rgba(0,0,0,0.35)_100%)]" />
        </div>

        {/* ---- UI LAYERS ---- */}
        <div className="hidden md:block">
          <TopRightGridButton />
        </div>

        {/* Left sidebar (fixed) */}
        <div className="fixed left-0 top-0 h-screen p-4 sm:p-6 w-[var(--sidebar-w)] xl:w-[var(--sidebar-w-xl)] overflow-y-auto z-20">
          <SidebarCard
            availabilityCount={3}
            name="Anita"
            email="anita.kumari1987@yahoo.com"
            location="Stockholm, Sweden"
            avatar={{ src: "/images/Anita.jpeg", alt: "Anita portrait" }}
            socials={{ instagram: "#", facebook: "#" }}
          />
        </div>

        {/* Right rail */}
        <div className="z-20 hidden md:block">
          <RightSidebar />
        </div>

        {/* Main content (margin matches sidebar at each breakpoint) */}
        <main
          id="main-content"
          className="min-h-screen px-6 md:px-10 py-8 relative z-10 ml-[var(--sidebar-w)] xl:ml-[var(--sidebar-w-xl)]"
        >
          {children}
        </main>
      </body>
    </html>
  );
}
