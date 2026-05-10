'use client';

import { Play } from 'lucide-react';
import * as React from 'react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';

type HatchHeroProps = {
  className?: string;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  primaryCtaHref?: string;
  primaryCtaLabel?: string;
  secondaryCtaHref?: string;
  secondaryCtaLabel?: string;
};

const AVATARS = [
  { src: '/images/avatars/avatar-1.webp', fallback: 'SF' },
  { src: '/images/avatars/avatar-2.webp', fallback: 'HC' },
  { src: '/images/avatars/avatar-3.webp', fallback: 'QH' },
];

export default function HatchHero({
  className,
  title = (
    <>
      Apprenez une langue,
      <br className="hidden sm:block" /> ouvrez de nouvelles portes
    </>
  ),
  subtitle = (
    <>
      Synapteo est un centre de formation en langues étrangères certifié Qualiopi. Cours
      d'anglais, d'espagnol, d'allemand, de FLE et plus — en présentiel, à distance ou
      en entreprise, éligibles CPF et OPCO.
    </>
  ),
  primaryCtaHref = '/contact',
  primaryCtaLabel = 'Demander un devis',
}: HatchHeroProps) {
  const [isVideoOpen, setIsVideoOpen] = React.useState(false);

  return (
    <section
      className={cn(
        'bg-background py-12 md:py-20 lg:py-20',
        className,
      )}
    >
      <div className="container max-w-[82rem]">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(34rem,1fr)] lg:gap-10 xl:grid-cols-[minmax(0,42rem)_minmax(38rem,1fr)]">
          <div className="flex max-w-[43rem] flex-col gap-6">
            <div className="bg-muted text-muted-foreground inline-flex w-fit items-center gap-2 rounded-full px-3 py-1 text-sm">
              <span className="bg-primary inline-flex size-2 rounded-full" />
              Centre de formation en langues — certifié Qualiopi
            </div>

            <div className="space-y-5">
              <h1 className="font-display text-4xl leading-[1.04] font-medium text-balance sm:text-5xl lg:text-[3.35rem] xl:text-[3.65rem]">
                {title}
              </h1>
              <p className="font-text text-muted-foreground max-w-[40rem] text-base leading-7 sm:text-lg">
                {subtitle}
              </p>
            </div>

            <div className="relative z-10 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <Button asChild variant="hatch" className="w-full sm:w-auto">
                <a href={primaryCtaHref}>{primaryCtaLabel}</a>
              </Button>

              <Button
                variant="ghost"
                className="group w-full justify-start gap-3 px-0 hover:bg-transparent sm:w-auto"
                onClick={() => setIsVideoOpen(true)}
              >
                <span className="bg-primary flex size-10 shrink-0 rounded-full transition-transform group-hover:scale-105">
                  <Play className="m-auto size-4 fill-white text-white" />
                </span>
                <span className="text-sm font-medium">Voir la présentation</span>
              </Button>
            </div>

            <div className="flex items-start">
              <div className="bg-muted flex items-center gap-3 rounded-full px-2 py-2 pr-5">
                <div className="flex -space-x-3">
                  {AVATARS.map(({ src, fallback }, i) => (
                    <Avatar key={src} className="size-11 border-4 border-background shadow-sm">
                      <AvatarImage src={src} alt="" loading={i === 0 ? 'eager' : 'lazy'} />
                      <AvatarFallback>{fallback}</AvatarFallback>
                    </Avatar>
                  ))}
                </div>
                <p className="text-foreground text-sm leading-snug font-medium">
                  Des apprenants satisfaits partout en France, en présentiel et à distance.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <img
              src="/images/layout/hero_right.webp"
              alt="Formation linguistique Synapteo"
              className="hidden h-auto w-full max-w-[36rem] object-contain sm:block lg:max-w-[42rem] xl:max-w-[46rem]"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </div>

      <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
        <DialogContent className="sm:max-w-3xl">
          <DialogHeader>
            <DialogTitle>Présentation Synapteo</DialogTitle>
          </DialogHeader>
          <div className="aspect-video overflow-hidden rounded-xl">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Présentation Synapteo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
