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
    iconAlt: 'Icône formation',
    badge: 'Le plus demandé',
    title: 'Formation ponctuelle',
    lead: "Une intervention ciblée pour répondre à un besoin précis en hygiène, HACCP ou sécurité alimentaire.",
    subLead:
      "Idéale pour une mise à niveau, une ouverture, un audit préparatoire ou une remise en conformité.",
    price: 'Sur devis',
    priceSuffix: '',
    priceMeta: '',
    features: [
      'Analyse du besoin et cadrage',
      'Contenu adapté à votre activité',
      'Supports pédagogiques inclus',
      'Sensibilisation des équipes',
      'Recommandations opérationnelles',
    ],
    ctaLabel: 'Demander un devis',
    ctaHref: '/contact',
    featured: false,
  },
  {
    iconSrc: '/icons/pricing/subscription.svg',
    iconAlt: 'Icône accompagnement',
    title: 'Accompagnement régulier',
    lead: 'Un suivi dans la durée pour maintenir les standards, former les équipes et sécuriser les pratiques.',
    subLead:
      'Adapté aux groupes, réseaux, établissements multisites et structures en évolution.',
    price: 'Sur devis',
    priceSuffix: '',
    priceMeta: '',
    features: [
      'Plan de formation récurrent',
      'Suivi des procédures et bonnes pratiques',
      'Appui aux responsables et managers',
      'Prévention des risques et conformité',
      'Interventions planifiées selon vos besoins',
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
            title="Nos formats d'intervention"
            description="Des prestations ajustées à votre structure, à vos équipes et à vos enjeux terrain."
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
