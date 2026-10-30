import Reveal from '@/components/Reveal';
import SectionHeader from '@/components/SectionHeader';
import { aboutParagraphs, aboutStats } from '@/data/siteContent';

export default function AboutSection() {
  return (
    <section id="about" className="bg-ivory-50 py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-12 lg:gap-20 lg:px-10">
        <Reveal className="lg:col-span-5">
          <SectionHeader eyebrow="About" title="A life built across borders" />
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

        <div className="lg:col-span-7 lg:pt-4">
          {aboutParagraphs.map((paragraph, paragraphIndex) => (
            <Reveal key={paragraph.slice(0, 24)} delay={paragraphIndex === 0 ? undefined : 1}>
              <p className="mb-6 text-base leading-[1.8] text-ink-700 sm:text-lg">{paragraph}</p>
            </Reveal>
          ))}
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
