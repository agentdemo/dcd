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
        scrolled || open ? 'border-ivory-300 bg-ivory-100/95 shadow-sm backdrop-blur-md' : 'border-transparent bg-ivory-100/80'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <a href="#home" onClick={closeMenu} className="font-wordmark text-base font-bold tracking-wide text-ink-900 sm:text-lg">
          SUSHILL WADDHWA
        </a>

        <nav className="hidden lg:block" aria-label="Primary">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="link-underline text-xs font-medium uppercase tracking-luxe text-ink-700 transition-colors hover:text-gold-700">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="flex h-11 w-11 items-center justify-center rounded-full text-ink-900 transition-colors hover:bg-ivory-300 lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div
        className={`overflow-hidden border-ivory-300 transition-all duration-500 lg:hidden ${
          open ? 'max-h-[28rem] border-t opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="px-6 py-6" aria-label="Mobile">
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={closeMenu}
                  className="block py-3 text-sm font-medium uppercase tracking-luxe text-ink-900 transition-colors hover:text-gold-700"
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
