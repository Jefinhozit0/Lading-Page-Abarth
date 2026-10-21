import { useCallback, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react';
import { site } from '../config/site';
import { SectionHeader } from './ui';

// Layout do mosaico pensado para 6 fotos
const mosaic = ['col-span-2 row-span-2', '', '', 'md:col-span-2', 'md:col-span-2', 'col-span-2'];

const Gallery = () => {
  const images = site.gallery;
  const [index, setIndex] = useState<number | null>(null);

  const step = useCallback(
    (dir: 1 | -1) => setIndex((i) => (i === null ? i : (i + dir + images.length) % images.length)),
    [images.length]
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIndex(null);
      if (e.key === 'ArrowLeft') step(-1);
      if (e.key === 'ArrowRight') step(1);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [index, step]);

  return (
    <section id="gallery" className="border-y border-white/5 bg-ink-900 py-24 md:py-32">
      <div className="container-site">
        <SectionHeader
          eyebrow="Galeria"
          title={
            <>
              Por dentro <span className="text-brand">da oficina</span>
            </>
          }
          description="Estrutura, equipamentos e a equipe que cuida do seu carro."
        />

        <div className="grid auto-rows-[180px] grid-cols-2 gap-3 md:auto-rows-[220px] md:grid-cols-4">
          {images.map((image, i) => (
            <button
              key={image.url}
              onClick={() => setIndex(i)}
              className={`reveal reveal-wipe group relative overflow-hidden rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand ${
                mosaic[i % mosaic.length]
              }`}
              style={{ transitionDelay: `${(i % 4) * 120}ms` }}
              aria-label={`Ampliar: ${image.title}`}
            >
              <img
                src={image.url}
                alt={image.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-end justify-between bg-gradient-to-t from-black/80 via-transparent to-transparent p-4 opacity-0 transition-opacity group-hover:opacity-100">
                <span className="text-sm font-medium text-white">{image.title}</span>
                <Expand className="h-4 w-4 text-white" />
              </div>
            </button>
          ))}
        </div>
      </div>

      {index !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 p-4"
          onClick={() => setIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label={images[index].title}
        >
          <button
            onClick={() => setIndex(null)}
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
            aria-label="Fechar"
            autoFocus
          >
            <X className="h-5 w-5" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            className="absolute left-2 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:left-6"
            aria-label="Anterior"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <figure className="max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <img src={images[index].url} alt={images[index].title} className="max-h-[80dvh] w-auto rounded-lg" />
            <figcaption className="mt-3 flex justify-between text-sm text-zinc-400">
              <span>{images[index].title}</span>
              <span>
                {index + 1} / {images.length}
              </span>
            </figcaption>
          </figure>
          <button
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            className="absolute right-2 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:right-6"
            aria-label="Próxima"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;
