import { Instagram, Linkedin, Mail } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { contactDetails } from '@/data/siteContent';

export default function ContactSection() {
  return (
    <section id="contact" className="bg-[#070D1A] py-24 lg:py-32 text-ivory-100 border-t border-gold-500/20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-12">
          {/* Left Column: Direct Info & Exact Company Title */}
          <Reveal className="lg:col-span-6">
            <span className="eyebrow text-gold-400">Contact</span>
            <h2 className="mt-4 font-serif text-4xl text-ivory-50 sm:text-5xl lg:text-6xl">
              Get in touch
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-ivory-200/80">
              For strategic partnerships, luxury brand collaborations, destination advisory, and international media inquiries.
            </p>

            <div className="mt-10 border-l-2 border-gold-500 pl-6">
              <p className="font-serif text-2xl font-medium text-ivory-50 sm:text-3xl">
                {contactDetails.name}
              </p>
              <div className="mt-2 text-sm leading-relaxed text-ivory-200">
                <p className="font-medium text-ivory-100">{contactDetails.role}</p>
                <p className="font-serif text-lg text-gold-400">{contactDetails.company}</p>
              </div>
            </div>
          </Reveal>

          {/* Right Column: Interactive Links */}
          <Reveal delay={1} className="lg:col-span-6 lg:pt-8">
            <div className="rounded-3xl border border-gold-500/25 bg-obsidian-900/90 p-8 shadow-2xl backdrop-blur-sm">
              <ul className="divide-y divide-gold-500/15">
                <li>
                  <a
                    href={`mailto:${contactDetails.email}`}
                    className="group flex items-center justify-between gap-4 py-5 transition-colors hover:text-gold-300"
                    aria-label={`Email ${contactDetails.email}`}
                  >
                    <span className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-obsidian-950 text-gold-400 border border-gold-500/30 group-hover:bg-gold-500 group-hover:text-obsidian-950 transition-colors">
                        <Mail size={18} />
                      </div>
                      <span className="text-xs font-semibold uppercase tracking-luxe text-gold-400/80">
                        Email
                      </span>
                    </span>
                    <span className="text-base font-medium text-ivory-100 transition-colors group-hover:text-gold-300 sm:text-lg">
                      {contactDetails.email}
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={contactDetails.instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between gap-4 py-5 transition-colors hover:text-gold-300"
                    aria-label={`Instagram profile: ${contactDetails.instagramHandle}`}
                  >
                    <span className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-obsidian-950 text-gold-400 border border-gold-500/30 group-hover:bg-gold-500 group-hover:text-obsidian-950 transition-colors">
                        <Instagram size={18} />
                      </div>
                      <span className="text-xs font-semibold uppercase tracking-luxe text-gold-400/80">
                        Instagram
                      </span>
                    </span>
                    <span className="text-base font-medium text-ivory-100 transition-colors group-hover:text-gold-300 sm:text-lg">
                      {contactDetails.instagramHandle}
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={contactDetails.linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between gap-4 py-5 transition-colors hover:text-gold-300"
                    aria-label={`LinkedIn profile: ${contactDetails.linkedin}`}
                  >
                    <span className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-obsidian-950 text-gold-400 border border-gold-500/30 group-hover:bg-gold-500 group-hover:text-obsidian-950 transition-colors">
                        <Linkedin size={18} />
                      </div>
                      <span className="text-xs font-semibold uppercase tracking-luxe text-gold-400/80">
                        LinkedIn
                      </span>
                    </span>
                    <span className="text-base font-medium text-ivory-100 transition-colors group-hover:text-gold-300 sm:text-lg">
                      {contactDetails.linkedin}
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Footer */}
      <footer className="mx-auto mt-24 flex max-w-7xl flex-col gap-4 border-t border-gold-500/20 px-6 pt-10 text-xs uppercase tracking-luxe text-ivory-200/60 sm:flex-row sm:items-center sm:justify-between lg:px-10">
        <p className="font-medium text-ivory-200">
          Founder &amp; CMD &bull; Platinum World Grroup
        </p>
        <p>&copy; 2026-27 Sushill Waddhwa. All rights reserved.</p>
      </footer>
    </section>
  );
}
