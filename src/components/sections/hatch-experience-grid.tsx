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
    range: 'Depuis 2015',
    title: 'Certifié Qualiopi',
    description:
      "Synapteo est certifié Qualiopi, garantissant la qualité de nos processus de formation. Cette certification permet la prise en charge de nos parcours via le CPF, les OPCO et les financements publics.",
  },
  {
    range: 'Depuis 2010',
    title: 'Formateurs certifiés et expérimentés',
    description:
      "Tous nos formateurs sont titulaires de certifications reconnues en enseignement des langues (CELTA, DELF, Master FLE…) et bénéficient d'une expérience terrain auprès de publics variés.",
  },
  {
    range: 'Partout en France',
    title: 'Formations en présentiel et à distance',
    description:
      "Nous intervenons dans toute la France — en entreprise, dans nos locaux ou en visioconférence — pour répondre aux besoins des particuliers, des salariés et des équipes.",
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
  heading = 'Nos atouts',
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
