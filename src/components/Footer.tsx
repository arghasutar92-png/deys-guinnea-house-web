const links = [
  { label: "Home", href: "#" },
  { label: "Collections", href: "#collection" },
  { label: "About Us", href: "#story" },
  { label: "Contact", href: "#contact" }
];

export default function Footer() {
  return (
    <footer className="border-t border-[#D4AF37]/30 bg-[#0D0D0D] px-6 pb-24 pt-14 md:px-12 md:pb-10 lg:px-16">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.4fr_0.8fr_1fr] md:gap-8">
        <div className="min-w-0">
          <p className="font-display text-3xl leading-tight text-[#F9F6F0]">Deys <span className="text-[#D4AF37]">Guinea House</span></p>
          <p className="mt-4 max-w-sm text-xs leading-6 text-[#F9F6F0]/45">Best Gold &amp; Diamond Jewellery Shop in Bowbazar, Kolkata.</p>
        </div>
        <div>
          <p className="mb-4 text-[10px] uppercase tracking-widest text-[#D4AF37]">Explore</p>
          <nav className="flex flex-col gap-3 text-xs text-[#F9F6F0]/60" aria-label="Footer navigation">
            {links.map((link) => <a key={link.label} href={link.href} className="transition-colors hover:text-[#D4AF37]">{link.label}</a>)}
          </nav>
        </div>
        <div className="flex min-w-0 items-start gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#D4AF37] text-xl text-[#D4AF37]">✦</span>
          <div className="min-w-0"><p className="text-xs leading-5 text-[#F9F6F0]">100% BIS Hallmarked Gold</p><p className="mt-2 text-[10px] leading-5 text-[#F9F6F0]/45">Purity assured. Craftsmanship trusted.</p></div>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-7xl border-t border-[#F9F6F0]/10 pt-5 text-[9px] uppercase tracking-widest text-[#F9F6F0]/30">
        © {new Date().getFullYear()} Deys Guinea House · Bowbazar, Kolkata
      </div>
    </footer>
  );
}
