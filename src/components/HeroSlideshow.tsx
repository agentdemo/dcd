import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { brandAttributes, heroSlides } from '@/data/siteContent';

const SLIDE_INTERVAL_MS = 6000;

export default function HeroSlideshow() {
  const [index, setIndex] = useState(0);
  const total = heroSlides.length;

  useEffect(() => {
    if (total < 2) return;
    const timer = window.setTimeout(() => setIndex((current) => (current + 1) % total), SLIDE_INTERVAL_MS);
    return () => window.clearTimeout(timer);
  }, [index, total]);

  const goTo = (next: number) => setIndex((next + total) % total);
  const current = heroSlides[index];

  return (
    <section id="home" className="scroll-mt-0">
      <div className="relative h-[88svh] min-h-[560px] w-full overflow-hidden bg-ink-900 lg:h-[92vh]">
        {heroSlides.map((slide, slideIndex) => (
          <img
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            className={`absolute inset-0 h-full w-full object-cover object-[center_20%] transition-opacity duration-[1400ms] ease-out ${
              slideIndex === index ? 'animate-kenburns opacity-100' : 'opacity-0'
            }`}
            loading={slideIndex === 0 ? 'eager' : 'lazy'}
            aria-hidden={slideIndex !== index}
          />
        ))}

        <div className="absolute inset-0 bg-gradient-to-t from-ink-900/90 via-ink-900/35 to-ink-900/10" />

        <div className="relative flex h-full flex-col justify-end px-6 pb-16 text-ivory-100 sm:pb-20 lg:px-10">
          <div className="mx-auto w-full max-w-7xl">
            <p className="eyebrow text-gold-300">Global Hospitality Entrepreneur &bull; Investor</p>
            <h1 className="mt-4 text-5xl font-semibold tracking-[0.08em] text-ivory-50 sm:text-6xl lg:text-7xl">
              SUSHILL WADDHWA
            </h1>
            <p className="mt-4 font-serif text-xl text-ivory-200 sm:text-2xl">Founder &amp; CMD, Platinum World Group</p>

            <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-[11px] font-medium uppercase tracking-luxe text-ivory-200 sm:text-xs">
              {brandAttributes.map((attribute, attributeIndex) => (
                <li key={attribute} className="flex items-center gap-5">
                  {attribute}
                  {attributeIndex < brandAttributes.length - 1 && <span className="text-gold-300">&bull;</span>}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {total > 1 && (
          <div className="absolute bottom-6 right-6 flex items-center gap-3 sm:bottom-8 sm:right-10">
            <button
              type="button"
              onClick={() => goTo(index - 1)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-ivory-100/40 text-ivory-100 transition-colors hover:bg-ivory-100 hover:text-ink-900"
              aria-label="Previous photo"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={() => goTo(index + 1)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-ivory-100/40 text-ivory-100 transition-colors hover:bg-ivory-100 hover:text-ink-900"
              aria-label="Next photo"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        )}
      </div>

      <div className="border-b border-ivory-300 bg-ivory-100">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <p key={current.caption} className="animate-fade-up font-serif text-lg text-ink-700 sm:text-xl">
            {current.caption}
          </p>
          {total > 1 && (
            <div className="flex items-center gap-2" role="tablist" aria-label="Choose photo">
              {heroSlides.map((slide, slideIndex) => (
                <button
                  key={slide.src}
                  type="button"
                  role="tab"
                  aria-selected={slideIndex === index}
                  aria-label={`Show photo ${slideIndex + 1}`}
                  onClick={() => goTo(slideIndex)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    slideIndex === index ? 'w-8 bg-gold-500' : 'w-3 bg-ink-300 hover:bg-ink-500'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
