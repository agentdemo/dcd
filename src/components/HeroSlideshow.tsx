import { useEffect, useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { brandAttributes, heroSlides } from '@/data/siteContent';

const SLIDE_INTERVAL_MS = 6500;

export default function HeroSlideshow() {
  const [index, setIndex] = useState(0);
  const total = heroSlides.length;
  const isHoveredRef = useRef(false);

  useEffect(() => {
    if (total < 2) return;
    const timer = window.setInterval(() => {
      if (!isHoveredRef.current) {
        setIndex((current) => (current + 1) % total);
      }
    }, SLIDE_INTERVAL_MS);
    return () => window.clearInterval(timer);
  }, [total]);

  const goTo = (next: number) => setIndex((next + total) % total);

  // Triple set of the 6 descriptive words to guarantee a seamless, gapless continuous loop across any screen width
  const tickerWords = [...brandAttributes, ...brandAttributes, ...brandAttributes];

  return (
    <section id="home" className="pt-20 bg-obsidian-950">
      {/* ============================================================ */}
      {/* 1. HERO BANNER - Clean, Unobstructed Full Photographic View  */}
      {/* (Text removed from hero and placed in top-left navbar)       */}
      {/* ============================================================ */}
      <div
        className="relative h-[86svh] min-h-[560px] w-full overflow-hidden bg-obsidian-950 lg:h-[90vh]"
        onMouseEnter={() => {
          isHoveredRef.current = true;
        }}
        onMouseLeave={() => {
          isHoveredRef.current = false;
        }}
      >
        {/* Slideshow background layers with viewport-specific pictures */}
        {heroSlides.map((slide, slideIndex) => (
          <picture
            key={slide.id}
            className={`absolute inset-0 block h-full w-full transition-opacity duration-[1400ms] ease-out ${
              slideIndex === index ? 'animate-kenburns opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            aria-hidden={slideIndex !== index}
          >
            <source media="(min-width: 768px)" srcSet={slide.desktopSrc} />
            <img
              src={slide.mobileSrc}
              alt={slide.alt}
              className="h-full w-full object-cover object-[center_25%]"
              loading={slideIndex === 0 ? 'eager' : 'lazy'}
            />
          </picture>
        ))}

        {/* Subtle Cinematic Vignette for Depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/80 via-transparent to-black/20 pointer-events-none" />

        {/* Top Indicators / Slide Status */}
        {total > 1 && (
          <div
            className="absolute left-6 top-6 flex items-center gap-2 sm:left-10 sm:top-8 z-20"
            role="tablist"
            aria-label="Choose hero photo slide"
          >
            {heroSlides.map((slide, slideIndex) => (
              <button
                key={slide.id}
                type="button"
                role="tab"
                aria-selected={slideIndex === index}
                aria-label={`Show photo ${slideIndex + 1}`}
                onClick={() => goTo(slideIndex)}
                className={`h-1.5 rounded-full transition-all duration-500 focus-visible:ring-2 focus-visible:ring-gold-400 ${
                  slideIndex === index
                    ? 'w-9 bg-gold-400 shadow-[0_0_10px_rgba(212,175,55,0.7)]'
                    : 'w-3 bg-ivory-100/40 hover:bg-ivory-100/80'
                }`}
              />
            ))}
          </div>
        )}

        {/* Slide Counter & Navigation Controls */}
        {total > 1 && (
          <div className="absolute bottom-6 right-6 flex items-center gap-3 sm:bottom-8 sm:right-10 z-20">
            <span className="mr-2 text-xs font-mono tracking-widest text-ivory-100/70 select-none">
              {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
            </span>
            <button
              type="button"
              onClick={() => goTo(index - 1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gold-400/30 bg-obsidian-900/60 text-ivory-100 backdrop-blur-md transition-all duration-300 hover:border-gold-400 hover:bg-gold-500 hover:text-obsidian-950 focus-visible:ring-2 focus-visible:ring-gold-400"
              aria-label="Previous hero photo"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={() => goTo(index + 1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gold-400/30 bg-obsidian-900/60 text-ivory-100 backdrop-blur-md transition-all duration-300 hover:border-gold-400 hover:bg-gold-500 hover:text-obsidian-950 focus-visible:ring-2 focus-visible:ring-gold-400"
              aria-label="Next hero photo"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}
      </div>

      {/* ============================================================ */}
      {/* 2. CONTINUOUS LEFT-TO-RIGHT SCROLLING STRIP                  */}
      {/* Displays ONLY the 6 descriptive words below the banner       */}
      {/* ============================================================ */}
      <div
        className="relative border-y border-gold-500/20 bg-obsidian-900 py-4 overflow-hidden shadow-2xl"
        aria-label="Brand Core Attributes"
      >
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-obsidian-900 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-obsidian-900 to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee-ltr hover-pause flex items-center whitespace-nowrap">
          {tickerWords.map((word, wordIndex) => (
            <div
              key={`${word}-${wordIndex}`}
              className="inline-flex items-center gap-6 sm:gap-10 px-4 sm:px-6 select-none"
            >
              <span className="font-sans text-xs sm:text-sm font-semibold uppercase tracking-[0.28em] text-ivory-100 transition-colors hover:text-gold-300">
                {word}
              </span>
              <span className="text-gold-400/80 text-xs sm:text-sm select-none" aria-hidden="true">
                ✦
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
