import { useState, type ChangeEvent, type FormEvent } from 'react';
import { Clock, Mail, MapPin, Phone, Send } from 'lucide-react';
import { site, whatsappLink } from '../config/site';
import { SectionHeader } from './ui';

const emptyForm = {
  name: '',
  phone: '',
  vehicle: '',
  service: '',
  preferredDate: '',
  preferredTime: '',
  message: '',
};

const Contact = () => {
  const [form, setForm] = useState(emptyForm);
  const { contact } = site;
  const today = new Date().toISOString().split('T')[0];

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // O agendamento é enviado como mensagem pronta no WhatsApp da oficina
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const date = form.preferredDate ? form.preferredDate.split('-').reverse().join('/') : '';
    const details = [
      `*Nome:* ${form.name}`,
      `*Telefone:* ${form.phone}`,
      form.vehicle && `*Veículo:* ${form.vehicle}`,
      form.service && `*Serviço:* ${form.service}`,
      date && `*Data preferida:* ${date}${form.preferredTime ? ` às ${form.preferredTime}` : ''}`,
      form.message && `*Mensagem:* ${form.message}`,
    ].filter(Boolean);
    const message = [`Olá! Gostaria de agendar um serviço na ${site.business.name}.`, '', ...details].join('\n');

    window.open(whatsappLink(message), '_blank', 'noopener,noreferrer');
    setForm(emptyForm);
  };

  const info = [
    {
      icon: MapPin,
      title: 'Endereço',
      body: (
        <>
          {contact.address.street}
          <br />
          {contact.address.district} — {contact.address.city}
        </>
      ),
    },
    {
      icon: Phone,
      title: 'Telefone / WhatsApp',
      body: <a href={`tel:+${contact.whatsapp}`} className="hover:text-brand">{contact.phoneDisplay}</a>,
    },
    {
      icon: Mail,
      title: 'E-mail',
      body: <a href={`mailto:${contact.email}`} className="break-all hover:text-brand">{contact.email}</a>,
    },
    {
      icon: Clock,
      title: 'Horário',
      body: (
        <ul className="space-y-0.5">
          {contact.hours.map((h) => (
            <li key={h.days}>
              {h.days}: <span className="text-white">{h.time}</span>
            </li>
          ))}
        </ul>
      ),
    },
  ];

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container-site">
        <SectionHeader
          eyebrow="Agendamento"
          title={
            <>
              Agende seu <span className="text-brand">serviço</span>
            </>
          }
          description="Preencha os dados e envie direto para o nosso WhatsApp. Respondemos em minutos no horário comercial."
        />

        <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr]">
          {/* Informações */}
          <div className="reveal flex flex-col gap-6">
            <ul className="divide-y divide-white/10 rounded-lg border border-white/10 bg-ink-900">
              {info.map(({ icon: Icon, title, body }) => (
                <li key={title} className="flex gap-4 p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-brand/10 text-brand">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="text-sm leading-relaxed text-zinc-400">
                    <div className="mb-1 font-semibold text-white">{title}</div>
                    {body}
                  </div>
                </li>
              ))}
            </ul>

            {contact.mapEmbedUrl && (
              <iframe
                title={`Mapa — ${site.business.name}`}
                src={contact.mapEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-64 w-full flex-1 rounded-lg border border-white/10 grayscale invert-[0.9] hue-rotate-180"
              />
            )}
          </div>

          {/* Formulário */}
          <form
            onSubmit={handleSubmit}
            className="reveal rounded-lg border border-white/10 bg-ink-900 p-6 sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="label">Nome *</label>
                <input id="name" name="name" required value={form.name} onChange={handleChange} className="field" placeholder="Seu nome" autoComplete="name" />
              </div>
              <div>
                <label htmlFor="phone" className="label">Telefone *</label>
                <input id="phone" name="phone" type="tel" required value={form.phone} onChange={handleChange} className="field" placeholder="(11) 99999-9999" autoComplete="tel" />
              </div>
              <div>
                <label htmlFor="vehicle" className="label">Veículo</label>
                <input id="vehicle" name="vehicle" value={form.vehicle} onChange={handleChange} className="field" placeholder="Marca, modelo e ano" />
              </div>
              <div>
                <label htmlFor="service" className="label">Serviço</label>
                <select id="service" name="service" value={form.service} onChange={handleChange} className="field">
                  <option value="">Selecione</option>
                  {site.services.map((s) => (
                    <option key={s.title} value={s.title}>{s.title}</option>
                  ))}
                  <option value="Diagnóstico geral">Diagnóstico geral</option>
                  <option value="Outro">Outro</option>
                </select>
              </div>
              <div>
                <label htmlFor="preferredDate" className="label">Data preferida</label>
                <input id="preferredDate" name="preferredDate" type="date" min={today} value={form.preferredDate} onChange={handleChange} className="field [color-scheme:dark]" />
              </div>
              <div>
                <label htmlFor="preferredTime" className="label">Horário</label>
                <select id="preferredTime" name="preferredTime" value={form.preferredTime} onChange={handleChange} className="field">
                  <option value="">Selecione</option>
                  {site.bookingTimes.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="label">Conte o que está acontecendo</label>
                <textarea id="message" name="message" rows={4} value={form.message} onChange={handleChange} className="field resize-none" placeholder="Ex.: barulho ao frear, luz da injeção acesa..." />
              </div>
            </div>

            <button type="submit" className="btn-primary mt-6 w-full">
              <Send className="h-4 w-4" /> Enviar pelo WhatsApp
            </button>
            <p className="mt-3 text-center text-xs text-zinc-500">
              Ao enviar, abriremos o WhatsApp com sua mensagem pronta.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
