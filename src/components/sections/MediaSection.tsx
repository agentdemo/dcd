import { ArrowUpRight, FileText, Image as ImageIcon } from 'lucide-react';
import Reveal from '@/components/Reveal';
import SectionHeader from '@/components/SectionHeader';
import { mediaCoverageItems } from '@/data/siteContent';

export default function MediaSection() {
  return (
    <section id="media" className="bg-white py-24 lg:py-32 border-b border-ivory-300">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <SectionHeader
            eyebrow="Media & Editorial"
            title="Press, interviews and international coverage"
            description="A curated editorial archive of press coverage, leadership profiles, keynote interviews, and industry publications featuring Sushill Waddhwa."
          />
        </Reveal>

        {/* ======================================================== */}
        {/* 4 REAL MEDIA COVERAGE CARDS: Alternating Ivory & White   */}
        {/* Card 1: Ivory, Card 2: White, Card 3: Ivory, Card 4: White */}
        {/* ======================================================== */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          {mediaCoverageItems.map((item, index) => {
            const isIvory = index % 2 === 0;
            const bgClass = isIvory ? 'bg-ivory-100' : 'bg-white';

            return (
              <Reveal key={item.id} delay={index % 2 === 0 ? undefined : 1}>
                <article
                  className={`group flex h-full flex-col justify-between rounded-3xl border border-ivory-300 ${bgClass} p-8 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-gold-500 hover:shadow-xl sm:p-10`}
                >
                  <div>
                    {/* Image Slot for Media Item */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-dashed border-ivory-300 bg-ivory-50 flex flex-col items-center justify-center p-6 text-center transition-colors group-hover:border-gold-500">
                      {item.imageSrc ? (
                        <img
                          src={item.imageSrc}
                          alt={item.headline}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                        />
                      ) : (
                        <div className="flex flex-col items-center justify-center space-y-2">
                          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-gold-700 border border-ivory-300 shadow-sm">
                            <ImageIcon size={20} />
                          </div>
                          <span className="text-xs font-semibold uppercase tracking-wider text-ink-900">
                            {item.assetSlotName}
                          </span>
                          <span className="text-[11px] text-ink-500 max-w-[240px]">
                            Final client media screenshot / press photography slot
                          </span>
                        </div>
                      )}

                      {/* Date / Category Badge */}
                      <div className="absolute top-3 left-3 rounded-full bg-ink-900/80 px-3 py-1 text-[10px] font-mono font-medium text-ivory-100 backdrop-blur-sm">
                        {item.dateBadge}
                      </div>
                    </div>

                    {/* Metadata & Headline */}
                    <div className="mt-6">
                      <div className="flex items-center gap-2">
                        <FileText size={14} className="text-gold-700" />
                        <span className="text-xs font-medium uppercase tracking-luxe text-gold-700">
                          {item.publication}
                        </span>
                      </div>

                      <h3 className="mt-3 font-serif text-2xl font-medium text-ink-900 group-hover:text-gold-700 transition-colors sm:text-3xl leading-snug">
                        {item.headline}
                      </h3>

                      <p className="mt-4 text-sm leading-relaxed text-ink-700 sm:text-base">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* External Link Action */}
                  <div className="mt-8 pt-4 border-t border-ivory-300/80 flex items-center justify-between">
                    <span className="text-xs font-medium uppercase tracking-wider text-ink-500">
                      Coverage Link Slot
                    </span>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Read coverage: ${item.headline}`}
                      className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-ink-900 transition-colors hover:text-gold-700 focus-visible:ring-2 focus-visible:ring-gold-500 rounded-sm"
                    >
                      <span>Read Feature</span>
                      <ArrowUpRight
                        size={18}
                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-gold-700"
                      />
                    </a>
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
