import Image from "next/image";
import FeaturedCollections from "@/components/FeaturedCollections";
import ContactAndMap from "@/components/ContactAndMap";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import StickyMobileBar from "@/components/StickyMobileBar";
import TrustAndReviews from "@/components/TrustAndReviews";
import { storeData } from "@/data/storeData";

function ArrowUpRight() {
  return <span aria-hidden="true" className="text-xl leading-none">↗</span>;
}

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturedCollections />
      <TrustAndReviews />

      <section id="story" className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center md:px-12 md:py-32 lg:px-16">
        <div>
          <p className="mb-5 text-[10px] uppercase tracking-widest-plus text-champagne">A Kolkata legacy</p>
          <h2 className="max-w-lg font-display text-5xl leading-tight text-ivory md:text-7xl">Made for your <em className="text-champagne">forever.</em></h2>
          <p className="mt-8 max-w-md text-sm leading-8 text-ivory/60">For generations, Deys Guinea House has been a part of life&apos;s most beautiful moments. Every piece is an expression of our city&apos;s rich craft and your singular story.</p>
          <a href="#collection" className="mt-8 inline-flex items-center gap-3 border-b border-champagne pb-3 text-[10px] uppercase tracking-widest text-champagne">Discover our story <ArrowUpRight /></a>
        </div>
        <div className="image-shine relative aspect-[4/5] max-w-md justify-self-end">
          <Image src={storeData.media.antiqueGold} alt="Intricate antique gold jewellery" fill className="object-cover" sizes="(max-width: 768px) 100vw, 40vw" />
          <span className="absolute bottom-5 left-5 z-10 border border-ivory/40 px-3 py-2 text-[9px] uppercase tracking-widest text-ivory">Crafted with care</span>
        </div>
      </section>

      <section id="gold-rates" className="relative scroll-mt-24 overflow-hidden px-6 py-20 md:px-12 md:py-28 lg:px-16">
        <video autoPlay muted loop playsInline poster={storeData.media.hero} className="absolute inset-0 h-full w-full object-cover opacity-25"><source src={storeData.media.showroomVideo} type="video/mp4" /></video>
        <div className="absolute inset-0 bg-midnight-950/70" />
        <div className="relative mx-auto max-w-3xl text-center"><p className="mb-5 text-[10px] uppercase tracking-widest-plus text-champagne">The DGH promise</p><h2 className="font-display text-5xl leading-tight text-ivory md:text-7xl">A little more <em className="text-champagne">wonder</em> in every day.</h2><p className="mx-auto mt-7 max-w-lg text-sm leading-7 text-ivory/60">BIS hallmarked gold. Honest guidance. A family jeweller you can return to, time and time again.</p></div>
      </section>

      <ContactAndMap />
      <Footer />
      <StickyMobileBar />

    </main>
  );
}
