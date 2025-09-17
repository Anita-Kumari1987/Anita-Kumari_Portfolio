"use client";
import { useState } from "react";
import { Menu, X, Home, User, GraduationCap, Briefcase, Layers, Route, Quote, HelpCircle, MessageSquare, Mail, FolderKanban, Facebook, Instagram, Linkedin, Github } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { label: "Home", icon: Home, href: "/" },
  { label: "About me", icon: User, href: "/about" },
  { label: "My education", icon: GraduationCap, href: "/about/education" },
  { label: "My experience", icon: Briefcase, href: "/about/experience" },
  { label: "My techstack", icon: Layers, href: "/about/tech-stack" },
  { label: "My Projects", icon: FolderKanban, href: "/myProjects" },
  { label: "My approach", icon: Route, href: "/approach" },
  { label: "Testimonials", icon: Quote, href: "/testimonial" },
  { label: "Faq's", icon: HelpCircle, href: "/faq" },
  { label: "Chat with me", icon: MessageSquare, href: "/lets-chat" },
  { label: "Contact me", icon: Mail, href: "/contact" },
];

const socials = [
  { icon: <Facebook size={24} />, href: "https://www.facebook.com/anita.kumari.1614" },
  { icon: <Instagram size={24} />, href: "https://www.instagram.com/anita60682024/" },
  { icon: <Linkedin size={24} />, href: "https://www.linkedin.com/in/anita-kumari-91160723/" },
  { icon: <Github size={24} />, href: "https://github.com/Anita-Kumari1987" },
];

export default function RightMenuDrawer({ open, onClose, closeDrawer }: { open: boolean; onClose: () => void; closeDrawer?: () => void }) {
  const pathname = usePathname();
  // Define homepage section anchors inside the component
  const homepageSections = [
    { label: "Home", icon: Home, href: "#home" },
    { label: "About me", icon: User, href: "#about" },
    { label: "My education", icon: GraduationCap, href: "#education" },
    { label: "My experience", icon: Briefcase, href: "#experience" },
    { label: "My techstack", icon: Layers, href: "#techstack" },
    { label: "My Projects", icon: FolderKanban, href: "#projects" },
    { label: "Testimonials", icon: Quote, href: "#testimonials" },
    { label: "Faq's", icon: HelpCircle, href: "#faq" },
    { label: "Contact me", icon: Mail, href: "#contact" },
  ];
  return (
    <div className={`fixed inset-0 z-[100] transition-all duration-300 ${open ? "pointer-events-auto" : "pointer-events-none"}`}>
      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}
        onClick={onClose}
      />
      {/* Drawer */}
      <aside
        className={`absolute right-0 top-0 h-full w-[200px] md:w-[270px] max-w-full bg-gradient-to-b from-[#191919] via-[#18171c] to-[#191919] shadow-2xl transition-transform duration-300 flex flex-col px-5 py-8 border-l border-orange-900/30 ${open ? "translate-x-0" : "translate-x-full"}`}
        style={{backdropFilter: 'blur(8px)'}}
      >
        <div className="flex items-center justify-between mb-8">
          <span className="text-white text-lg font-light tracking-wide flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-br from-orange-400 to-orange-900 mr-2" />
            Menu
          </span>
          <button onClick={onClose} aria-label="Close menu" className="hover:scale-110 transition-transform">
            <X size={32} className="text-gray-400 hover:text-orange-400 transition" />
          </button>
        </div>
        <nav className="flex-1 flex flex-col gap-2">
          {menuItems.map(({ label, icon: Icon, href }) => {
            // Check if this is a homepage section
            const homepageSection = homepageSections.find((s) => s.label === label);
            if (homepageSection) {
              // If on homepage, use anchor tag for smooth scroll
              if (pathname === "/") {
                return (
                  <a
                    key={label}
                    href={homepageSection.href}
                    onClick={() => { onClose(); closeDrawer && closeDrawer(); }}
                    className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-300 hover:text-orange-400 hover:bg-orange-900/10 text-[15px] font-light transition-all group cursor-pointer"
                  >
                    <Icon size={20} className="stroke-[1.3] group-hover:text-orange-400 transition" />
                    <span>{label}</span>
                  </a>
                );
              } else {
                // If not on homepage, use Link to homepage with hash
                return (
                  <Link
                    key={label}
                    href={`/${homepageSection.href}`}
                    onClick={() => { onClose(); closeDrawer && closeDrawer(); }}
                    className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-300 hover:text-orange-400 hover:bg-orange-900/10 text-[15px] font-light transition-all group"
                  >
                    <Icon size={20} className="stroke-[1.3] group-hover:text-orange-400 transition" />
                    <span>{label}</span>
                  </Link>
                );
              }
            } else {
              // For other pages, use Link as before
              return (
                <Link
                  key={label}
                  href={href}
                  onClick={() => { onClose(); closeDrawer && closeDrawer(); }}
                  className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-300 hover:text-orange-400 hover:bg-orange-900/10 text-[15px] font-light transition-all group"
                >
                  <Icon size={20} className="stroke-[1.3] group-hover:text-orange-400 transition" />
                  <span>{label}</span>
                </Link>
              );
            }
          })}
        </nav>
        <div className="mt-6">
          <span className="text-white/90 text-base font-light flex items-center gap-2 mb-2">
            <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-br from-orange-400 to-orange-900 mr-2" />
            Social Network
          </span>
          <div className="flex gap-4 mt-3">
            {socials.map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#232323] hover:bg-orange-900/30 w-11 h-11 flex items-center justify-center transition-all shadow-inner border border-orange-900/20"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
}
