import Reveal from '@/components/Reveal';
import { aboutImage, aboutSegment } from '@/data/siteContent';

export default function AboutSection() {
  return (
    <section id="about" className="bg-[#070D1A] py-24 lg:py-32 border-b border-gold-500/20 text-ivory-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <span className="eyebrow text-gold-400">About</span>
          <h2 className="mt-3 font-serif text-4xl font-medium tracking-tight text-ivory-50 sm:text-5xl lg:text-6xl">
            A life built across borders
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-20">
          <div className="lg:col-span-5">
            <div className="aspect-[3/4] w-full overflow-hidden rounded-3xl border border-gold-500/30 bg-obsidian-900">
              <img
                src={aboutImage.src}
                alt={aboutImage.alt}
                width={aboutImage.width}
                height={aboutImage.height}
                className="h-full w-full object-cover object-[center_15%]"
                loading="lazy"
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <h3 className="font-serif text-3xl font-medium leading-snug text-gold-300 sm:text-4xl">
              {aboutSegment.title}
            </h3>
            <p className="mt-6 text-base leading-[1.8] text-ivory-200 sm:text-lg">{aboutSegment.paragraph}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
