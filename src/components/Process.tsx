import { Car } from 'lucide-react';
import { site } from '../config/site';
import { SectionHeader } from './ui';

const Process = () => (
  <section id="process" className="border-y border-white/5 bg-ink-900 py-24 md:py-32">
    <div className="container-site">
      <SectionHeader
        eyebrow="Como funciona"
        title={
          <>
            Sem surpresa <span className="text-brand">na conta</span>
          </>
        }
        description="Um processo simples e transparente, do agendamento à entrega das chaves."
      />

      {/* Estrada: o carro avança pelas etapas conforme a rolagem */}
      <div data-scroll className="road relative mb-8 h-8" aria-hidden="true">
        <div className="road-lane absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2" />
        <div className="road-fill absolute left-0 top-1/2 h-0.5 -translate-y-1/2 bg-gradient-to-r from-brand/0 to-brand" />
        <Car className="road-car absolute top-1/2 h-8 w-8 -translate-y-1/2 text-brand drop-shadow-[0_0_12px_rgb(var(--brand)/0.6)]" />
      </div>

      <ol className="grid gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
        {site.process.map(({ icon: Icon, title, text }, index) => (
          <li
            key={title}
            className="reveal reveal-right relative bg-ink-900 p-8"
            style={{ transitionDelay: `${index * 120}ms` }}
          >
            <span className="font-display text-6xl font-extrabold text-white/5">
              {String(index + 1).padStart(2, '0')}
            </span>
            <Icon className="absolute right-8 top-8 h-6 w-6 text-brand" />
            <h3 className="mt-2 font-display text-2xl font-bold uppercase text-white">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">{text}</p>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default Process;
