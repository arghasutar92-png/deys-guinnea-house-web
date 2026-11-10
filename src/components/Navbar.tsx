"use client";

import { useEffect, useState } from "react";
import { storeData } from "@/data/storeData";

const links = [
  { label: "Home", href: "#" },
  { label: "Collections", href: "#collection" },
  { label: "About Us", href: "#story" },
  { label: "Live Gold Rates", href: "#gold-rates" },
  { label: "Contact", href: "#contact" }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#D4AF37]/30 bg-[#0D0D0D]/90 backdrop-blur-md">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:h-24 md:px-12 lg:px-16" aria-label="Main navigation">
        <a href="#" onClick={closeMenu} className="font-display text-xl leading-none tracking-wide text-[#D4AF37] [background:linear-gradient(110deg,#F9F6F0,#D4AF37_55%,#A77B15)] [background-clip:text] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] sm:text-2xl">
          De&apos;s Guinea House
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a key={link.label} href={link.href} className="text-[10px] uppercase tracking-widest text-[#F9F6F0]/70 transition-colors hover:text-[#D4AF37]">
              {link.label}
            </a>
          ))}
          <a href={storeData.phoneHref} className="border border-[#D4AF37]/70 px-5 py-3 text-[10px] uppercase tracking-widest text-[#D4AF37] transition-colors hover:bg-[#D4AF37] hover:text-[#0D0D0D]">
            Call Now
          </a>
        </div>

        <button type="button" aria-label={isOpen ? "Close menu" : "Open menu"} aria-expanded={isOpen} onClick={() => setIsOpen((open) => !open)} className="relative z-10 flex h-11 w-11 flex-col items-center justify-center gap-1.5 border border-[#D4AF37]/40 lg:hidden">
          <span className={`block h-px w-5 bg-[#D4AF37] transition-transform duration-300 ${isOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-px w-5 bg-[#D4AF37] transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`} />
          <span className={`block h-px w-5 bg-[#D4AF37] transition-transform duration-300 ${isOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </nav>

      <div className={`absolute inset-x-0 top-full border-b border-[#D4AF37]/30 bg-[#0D0D0D] px-6 transition-[visibility,opacity,transform] duration-300 lg:hidden ${isOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-3 opacity-0"}`}>
        <div className="mx-auto flex max-w-7xl flex-col py-6">
          {links.map((link) => (
            <a key={link.label} href={link.href} onClick={closeMenu} className="border-b border-[#D4AF37]/15 py-4 font-display text-2xl text-[#F9F6F0] transition-colors hover:text-[#D4AF37]">
              {link.label}
            </a>
          ))}
          <a href={storeData.phoneHref} onClick={closeMenu} className="mt-6 flex items-center justify-center border border-[#D4AF37] py-4 text-[10px] uppercase tracking-widest text-[#D4AF37]">
            Call Now · {storeData.phone}
          </a>
        </div>
      </div>
    </header>
  );
}
