import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navItems } from '@/data/siteContent';

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ${
        scrolled || open
          ? 'border-gold-500/30 bg-ivory-50/95 shadow-lg backdrop-blur-md'
          : 'border-gold-500/15 bg-ivory-50/90 backdrop-blur-md'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        {/* Top-Left Navbar Brand Heading in Black */}
        <h1>
          <a
            href="#home"
            onClick={closeMenu}
            className="font-wordmark text-lg sm:text-xl md:text-2xl font-bold tracking-[0.16em] sm:tracking-[0.2em] uppercase select-none block transition-transform duration-300 hover:scale-[1.02] text-ink-900"
          >
            SUSHILL WADDHWA
          </a>
        </h1>

        <nav className="hidden lg:block" aria-label="Primary">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="link-underline text-xs font-medium uppercase tracking-luxe text-ink-700 transition-colors hover:text-gold-700 focus-visible:ring-2 focus-visible:ring-gold-500 rounded-sm"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="flex h-11 w-11 items-center justify-center rounded-full text-ink-900 transition-colors hover:bg-ivory-200 border border-gold-500/30 lg:hidden focus-visible:ring-2 focus-visible:ring-gold-500"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={22} className="text-gold-700" /> : <Menu size={22} className="text-gold-700" />}
        </button>
      </div>

      <div
        className={`overflow-hidden border-gold-500/20 transition-all duration-500 lg:hidden ${
          open ? 'max-h-[28rem] border-t opacity-100 bg-ivory-50/98 backdrop-blur-xl' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="px-6 py-6" aria-label="Mobile">
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={closeMenu}
                  className="block py-3 text-sm font-medium uppercase tracking-luxe text-ink-700 transition-colors hover:text-gold-700"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
