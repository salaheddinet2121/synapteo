'use client';

import * as React from 'react';

import { cn } from '@/lib/utils';

type HatchAboutMeProps = {
  eyebrow?: string;
  title?: string;
  paragraphs?: string[];
  highlights?: Array<{ value: string; label: string }>;
  expertise?: string[];
  imageSrc?: string;
  imageAlt?: string;
};

const MACROS = [
  { value: '10+', unit: 'ans', label: "d'expertise en formation linguistique" },
  { value: '8', unit: 'langues', label: 'enseignées par nos formateurs' },
  { value: '500+', unit: 'apprenants', label: 'formés chaque année' },
  { value: '95 %', unit: '', label: 'de satisfaction apprenant' },
];

export default function HatchAboutMe({
  eyebrow = 'QUI SOMMES-NOUS',
  title = 'Synapteo',
  paragraphs = [
    `Synapteo est un centre de formation en langues étrangères certifié Qualiopi, créé pour accompagner aussi bien les particuliers que les professionnels dans leur apprentissage linguistique. Notre équipe de formateurs certifiés intervient en français et à l'international, en présentiel comme à distance.`,
    `Notre approche repose sur la pédagogie active, l'adaptation permanente au niveau et aux objectifs de chaque apprenant, et une progression mesurée et transparente. Nous croyons qu'apprendre une langue, c'est s'ouvrir à de nouvelles opportunités professionnelles et culturelles.`,
  ],
  expertise = [
    'Anglais professionnel et général',
    'Espagnol des affaires et courant',
    'Allemand pour les entreprises',
    'Français langue étrangère (FLE)',
    'Préparation aux certifications (TOEIC, DELF, DALF…)',
    'Formation en ligne, présentiel et mode hybride',
  ],
  imageSrc = '/images/about/portrait.webp',
  imageAlt = 'Formatrice Synapteo',
}: HatchAboutMeProps) {
  return (
    <section className="bg-background">
      <div className="section-padding container">

        {/* ── Hero row: text left, portrait right ── */}
        <div className="mx-auto grid w-full items-start gap-12 lg:grid-cols-[1fr_300px] lg:gap-16 xl:gap-20">

          {/* Left column */}
          <div className="flex flex-col">
            <div className="text-[10px] font-semibold tracking-[0.28em] text-[var(--hatch-cta)]">
              {eyebrow}
            </div>

            <h1 className="font-display mt-3 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="text-muted-foreground mt-2 text-base font-medium sm:text-lg">
              Centre de formation en langues étrangères —{' '}
              <span className="text-foreground">certifié Qualiopi, éligible CPF</span>
            </p>

            <div className="border-border mt-8 border-t" />

            {/* Bio paragraphs */}
            <div className="mt-8 space-y-4">
              {paragraphs.map((p, i) => (
                <p key={i} className="text-muted-foreground text-base leading-[1.85]">
                  {p}
                </p>
              ))}
            </div>

            {/* Cap 2026 card */}
            <div className="bg-card border-border mt-8 rounded-2xl border p-5">
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full">
                  <svg
                    className="text-primary size-4"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                  >
                    <circle cx="8" cy="8" r="3" fill="currentColor" />
                    <circle
                      cx="8"
                      cy="8"
                      r="6.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-foreground text-sm font-semibold">Notre engagement</div>
                  <p className="text-muted-foreground mt-1 text-sm leading-[1.7]">
                    Offrir à chaque apprenant une expérience de formation de qualité, avec un suivi
                    individualisé, des formateurs certifiés et des résultats mesurables à chaque
                    étape du parcours.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right column — portrait */}
          <div className="order-first flex justify-center lg:order-last lg:justify-end">
            <div
              className={cn(
                'relative w-full max-w-70 overflow-hidden rounded-[22px] shadow-md',
                'aspect-3/4 lg:aspect-auto lg:min-h-105',
              )}
            >
              <img
                src={imageSrc}
                alt={imageAlt}
                className="absolute inset-0 h-full w-full object-cover"
                sizes="(min-width:1024px) 300px, 280px"
                loading="lazy"
                decoding="async"
              />
              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/25 via-transparent to-transparent" />
            </div>
          </div>
        </div>

        {/* ── Macro stats row ── */}
        <div className="mt-14 lg:mt-16">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {MACROS.map((m) => (
              <div
                key={m.value + m.unit}
                className="bg-card border-border flex flex-col rounded-2xl border p-5"
              >
                <div className="flex items-end gap-1.5">
                  <span className="text-foreground text-3xl font-bold leading-none tracking-tight sm:text-4xl">
                    {m.value}
                  </span>
                  <span className="text-muted-foreground mb-0.5 text-sm font-medium leading-tight">
                    {m.unit}
                  </span>
                </div>
                <div className="text-muted-foreground mt-2 text-sm leading-snug">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Expertise tags ── */}
        <div className="mt-12">
          <div className="text-foreground text-xs font-semibold tracking-[0.2em] uppercase">
            Langues et compétences proposées
          </div>
          <div className="mt-4 flex flex-wrap gap-2.5">
            {expertise.map((item) => (
              <span
                key={item}
                className="bg-muted text-secondary-foreground rounded-full px-4 py-2 text-sm leading-none"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
