import { useEffect, useRef, useState, type ReactNode } from 'react';
import { site } from '../config/site';

/**
 * Anima a parte numérica de valores como "15+", "1.000+" ou "90 dias"
 * quando o elemento entra na tela, como um velocímetro subindo.
 */
export const CountUp = ({ value, duration = 1800 }: { value: string; duration?: number }) => {
  const match = value.match(/^([\d.]+)(.*)$/);
  const target = match ? Number(match[1].replace(/\./g, '')) : 0;
  const animate = Boolean(match) && !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const [current, setCurrent] = useState(animate ? 0 : target);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!animate || !el) return;
    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration);
          setCurrent(Math.round(target * (1 - Math.pow(2, -10 * t))));
          if (t < 1) frame = requestAnimationFrame(tick);
          else setCurrent(target);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [animate, target, duration]);

  if (!match) return <>{value}</>;
  return (
    <span ref={ref} className="tabular-nums">
      {current.toLocaleString('pt-BR')}
      {match[2]}
    </span>
  );
};

export const Logo = ({ compact = false }: { compact?: boolean }) => (
  <div className="flex items-center gap-3">
    {site.business.logo ? (
      <img src={site.business.logo} alt={site.business.name} className="h-10 w-auto" />
    ) : (
      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-brand font-display text-2xl font-extrabold text-white">
        {site.business.monogram}
      </div>
    )}
    {!compact && (
      <div className="leading-none">
        <div className="font-display text-xl font-bold uppercase tracking-wide text-white">
          {site.business.name}
        </div>
        <div className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.3em] text-zinc-400">
          {site.business.tagline}
        </div>
      </div>
    )}
  </div>
);

interface SectionHeaderProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: 'left' | 'center';
}

export const SectionHeader = ({ eyebrow, title, description, align = 'left' }: SectionHeaderProps) => (
  <div className={`reveal mb-12 max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
    <span className="eyebrow">{eyebrow}</span>
    <h2 className="heading mt-4 text-white">
      <span className="mask-line">
        <span>{title}</span>
      </span>
    </h2>
    {description && <p className="mt-4 text-lg leading-relaxed text-zinc-400">{description}</p>}
  </div>
);

export const WhatsAppIcon = ({ className = 'h-5 w-5' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.21 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35zM12.04 21.5h-.01a9.45 9.45 0 0 1-4.82-1.32l-.35-.2-3.58.94.96-3.49-.23-.36a9.43 9.43 0 0 1-1.45-5.03c0-5.22 4.25-9.47 9.48-9.47 2.53 0 4.91.99 6.7 2.78a9.4 9.4 0 0 1 2.77 6.7c0 5.23-4.25 9.47-9.47 9.47zm8.06-17.54A11.33 11.33 0 0 0 12.04.62C5.76.62.65 5.73.65 12.01c0 2 .52 3.96 1.52 5.69L.55 23.6l6.04-1.58a11.36 11.36 0 0 0 5.44 1.39h.01c6.28 0 11.39-5.11 11.39-11.39 0-3.04-1.18-5.9-3.33-8.05z" />
  </svg>
);
