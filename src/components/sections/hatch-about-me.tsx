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
  { value: '30', unit: 'ans', label: "d'expérience en restauration" },
  { value: '20+', unit: 'ans', label: 'sur des postes de direction' },
  { value: '3', unit: 'régions', label: 'pilotées simultanément' },
  { value: '100+', unit: 'équipiers', label: 'formés et accompagnés' },
];

export default function HatchAboutMe({
  eyebrow = 'PROFIL',
  title = 'Thierry Vandenabeele',
  paragraphs = [
    `Professionnel de terrain avec près de 30 ans d'expérience dans la restauration, dont plus de 20 ans sur des fonctions de direction, j'accompagne la performance de sites, d'équipes et de centres de profit avec une approche à la fois opérationnelle, humaine et structurée.`,
    `Mon parcours couvre la direction régionale, la gestion multisites, le pilotage de comptes d'exploitation, l'hygiène et la sécurité, la prévention des risques, ainsi que la formation et le développement des collaborateurs.`,
  ],
  expertise = [
    'Direction régionale et opérationnelle',
    'Gestion de restaurants et centres de profit',
    'Performance, approvisionnement et organisation logistique',
    'Management, formation et développement des équipes',
    'Hygiène, sécurité, HACCP, PMS et CSSCT',
    'Résolution de conflits et accompagnement du changement',
  ],
  imageSrc = '/images/about/portrait.webp',
  imageAlt = 'Portrait de Thierry Vandenabeele',
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
              Directeur régional et opérationnel —{' '}
              <span className="text-foreground">expert en restauration multisites</span>
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
                  <div className="text-foreground text-sm font-semibold">Cap 2026</div>
                  <p className="text-muted-foreground mt-1 text-sm leading-[1.7]">
                    Prendre un poste de directeur opérationnel au sein d'une structure ambitieuse,
                    avec un impact direct sur la performance, la qualité d'exécution et la montée en
                    compétences des équipes.
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
            Domaines d'expertise
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
