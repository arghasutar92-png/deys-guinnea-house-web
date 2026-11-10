import { storeData } from "@/data/storeData";

type MobileAction = {
  label: string;
  href: string;
  icon: string;
  external?: boolean;
};

const actions: readonly MobileAction[] = [
  { label: "Call Now", href: storeData.phoneHref, icon: "☎" },
  { label: "WhatsApp", href: storeData.whatsappHref, icon: "◈", external: true },
  { label: "Directions", href: storeData.directionsHref, icon: "⌖", external: true }
] as const;

export default function StickyMobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-[#D4AF37]/50 bg-[#0D0D0D]/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-md md:hidden">
      {actions.map((action) => (
        <a key={action.label} href={action.href} target={action.external ? "_blank" : undefined} rel={action.external ? "noopener noreferrer" : undefined} className="flex min-h-16 flex-col items-center justify-center gap-1 border-r border-[#D4AF37]/20 py-3 text-[#D4AF37] last:border-r-0">
          <span aria-hidden="true" className="text-lg leading-none">{action.icon}</span>
          <span className="text-[9px] uppercase tracking-widest">{action.label}</span>
        </a>
      ))}
    </div>
  );
}
