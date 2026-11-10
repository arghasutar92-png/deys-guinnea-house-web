"use client";

import Image from "next/image";
import { useState } from "react";
import { storeData } from "@/data/storeData";

const rates = "24K Gold: ₹7,850/g   |   22K Gold: ₹7,200/g   |   Silver: ₹92/g   |   Updated Today";

export default function HeroSection() {
  const [videoFailed, setVideoFailed] = useState(false);

  return (
    <section className="relative min-h-[760px] overflow-hidden bg-[#0D0D0D] pt-20 md:min-h-[820px] md:pt-24">
      <div className="absolute inset-x-0 top-0 z-20 overflow-hidden border-b border-[#D4AF37]/30 bg-[#0D0D0D]/90 py-2.5 backdrop-blur-md" aria-label="Live gold and silver rates">
        <div className="flex min-w-max animate-[ticker_28s_linear_infinite] gap-8 whitespace-nowrap text-[10px] uppercase tracking-widest text-[#D4AF37]">
          <span>{rates}</span>
          <span aria-hidden="true">{rates}</span>
        </div>
      </div>

      <Image src={storeData.media.hero} alt={`${storeData.name} (${storeData.bengaliName}) storefront in Bowbazar`} fill priority className="object-cover object-center opacity-50" sizes="100vw" />
      {!videoFailed && (
        <video autoPlay muted loop playsInline poster={storeData.media.hero} onError={() => setVideoFailed(true)} className="absolute inset-0 h-full w-full object-cover opacity-65">
          <source src={storeData.media.storeTourVideo} type="video/mp4" />
          <source src={storeData.media.showroomVideo} type="video/mp4" />
        </video>
      )}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D]/80 via-[#0D0D0D]/45 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-[#0D0D0D]/30" />

      <div className="relative z-10 mx-auto flex min-h-[680px] max-w-7xl flex-col justify-end px-6 pb-20 md:px-12 md:pb-28 lg:px-16">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-[#D4AF37] md:text-sm">
          DEYS GUINEA HOUSE • BOWBAZAR, KOLKATA
        </p>
        <p className="mb-5 text-[10px] uppercase tracking-widest-plus text-[#D4AF37]">Bowbazar&apos;s premier jewellery destination</p>
        <h1 className="max-w-4xl font-[var(--font-playfair)] text-5xl leading-[0.98] text-[#F9F6F0] sm:text-6xl md:text-8xl">
          Timeless Craftsmanship, <em className="text-[#D4AF37]">Purest Heritage</em> Since Decades
        </h1>
        <p className="mt-7 max-w-xl text-sm leading-7 text-[#F9F6F0]/75 md:text-base">
          Discover exceptional gold and diamond jewellery, where Kolkata&apos;s finest traditions meet a distinctly modern point of view.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href="#collection" className="inline-flex items-center justify-center bg-[#D4AF37] px-6 py-4 text-center text-[10px] uppercase tracking-widest text-[#0D0D0D] transition-colors hover:bg-[#F9F6F0]">
            Explore Exclusive Collections
          </a>
          <a href={storeData.phoneHref} className="inline-flex items-center justify-center border border-[#D4AF37] px-6 py-4 text-center text-[10px] uppercase tracking-widest text-[#D4AF37] transition-colors hover:bg-[#D4AF37] hover:text-[#0D0D0D]">
            Call Store Now
          </a>
        </div>
        <p className="mt-7 text-[10px] uppercase tracking-widest text-[#F9F6F0]/65">
          <span className="text-[#D4AF37]">4.8★</span> Rated on Google (666+ Reviews) <span className="mx-2 text-[#D4AF37]/60">|</span> 100% BIS Hallmarked
        </p>
      </div>
    </section>
  );
}
