import { Instagram, Linkedin, Mail } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { contactDetails } from '@/data/siteContent';

export default function ContactSection() {
  return (
    <section id="contact" className="bg-ivory-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <span className="eyebrow">Contact</span>
            <h2 className="mt-4 text-4xl text-ink-900 sm:text-5xl lg:text-6xl">Get in touch</h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-ink-500">
              For brand collaborations, partnerships and media enquiries.
            </p>
            <p className="mt-10 font-serif text-2xl text-ink-900">{contactDetails.name}</p>
            <p className="mt-1 text-sm text-ink-500">{contactDetails.role}</p>
          </Reveal>

          <Reveal delay={1} className="lg:col-span-6 lg:pt-16">
            <ul className="divide-y divide-ivory-300 border-y border-ivory-300">
              <li>
                <a
                  href={`mailto:${contactDetails.email}`}
                  className="group flex items-center justify-between gap-4 py-6 transition-colors hover:text-gold-700"
                >
                  <span className="flex items-center gap-4">
                    <Mail size={20} className="text-gold-700" />
                    <span className="text-xs font-medium uppercase tracking-luxe text-ink-500">Email</span>
                  </span>
                  <span className="text-base text-ink-900 transition-colors group-hover:text-gold-700 sm:text-lg">
                    {contactDetails.email}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={contactDetails.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between gap-4 py-6 transition-colors hover:text-gold-700"
                >
                  <span className="flex items-center gap-4">
                    <Instagram size={20} className="text-gold-700" />
                    <span className="text-xs font-medium uppercase tracking-luxe text-ink-500">Instagram</span>
                  </span>
                  <span className="text-base text-ink-900 transition-colors group-hover:text-gold-700 sm:text-lg">
                    {contactDetails.instagramHandle}
                  </span>
                </a>
              </li>
              <li className="flex items-center justify-between gap-4 py-6">
                <span className="flex items-center gap-4">
                  <Linkedin size={20} className="text-gold-700" />
                  <span className="text-xs font-medium uppercase tracking-luxe text-ink-500">LinkedIn</span>
                </span>
                <span className="text-base text-ink-900 sm:text-lg">{contactDetails.linkedin}</span>
              </li>
            </ul>
          </Reveal>
        </div>
      </div>

      <footer className="mx-auto mt-24 flex max-w-7xl flex-col gap-4 border-t border-ivory-300 px-6 pt-10 text-xs uppercase tracking-luxe text-ink-500 sm:flex-row sm:items-center sm:justify-between lg:px-10">
        <p className="font-serif text-base normal-case tracking-normal text-ink-700">Celebrating Life with Sushill Waddhwa</p>
        <p>&copy; {new Date().getFullYear()} Sushill Waddhwa. All rights reserved.</p>
      </footer>
    </section>
  );
}
