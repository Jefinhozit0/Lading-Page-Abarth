import { useEffect } from 'react';

const clamp = (value: number) => Math.min(1, Math.max(0, value));

/**
 * Define variáveis CSS de progresso do scroll, usadas pelas animações em index.css:
 * - `--page` no <html>: 0 no topo da página, 1 no fim.
 * - `--scroll` em cada `[data-scroll]`:
 *   - `data-scroll="exit"`: 0 com o elemento no topo, 1 quando ele sai totalmente pela parte de cima.
 *   - `data-scroll` (padrão): 0 quando entra pela base da tela, 1 quando sai pelo topo.
 */
export function useScrollFx() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const root = document.documentElement;
    const elements = Array.from(document.querySelectorAll<HTMLElement>('[data-scroll]'));
    let frame = 0;

    const update = () => {
      frame = 0;
      const vh = window.innerHeight;
      const max = root.scrollHeight - vh;
      root.style.setProperty('--page', (max > 0 ? clamp(window.scrollY / max) : 0).toFixed(4));

      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const progress =
          el.dataset.scroll === 'exit' ? -rect.top / rect.height : (vh - rect.top) / (vh + rect.height);
        el.style.setProperty('--scroll', clamp(progress).toFixed(4));
      });
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, []);
}
