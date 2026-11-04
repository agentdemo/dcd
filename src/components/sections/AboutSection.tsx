import { aboutImage, aboutParagraphs, aboutStats } from '@/data/siteContent';

export default function AboutSection() {
  return (
    <section id="about" className="bg-[#070D1A] py-24 lg:py-32 border-b border-gold-500/20 text-ivory-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header: eyebrow + title */}
        <div>
          <span className="eyebrow text-gold-400">About</span>
          <h2 className="mt-4 font-serif text-4xl font-medium tracking-tight text-ivory-50 sm:text-5xl lg:text-6xl">
            A life built across borders
          </h2>
        </div>

        {/* Stats */}
        <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-gold-500/20 pt-8 max-w-2xl">
          {aboutStats.map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd className="font-serif text-3xl font-semibold text-gold-300 sm:text-4xl">{stat.value}</dd>
              <p className="mt-1 text-xs uppercase tracking-wider text-ivory-200/70 font-medium">{stat.label}</p>
            </div>
          ))}
        </dl>

        {/* Photo + Paragraphs grid — normal flow, no sticky, no animation */}
        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="group relative aspect-[3/4] w-full overflow-hidden rounded-3xl bg-obsidian-900 border border-gold-500/30 shadow-[0_12px_40px_rgba(0,0,0,0.6)]">
              <img
                src={aboutImage.src}
                alt={aboutImage.alt}
                width={aboutImage.width}
                height={aboutImage.height}
                className="h-full w-full object-cover object-[center_15%] transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
                loading="lazy"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-gold-400/20 rounded-3xl pointer-events-none" />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
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
