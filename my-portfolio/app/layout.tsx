import type { ReactNode } from "react";
import "./globals.css";
import SidebarCard from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";
import { Outfit, Dancing_Script, Rajdhani } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const dancingScript = Dancing_Script({ 
  subsets: ["latin"],
  variable: "--font-dancing-script",
  weight: ["500", "700"]
});
const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-rajdhani"
});

const SIDEBAR_W = 380; // px (matches Tailwind width below)

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className={`${outfit.variable} ${dancingScript.variable} ${rajdhani.variable} font-sans text-white relative`}>
        {/* ---- GLOBAL BACKGROUND (fixed so it spans ALL pages & scroll) ---- */}
        <div
          className="fixed inset-0 -z-10 overflow-hidden"
          aria-hidden="true"
        >
          <video
            className="absolute inset-0 w-full h-full object-cover brightness-[.55] contrast-[1.15] saturate-[1.2] will-change-transform animate-kenburns"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/videos/backgroundImage3.mp4" type="video/mp4" />
          </video>

          {/* Overlay stack */}
          <div className="absolute inset-0 pointer-events-none mix-blend-multiply bg-[linear-gradient(to_bottom,rgba(12,13,25,.4),rgba(7,7,10,.50))]" />

  {/* Very light vignette at edges only */}
  <div className="absolute -inset-[10%] pointer-events-none bg-[radial-gradient(closest-side,transparent_65%,rgba(0,0,0,0.35)_100%)]" />
</div>

        {/* ---- UI LAYERS (above the background) ---- */}
        {/* fixed left sidebar visible on ALL pages */}
        <div
          className="fixed left-0 top-0 h-screen p-4 sm:p-6 w-[380px] xl:w-[420px] overflow-y-auto z-20"
          style={{ width: SIDEBAR_W }}
        >
          <SidebarCard
            availabilityCount={3}
            name="Anita"
            email="anita.kumari1987@yahoo.com"
            location="Stockholm, Sweden"
            avatar={{ src: "/images/Anita.jpeg", alt: "Anita portrait" }}
            socials={{ x: "#", dribbble: "#", instagram: "#", facebook: "#" }}
          />
        </div>

        {/* right rail should sit above bg too */}
        <div className="z-20">
          <RightSidebar />
        </div>

        {/* main scrollable content with left padding equal to sidebar width */}
        <main
          className="min-h-screen px-6 md:px-10 py-8 relative z-10"
          style={{ marginLeft: SIDEBAR_W }}
        >
          {children}
        </main>
      </body>
    </html>
  );
}
