import Reveal from '@/components/Reveal';
import SectionHeader from '@/components/SectionHeader';
import { aboutImage, aboutParagraphs, aboutStats } from '@/data/siteContent';

export default function AboutSection() {
  return (
    <section id="about" className="bg-ivory-100 py-24 lg:py-32 border-b border-ivory-300">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-12 lg:items-start lg:gap-20 lg:px-10">
        {/* Section 1: About Portrait (01-about.jpg) */}
        <Reveal className="lg:sticky lg:top-28 lg:col-span-5">
          <div className="group relative aspect-[3/4] w-full overflow-hidden rounded-3xl bg-obsidian-900 border border-ivory-300 shadow-xl">
            <img
              src={aboutImage.src}
              alt={aboutImage.alt}
              width={aboutImage.width}
              height={aboutImage.height}
              className="h-full w-full object-cover object-[center_15%] transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
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
                  <dd className="font-serif text-3xl font-semibold text-ink-900 sm:text-4xl">{stat.value}</dd>
                  <p className="mt-1 text-xs uppercase tracking-wider text-ink-500 font-medium">{stat.label}</p>
                </div>
              ))}
            </dl>
          </Reveal>

          <div className="mt-12 space-y-6">
            {aboutParagraphs.map((paragraph) => (
              <Reveal key={paragraph.slice(0, 24)}>
                <p className="text-base leading-[1.8] text-ink-700 sm:text-lg">{paragraph}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
