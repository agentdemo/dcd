import { aboutImage, aboutParagraphs, aboutStats } from '@/data/siteContent';

export default function AboutSection() {
  return (
    <section id="about" className="bg-[#070D1A] py-24 lg:py-32 border-b border-gold-500/20 text-ivory-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <span className="eyebrow text-gold-400">About</span>
        <h2 className="mt-3 font-serif text-4xl font-medium tracking-tight text-ivory-50 sm:text-5xl lg:text-6xl">
          A life built across borders
        </h2>

        <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-gold-500/20 pt-8">
          {aboutStats.map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd className="font-serif text-3xl font-semibold text-gold-300 sm:text-4xl">{stat.value}</dd>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-ivory-200/70">{stat.label}</p>
            </div>
          ))}
        </dl>

        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-20">
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

          <div className="space-y-6 lg:col-span-7">
            {aboutParagraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)} className="text-base leading-[1.8] text-ivory-200 sm:text-lg">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
