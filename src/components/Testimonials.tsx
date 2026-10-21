import { Quote, Star } from 'lucide-react';
import { site, whatsappLink } from '../config/site';
import { SectionHeader } from './ui';

const Testimonials = () => (
  <section id="testimonials" className="py-24 md:py-32">
    <div className="container-site">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <SectionHeader
          eyebrow="Avaliações"
          title={
            <>
              Quem confia, <span className="text-brand">volta</span>
            </>
          }
          description="O que dizem os motoristas que já passaram pela nossa oficina."
        />
        <a
          href={whatsappLink(`Olá! Quero deixar um depoimento sobre a ${site.business.name}.`)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ghost reveal mb-12 shrink-0"
        >
          Deixar meu depoimento
        </a>
      </div>

      <div className="columns-1 gap-5 md:columns-2 lg:columns-3">
        {site.testimonials.map((t, index) => (
          <figure
            key={t.name}
            className="reveal mb-5 break-inside-avoid rounded-lg border border-white/10 bg-ink-900 p-6 hover:border-brand/40"
            style={{ transitionDelay: `${(index % 3) * 100}ms` }}
          >
            <div className="flex items-center justify-between">
              <div className="flex text-brand" aria-label="5 estrelas">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <Quote className="h-6 w-6 text-white/10" />
            </div>
            <blockquote className="mt-4 leading-relaxed text-zinc-200">“{t.text}”</blockquote>
            <figcaption className="mt-6 flex items-center gap-3 border-t border-white/10 pt-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand/15 font-semibold text-brand">
                {t.name
                  .split(' ')
                  .map((n) => n[0])
                  .slice(0, 2)
                  .join('')}
              </div>
              <div>
                <div className="font-semibold text-white">{t.name}</div>
                <div className="text-xs text-zinc-400">
                  {t.location} · <span className="text-brand">{t.service}</span>
                </div>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
