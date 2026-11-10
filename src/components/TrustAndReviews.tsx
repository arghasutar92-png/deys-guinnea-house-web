"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { storeData } from "@/data/storeData";

type TrustHighlight = {
  title: string;
  description: string;
  image?: string;
};

const trustHighlights: readonly TrustHighlight[] = [
  {
    title: "100% BIS Hallmarked Gold",
    description: "Every gold piece carries the assurance of verified purity.",
    image: storeData.media.hallmark
  },
  {
    title: "Legacy of Trust",
    description: "Decades of heritage, proudly rooted in Bowbazar, Kolkata."
  },
  {
    title: "Certified Gemstones & Transparency",
    description: "Clear purity checks and honest guidance, from selection to purchase."
  },
  {
    title: "Jewellery Repair & Custom Crafts",
    description: "In-house expert artisans bring treasured pieces and new ideas to life."
  }
] as const;

const reviews = [
  {
    quote: "The gold quality is exceptional and every detail was explained with complete transparency.",
    name: "Priya S.",
    detail: "Verified Google review"
  },
  {
    quote: "Beautiful craftsmanship and a wonderful team. They made choosing our wedding jewellery effortless.",
    name: "Ananya M.",
    detail: "Verified Google review"
  },
  {
    quote: "A warm, welcoming experience at the Bowbazar store. We found exactly what we were looking for.",
    name: "Rohan D.",
    detail: "Verified Google review"
  }
] as const;

export default function TrustAndReviews() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      void videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  return (
    <section className="bg-[#0D0D0D] px-6 py-20 md:px-12 md:py-28 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-2xl">
          <p className="mb-4 text-[10px] uppercase tracking-widest-plus text-[#D4AF37]">The DGH assurance</p>
          <h2 className="font-display text-5xl leading-tight text-[#F9F6F0] md:text-7xl">Trust in every <em className="text-[#D4AF37]">detail.</em></h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trustHighlights.map((highlight) => (
            <article key={highlight.title} className="relative min-h-[220px] overflow-hidden border border-[#D4AF37]/30 p-6">
              {highlight.image && (
                <Image src={highlight.image} alt="BIS hallmark certification on gold jewellery" fill className="object-cover opacity-25" sizes="(max-width: 1024px) 50vw, 25vw" />
              )}
              <div className="relative z-10">
                <span className="mb-8 inline-flex h-10 w-10 items-center justify-center border border-[#D4AF37] text-lg text-[#D4AF37]">✦</span>
                <h3 className="font-display text-2xl leading-tight text-[#F9F6F0]">{highlight.title}</h3>
                <p className="mt-3 text-xs leading-6 text-[#F9F6F0]/55">{highlight.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 grid items-center gap-10 md:grid-cols-[1.15fr_0.85fr]">
          <div className="relative border border-[#D4AF37]/60 p-2">
            <div className="relative aspect-video overflow-hidden bg-[#1A1A1A]">
              <video ref={videoRef} autoPlay muted loop playsInline poster={storeData.media.hero} className="h-full w-full object-cover" aria-label="Inside the Deys Guinea House showroom">
                <source src={storeData.media.showroomVideo} type="video/mp4" />
              </video>
              <div className="absolute inset-x-4 bottom-4 flex items-center justify-between">
                <button type="button" onClick={togglePlay} className="border border-[#F9F6F0]/60 bg-[#0D0D0D]/70 px-4 py-2 text-[10px] uppercase tracking-widest text-[#F9F6F0] backdrop-blur-sm" aria-label={isPlaying ? "Pause showroom video" : "Play showroom video"}>
                  {isPlaying ? "Pause" : "Play"}
                </button>
                <button type="button" onClick={toggleMute} className="border border-[#F9F6F0]/60 bg-[#0D0D0D]/70 px-4 py-2 text-[10px] uppercase tracking-widest text-[#F9F6F0] backdrop-blur-sm" aria-label={isMuted ? "Unmute showroom video" : "Mute showroom video"}>
                  {isMuted ? "Sound off" : "Sound on"}
                </button>
              </div>
            </div>
          </div>
          <div>
            <p className="mb-4 text-[10px] uppercase tracking-widest-plus text-[#D4AF37]">Step inside</p>
            <h2 className="font-display text-5xl leading-tight text-[#F9F6F0] md:text-6xl">Where every visit feels <em className="text-[#D4AF37]">personal.</em></h2>
            <p className="mt-6 text-sm leading-7 text-[#F9F6F0]/60">Take a glimpse inside our Bowbazar showroom, where thoughtful guidance and a love for fine craft make every discovery memorable.</p>
          </div>
        </div>

        <div className="mt-20 border-t border-[#D4AF37]/25 pt-12">
          <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div><p className="mb-3 text-[10px] uppercase tracking-widest-plus text-[#D4AF37]">Loved by Kolkata</p><h2 className="font-display text-5xl text-[#F9F6F0]">What our clients say</h2></div>
            <div className="text-left sm:text-right"><p className="font-display text-4xl text-[#F9F6F0]">4.8<span className="ml-2 text-[#D4AF37]">★</span></p><p className="text-[10px] uppercase tracking-widest text-[#F9F6F0]/50">666+ verified reviews on Google</p></div>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {reviews.map((review) => (
              <article key={review.name} className="border border-[#F9F6F0]/15 bg-[#1A1A1A] p-6">
                <p className="mb-5 text-lg tracking-widest text-[#D4AF37]">★★★★★</p>
                <blockquote className="font-display text-2xl leading-snug text-[#F9F6F0]">&ldquo;{review.quote}&rdquo;</blockquote>
                <div className="mt-7 border-t border-[#F9F6F0]/10 pt-4"><p className="text-xs text-[#F9F6F0]">{review.name}</p><p className="mt-1 text-[9px] uppercase tracking-widest text-[#F9F6F0]/40">{review.detail}</p></div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
