import { Mail } from 'lucide-react';
import Reveal from '@/components/Reveal';
import SectionHeader from '@/components/SectionHeader';
import {
  brandAttributes,
  campaigns,
  collaborationCategories,
  privateJetShowcase,
} from '@/data/siteContent';

export default function CollaborationsSection() {
  const showcaseItems = [
    { id: 'showcase-gulfstream', name: privateJetShowcase.title, location: privateJetShowcase.location, imageSrc: privateJetShowcase.imageSrc },
    ...campaigns.map((c) => ({ id: c.id, name: c.name, location: c.location, imageSrc: c.imageSrc })),
  ];

  return (
    <section id="collaborations" className="bg-[#070D1A] py-24 lg:py-32 border-b border-gold-500/20 text-ivory-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header grid: left = SectionHeader, right = Brand Verticals + Segments */}
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-6">
            <SectionHeader
              eyebrow="Brand Collaborations & Partnerships"
              title="Selected campaigns & partnerships"
              description="Sushill Waddhwa collaborates selectively with luxury, hospitality, travel, automotive, and lifestyle brands on destination campaigns, editorial curations, brand films, and high-profile partnerships."
              dark={true}
            />
          </Reveal>

          <Reveal delay={1} className="lg:col-span-6 space-y-8">
            {/* Brand Verticals */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-luxe text-gold-400">Brand Attributes</h3>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {brandAttributes.map((attr) => (
                  <span
                    key={attr}
                    className="rounded-full border border-gold-500/25 bg-obsidian-900/80 px-4 py-2 text-xs font-medium uppercase tracking-wider text-ivory-200 shadow-sm backdrop-blur-sm hover:border-gold-400/60 transition-colors"
                  >
                    {attr}
                  </span>
                ))}
              </div>
            </div>

            {/* Segments */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-luxe text-gold-400">Segments</h3>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {collaborationCategories.map((category) => (
                  <span
                    key={category}
                    className="rounded-full border border-gold-500/25 bg-obsidian-900/80 px-4 py-2 text-xs font-medium uppercase tracking-wider text-ivory-200 shadow-sm backdrop-blur-sm hover:border-gold-400/60 transition-colors"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Showcase heading */}
        <Reveal>
          <h3 className="mt-20 font-serif text-3xl font-medium text-ivory-50 sm:text-4xl">Showcase</h3>
        </Reveal>

        {/* Showcase grid — all photos, just title + photo, alternating blue & white */}
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {showcaseItems.map((item, index) => {
            const isBlue = index % 2 === 1;

            if (isBlue) {
              return (
                <Reveal key={item.id} delay={(index % 4) as 1 | 2 | 3 | undefined}>
                  <article className="group flex h-full flex-col rounded-3xl border border-gold-500/25 bg-obsidian-900 p-5 shadow-xl transition-all duration-500 hover:-translate-y-1 hover:border-gold-400 hover:shadow-2xl text-ivory-100">
                    <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl border border-gold-500/20 bg-obsidian-950 transition-colors group-hover:border-gold-400/50 shadow-inner">
                      <img
                        src={item.imageSrc}
                        alt={item.name}
                        className="h-full w-full object-cover object-[center_20%] transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3 rounded-full bg-obsidian-950/90 border border-gold-500/30 px-2.5 py-0.5 text-[10px] font-mono font-medium text-gold-300 backdrop-blur-sm">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                    </div>
                    <div className="mt-4 flex flex-1 flex-col gap-1">
                      <h4 className="line-clamp-2 font-serif text-xl font-medium leading-snug text-ivory-50 transition-colors group-hover:text-gold-300">
                        {item.name}
                      </h4>
                      {item.location && (
                        <p className="mt-1 font-serif text-xl font-medium leading-snug text-ivory-50 transition-colors group-hover:text-gold-300">{item.location}</p>
                      )}
                    </div>
                  </article>
                </Reveal>
              );
            }

            return (
              <Reveal key={item.id} delay={(index % 4) as 1 | 2 | 3 | undefined}>
                <article className="group flex h-full flex-col rounded-3xl border border-ivory-300 bg-white p-5 shadow-md transition-all duration-500 hover:-translate-y-1 hover:border-gold-500 hover:shadow-xl text-ink-900">
                  <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl border border-ivory-300 bg-ivory-50 transition-colors group-hover:border-gold-500 shadow-inner">
                    <img
                      src={item.imageSrc}
                      alt={item.name}
                      className="h-full w-full object-cover object-[center_20%] transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 rounded-full bg-ink-900/85 px-2.5 py-0.5 text-[10px] font-mono font-medium text-ivory-100 backdrop-blur-sm">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>
                  <div className="mt-4 flex flex-1 flex-col gap-1">
                    <h4 className="line-clamp-2 font-serif text-xl font-medium leading-snug text-ink-900 transition-colors group-hover:text-gold-700">
                      {item.name}
                    </h4>
                  {item.location && (
                    <p className="mt-1 font-serif text-xl font-medium leading-snug text-ink-900 transition-colors group-hover:text-gold-700">{item.location}</p>
                  )}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* Brand Inquiries Callout */}
        <Reveal>
          <div className="mt-16 flex flex-col items-center gap-5 rounded-2xl border border-gold-500/30 bg-obsidian-900/80 p-6 shadow-xl max-w-xl mx-auto backdrop-blur-sm">
            <p className="text-center text-sm text-ivory-200">
              For brand collaborations or brand ambassador partnerships with Mr. Sushill Waddhwa, write to
            </p>
            <a
              href="https://mail.google.com/mail/?view=cm&to=info@platinumworld.net"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Send an email to info@platinumworld.net in Gmail"
              title="Email in Gmail"
              className="group flex h-14 w-14 items-center justify-center rounded-full border border-gold-500/30 bg-obsidian-950 text-gold-400 shadow-lg transition-all duration-300 hover:scale-110 hover:border-gold-400 hover:bg-gold-500 hover:text-obsidian-950 hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] focus-visible:ring-2 focus-visible:ring-gold-400"
            >
              <Mail size={24} className="transition-transform duration-300 group-hover:scale-110" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
