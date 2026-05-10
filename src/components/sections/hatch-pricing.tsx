'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import * as React from 'react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

import { HatchSectionHeader } from './hatch-section-header';

type PricingCard = {
  iconSrc: string;
  iconAlt: string;
  badge?: string;
  title: string;
  lead: string;
  subLead: string;
  price: string;
  priceSuffix: string;
  priceMeta: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  featured?: boolean;
};

const CARDS: PricingCard[] = [
  {
    iconSrc: '/icons/pricing/project.svg',
    iconAlt: 'Icône cours individuel',
    badge: 'Le plus demandé',
    title: 'Cours individuel',
    lead: "Un accompagnement personnalisé avec un formateur dédié, entièrement adapté à votre niveau, vos objectifs et votre emploi du temps.",
    subLead:
      "Idéal pour progresser rapidement, préparer un entretien, un départ à l'étranger ou une certification officielle.",
    price: 'Sur devis',
    priceSuffix: '',
    priceMeta: '',
    features: [
      'Test de positionnement inclus',
      'Programme 100 % personnalisé',
      'Formateur certifié et dédié',
      'Présentiel, visioconférence ou hybride',
      'Éligible CPF et OPCO',
    ],
    ctaLabel: 'Demander un devis',
    ctaHref: '/contact',
    featured: false,
  },
  {
    iconSrc: '/icons/pricing/subscription.svg',
    iconAlt: 'Icône formation en groupe',
    title: 'Formation en groupe',
    lead: 'Des cours collectifs pour apprendre en interagissant, à un tarif accessible et dans une dynamique de groupe motivante.',
    subLead:
      'Adapté aux entreprises, associations, équipes professionnelles et publics en reconversion.',
    price: 'Sur devis',
    priceSuffix: '',
    priceMeta: '',
    features: [
      'Groupes de 4 à 12 participants',
      'Contenus thématiques ou généraux',
      'Sessions régulières et structurées',
      'Supports pédagogiques fournis',
      'Financement entreprise et OPCO accepté',
    ],
    ctaLabel: 'Nous consulter',
    ctaHref: '/contact',
    featured: true,
  },
];

function PricingFeature({ children }: { children: React.ReactNode }) {
  return (
    <li className="text-muted-foreground flex gap-2 text-xs leading-[1.5]">
      <span className="mt-[2px] inline-flex size-4 items-center justify-center text-[var(--hatch-cta)]">
        <Check className="size-4" />
      </span>
      <span>{children}</span>
    </li>
  );
}

const cardEase: [number, number, number, number] = [0.22, 0.61, 0.36, 1];

function PricingCardView({
  card,
  index = 0,
}: {
  card: PricingCard;
  index?: number;
}) {
  const isFeatured = !!card.featured;

  return (
    <motion.article
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.55,
        delay: index * 0.1,
        ease: cardEase,
      }}
      className={cn(
        'bg-muted bg-pricing-card relative flex min-h-[480px] flex-col rounded-2xl px-7 py-7 sm:px-8 sm:py-8',
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <img
            src={card.iconSrc}
            alt={card.iconAlt}
            width={40}
            height={40}
            loading="lazy"
            decoding="async"
          />
        </div>
        {card.badge ? (
          <Badge variant="muted" className="font-medium">
            {card.badge}
          </Badge>
        ) : null}
      </div>

      <h3 className="mt-6 text-xl leading-[1.25] font-semibold">{card.title}</h3>

      <p className="text-muted-foreground mt-2 text-xs leading-[1.6]">
        {card.lead}
      </p>

      <p className="text-muted-foreground mt-4 text-xs leading-[1.6]">
        {card.subLead}
      </p>

      <div className="mt-7 flex items-end justify-between gap-6">
        <div className="flex items-end gap-2">
          <div className="font-display text-3xl tracking-[-0.02em]">
            {card.price}
          </div>
          {card.priceSuffix ? (
            <div className="text-muted-foreground pb-1 text-xs">
              {card.priceSuffix}
            </div>
          ) : null}
        </div>

        {card.priceMeta ? (
          <div className="text-muted-foreground pb-1 text-xs">
            {card.priceMeta}
          </div>
        ) : null}
      </div>

      <ul className="mt-7 flex-1 space-y-3">
        {card.features.map((f) => (
          <PricingFeature key={f}>{f}</PricingFeature>
        ))}
      </ul>

      <div className="mt-auto w-full pt-8">
        {isFeatured ? (
          <Button asChild variant="hatch" className="h-10 w-full rounded-full">
            <a href={card.ctaHref}>
              {card.ctaLabel} <ArrowRight className="ml-1 size-4" />
            </a>
          </Button>
        ) : (
          <Button asChild variant="outline" className="h-10 w-full rounded-full">
            <a href={card.ctaHref}>{card.ctaLabel}</a>
          </Button>
        )}
      </div>
    </motion.article>
  );
}

type HatchPricingProps = {
  /** Hide section title + description (e.g. minimal homepage). */
  hideHeader?: boolean;
};

export default function HatchPricing({ hideHeader = false }: HatchPricingProps) {
  return (
    <section className="bg-background">
      <div className="section-padding container">
        {hideHeader ? null : (
          <HatchSectionHeader
            title="Nos formules de formation"
            description="Des formats adaptés à votre situation, votre budget et vos objectifs linguistiques."
            descriptionClassName="text-end"
          />
        )}
        <div
          className={cn(
            'mx-auto grid w-full gap-6 lg:grid-cols-2',
            !hideHeader && 'section-gap',
          )}
        >
          {CARDS.map((c, i) => (
            <PricingCardView key={c.title} card={c} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
