import { ArrowUp, Facebook, Instagram } from 'lucide-react';
import { site, whatsappLink } from '../config/site';
import { Logo, WhatsAppIcon } from './ui';

const Footer = () => {
  const { business, contact, credit } = site;
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-ink-900">
      {/* CTA final */}
      <div className="container-site py-16 md:py-20">
        <div className="reveal relative overflow-hidden rounded-xl bg-brand p-8 md:p-12">
          <div className="grain absolute inset-0 opacity-50" />
          <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h2 className="font-display text-4xl font-extrabold uppercase leading-none text-white md:text-5xl">
                Seu carro merece atenção hoje
              </h2>
              <p className="mt-3 text-white/85">Fale com a nossa equipe e receba um orçamento sem compromisso.</p>
            </div>
            <a
              href={whatsappLink(`Olá! Vim pelo site da ${business.name} e gostaria de um orçamento.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn shrink-0 bg-white text-ink-950 hover:bg-zinc-100"
            >
              <WhatsAppIcon /> Chamar no WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="container-site grid gap-10 border-t border-white/5 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <Logo />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-zinc-400">
            Oficina mecânica completa em {business.city}. Diagnóstico preciso, orçamento transparente e garantia em
            todos os serviços.
          </p>
          {(contact.social.instagram || contact.social.facebook) && (
            <div className="mt-5 flex gap-3">
              {contact.social.instagram && (
                <a href={contact.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-md border border-white/10 text-zinc-300 hover:border-brand hover:text-brand">
                  <Instagram className="h-4 w-4" />
                </a>
              )}
              {contact.social.facebook && (
                <a href={contact.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex h-10 w-10 items-center justify-center rounded-md border border-white/10 text-zinc-300 hover:border-brand hover:text-brand">
                  <Facebook className="h-4 w-4" />
                </a>
              )}
            </div>
          )}
        </div>

        <div>
          <h3 className="label">Contato</h3>
          <ul className="space-y-2 text-sm text-zinc-300">
            <li>{contact.address.street}</li>
            <li>{contact.address.city}</li>
            <li>
              <a href={`tel:+${contact.whatsapp}`} className="hover:text-brand">{contact.phoneDisplay}</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="label">Horário</h3>
          <ul className="space-y-2 text-sm text-zinc-300">
            {contact.hours.map((h) => (
              <li key={h.days}>
                {h.days}: {h.time}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="container-site flex flex-col items-center justify-between gap-4 py-6 text-xs text-zinc-500 sm:flex-row">
          <p>
            © {year} {business.name} {business.tagline}. Todos os direitos reservados.
          </p>
          <p className="flex items-center gap-4">
            <span>
              Desenvolvido por{' '}
              {credit.url ? (
                <a href={credit.url} target="_blank" rel="noopener noreferrer" className="font-semibold text-zinc-300 hover:text-brand">
                  {credit.name}
                </a>
              ) : (
                <span className="font-semibold text-zinc-300">{credit.name}</span>
              )}
            </span>
            <a href="#home" aria-label="Voltar ao topo" className="flex h-8 w-8 items-center justify-center rounded-md border border-white/10 hover:border-brand hover:text-brand">
              <ArrowUp className="h-4 w-4" />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
