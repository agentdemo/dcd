import { ArrowUpRight, Image as ImageIcon, Plane } from 'lucide-react';
import Reveal from '@/components/Reveal';
import SectionHeader from '@/components/SectionHeader';
import { ventures, privateJetShowcase } from '@/data/siteContent';

export default function BusinessSection() {
  const [flagship, ...otherVentures] = ventures;

  return (
    <section id="business" className="bg-white py-24 lg:py-32 border-b border-ivory-300">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <SectionHeader
            eyebrow="Business Ventures"
            title="Building across hospitality, media, lifestyle and capital"
            description="A high-conviction ecosystem of global enterprises spanning luxury hotel buyouts, AI-driven hospitality, content production, lifestyle advisory, and family office investments."
          />
        </Reveal>

        {/* ======================================================== */}
        {/* CARD 1: FLAGSHIP - Ivory Background                      */}
        {/* ======================================================== */}
        <Reveal delay={1}>
          <article className="mt-16 rounded-3xl border border-ivory-300 bg-ivory-100 p-8 shadow-sm transition-all duration-500 hover:border-gold-500 hover:shadow-xl sm:p-12">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <span className="eyebrow text-gold-700">{flagship.badge}</span>
                <h3 className="mt-3 text-3xl font-semibold text-ink-900 sm:text-4xl lg:text-5xl">
                  {flagship.name}
                </h3>
                <p className="mt-4 font-serif text-lg text-gold-700 sm:text-xl">{flagship.tagline}</p>
                <p className="mt-5 text-base leading-relaxed text-ink-700 sm:text-lg">
                  {flagship.description}
                </p>
              </div>

              {/* Prepared Image Slot for Flagship */}
              <div className="lg:col-span-5">
                <div className="group relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-ivory-300 bg-white shadow-inner flex flex-col items-center justify-center p-6 text-center transition-colors hover:border-gold-500">
                  {flagship.imageSrc ? (
                    <img
                      src={flagship.imageSrc}
                      alt={flagship.name}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center space-y-2">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-ivory-100 text-gold-700 border border-ivory-300">
                        <ImageIcon size={22} />
                      </div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-ink-900">
                        {flagship.assetSlotName}
                      </p>
                      <p className="text-[11px] text-ink-500 max-w-[220px]">
                        Client asset pending. Drop image path into siteContent.ts
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </article>
        </Reveal>

        {/* ======================================================== */}
        {/* CARDS 2 to 5: Alternating White & Ivory Cards Grid       */}
        {/* Card 2: White, Card 3: Ivory, Card 4: White, Card 5: Ivory */}
        {/* ======================================================== */}
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {otherVentures.map((venture, index) => {
            // Alternates: index 0 (Artoso) -> White, index 1 (Pictures) -> Ivory, index 2 (Lifestyle) -> White, index 3 (Family Office) -> Ivory
            const isIvory = index % 2 === 1;
            const bgClass = isIvory ? 'bg-ivory-100' : 'bg-white';

            return (
              <Reveal key={venture.id} delay={index % 2 === 0 ? undefined : 1}>
                <article
                  className={`group flex h-full flex-col justify-between rounded-3xl border border-ivory-300 ${bgClass} p-8 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-gold-500 hover:shadow-xl sm:p-10`}
                >
                  <div>
                    {/* Header with name and arrow */}
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        {venture.badge && (
                          <span className="eyebrow text-gold-700 text-[10px] tracking-widest">
                            {venture.badge}
                          </span>
                        )}
                        <h3 className="mt-1 text-2xl font-semibold text-ink-900 sm:text-3xl">
                          {venture.name}
                        </h3>
                      </div>
                      <ArrowUpRight
                        size={22}
                        className="mt-1 shrink-0 text-ink-300 transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-gold-700"
                      />
                    </div>

                    <p className="mt-3 font-serif text-lg text-gold-700">{venture.tagline}</p>
                    <p className="mt-4 text-sm leading-relaxed text-ink-700 sm:text-base">
                      {venture.description}
                    </p>
                  </div>

                  {/* Prepared Image Slot for Venture Card */}
                  <div className="mt-6">
                    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-dashed border-ivory-300 bg-ivory-50/70 flex flex-col items-center justify-center p-4 text-center transition-colors group-hover:border-gold-500">
                      {venture.imageSrc ? (
                        <img
                          src={venture.imageSrc}
                          alt={venture.name}
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                      ) : (
                        <div className="flex flex-col items-center space-y-1.5">
                          <ImageIcon size={18} className="text-gold-700" />
                          <span className="text-[11px] font-medium uppercase tracking-wider text-ink-900">
                            {venture.assetSlotName}
                          </span>
                          <span className="text-[10px] text-ink-500">
                            Replaceable field in siteContent.ts
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* ======================================================== */}
        {/* CARD 6: PRIVATE-JET IMAGE SHOWCASE SLOT (White Card)     */}
        {/* Client-provided Gulfstream image asset slot               */}
        {/* ======================================================== */}
        <Reveal delay={2}>
          <article className="mt-12 rounded-3xl border border-ivory-300 bg-white p-8 shadow-sm transition-all duration-500 hover:border-gold-500 hover:shadow-xl sm:p-12">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <div className="flex items-center gap-2 text-gold-700 mb-2">
                  <Plane size={18} />
                  <span className="eyebrow text-gold-700">{privateJetShowcase.eyebrow}</span>
                </div>
                <h3 className="text-3xl font-semibold text-ink-900 sm:text-4xl">
                  {privateJetShowcase.title}
                </h3>
                <p className="mt-2 font-serif text-lg text-gold-700">{privateJetShowcase.tagline}</p>
                <p className="mt-4 text-base leading-relaxed text-ink-700">
                  {privateJetShowcase.description}
                </p>
              </div>

              <div className="flex shrink-0">
                <span className="rounded-full border border-gold-400/40 bg-ivory-100 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-gold-700">
                  Exclusive Aviation Asset Slot
                </span>
              </div>
            </div>

            {/* Gulfstream / Private-Jet Cinematic Image Slot */}
            <div className="mt-8">
              <div className="group relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden rounded-2xl border-2 border-dashed border-ivory-300 bg-ivory-100 flex flex-col items-center justify-center p-8 text-center transition-colors hover:border-gold-500">
                {privateJetShowcase.imageSrc ? (
                  <img
                    src={privateJetShowcase.imageSrc}
                    alt="Gulfstream Private Jet"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center space-y-3">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-gold-700 border border-ivory-300 shadow-sm">
                      <Plane size={28} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-wider text-ink-900">
                        {privateJetShowcase.assetSlotName}
                      </p>
                      <p className="mt-1 text-xs text-ink-500 max-w-md mx-auto">
                        Layout ready for client-provided Gulfstream / private-jet photograph. No generic or AI assets used.
                      </p>
                    </div>
                    <span className="inline-block rounded-md bg-white px-3 py-1 text-[11px] font-mono text-gold-700 border border-ivory-300">
                      Configuration Key: siteContent.ts &rarr; privateJetShowcase.imageSrc
                    </span>
                  </div>
                )}
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
