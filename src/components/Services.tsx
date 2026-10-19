import { useEffect, useState } from 'react';
import { ArrowUpRight, Check, Clock, Tag, X } from 'lucide-react';
import { site, whatsappLink, type Service } from '../config/site';
import { SectionHeader, WhatsAppIcon } from './ui';

const Services = () => {
  const [selected, setSelected] = useState<Service | null>(null);

  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setSelected(null);
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [selected]);

  return (
    <section id="services" className="py-24 md:py-32">
      <div className="container-site">
        <SectionHeader
          eyebrow="Serviços"
          title={
            <>
              Tudo que seu carro precisa, <span className="text-brand">num só lugar</span>
            </>
          }
          description="Mecânica completa com preço justo e prazo combinado. Toque em um serviço para ver o que está incluso."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {site.services.map((service, index) => {
            const Icon = service.icon;
            return (
              <button
                key={service.title}
                onClick={() => setSelected(service)}
                className="reveal group relative flex min-h-[320px] flex-col justify-end overflow-hidden rounded-lg border border-white/10 bg-ink-900 p-6 text-left transition-colors hover:border-brand/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand"
                style={{ transitionDelay: `${(index % 3) * 80}ms` }}
              >
                <img
                  src={service.image}
                  alt=""
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover opacity-30 transition-all duration-500 group-hover:scale-105 group-hover:opacity-45"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/70 to-transparent" />

                <div className="absolute left-6 top-6 flex h-11 w-11 items-center justify-center rounded-md bg-brand text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="absolute right-6 top-6 font-display text-sm font-semibold text-zinc-500">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <div className="relative">
                  <h3 className="font-display text-2xl font-bold uppercase text-white">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-300">{service.description}</p>
                  <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4 text-sm">
                    <span className="font-medium text-zinc-400">{service.price}</span>
                    <span className="inline-flex items-center gap-1 font-semibold text-brand">
                      Detalhes
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-[60] flex items-end justify-center bg-black/70 backdrop-blur-sm sm:items-center sm:p-4"
          onClick={() => setSelected(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="service-title"
        >
          <div
            className="max-h-[92dvh] w-full max-w-3xl overflow-y-auto rounded-t-2xl border border-white/10 bg-ink-900 sm:rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-48 sm:h-60">
              <img src={selected.image} alt="" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900 to-transparent" />
              <button
                onClick={() => setSelected(null)}
                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80"
                aria-label="Fechar"
                autoFocus
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8">
              <span className="eyebrow">{selected.subtitle}</span>
              <h3 id="service-title" className="mt-3 font-display text-3xl font-bold uppercase text-white sm:text-4xl">
                {selected.title}
              </h3>
              <p className="mt-4 leading-relaxed text-zinc-300">{selected.fullDescription}</p>

              <div className="mt-8 grid gap-8 md:grid-cols-[1.4fr_1fr]">
                <div>
                  <h4 className="label">O que está incluso</h4>
                  <ul className="space-y-2.5">
                    {selected.includes.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-zinc-200">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  <div className="rounded-lg border border-white/10 bg-ink-950 p-4">
                    <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-zinc-400">
                      <Tag className="h-3.5 w-3.5" /> Investimento
                    </div>
                    <div className="mt-1 font-display text-2xl font-bold text-brand">{selected.price}</div>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-ink-950 p-4">
                    <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-zinc-400">
                      <Clock className="h-3.5 w-3.5" /> Tempo estimado
                    </div>
                    <div className="mt-1 font-semibold text-white">{selected.duration}</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={whatsappLink(`Olá! Gostaria de agendar: ${selected.title}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex-1"
                >
                  <WhatsAppIcon /> Agendar pelo WhatsApp
                </a>
                <a href="#contact" onClick={() => setSelected(null)} className="btn-ghost flex-1">
                  Usar o formulário
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
