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
  const attribute = brandAttributes[index % brandAttributes.length];

  return (
    <section id="home" className="pt-20">
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

        <div className="absolute inset-0 bg-gradient-to-t from-ink-900/60 via-transparent to-transparent" />

        <div className="absolute inset-x-0 bottom-0 px-6 pb-16 text-ivory-50 sm:pb-20 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <p key={attribute} className="animate-fade-up font-serif text-5xl font-medium tracking-[0.06em] sm:text-6xl lg:text-7xl">
              {attribute}
            </p>
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

        {total > 1 && (
          <div className="absolute left-6 top-6 flex items-center gap-2 sm:left-10 sm:top-8" role="tablist" aria-label="Choose photo">
            {heroSlides.map((slide, slideIndex) => (
              <button
                key={slide.src}
                type="button"
                role="tab"
                aria-selected={slideIndex === index}
                aria-label={`Show photo ${slideIndex + 1}`}
                onClick={() => goTo(slideIndex)}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  slideIndex === index ? 'w-8 bg-gold-300' : 'w-3 bg-ivory-100/50 hover:bg-ivory-100'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
