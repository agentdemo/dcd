import { ArrowUpRight, Plane } from 'lucide-react';
import Reveal from '@/components/Reveal';
import SectionHeader from '@/components/SectionHeader';
import { ventures, privateJetShowcase } from '@/data/siteContent';

export default function BusinessSection() {
  const [flagship, ...otherVentures] = ventures;

  return (
    <section id="business" className="bg-white py-24 lg:py-32 border-b border-ivory-300">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <SectionHeader
            eyebrow="Business Ventures"
            title="Building across hospitality, media, lifestyle and capital"
            description="A high-conviction ecosystem of global enterprises spanning luxury hotel buyouts, AI-driven hospitality, content production, lifestyle advisory, and family office investments."
          />
        </Reveal>

        {/* ======================================================== */}
        {/* CARD 1: FLAGSHIP - Ivory Background                      */}
        {/* ======================================================== */}
        <Reveal delay={1}>
          <article className="mt-16 rounded-3xl border border-ivory-300 bg-ivory-100 p-8 shadow-sm transition-all duration-500 hover:border-gold-500 hover:shadow-xl sm:p-12">
            <div className="max-w-3xl">
              <span className="eyebrow text-gold-700">{flagship.badge}</span>
              <h3 className="mt-3 text-3xl font-semibold text-ink-900 sm:text-4xl lg:text-5xl">
                {flagship.name}
              </h3>
              <p className="mt-4 font-serif text-lg text-gold-700 sm:text-xl">{flagship.tagline}</p>
              <p className="mt-5 text-base leading-relaxed text-ink-700 sm:text-lg">
                {flagship.description}
              </p>
            </div>
          </article>
        </Reveal>

        {/* ======================================================== */}
        {/* CARDS 2 to 5: Alternating White & Ivory Cards Grid       */}
        {/* Card 2: White, Card 3: Ivory, Card 4: White, Card 5: Ivory */}
        {/* ======================================================== */}
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {otherVentures.map((venture, index) => {
            const isIvory = index % 2 === 1;
            const bgClass = isIvory ? 'bg-ivory-100' : 'bg-white';

            return (
              <Reveal key={venture.id} delay={index % 2 === 0 ? undefined : 1}>
                <article
                  className={`group flex h-full flex-col justify-between rounded-3xl border border-ivory-300 ${bgClass} p-8 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-gold-500 hover:shadow-xl sm:p-10`}
                >
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        {venture.badge && (
                          <span className="eyebrow text-gold-700 text-[10px] tracking-widest">
                            {venture.badge}
                          </span>
                        )}
                        <h3 className="mt-1 text-2xl font-semibold text-ink-900 sm:text-3xl">
                          {venture.name}
                        </h3>
                      </div>
                      <ArrowUpRight
                        size={22}
                        className="mt-1 shrink-0 text-ink-300 transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-gold-700"
                      />
                    </div>

                    <p className="mt-3 font-serif text-lg text-gold-700">{venture.tagline}</p>
                    <p className="mt-4 text-sm leading-relaxed text-ink-700 sm:text-base">
                      {venture.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* ======================================================== */}
        {/* SECTION 8: GULFSTREAM PRIVATE JETS SHOWCASE (White Card) */}
        {/* Image: 08-gulfstream-private-jets.jpg                    */}
        {/* ======================================================== */}
        <Reveal delay={2}>
          <article className="mt-12 rounded-3xl border border-ivory-300 bg-white p-8 shadow-sm transition-all duration-500 hover:border-gold-500 hover:shadow-xl sm:p-12">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-6">
                <div className="flex items-center gap-2 text-gold-700 mb-3">
                  <Plane size={20} />
                  <span className="eyebrow text-gold-700">{privateJetShowcase.eyebrow}</span>
                </div>
                <h3 className="text-3xl font-semibold text-ink-900 sm:text-4xl lg:text-5xl">
                  {privateJetShowcase.title}
                </h3>
                <p className="mt-3 font-serif text-xl text-gold-700">{privateJetShowcase.tagline}</p>
                <p className="mt-5 text-base leading-relaxed text-ink-700 sm:text-lg">
                  {privateJetShowcase.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-3 text-xs uppercase tracking-wider text-ink-700">
                  <span className="rounded-full border border-ivory-300 bg-ivory-100 px-4 py-2 font-medium">
                    ✦ Long-Range Fleet Access
                  </span>
                  <span className="rounded-full border border-ivory-300 bg-ivory-100 px-4 py-2 font-medium">
                    ✦ Bespoke Global Routing
                  </span>
                  <span className="rounded-full border border-ivory-300 bg-ivory-100 px-4 py-2 font-medium">
                    ✦ VVIP Air Concierge
                  </span>
                </div>
              </div>

              {/* Gulfstream Private Jets Image (08-gulfstream-private-jets.jpg) */}
              <div className="lg:col-span-6">
                <div className="group relative aspect-[3/4] w-full max-w-md mx-auto overflow-hidden rounded-2xl border border-ivory-300 shadow-lg transition-all duration-500 hover:border-gold-500 hover:shadow-2xl">
                  <img
                    src={privateJetShowcase.imageSrc}
                    alt={privateJetShowcase.title}
                    className="h-full w-full object-cover object-[center_20%] transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute bottom-3 left-3 rounded-full bg-obsidian-950/80 px-3 py-1 backdrop-blur-md border border-gold-400/30">
                    <span className="text-[10px] uppercase tracking-wider text-gold-300 font-medium">
                      Gulfstream Private Jets
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
