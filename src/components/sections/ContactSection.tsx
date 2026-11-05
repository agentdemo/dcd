import { Instagram, Linkedin, Mail } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { contactDetails } from '@/data/siteContent';

export default function ContactSection() {
  return (
    <section id="contact" className="bg-[#070D1A] py-24 lg:py-32 text-ivory-100 border-t border-gold-500/20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Direct Info & Exact Company Title */}
          <Reveal className="lg:col-span-6">
            <span className="eyebrow text-gold-400">Contact</span>
            <h2 className="mt-4 font-serif text-4xl text-ivory-50 sm:text-5xl lg:text-6xl">
              Get in touch
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-ivory-200/80">
              For strategic partnerships, luxury brand collaborations, destination advisory, and international media inquiries.
            </p>

          </Reveal>

          {/* Right Column: Direct Clickable Icons Only (Email, Instagram, LinkedIn) */}
          <Reveal delay={1} className="lg:col-span-6 flex items-center lg:justify-end">
            <div className="w-full max-w-md rounded-3xl border border-gold-500/25 bg-obsidian-900/90 p-8 sm:p-12 shadow-2xl backdrop-blur-sm">
              <div className="flex items-center justify-around gap-4 sm:gap-6">
                <a
                  href={`mailto:${contactDetails.email}`}
                  className="group flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full border border-gold-500/30 bg-obsidian-950 text-gold-400 shadow-lg transition-all duration-300 hover:scale-110 hover:border-gold-400 hover:bg-gold-500 hover:text-obsidian-950 hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] focus-visible:ring-2 focus-visible:ring-gold-400"
                  aria-label="Send Email"
                  title="Email"
                >
                  <Mail size={26} className="transition-transform duration-300 group-hover:scale-110" />
                </a>

                <a
                  href={contactDetails.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full border border-gold-500/30 bg-obsidian-950 text-gold-400 shadow-lg transition-all duration-300 hover:scale-110 hover:border-gold-400 hover:bg-gold-500 hover:text-obsidian-950 hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] focus-visible:ring-2 focus-visible:ring-gold-400"
                  aria-label="Instagram Profile"
                  title="Instagram"
                >
                  <Instagram size={26} className="transition-transform duration-300 group-hover:scale-110" />
                </a>

                <a
                  href={contactDetails.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full border border-gold-500/30 bg-obsidian-950 text-gold-400 shadow-lg transition-all duration-300 hover:scale-110 hover:border-gold-400 hover:bg-gold-500 hover:text-obsidian-950 hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] focus-visible:ring-2 focus-visible:ring-gold-400"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn"
                >
                  <Linkedin size={26} className="transition-transform duration-300 group-hover:scale-110" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Footer */}
      <footer className="mx-auto mt-24 flex max-w-7xl flex-col gap-4 border-t border-gold-500/20 px-6 pt-10 text-xs uppercase tracking-luxe text-ivory-200/60 sm:flex-row sm:items-center sm:justify-between lg:px-10">
        <p className="font-medium text-ivory-200">
          Sushill Waddhwa, International entrepreneur, investor, Founder &amp; CMD,<br />
          <span className="whitespace-nowrap">Platinum World Grroup</span>
        </p>
        <p>&copy; 2026-27 Sushill Waddhwa. All rights reserved.</p>
      </footer>
    </section>
  );
}
