'use client';

import * as React from 'react';

import { cn } from '@/lib/utils';

import { HatchSectionHeader } from './hatch-section-header';

type ExperienceItem = {
  range: string;
  title: string;
  description: string;
};

type HatchExperienceGridProps = {
  heading?: string;
  items?: ExperienceItem[];
};

const DEFAULT_ITEMS: ExperienceItem[] = [
  {
    range: '2023 – 2025',
    title: 'Directeur régional',
    description:
      "Direction régionale chez Languedoc Restauration, formation en hygiène et sécurité, gestion des risques, management et compte d'exploitation.",
  },
  {
    range: '2017 – 2023',
    title: 'Directeur de restaurant multisites',
    description:
      "Pilotage de plusieurs restaurants du groupe Courtepaille, animation des équipes, performance, expérience client, hygiène et audits CSSCT.",
  },
  {
    range: '2005 – 2017',
    title: 'Direction opérationnelle et qualité',
    description:
      "Responsabilités en qualité, audit, plan d'action, formation, gestion d'établissements, franchise et ouverture de sites dans différents groupes.",
  },
];

function ExperienceCard({
  item,
  spanFull = false,
}: {
  item: ExperienceItem;
  spanFull?: boolean;
}) {
  return (
    <article
      className={cn(
        'group flex flex-col rounded-2xl px-2 py-6 text-left sm:px-4 sm:py-8',
        'hover:bg-muted/50 transition-colors',
        spanFull && 'lg:col-span-2',
      )}
    >
      <div className="text-hatch-cta text-[10px] font-semibold tracking-[0.28em]">
        {item.range}
      </div>

      <h3 className="font-body mt-4 text-xl font-semibold tracking-tight">
        {item.title}
      </h3>

      <p className="text-muted-foreground mt-3 text-sm leading-[1.6]">
        {item.description}
      </p>
    </article>
  );
}

export default function HatchExperienceGrid({
  heading = 'Expérience',
  items = DEFAULT_ITEMS,
}: HatchExperienceGridProps) {
  return (
    <section className="bg-background relative isolate overflow-hidden">
      <div className="section-padding relative container">
        <HatchSectionHeader title={heading} />
        <div className="mx-auto mt-14 w-full lg:mt-16">
          <div className="grid w-full items-stretch gap-6 sm:grid-cols-2">
            {items.map((item, i) => (
              <ExperienceCard
                key={`${item.range}-${item.title}`}
                item={item}
                spanFull={i === 2}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
