import type { CSSProperties } from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { site, whatsappLink } from '../config/site';
import { CountUp, WhatsAppIcon } from './ui';

/** Atraso da animação de entrada (lido por .intro / .intro-line em index.css) */
const delay = (ms: number) => ({ '--d': `${ms}ms` }) as CSSProperties;

const speedLines = [
  { top: '22%', d: 200 },
  { top: '38%', d: 1400 },
  { top: '54%', d: 700 },
  { top: '71%', d: 2100 },
];

const Hero = () => {
  const { hero, stats, highlights } = site;

  return (
    <section id="home" data-scroll="exit" className="relative overflow-hidden">
      {/* Fundo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="drive-in absolute inset-0">
          <img src={hero.image} alt="" className="hero-bg h-full w-full object-cover opacity-40" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/90 to-ink-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-ink-950/60" />
        <div className="grain absolute inset-0" />
        <div aria-hidden="true">
          {speedLines.map(({ top, d }) => (
            <span key={top} className="speed-line" style={{ top, ...delay(d) }} />
          ))}
        </div>
      </div>

      <div className="hero-content container-site relative pb-16 pt-32 md:pb-24 md:pt-44">
        <div className="max-w-3xl">
          <span className="intro eyebrow" style={delay(300)}>
            {hero.badge}
          </span>

          <h1 className="mt-6 font-display text-5xl font-extrabold uppercase leading-[0.9] tracking-tight text-white sm:text-6xl lg:text-8xl">
            <span className="mask-line intro-line" style={delay(450)}>
              <span>
                {hero.titleStart} <span className="text-brand">{hero.titleHighlight}</span>
              </span>
            </span>
            <span
              className="mask-line intro-line mt-2 text-3xl font-semibold normal-case tracking-normal text-zinc-300 sm:text-4xl lg:text-5xl"
              style={delay(600)}
            >
              <span>{hero.titleEnd}</span>
            </span>
          </h1>

          <p className="intro mt-6 max-w-xl text-lg leading-relaxed text-zinc-300" style={delay(800)}>
            {hero.subtitle}
          </p>

          <div className="intro mt-10 flex flex-col gap-3 sm:flex-row" style={delay(950)}>
            <a href="#contact" className="btn-primary group">
              Agendar serviço <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
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

          <div className="intro mt-8 flex items-center gap-3 text-sm text-zinc-400" style={delay(1100)}>
            <div className="flex text-brand">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <span>Avaliação 5 estrelas de clientes da região</span>
          </div>
        </div>

        {/* Números */}
        <dl className="intro mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 md:mt-24 md:grid-cols-4" style={delay(1250)}>
          {stats.map((stat) => (
            <div key={stat.label} className="bg-ink-950/80 p-5 backdrop-blur md:p-6">
              <dt className="text-xs uppercase tracking-wider text-zinc-400">{stat.label}</dt>
              <dd className="mt-1 font-display text-3xl font-bold text-white md:text-4xl">
                <CountUp value={stat.value} />
              </dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Diferenciais — entram em sequência, como a faixa de marcas da referência */}
      <div className="relative border-y border-white/5 bg-ink-900">
        <div className="container-site grid gap-6 py-8 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map(({ icon: Icon, title, text }, index) => (
            <div
              key={title}
              className="reveal reveal-right group flex items-center gap-4"
              style={{ transitionDelay: `${index * 110}ms` }}
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-brand/10 text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
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
