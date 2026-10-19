import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { site, whatsappLink } from '../config/site';
import { Logo, WhatsAppIcon } from './ui';

const links = [
  { id: 'services', label: 'Serviços' },
  { id: 'process', label: 'Como funciona' },
  { id: 'about', label: 'Sobre' },
  { id: 'gallery', label: 'Galeria' },
  { id: 'testimonials', label: 'Avaliações' },
  { id: 'faq', label: 'Dúvidas' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    links.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || isMenuOpen ? 'border-b border-white/5 bg-ink-950/90 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="container-site flex h-16 items-center justify-between md:h-20">
        <a href="#home" aria-label={`${site.business.name} — início`}>
          <Logo />
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Principal">
          {links.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`text-sm font-medium transition-colors ${
                active === id ? 'text-brand' : 'text-zinc-300 hover:text-white'
              }`}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={`tel:+${site.contact.whatsapp}`} className="text-sm font-medium text-zinc-300 hover:text-white">
            {site.contact.phoneDisplay}
          </a>
          <a href="#contact" className="btn-primary px-5 py-2.5">
            Agendar
          </a>
        </div>

        <button
          onClick={() => setIsMenuOpen((open) => !open)}
          className="-mr-2 p-2 text-white lg:hidden"
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="h-[calc(100dvh-4rem)] overflow-y-auto border-t border-white/5 bg-ink-950 lg:hidden">
          <nav className="container-site flex flex-col py-6" aria-label="Menu móvel">
            {links.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setIsMenuOpen(false)}
                className="border-b border-white/5 py-4 font-display text-2xl font-semibold uppercase text-white"
              >
                {label}
              </a>
            ))}
            <div className="mt-8 grid gap-3">
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="btn-primary">
                Agendar serviço
              </a>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                <WhatsAppIcon /> WhatsApp
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
