import { useState, useEffect } from 'react';
import { ArrowUpRight, FileText, Maximize2, X } from 'lucide-react';
import Reveal from '@/components/Reveal';
import SectionHeader from '@/components/SectionHeader';
import { mediaCoverageItems, MediaCoverageItem } from '@/data/siteContent';

export default function MediaSection() {
  const [selectedItem, setSelectedItem] = useState<MediaCoverageItem | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedItem(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="media" className="bg-white py-24 lg:py-32 border-b border-ivory-300">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <SectionHeader
            eyebrow="Media & Editorial"
            title="Press, interviews and international coverage"
            description="A curated archive of authentic press coverage, leadership profiles, keynote interviews, and national publications featuring Sushill Waddhwa."
          />
        </Reveal>

        {/* ======================================================== */}
        {/* 5 REAL MEDIA COVERAGE CARDS: Alternating Ivory & White   */}
        {/* Card 1: Ivory, Card 2: White, Card 3: Ivory, etc.        */}
        {/* ======================================================== */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {mediaCoverageItems.map((item, index) => {
            const isIvory = index % 2 === 0;
            const bgClass = isIvory ? 'bg-ivory-100' : 'bg-white';

            return (
              <Reveal key={item.id} delay={(index % 3) as 1 | 2 | undefined}>
                <article
                  className={`group flex h-full flex-col justify-between rounded-3xl border border-ivory-300 ${bgClass} p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-gold-500 hover:shadow-xl`}
                >
                  <div>
                    {/* Newspaper / Magazine Clipping Frame (Aspect Ratio 3:4) */}
                    <div
                      className="group/img relative aspect-[3/4] w-full overflow-hidden rounded-2xl border border-ivory-300 bg-white shadow-inner cursor-pointer"
                      onClick={() => setSelectedItem(item)}
                      role="button"
                      tabIndex={0}
                      aria-label={`View full press clipping for ${item.publication}`}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') setSelectedItem(item);
                      }}
                    >
                      <img
                        src={item.imageSrc}
                        alt={`${item.publication} - ${item.headline}`}
                        className="h-full w-full object-cover object-top transition-transform duration-700 group-hover/img:scale-105"
                        loading="lazy"
                      />

                      {/* Masthead / Category Badge */}
                      <div className="absolute top-3 left-3 rounded-full bg-ink-900/85 px-3 py-1 text-[10px] font-mono font-medium text-ivory-100 backdrop-blur-sm">
                        {item.dateBadge}
                      </div>

                      {/* Zoom Indicator on Hover */}
                      <div className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-ink-900/80 text-ivory-100 opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover/img:opacity-100">
                        <Maximize2 size={14} />
                      </div>
                    </div>

                    {/* Metadata & Headline */}
                    <div className="mt-6">
                      <div className="flex items-center gap-2">
                        <FileText size={14} className="text-gold-700 shrink-0" />
                        <span className="text-xs font-semibold uppercase tracking-luxe text-gold-700">
                          {item.publication}
                        </span>
                      </div>

                      <h3 className="mt-3 font-serif text-2xl font-medium text-ink-900 group-hover:text-gold-700 transition-colors leading-snug">
                        {item.headline}
                      </h3>

                      <p className="mt-4 text-sm leading-relaxed text-ink-700 line-clamp-4">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Read Article / Expand Action */}
                  <div className="mt-6 pt-4 border-t border-ivory-300/80 flex items-center justify-between">
                    <span className="text-[11px] font-medium uppercase tracking-wider text-ink-500">
                      Authentic Press Clipping
                    </span>
                    <button
                      type="button"
                      onClick={() => setSelectedItem(item)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-ink-900 transition-colors hover:text-gold-700 focus-visible:ring-2 focus-visible:ring-gold-500 rounded-sm"
                    >
                      <span>Inspect Clipping</span>
                      <ArrowUpRight size={16} className="text-gold-700" />
                    </button>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>

      {/* ======================================================== */}
      {/* FULL-RESOLUTION LIGHTBOX MODAL TO PRESERVE NEWSPAPER TEXT */}
      {/* ======================================================== */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-obsidian-950/85 p-4 sm:p-6 backdrop-blur-md animate-fade-up"
          onClick={() => setSelectedItem(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selectedItem.headline}
        >
          <div
            className="relative max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-ivory-300 bg-white p-6 shadow-2xl sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b border-ivory-300 pb-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-luxe text-gold-700">
                  {selectedItem.publication} &bull; {selectedItem.dateBadge}
                </span>
                <h3 className="mt-1 font-serif text-2xl font-medium text-ink-900 sm:text-3xl">
                  {selectedItem.headline}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-ivory-300 text-ink-700 transition-colors hover:bg-ink-900 hover:text-ivory-100"
                aria-label="Close preview"
              >
                <X size={20} />
              </button>
            </div>

            <div className="mt-6 flex justify-center bg-ivory-100 p-2 rounded-2xl border border-ivory-300">
              <img
                src={selectedItem.imageSrc}
                alt={selectedItem.headline}
                className="max-h-[65vh] w-auto object-contain rounded-xl shadow-md"
              />
            </div>

            <p className="mt-6 text-sm leading-relaxed text-ink-700 sm:text-base">
              {selectedItem.description}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
