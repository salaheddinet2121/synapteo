'use client';

import { ArrowRight, Check } from 'lucide-react';

import { PrimarySvgIcon } from '@/components/primary-svg-icon';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type Service = {
  slug: string;
  title: string;
  description: string;
  features: string[];
  iconSrc: string;
};

const SERVICES: Service[] = [
  {
    slug: 'web-design-ux',
    title: 'Formation HACCP',
    iconSrc: '/images/services/noun-half-circles-7745954.svg',
    description:
      "Une formation claire et opérationnelle pour maîtriser les principes HACCP, sécuriser les pratiques et répondre aux exigences du secteur.",
    features: [
      'Principes HACCP',
      'Points de contrôle',
      'Bonnes pratiques d’hygiène',
      'Application terrain',
    ],
  },
  {
    slug: 'brand-design',
    title: 'Hygiène et sécurité',
    iconSrc: '/images/services/noun-sparkle-7746005.svg',
    description:
      "Former les équipes aux règles d'hygiène, à la sécurité alimentaire et à la prévention des risques dans un cadre concret et applicable.",
    features: [
      'Protocoles sanitaires',
      'Sécurité alimentaire',
      'Prévention des risques',
      'Sensibilisation des équipes',
    ],
  },
  {
    slug: 'product-design',
    title: 'PMS et traçabilité',
    iconSrc: '/images/services/noun-semicircles-8294628.svg',
    description:
      "Mettre en place des procédures fiables, améliorer la traçabilité et structurer les documents essentiels à une exploitation sécurisée.",
    features: [
      'Plan de maîtrise sanitaire',
      'Suivi documentaire',
      'Traçabilité',
      'Conformité',
    ],
  },
  {
    slug: 'framer-development',
    title: 'Audit et accompagnement',
    iconSrc: '/images/services/noun-star-7745963.svg',
    description:
      "Identifier les écarts, renforcer les pratiques et accompagner durablement les responsables et leurs équipes.",
    features: [
      'Audit terrain',
      'Plan d’action',
      'Accompagnement des managers',
      'Suivi opérationnel',
    ],
  },
];

function ServiceCard({ service }: { service: Service }) {
  return (
    <a
      href={`/services/${service.slug}`}
      className={cn(
        'group flex flex-col rounded-2xl px-2 py-6 text-left outline-none sm:px-4 sm:py-8',
        'hover:bg-muted/50 transition-colors',
        'focus-visible:ring-ring focus-visible:ring-offset-background focus-visible:ring-2 focus-visible:ring-offset-2',
      )}
    >
      <div className="mb-5 flex items-center justify-start">
        <div
          className={cn(
            'inline-flex size-20 shrink-0 items-center justify-center rounded-full',
            'border-border bg-background border p-2 shadow-xs',
            'transition-colors',
          )}
          aria-hidden
        >
          <PrimarySvgIcon src={service.iconSrc} className="size-9 sm:size-10" />
        </div>
      </div>
      <h3 className="font-body text-xl font-semibold tracking-tight">
        {service.title}
      </h3>
      <p className="text-muted-foreground mt-3 text-sm leading-[1.6]">
        {service.description}
      </p>
      <ul className="mt-6 w-full space-y-3">
        {service.features.map((f) => (
          <li
            key={f}
            className="text-muted-foreground flex items-start gap-2.5 text-sm"
          >
            <Check className="text-hatch-cta mt-0.5 size-4 shrink-0" />
            <span className="min-w-0 leading-snug">{f}</span>
          </li>
        ))}
      </ul>
    </a>
  );
}

export default function ServicesHero() {
  return (
    <section className="bg-background relative">
      <div className="section-padding relative container">
        <div className="mx-auto flex w-full flex-col items-start text-start">
          <h1 className="font-display text-3xl leading-[1.1] sm:text-4xl lg:text-5xl">
            Formations et accompagnement
            <br />
            pour les professionnels de la restauration.
          </h1>
          <p className="text-muted-foreground mt-4 max-w-2xl text-base leading-[1.6]">
            Chaque intervention répond à un besoin concret : hygiène,
            sécurité alimentaire, HACCP, PMS, conformité et montée en
            compétence des équipes.
          </p>
          <div className="mt-7 flex w-full max-w-md flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-start">
            <Button
              asChild
              variant="hatch"
              className="h-10 w-full justify-center rounded-full px-5 sm:w-auto sm:min-w-[140px]"
            >
              <a href="/contact">
                Demander un devis <ArrowRight className="ml-1 size-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-10 w-full justify-center rounded-full px-5 sm:w-auto sm:min-w-[140px]"
            >
              <a href="/contact">Nous contacter</a>
            </Button>
          </div>
        </div>
        <div className="mx-auto mt-14 grid w-full items-stretch gap-6 sm:grid-cols-2 lg:mt-16">
          {SERVICES.map((s) => (
            <ServiceCard key={s.title} service={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
