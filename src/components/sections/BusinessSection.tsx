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
        {/* CARD 1: FLAGSHIP - Platinum World Grroup (Blue Card)     */}
        {/* ======================================================== */}
        <Reveal delay={1}>
          <article className="mt-16 rounded-3xl border border-gold-500/35 bg-gradient-to-br from-obsidian-900 via-obsidian-900 to-[#0A1224] p-8 shadow-2xl transition-all duration-500 hover:border-gold-400 hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)] sm:p-12 text-ivory-100">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="max-w-3xl">
                <span className="eyebrow text-gold-400">{flagship.badge}</span>
                <h3 className="mt-3 font-serif text-3xl font-medium text-ivory-50 sm:text-4xl lg:text-5xl">
                  {flagship.name}
                </h3>
                <p className="mt-4 font-serif text-lg text-gold-300 sm:text-xl">{flagship.tagline}</p>
                <p className="mt-5 text-base leading-relaxed text-ivory-200/90 sm:text-lg">
                  {flagship.description}
                </p>
              </div>

              {flagship.href && (
                <div className="shrink-0 self-start md:self-center">
                  <a
                    href={flagship.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-gold-400/40 bg-obsidian-950 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-gold-300 transition-all duration-300 hover:bg-gold-500 hover:text-obsidian-950 hover:shadow-lg"
                    aria-label={`Visit ${flagship.name} official website`}
                  >
                    <span>Visit Website</span>
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              )}
            </div>
          </article>
        </Reveal>

        {/* ======================================================== */}
        {/* CARDS 2 to 5: Alternating White and Blue Cards Grid      */}
        {/* Card 2: White, Card 3: Blue, Card 4: White, Card 5: Blue */}
        {/* ======================================================== */}
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {otherVentures.map((venture, index) => {
            const isBlue = index % 2 === 1;

            if (isBlue) {
              return (
                <Reveal key={venture.id} delay={index % 2 === 0 ? undefined : 1}>
                  <article className="group flex h-full flex-col justify-between rounded-3xl border border-gold-500/25 bg-obsidian-900 p-8 shadow-xl transition-all duration-500 hover:-translate-y-1 hover:border-gold-400 hover:shadow-2xl sm:p-10 text-ivory-100">
                    <div>
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          {venture.badge && (
                            <span className="eyebrow text-gold-400 text-[10px] tracking-widest">
                              {venture.badge}
                            </span>
                          )}
                          <h3 className="mt-1 font-serif text-2xl font-medium text-ivory-50 sm:text-3xl group-hover:text-gold-300 transition-colors">
                            {venture.name}
                          </h3>
                        </div>
                        {venture.href ? (
                          <a
                            href={venture.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-1 p-2 rounded-full border border-gold-500/20 text-gold-400/80 transition-all duration-300 hover:bg-gold-500 hover:text-obsidian-950 hover:scale-110"
                            aria-label={`Visit ${venture.name}`}
                          >
                            <ArrowUpRight size={18} />
                          </a>
                        ) : (
                          <ArrowUpRight
                            size={22}
                            className="mt-1 shrink-0 text-gold-400/60 transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-gold-300"
                          />
                        )}
                      </div>

                      <p className="mt-3 font-serif text-lg text-gold-300">{venture.tagline}</p>
                      <p className="mt-4 text-sm leading-relaxed text-ivory-200/90 sm:text-base">
                        {venture.description}
                      </p>
                    </div>
                  </article>
                </Reveal>
              );
            }

            return (
              <Reveal key={venture.id} delay={index % 2 === 0 ? undefined : 1}>
                <article className="group flex h-full flex-col justify-between rounded-3xl border border-ivory-300 bg-white p-8 shadow-md transition-all duration-500 hover:-translate-y-1 hover:border-gold-500 hover:shadow-xl sm:p-10 text-ink-900">
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        {venture.badge && (
                          <span className="eyebrow text-gold-700 text-[10px] tracking-widest">
                            {venture.badge}
                          </span>
                        )}
                        <h3 className="mt-1 font-serif text-2xl font-medium text-ink-900 sm:text-3xl group-hover:text-gold-700 transition-colors">
                          {venture.name}
                        </h3>
                      </div>
                      {venture.href ? (
                        <a
                          href={venture.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-1 p-2 rounded-full border border-ivory-300 text-ink-500 transition-all duration-300 hover:bg-gold-500 hover:text-white hover:border-gold-500 hover:scale-110"
                          aria-label={`Visit ${venture.name}`}
                        >
                          <ArrowUpRight size={18} />
                        </a>
                      ) : (
                        <ArrowUpRight
                          size={22}
                          className="mt-1 shrink-0 text-ink-400 transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-gold-700"
                        />
                      )}
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
