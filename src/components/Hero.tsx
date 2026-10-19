import { ArrowRight, Star } from 'lucide-react';
import { site, whatsappLink } from '../config/site';
import { WhatsAppIcon } from './ui';

const Hero = () => {
  const { hero, stats, highlights } = site;

  return (
    <section id="home" className="relative overflow-hidden">
      {/* Fundo */}
      <div className="absolute inset-0">
        <img src={hero.image} alt="" className="h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/90 to-ink-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-ink-950/60" />
        <div className="grain absolute inset-0" />
      </div>

      <div className="container-site relative pb-16 pt-32 md:pb-24 md:pt-44">
        <div className="max-w-3xl">
          <span className="reveal eyebrow">{hero.badge}</span>

          <h1 className="reveal mt-6 font-display text-5xl font-extrabold uppercase leading-[0.9] tracking-tight text-white sm:text-6xl lg:text-8xl">
            {hero.titleStart} <span className="text-brand">{hero.titleHighlight}</span>
            <span className="mt-2 block text-3xl font-semibold normal-case tracking-normal text-zinc-300 sm:text-4xl lg:text-5xl">
              {hero.titleEnd}
            </span>
          </h1>

          <p className="reveal mt-6 max-w-xl text-lg leading-relaxed text-zinc-300">{hero.subtitle}</p>

          <div className="reveal mt-10 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className="btn-primary">
              Agendar serviço <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={whatsappLink(`Olá! Vim pelo site da ${site.business.name} e gostaria de um orçamento.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              <WhatsAppIcon /> Orçamento pelo WhatsApp
            </a>
          </div>

          <div className="reveal mt-8 flex items-center gap-3 text-sm text-zinc-400">
            <div className="flex text-brand">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <span>Avaliação 5 estrelas de clientes da região</span>
          </div>
        </div>

        {/* Números */}
        <dl className="reveal mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 md:mt-24 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-ink-950/80 p-5 backdrop-blur md:p-6">
              <dt className="text-xs uppercase tracking-wider text-zinc-400">{stat.label}</dt>
              <dd className="mt-1 font-display text-3xl font-bold text-white md:text-4xl">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Diferenciais */}
      <div className="relative border-y border-white/5 bg-ink-900">
        <div className="container-site grid gap-6 py-8 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex items-center gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-brand/10 text-brand">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <div className="font-semibold text-white">{title}</div>
                <div className="text-sm text-zinc-400">{text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
