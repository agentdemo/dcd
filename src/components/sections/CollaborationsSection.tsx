import Reveal from '@/components/Reveal';
import { brandAttributes, campaigns, collaborationCategories, contactDetails } from '@/data/siteContent';

export default function CollaborationsSection() {
  return (
    <section id="collaborations" className="bg-[#070D1A] py-24 lg:py-32 border-b border-gold-500/20 text-ivory-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-6">
            <span className="eyebrow text-gold-400">Brand Collaborations</span>
            <h2 className="mt-3 font-serif text-4xl font-medium tracking-tight text-ivory-50 sm:text-5xl">
              Selected campaigns &amp; partnerships
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ivory-200/90 sm:text-lg">
              Sushill Waddhwa collaborates selectively with luxury, hospitality, travel and lifestyle brands on destination
              campaigns, editorial content, brand films and ambassadorial partnerships.
            </p>
          </Reveal>

          <Reveal delay={1} className="lg:col-span-6">
            <div>
              <span className="eyebrow text-gold-400">Brand Attributes</span>
              <ul className="mt-4 flex flex-wrap gap-2.5">
                {brandAttributes.map((attribute) => (
                  <li
                    key={attribute}
                    className="rounded-full border border-gold-500/25 bg-obsidian-900/80 px-4 py-2 text-xs font-medium uppercase tracking-wider text-ivory-200"
                  >
                    {attribute}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10">
              <span className="eyebrow text-gold-400">Segments</span>
              <ul className="mt-4 flex flex-wrap gap-2.5">
                {collaborationCategories.map((category) => (
                  <li
                    key={category}
                    className="rounded-full border border-gold-500/25 bg-obsidian-900/80 px-4 py-2 text-xs font-medium uppercase tracking-wider text-ivory-200"
                  >
                    {category}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <div className="mt-20">
          <span className="eyebrow text-gold-400">Showcase</span>
          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {campaigns.map((item) => (
              <Reveal key={item.id}>
                <article className="group flex h-full flex-col gap-4">
                  <div className="aspect-[3/4] w-full overflow-hidden rounded-2xl border border-gold-500/20 bg-obsidian-900">
                    <img
                      src={item.imageSrc}
                      alt={item.name}
                      className="h-full w-full object-cover object-[center_20%]"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="font-serif text-xl font-medium leading-snug text-ivory-50">{item.name}</h3>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal>
          <p className="mt-16 text-center text-sm text-ivory-200">
            For curated partnerships and brand enquiries, write to{' '}
            <a
              href={`mailto:${contactDetails.email}`}
              className="link-underline font-semibold text-gold-300 hover:text-gold-200 transition-colors"
            >
              {contactDetails.email}
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
