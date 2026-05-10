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
    range: 'Nos débuts',
    title: "Une vision claire\nde l'apprentissage",
    description:
      "Synapteo est né d'une conviction simple : apprendre une langue doit être accessible, efficace et adapté à la réalité de chaque apprenant. Nous avons construit notre méthode autour de cette idée.",
  },
  {
    range: 'Notre développement',
    title: 'Des formateurs\ncertifiés et engagés',
    description:
      "Nous avons recruté des formateurs titulaires de certifications reconnues (CELTA, Master FLE, etc.) et passionnés par la transmission. Chaque formateur suit une formation continue pour rester au meilleur niveau.",
  },
  {
    range: "Aujourd'hui",
    title: 'Un centre certifié\nQualiopi',
    description:
      "Synapteo est aujourd'hui certifié Qualiopi, ce qui garantit la qualité de nos processus pédagogiques et permet la prise en charge de nos formations via le CPF, les OPCO et les financements publics.",
  },
  {
    range: 'Demain',
    title: 'Toujours plus proche\nde nos apprenants',
    description:
      "Nous développons de nouveaux formats hybrides, des outils numériques pédagogiques et des partenariats entreprises pour rendre nos formations encore plus accessibles et impactantes.",
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
  heading = 'Notre histoire',
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
