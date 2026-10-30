import { ArrowUpRight } from 'lucide-react';
import Reveal from '@/components/Reveal';
import SectionHeader from '@/components/SectionHeader';
import { pressItems } from '@/data/siteContent';

export default function MediaSection() {
  return (
    <section id="media" className="bg-ivory-100 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <SectionHeader
            eyebrow="Media"
            title="Press, interviews and articles"
            description="A curated selection of press coverage, interviews and articles featuring Sushill Waddhwa."
          />
        </Reveal>

        {pressItems.length === 0 ? (
          <Reveal delay={1}>
            <div className="mt-16 flex flex-col items-center rounded-3xl border border-dashed border-ink-300 bg-ivory-50 px-6 py-20 text-center">
              <p className="font-serif text-2xl text-ink-900">Coverage will be featured here</p>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-500">
                Interviews and articles are being gathered and will appear in this space shortly.
              </p>
            </div>
          </Reveal>
        ) : (
          <Reveal delay={1}>
            <ul className="mt-16 divide-y divide-ivory-300 border-y border-ivory-300">
              {pressItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between gap-6 py-8 transition-colors duration-300 hover:text-gold-700"
                  >
                    <div>
                      <p className="text-xs font-medium uppercase tracking-luxe text-gold-700">{item.publication}</p>
                      <p className="mt-2 font-serif text-2xl text-ink-900 transition-colors group-hover:text-gold-700 sm:text-3xl">
                        {item.headline}
                      </p>
                    </div>
                    <ArrowUpRight
                      size={24}
                      className="shrink-0 text-ink-300 transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-gold-700"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        )}
      </div>
    </section>
  );
}
