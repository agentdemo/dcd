import { ArrowUpRight } from 'lucide-react';
import Reveal from '@/components/Reveal';
import SectionHeader from '@/components/SectionHeader';
import { ventures } from '@/data/siteContent';

export default function BusinessSection() {
  const [featured, ...others] = ventures;

  return (
    <section id="business" className="bg-ivory-100 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <SectionHeader
            eyebrow="Business Ventures"
            title="Building across hospitality, media and investment"
          />
        </Reveal>

        <Reveal delay={1}>
          <article className="mt-16 flex flex-col gap-8 rounded-3xl bg-ink-900 p-8 text-ivory-100 transition-shadow duration-500 hover:shadow-2xl sm:p-12 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
            <div className="max-w-2xl">
              <p className="eyebrow text-gold-300">Flagship</p>
              <h3 className="mt-4 text-3xl text-ivory-50 sm:text-4xl lg:text-5xl">{featured.name}</h3>
              <p className="mt-4 font-serif text-lg text-gold-300">{featured.tagline}</p>
              <p className="mt-6 text-base leading-relaxed text-ivory-200">{featured.description}</p>
            </div>
          </article>
        </Reveal>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {others.map((venture, ventureIndex) => (
            <Reveal key={venture.name} delay={ventureIndex % 2 === 0 ? undefined : 1}>
              <article className="group flex h-full flex-col rounded-3xl border border-ivory-300 bg-ivory-50 p-8 transition-all duration-500 hover:-translate-y-1 hover:border-gold-500 hover:shadow-xl sm:p-10">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-2xl text-ink-900 sm:text-3xl">{venture.name}</h3>
                  <ArrowUpRight
                    size={22}
                    className="mt-1 shrink-0 text-ink-300 transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-gold-700"
                  />
                </div>
                <p className="mt-3 font-serif text-lg text-gold-700">{venture.tagline}</p>
                <p className="mt-5 text-sm leading-relaxed text-ink-500 sm:text-base">{venture.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
