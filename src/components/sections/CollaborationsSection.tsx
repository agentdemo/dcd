import Reveal from '@/components/Reveal';
import SectionHeader from '@/components/SectionHeader';
import { campaigns, collaborationCategories, contactDetails } from '@/data/siteContent';

export default function CollaborationsSection() {
  return (
    <section id="collaborations" className="bg-ivory-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-6">
            <SectionHeader
              eyebrow="Brand Collaborations"
              title="Selected campaigns"
              description="Sushill Waddhwa collaborates selectively with luxury, hospitality, travel and lifestyle brands on destination campaigns, editorial content, brand films, ambassadorial partnerships and curated experiences."
            />
          </Reveal>
          <Reveal delay={1} className="flex flex-wrap content-start gap-3 lg:col-span-6 lg:justify-end">
            {collaborationCategories.map((category) => (
              <span
                key={category}
                className="rounded-full border border-ivory-300 bg-ivory-100 px-4 py-2 text-xs font-medium uppercase tracking-wider text-ink-700"
              >
                {category}
              </span>
            ))}
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {campaigns.map((campaign, campaignIndex) => (
            <Reveal key={campaign} delay={campaignIndex % 3 === 0 ? undefined : campaignIndex % 3 === 1 ? 1 : 2}>
              <figure className="group">
                <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl border border-dashed border-ink-300 bg-ivory-200 transition-colors duration-500 group-hover:border-gold-500" />
                <figcaption className="mt-4 flex items-center justify-between gap-4 border-b border-ivory-300 pb-3">
                  <span className="font-serif text-xl text-ink-900">{campaign}</span>
                  <span className="text-xs tabular-nums text-ink-300">{String(campaignIndex + 1).padStart(2, '0')}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-16 text-center text-sm text-ink-500">
            For brand enquiries, write to{' '}
            <a href={`mailto:${contactDetails.email}`} className="link-underline font-medium text-ink-900 hover:text-gold-700">
              {contactDetails.email}
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
