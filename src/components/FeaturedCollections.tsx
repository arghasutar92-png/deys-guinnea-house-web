import Image from "next/image";
import { storeData } from "@/data/storeData";

type Collection = {
  number: string;
  title: string;
  description: string;
  image?: string;
  tags: readonly string[];
};

const collections: readonly Collection[] = [
  {
    number: "01",
    title: "Bridal Collection",
    description: "Heirloom silhouettes for the beginning of forever.",
    image: storeData.media.bridalSet,
    tags: ["100% BIS Hallmarked", "Custom Designs Available"]
  },
  {
    number: "02",
    title: "Antique Gold & Temple Jewellery",
    description: "Old-world craft, shaped for a modern legacy.",
    image: storeData.media.antiqueGold,
    tags: ["100% BIS Hallmarked", "Custom Designs Available"]
  },
  {
    number: "03",
    title: "Diamond Solitaires & Precious Gems",
    description: "Rare brilliance, selected for life's most luminous moments.",
    tags: ["Certified Precious Gems", "Custom Designs Available"]
  },
  {
    number: "04",
    title: "Lightweight Daily Wear & Chains",
    description: "Quiet luxury made to move effortlessly with you.",
    tags: ["100% BIS Hallmarked", "Comfort-First Designs"]
  }
] as const;

function whatsappLink(title: string) {
  const message = `Hello Deys Guinea House, I would like to enquire about the ${title}.`;
  return `${storeData.whatsappHref}?text=${encodeURIComponent(message)}`;
}

export default function FeaturedCollections() {
  return (
    <section id="collection" className="scroll-mt-24 bg-[#1A1A1A] px-6 py-20 md:px-12 md:py-28 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <p className="mb-4 text-[10px] uppercase tracking-widest-plus text-[#D4AF37]">The edit</p>
            <h2 className="font-display text-5xl text-[#F9F6F0] md:text-7xl">Featured collections</h2>
          </div>
          <span className="hidden text-[10px] uppercase tracking-widest text-[#F9F6F0]/40 sm:block">Curated in Kolkata</span>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {collections.map((collection) => (
            <article key={collection.number} className="group border border-[#D4AF37]/30 bg-[#0D0D0D]">
              <div className="relative aspect-[3/4] overflow-hidden">
                {collection.image ? (
                  <Image
                    src={collection.image}
                    alt={`${collection.title} jewellery`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                ) : (
                  <div className="flex h-full flex-col items-center justify-center bg-[radial-gradient(circle_at_35%_25%,#8d6d2d_0%,#302817_25%,#11100d_65%)] p-6 text-center">
                    <div className="mb-5 h-24 w-24 rotate-45 border border-[#D4AF37]/70 shadow-[0_0_45px_rgba(212,175,55,0.2)]" />
                    <p className="font-display text-3xl text-[#D4AF37]">Rare brilliance</p>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent opacity-90" />
                <span className="absolute left-5 top-5 text-xs text-[#D4AF37]">{collection.number}</span>
                <div className="absolute inset-x-5 bottom-5 flex flex-wrap gap-2">
                  {collection.tags.map((tag) => (
                    <span key={tag} className="border border-[#F9F6F0]/35 bg-[#0D0D0D]/70 px-2 py-1 text-[8px] uppercase tracking-wider text-[#F9F6F0]/80 backdrop-blur-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex min-h-[190px] flex-col p-5">
                <h3 className="font-display text-3xl leading-tight text-[#F9F6F0]">{collection.title}</h3>
                <p className="mt-2 text-xs leading-5 text-[#F9F6F0]/50">{collection.description}</p>
                <a
                  href={whatsappLink(collection.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto flex items-center justify-center gap-2 border border-[#D4AF37] px-3 py-3 text-center text-[9px] uppercase tracking-widest text-[#D4AF37] transition-colors hover:bg-[#D4AF37] hover:text-[#0D0D0D]"
                >
                  <span aria-hidden="true">◈</span> Enquire on WhatsApp
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
