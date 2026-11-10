import { storeData } from "@/data/storeData";

const mapUrl = "https://maps.google.com/maps?q=Deys%20Guinea%20House%20126A%20Bepin%20Behari%20Ganguly%20St%20Bowbazar%20Kolkata&t=&z=16&ie=UTF8&iwloc=&output=embed";
export default function ContactAndMap() {
  return (
    <section id="contact" className="scroll-mt-24 border-t border-[#D4AF37]/20 bg-[#1A1A1A] px-6 py-20 md:px-12 md:py-28 lg:px-16">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div className="min-w-0">
          <p className="mb-4 text-[10px] uppercase tracking-widest-plus text-[#D4AF37]">Visit our showroom</p>
          <h2 className="font-display text-5xl leading-tight text-[#F9F6F0] md:text-7xl">Come find your <em className="text-[#D4AF37]">forever.</em></h2>
          <div className="mt-10 space-y-6 text-sm leading-7 text-[#F9F6F0]/65">
            <div>
              <p className="mb-1 text-[10px] uppercase tracking-widest text-[#D4AF37]">Address</p>
              <p className="break-words">{storeData.address.replace("126A ", "126A, ")}, Lebutala, Bowbazar, Kolkata, West Bengal 700012</p>
            </div>
            <div>
              <p className="mb-1 text-[10px] uppercase tracking-widest text-[#D4AF37]">Call us</p>
              <a href={storeData.phoneHref} className="transition-colors hover:text-[#D4AF37]">{storeData.phone}</a>
            </div>
            <div>
              <p className="mb-1 text-[10px] uppercase tracking-widest text-[#D4AF37]">Showroom hours</p>
              <p>Mon–Sat · 11 AM – 8 PM<br />Sunday · Closed</p>
            </div>
          </div>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href={storeData.phoneHref} className="inline-flex items-center justify-center border border-[#D4AF37] px-5 py-3 text-[10px] uppercase tracking-widest text-[#D4AF37] transition-colors hover:bg-[#D4AF37] hover:text-[#0D0D0D]">Call Store</a>
            <a href={storeData.whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center border border-[#D4AF37] px-5 py-3 text-[10px] uppercase tracking-widest text-[#D4AF37] transition-colors hover:bg-[#D4AF37] hover:text-[#0D0D0D]">Chat on WhatsApp</a>
            <a href={`${storeData.whatsappHref}?text=${encodeURIComponent("Hello, I would like to book a showroom visit at Deys Guinea House.")}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-[#D4AF37] px-5 py-3 text-[10px] uppercase tracking-widest text-[#0D0D0D] transition-colors hover:bg-[#F9F6F0]">Book Showroom Visit</a>
          </div>
        </div>
        <div className="relative h-[360px] min-w-0 overflow-hidden border border-[#D4AF37]/60 p-2 sm:h-[420px] md:h-[480px]">
          <iframe title="Deys Guinea House location in Bowbazar, Kolkata" src={mapUrl} className="h-full w-full border-0 grayscale-[0.35]" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          <div className="pointer-events-none absolute inset-2 border border-[#D4AF37]/25" />
        </div>
      </div>
    </section>
  );
}
