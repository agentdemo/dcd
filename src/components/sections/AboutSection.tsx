import Reveal from '@/components/Reveal';
import SectionHeader from '@/components/SectionHeader';
import { aboutParagraphs, aboutStats } from '@/data/siteContent';

export default function AboutSection() {
  return (
    <section id="about" className="bg-ivory-50 py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-12 lg:items-start lg:gap-20 lg:px-10">
        <Reveal className="lg:sticky lg:top-28 lg:col-span-5">
          <div className="aspect-[4/5] w-full overflow-hidden rounded-3xl bg-ink-900">
            <img
              src="/images/About/hero-4.jpg"
              alt="Sushill Waddhwa seated in a leather armchair in a dark, gold-accented lounge, checking his watch"
              className="h-full w-full object-cover object-[center_30%] transition-transform duration-[1200ms] ease-out hover:scale-[1.03]"
              loading="lazy"
            />
          </div>
        </Reveal>

        <div className="lg:col-span-7">
          <Reveal>
            <SectionHeader eyebrow="About" title="A life built across borders" />
          </Reveal>

          <Reveal delay={1}>
            <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-ivory-300 pt-8">
              {aboutStats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-serif text-3xl text-ink-900 sm:text-4xl">{stat.value}</dd>
                  <p className="mt-1 text-xs uppercase tracking-wider text-ink-500">{stat.label}</p>
                </div>
              ))}
            </dl>
          </Reveal>

          <div className="mt-12">
            {aboutParagraphs.map((paragraph) => (
              <Reveal key={paragraph.slice(0, 24)}>
                <p className="mb-6 text-base leading-[1.8] text-ink-700 sm:text-lg">{paragraph}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={2}>
            <p className="mt-10 border-l-2 border-gold-500 pl-6 font-serif text-2xl text-ink-900 sm:text-3xl">
              Celebrating Life with Sushill Waddhwa
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
