import { ArrowUpRight } from 'lucide-react';
import Reveal from '@/components/Reveal';
import SectionHeader from '@/components/SectionHeader';
import { ventures } from '@/data/siteContent';

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
        {/* CARD 1: FLAGSHIP - Platinum World Grroup                 */}
        {/* ======================================================== */}
        <Reveal delay={1}>
          <article className="mt-16 rounded-3xl border border-ivory-300 bg-ivory-50 p-8 shadow-sm transition-all duration-500 hover:border-gold-500 hover:shadow-xl sm:p-12">
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
        {/* CARDS 2 to 5: 2x2 Grid of Global Ventures                */}
        {/* ======================================================== */}
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {otherVentures.map((venture, index) => {
            const isIvory = index % 2 === 1;
            const bgClass = isIvory ? 'bg-ivory-50' : 'bg-white';

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
      </div>
    </section>
  );
}
