import { Plane } from 'lucide-react';
import Reveal from '@/components/Reveal';
import SectionHeader from '@/components/SectionHeader';
import { campaigns, collaborationCategories, contactDetails, privateJetShowcase } from '@/data/siteContent';

export default function CollaborationsSection() {
  return (
    <section id="collaborations" className="bg-[#070D1A] py-24 lg:py-32 border-b border-gold-500/20 text-ivory-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16 items-center">
          <Reveal className="lg:col-span-6">
            <SectionHeader
              eyebrow="Brand Collaborations & Partnerships"
              title="Selected campaigns & partnerships"
              description="Sushill Waddhwa collaborates selectively with luxury, hospitality, travel, automotive, and lifestyle brands on destination campaigns, editorial curations, brand films, and high-profile partnerships."
              dark={true}
            />
          </Reveal>
          <Reveal delay={1} className="flex flex-wrap content-start gap-2.5 lg:col-span-6 lg:justify-end">
            {collaborationCategories.map((category) => (
              <span
                key={category}
                className="rounded-full border border-gold-500/25 bg-obsidian-900/80 px-4 py-2 text-xs font-medium uppercase tracking-wider text-ivory-200 shadow-sm backdrop-blur-sm hover:border-gold-400/60 transition-colors"
              >
                {category}
              </span>
            ))}
          </Reveal>
        </div>

        {/* ======================================================== */}
        {/* FEATURED PARTNERSHIP: GULFSTREAM PRIVATE JETS            */}
        {/* Moved into Brand Collaborations & Partnerships section   */}
        {/* ======================================================== */}
        <Reveal delay={1}>
          <article className="mt-14 rounded-3xl border border-gold-500/30 bg-gradient-to-br from-obsidian-900/90 to-[#0B1528] p-8 shadow-[0_16px_50px_rgba(0,0,0,0.5)] transition-all duration-500 hover:border-gold-400 sm:p-12 backdrop-blur-sm">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-6">
                <div className="flex items-center gap-2 text-gold-400 mb-3">
                  <Plane size={20} className="text-gold-400" />
                  <span className="eyebrow text-gold-400">{privateJetShowcase.eyebrow}</span>
                </div>
                <h3 className="font-serif text-3xl font-medium text-ivory-50 sm:text-4xl lg:text-5xl">
                  {privateJetShowcase.title}
                </h3>
                <p className="mt-3 font-serif text-xl text-gold-300">{privateJetShowcase.tagline}</p>
                <p className="mt-5 text-base leading-relaxed text-ivory-200/90 sm:text-lg">
                  {privateJetShowcase.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-3 text-xs uppercase tracking-wider text-ivory-200">
                  <span className="rounded-full border border-gold-500/25 bg-obsidian-950/70 px-4 py-2 font-medium">
                    ✦ Long-Range Fleet Access
                  </span>
                  <span className="rounded-full border border-gold-500/25 bg-obsidian-950/70 px-4 py-2 font-medium">
                    ✦ Bespoke Global Routing
                  </span>
                  <span className="rounded-full border border-gold-500/25 bg-obsidian-950/70 px-4 py-2 font-medium">
                    ✦ VVIP Air Concierge
                  </span>
                </div>
              </div>

              {/* Gulfstream Private Jets Image (08-gulfstream-private-jets.jpg) */}
              <div className="lg:col-span-6">
                <div className="group relative aspect-[3/4] w-full max-w-md mx-auto overflow-hidden rounded-2xl border border-gold-500/30 shadow-[0_12px_40px_rgba(0,0,0,0.6)] transition-all duration-500 hover:border-gold-400 hover:shadow-2xl">
                  <img
                    src={privateJetShowcase.imageSrc}
                    alt={privateJetShowcase.title}
                    className="h-full w-full object-cover object-[center_20%] transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-gold-400/20 rounded-2xl pointer-events-none" />
                  <div className="absolute bottom-3 left-3 rounded-full bg-obsidian-950/85 px-3 py-1 backdrop-blur-md border border-gold-400/30">
                    <span className="text-[10px] uppercase tracking-wider text-gold-300 font-medium">
                      Gulfstream Private Jets
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </Reveal>

        {/* ======================================================== */}
        {/* CARDS GRID: Luxury Brand Collaborations                   */}
        {/* ======================================================== */}
        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {campaigns.map((item, index) => {
            const isAlternate = index % 2 === 1;
            const bgClass = isAlternate ? 'bg-[#0A1224]' : 'bg-obsidian-900';

            return (
              <Reveal key={item.id} delay={(index % 4) as 1 | 2 | 3 | undefined}>
                <article
                  className={`group flex h-full flex-col justify-between rounded-3xl border border-gold-500/20 ${bgClass} p-5 shadow-lg transition-all duration-500 hover:-translate-y-1 hover:border-gold-400 hover:shadow-2xl`}
                >
                  {/* Image Frame with Aspect Ratio 3:4 */}
                  <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl border border-gold-500/20 bg-obsidian-950 transition-colors group-hover:border-gold-400/50 shadow-inner">
                    <img
                      src={item.imageSrc}
                      alt={item.name}
                      className="h-full w-full object-cover object-[center_20%] transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Sequential Index Pill */}
                    <div className="absolute top-3 left-3 rounded-full bg-obsidian-950/90 border border-gold-500/30 px-2.5 py-0.5 text-[10px] font-mono font-medium text-gold-300 backdrop-blur-sm">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="mt-4 pt-2">
                    <p className="text-[11px] font-medium uppercase tracking-wider text-gold-400">
                      {item.category}
                    </p>
                    <h3 className="mt-1 font-serif text-xl font-medium text-ivory-50 group-hover:text-gold-300 transition-colors leading-snug">
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
          <div className="mt-16 text-center rounded-2xl border border-gold-500/30 bg-obsidian-900/80 p-6 shadow-xl max-w-xl mx-auto backdrop-blur-sm">
            <p className="text-sm text-ivory-200">
              For curated partnerships and brand inquiries, write to{' '}
              <a
                href={`mailto:${contactDetails.email}`}
                className="link-underline font-semibold text-gold-300 hover:text-gold-200 transition-colors"
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
