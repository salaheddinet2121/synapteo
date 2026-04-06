'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';

import { HatchSectionHeader } from './hatch-section-header';

type StoryItem = {
  range: string;
  title: string;
  description: string;
};

type HatchMyStoryProps = {
  heading?: string;
  items?: StoryItem[];
};

const DEFAULT_ITEMS: StoryItem[] = [
  {
    range: '1995 - 2005',
    title: 'Premières responsabilités\net montée en expertise',
    description:
      "Débuts en cuisine, en restauration et en gestion opérationnelle, avec une progression rapide vers des fonctions d'encadrement et de responsabilité.",
  },
  {
    range: '2005 - 2017',
    title: 'Direction opérationnelle,\nqualité et multisites',
    description:
      "Pilotage d'établissements, gestion de centres de profit, qualité, audits, plans d'action, ouvertures et accompagnement des équipes sur le terrain.",
  },
  {
    range: '2017 - 2025',
    title: 'Management régional,\nformation et performance',
    description:
      "Direction de restaurants multisites, management, hygiène, sécurité, CSSCT, documents d'évaluation des risques et développement des compétences.",
  },
  {
    range: '2026',
    title: 'Nouvel objectif\nà impact',
    description:
      "Mettre cette expérience au service d'un poste de directeur opérationnel au sein d'une structure ambitieuse et exigeante.",
  },
];

function StoryCard({ item }: { item: StoryItem }) {
  return (
    <article className="bg-muted/30 h-full rounded-[18px] p-6 sm:p-7">
      <div className="text-[10px] font-semibold tracking-[0.28em] text-[var(--hatch-cta)]">
        {item.range}
      </div>
      <h3 className="font-body mt-4 text-xl font-semibold tracking-tight whitespace-pre-line">
        {item.title}
      </h3>
      <p className="text-muted-foreground mt-3 text-sm leading-[1.7]">
        {item.description}
      </p>
    </article>
  );
}

export default function HatchMyStory({
  heading = 'Parcours',
  items = DEFAULT_ITEMS,
}: HatchMyStoryProps) {
  const list = Array.isArray(items) ? items : [];

  if (list.length === 0) return null;

  return (
    <section className="bg-background">
      <div className="section-padding container">
        <HatchSectionHeader title={heading} />
        <div className="mt-10 sm:mt-12">
          <Carousel opts={{ align: 'start', loop: false }} className="min-w-0">
            <CarouselContent>
              {list.map((item, idx) => (
                <CarouselItem
                  key={`${item.range}-${idx}`}
                  className={cn(
                    'basis-[88%]',
                    'sm:basis-[70%]',
                    'md:basis-[54%]',
                    'lg:basis-[44%]',
                    'xl:basis-[38%]',
                    '2xl:basis-[34%]',
                  )}
                >
                  <StoryCard item={item} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
