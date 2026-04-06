'use client';

import { BookOpen, Play, ShieldCheck } from 'lucide-react';
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
      Formations en hygiène alimentaire
      <br className="hidden sm:block" /> pour les équipes de restauration
    </>
  ),
  subtitle = (
    <>
      Saniform aide les restaurants, hôtels, cuisines collectives et métiers de bouche à
      former leurs équipes avec des parcours concrets en HACCP, PMS, hygiène et prévention
      des risques.
    </>
  ),
  primaryCtaHref = '/contact',
  primaryCtaLabel = 'Demander un devis',
}: HatchHeroProps) {
  const [isVideoOpen, setIsVideoOpen] = React.useState(false);

  return (
    <section className={cn('bg-background py-12 md:py-20 lg:py-20', className)}>
      <div className="container max-w-6xl">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_26rem] lg:gap-12">
          <div className="flex flex-col gap-6">
            <div className="bg-muted text-muted-foreground inline-flex w-fit items-center gap-2 rounded-full px-3 py-1 text-sm">
              <span className="bg-primary inline-flex size-2 rounded-full" />
              Centre de formation pour l'hygiène en restauration
            </div>

            <div className="space-y-5">
              <h1 className="font-display text-4xl leading-[1.02] font-medium text-balance sm:text-5xl lg:text-6xl">
                {title}
              </h1>
              <p className="font-text text-muted-foreground max-w-2xl text-base leading-7 sm:text-lg">
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
                  Des formations pensées pour le terrain, les responsables et les contrôles
                  sanitaires.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative mx-auto mt-20 h-[21.5rem] w-[21.5rem] rounded-full bg-primary/12 sm:h-[24rem] sm:w-[24rem] lg:mx-0 lg:mt-0 lg:h-[26rem] lg:w-[26rem]">
              <div className="absolute inset-[0.75rem] overflow-hidden rounded-full bg-primary/10">
                <img
                  src="/images/about/portrait.webp"
                  alt="Formatrice Saniform"
                  className="h-full w-full object-cover object-center"
                />
              </div>

              <div className="absolute -right-4 bottom-8 flex w-[18rem] items-center gap-3 rounded-full bg-background px-4 py-3 shadow-lg ring-1 ring-black/5 sm:-right-6">
                <div className="flex -space-x-3">
                  {AVATARS.map(({ src, fallback }) => (
                    <Avatar
                      key={`${src}-badge`}
                      className="size-10 border-4 border-background shadow-sm"
                    >
                      <AvatarImage src={src} alt="" />
                      <AvatarFallback>{fallback}</AvatarFallback>
                    </Avatar>
                  ))}
                </div>
                <div className="text-foreground text-sm font-medium">
                  Équipes formées partout en France
                </div>
              </div>

              <div className="glass-card absolute right-0 top-0 flex h-24 w-24 rotate-12 items-center justify-center rounded-[2rem] sm:h-28 sm:w-28">
                <BookOpen className="relative z-10 size-10 text-primary sm:size-12" />
              </div>

              <div className="glass-card absolute -left-8 top-1/3 flex h-24 w-24 -rotate-12 items-center justify-center rounded-[2rem] sm:h-28 sm:w-28">
                <ShieldCheck className="relative z-10 size-10 text-primary sm:size-12" />
              </div>
            </div>
          </div>
        </div>

      </div>

      <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
        <DialogContent className="sm:max-w-3xl">
          <DialogHeader>
            <DialogTitle>Présentation Saniform</DialogTitle>
          </DialogHeader>
          <div className="aspect-video overflow-hidden rounded-xl">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Présentation Saniform"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
