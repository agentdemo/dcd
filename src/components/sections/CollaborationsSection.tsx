import Reveal from '@/components/Reveal';
import SectionHeader from '@/components/SectionHeader';
import { campaigns, collaborationCategories, contactDetails } from '@/data/siteContent';

export default function CollaborationsSection() {
  return (
    <section id="collaborations" className="bg-ivory-100 py-24 lg:py-32 border-b border-ivory-300">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-6">
            <SectionHeader
              eyebrow="Brand Collaborations"
              title="Selected campaigns & partnerships"
              description="Sushill Waddhwa collaborates selectively with luxury, hospitality, travel, automotive, and lifestyle brands on destination campaigns, editorial curations, brand films, and high-profile partnerships."
            />
          </Reveal>
          <Reveal delay={1} className="flex flex-wrap content-start gap-2.5 lg:col-span-6 lg:justify-end">
            {collaborationCategories.map((category) => (
              <span
                key={category}
                className="rounded-full border border-ivory-300 bg-white px-4 py-2 text-xs font-medium uppercase tracking-wider text-ink-700 shadow-sm"
              >
                {category}
              </span>
            ))}
          </Reveal>
        </div>

        {/* ======================================================== */}
        {/* CARDS GRID: Alternating White and Ivory Cards             */}
        {/* Card 1: White, Card 2: Ivory, Card 3: White, Card 4: Ivory */}
        {/* ======================================================== */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {campaigns.map((item, index) => {
            const isIvory = index % 2 === 1;
            const bgClass = isIvory ? 'bg-ivory-100' : 'bg-white';

            return (
              <Reveal key={item.id} delay={(index % 4) as 1 | 2 | 3 | undefined}>
                <article
                  className={`group flex h-full flex-col justify-between rounded-3xl border border-ivory-300 ${bgClass} p-5 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-gold-500 hover:shadow-xl`}
                >
                  {/* Image Frame with Aspect Ratio 3:4 */}
                  <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl border border-ivory-300 bg-ivory-50 transition-colors group-hover:border-gold-500 shadow-inner">
                    <img
                      src={item.imageSrc}
                      alt={item.name}
                      className="h-full w-full object-cover object-[center_20%] transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Sequential Index Pill */}
                    <div className="absolute top-3 left-3 rounded-full bg-ink-900/80 px-2.5 py-0.5 text-[10px] font-mono font-medium text-ivory-100 backdrop-blur-sm">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="mt-4 pt-2">
                    <p className="text-[11px] font-medium uppercase tracking-wider text-gold-700">
                      {item.category}
                    </p>
                    <h3 className="mt-1 font-serif text-xl font-medium text-ink-900 group-hover:text-gold-700 transition-colors leading-snug">
                      {item.name}
                    </h3>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* Brand Inquiries Callout */}
        <Reveal>
          <div className="mt-16 text-center rounded-2xl border border-ivory-300 bg-white p-6 shadow-sm max-w-xl mx-auto">
            <p className="text-sm text-ink-700">
              For curated partnerships and brand inquiries, write to{' '}
              <a
                href={`mailto:${contactDetails.email}`}
                className="link-underline font-semibold text-ink-900 hover:text-gold-700"
              >
                {contactDetails.email}
              </a>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
