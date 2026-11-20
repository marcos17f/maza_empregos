import { Dialog } from "@headlessui/react";
import Autoplay from "embla-carousel-autoplay";
import { ExternalLink, Play, X, Youtube } from "lucide-react";
import Image from "next/image";
import React, { useMemo, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  TESTIMONIAL_VIDEOS,
  type TestimonialVideo,
} from "@/data/mazaOfficial";
import { MAZA_CONTACT } from "@/utils/contact";

export default function ClientTestimonialsSection() {
  const [activeVideo, setActiveVideo] = useState<TestimonialVideo | null>(null);
  const autoplayPlugin = useMemo(
    () => Autoplay({ delay: 5000, stopOnInteraction: true, stopOnMouseEnter: true }),
    [],
  );

  return (
    <section
      id="depoimentos-clientes"
      aria-labelledby="testimonials-title"
      className="relative overflow-hidden rounded-card border border-[#3D1215] bg-[radial-gradient(ellipse_at_top_right,#6E0D13_0%,#1D090B_58%,#100607_100%)] px-5 py-10 text-white shadow-sm sm:px-8 lg:px-10 lg:py-12"
    >
      <div className="relative z-10">
        <div className="mb-14 flex flex-col justify-between gap-4 sm:mb-8 sm:pr-24 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#FCA5A5]">
              <Youtube className="h-3.5 w-3.5 text-[#FF4B4B]" aria-hidden="true" />
              Depoimentos &amp; Vídeos Oficiais
            </span>
            <h2
              id="testimonials-title"
              className="mt-3 font-WorkSans text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-[34px]"
            >
              O que nossos clientes dizem sobre a MaZa
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-200 sm:text-base">
              Assista aos depoimentos reais de empresas parceiras e aos conteúdos oficiais da MaZa
              sobre contratações, carreira e desenvolvimento de equipes.
            </p>
          </div>
        </div>

        <Carousel
          aria-label="Carrossel de depoimentos em vídeo da MaZa Empregos"
          opts={{ align: "start", loop: true, slidesToScroll: 1 }}
          plugins={[autoplayPlugin]}
        >
          <CarouselContent className="-ml-4">
            {TESTIMONIAL_VIDEOS.map((video) => (
              <CarouselItem
                key={video.id}
                className="basis-[88%] pl-4 sm:basis-1/2 lg:basis-1/3"
              >
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/15 bg-white text-[#18181B] shadow-lg transition duration-200 hover:-translate-y-0.5 hover:shadow-xl">
                  <button
                    type="button"
                    onClick={() => setActiveVideo(video)}
                    aria-label={`Assistir vídeo: ${video.title}`}
                    className="relative aspect-video w-full overflow-hidden bg-[#180A0C] text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand"
                  >
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      fill
                      sizes="(min-width: 1024px) 380px, (min-width: 640px) 48vw, 90vw"
                      className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent transition-opacity duration-200 group-hover:from-black/55" />
                    <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-black/75 px-3 py-1.5 text-xs font-bold text-white shadow-md ring-1 ring-white/25 backdrop-blur-sm transition duration-200 group-hover:bg-[#C8161D] group-hover:ring-white/60">
                      <Play className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
                      Assistir
                    </span>
                  </button>

                  <div className="flex flex-1 flex-col p-5">
                    <span
                      className={`w-fit rounded-full px-2.5 py-0.5 text-[11px] font-bold tracking-wide ${
                        video.category === "Depoimento de Empresa"
                          ? "bg-[#FDF2F2] text-[#C8161D]"
                          : "bg-emerald-50 text-[#0B7A5A]"
                      }`}
                    >
                      {video.category}
                    </span>
                    <h3 className="mt-2.5 line-clamp-2 text-base font-bold leading-snug text-[#18181B]">
                      {video.title}
                    </h3>
                    <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-[#475569]">
                      {video.subtitle}
                    </p>
                    <div className="mt-auto flex items-center justify-between gap-2 border-t border-[#F3ECEC] pt-3.5">
                      <button
                        type="button"
                        onClick={() => setActiveVideo(video)}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C8161D] transition hover:text-[#9E1117] hover:underline"
                      >
                        <Play className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
                        Assistir vídeo
                      </button>
                      <a
                        href={video.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-medium text-[#64748b] transition hover:text-[#991016]"
                      >
                        YouTube
                        <ExternalLink className="h-3 w-3" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </article>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious
            aria-label="Depoimentos anteriores"
            className="-top-11 left-auto right-11 h-9 w-9 translate-y-0 border-white/25 bg-white/10 text-white hover:bg-white hover:text-[#991016] sm:-top-14"
          />
          <CarouselNext
            aria-label="Próximos depoimentos"
            className="-top-11 right-0 h-9 w-9 translate-y-0 border-white/25 bg-white/10 text-white hover:bg-white hover:text-[#991016] sm:-top-14"
          />
        </Carousel>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href={MAZA_CONTACT.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#18181B] shadow-sm transition hover:bg-neutral-100"
          >
            <Youtube className="h-4 w-4 text-[#C8161D]" aria-hidden="true" />
            Veja outros depoimentos no YouTube
          </a>
          <a
            href={MAZA_CONTACT.facebookReviews}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/5 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/15"
          >
            Ver +85 avaliações no Facebook
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>

      {/* Modal Player YouTube */}
      <Dialog
        open={Boolean(activeVideo)}
        onClose={() => setActiveVideo(null)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/80 backdrop-blur-xs" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          {activeVideo && (
            <Dialog.Panel className="w-full max-w-4xl overflow-hidden rounded-card bg-[#14090B] text-white shadow-2xl">
              <div className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-3.5">
                <Dialog.Title className="line-clamp-1 text-sm font-bold sm:text-base">
                  {activeVideo.title}
                </Dialog.Title>
                <button
                  type="button"
                  onClick={() => setActiveVideo(null)}
                  aria-label="Fechar vídeo"
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
              <div className="relative aspect-video w-full bg-black">
                <iframe
                  src={activeVideo.embedUrl}
                  title={activeVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full border-0"
                />
              </div>
              <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-3 text-xs text-white/80">
                <span>{activeVideo.subtitle}</span>
                <a
                  href={activeVideo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-bold text-[#FCA5A5] hover:underline"
                >
                  Abrir no YouTube <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </div>
            </Dialog.Panel>
          )}
        </div>
      </Dialog>
    </section>
  );
}
