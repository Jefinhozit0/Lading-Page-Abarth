import { Plus } from 'lucide-react';
import { site, whatsappLink } from '../config/site';
import { SectionHeader, WhatsAppIcon } from './ui';

const Faq = () => (
  <section id="faq" className="border-y border-white/5 bg-ink-900 py-24 md:py-32">
    <div className="container-site grid gap-12 lg:grid-cols-[1fr_1.4fr]">
      <div>
        <SectionHeader
          eyebrow="Dúvidas frequentes"
          title={
            <>
              Perguntas <span className="text-brand">comuns</span>
            </>
          }
          description="Não encontrou o que procurava? Fale direto com a gente."
        />
        <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-ghost reveal -mt-4">
          <WhatsAppIcon /> Tirar dúvida no WhatsApp
        </a>
      </div>

      <div className="divide-y divide-white/10 border-y border-white/10">
        {site.faq.map((item) => (
          <details key={item.q} className="reveal group">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left font-semibold text-white [&::-webkit-details-marker]:hidden">
              {item.q}
              <Plus className="h-5 w-5 shrink-0 text-brand transition-transform group-open:rotate-45" />
            </summary>
            <p className="pb-5 pr-10 leading-relaxed text-zinc-400">{item.a}</p>
          </details>
        ))}
      </div>
    </div>
  </section>
);

export default Faq;
