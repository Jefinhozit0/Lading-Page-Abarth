import { site } from '../config/site';
import { CountUp } from './ui';

const About = () => {
  const { about, business } = site;
  const years = new Date().getFullYear() - business.foundedYear;

  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container-site grid items-center gap-16 lg:grid-cols-2">
        {/* Imagens */}
        <div className="reveal reveal-left relative order-last lg:order-first">
          <div className="reveal reveal-wipe overflow-hidden rounded-lg sm:w-4/5">
            <img
              src={about.images[0]}
              alt={`Oficina ${business.name}`}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <img
            src={about.images[1]}
            alt="Equipamentos da oficina"
            loading="lazy"
            data-scroll
            className="parallax absolute -bottom-8 right-0 hidden aspect-square w-1/2 rounded-lg border-8 border-ink-950 object-cover sm:block"
          />
          <div className="absolute left-4 top-4 rounded-md bg-brand px-5 py-4 text-white shadow-xl sm:-left-4 sm:top-8">
            <div className="font-display text-5xl font-extrabold leading-none">
              <CountUp value={`${years}+`} />
            </div>
            <div className="mt-1 text-xs font-semibold uppercase tracking-wider">anos de estrada</div>
          </div>
        </div>

        {/* Texto */}
        <div>
          <div className="reveal">
            <span className="eyebrow">Sobre a {business.name}</span>
            <h2 className="heading mt-4 text-white">
              <span className="mask-line">
                <span>{about.title}</span>
              </span>
            </h2>
            {about.paragraphs.map((p) => (
              <p key={p} className="mt-5 text-lg leading-relaxed text-zinc-400">
                {p}
              </p>
            ))}
          </div>

          <dl className="mt-10 space-y-px overflow-hidden rounded-lg border border-white/10 bg-white/10">
            {about.values.map((value, index) => (
              <div
                key={value.title}
                style={{ transitionDelay: `${index * 120}ms` }}
                className="reveal reveal-right grid gap-1 bg-ink-950 p-5 sm:grid-cols-[120px_1fr] sm:gap-6">
                <dt className="font-display text-lg font-bold uppercase text-brand">{value.title}</dt>
                <dd className="text-zinc-300">{value.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default About;
