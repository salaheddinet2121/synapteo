'use client';

import { ClipboardList, MessageCircleMore, ShieldCheck } from 'lucide-react';
import * as React from 'react';

import { Highlighter } from '@/components/ui/highlighter';

const steps = [
  {
    number: '01',
    title: 'Échange et cadrage',
    description:
      'Nous clarifions vos obligations, le niveau attendu et le format le plus pertinent pour votre établissement.',
    detail: 'Analyse du besoin, du public et des contraintes de planning.',
    Icon: MessageCircleMore,
  },
  {
    number: '02',
    title: 'Formation adaptée',
    description:
      'Le contenu est ajusté à votre activité, à votre organisation et aux situations réellement rencontrées sur le terrain.',
    detail: 'Supports utiles, cas concrets et pédagogie accessible.',
    Icon: ClipboardList,
  },
  {
    number: '03',
    title: 'Application immédiate',
    description:
      'Les équipes repartent avec des repères simples, des gestes maîtrisés et des méthodes applicables dès le retour sur site.',
    detail: 'Objectif : rendre la formation utile, claire et durable.',
    Icon: ShieldCheck,
  },
];

export default function HatchHowItWorks() {
  const sectionRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const progress = section.querySelector<HTMLElement>('[data-progress]');
    const line = section.querySelector<HTMLElement>('[data-line]');
    const stepEls = Array.from(section.querySelectorAll<HTMLElement>('[data-step]'));

    if (!progress || !line || stepEls.length === 0) return;

    const update = () => {
      const viewportAnchor = window.innerHeight * 0.58;
      const firstMarker = stepEls[0]?.querySelector<HTMLElement>('[data-marker]');
      const lastMarker = stepEls[stepEls.length - 1]?.querySelector<HTMLElement>('[data-marker]');

      if (!firstMarker || !lastMarker) return;

      const firstRect = firstMarker.getBoundingClientRect();
      const lastRect = lastMarker.getBoundingClientRect();
      const start = firstRect.top + firstRect.height / 2;
      const end = lastRect.top + lastRect.height / 2;
      const distance = Math.max(end - start, 1);
      const progressRatio = Math.max(0, Math.min(1, (viewportAnchor - start) / distance));

      const sectionRect = section.getBoundingClientRect();
      const lineTop = start - sectionRect.top;
      const lineHeight = distance;

      line.style.top = `${lineTop}px`;
      line.style.height = `${lineHeight}px`;
      progress.style.top = `${lineTop}px`;
      progress.style.height = `${lineHeight}px`;
      progress.style.transform = `scaleY(${progressRatio})`;

      stepEls.forEach((stepEl) => {
        const marker = stepEl.querySelector<HTMLElement>('[data-marker]');
        const card = stepEl.querySelector<HTMLElement>('.how-it-works__card');
        const markerFill = stepEl.querySelector<HTMLElement>('.how-it-works__marker-fill');
        const markerNumber = stepEl.querySelector<HTMLElement>('.how-it-works__marker-number');

        if (!marker || !card || !markerFill || !markerNumber) return;

        const rect = marker.getBoundingClientRect();
        const markerCenter = rect.top + rect.height / 2;
        const isActive = markerCenter <= viewportAnchor;

        stepEl.classList.toggle('is-active', isActive);
        card.style.transform = isActive ? 'translateY(0px)' : 'translateY(10px)';
        card.style.opacity = isActive ? '1' : '0.55';
        card.style.boxShadow = isActive
          ? '0 4px 24px rgba(0,0,0,0.07), 0 1px 3px rgba(0,0,0,0.04)'
          : '0 1px 4px rgba(0,0,0,0.04)';
        markerFill.style.transform = isActive ? 'scale(1)' : 'scale(0)';
        markerNumber.style.color = isActive ? '#ffffff' : 'var(--color-primary)';
      });
    };

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        update();
        ticking = false;
      });
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <section className="bg-white">
      <div className="container py-20 sm:py-24">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="bg-muted text-muted-foreground inline-flex w-fit items-center gap-2 rounded-full px-3 py-1 text-sm">
            <span className="bg-primary inline-flex size-2 rounded-full" />
            Comment ça se passe ?
          </div>
          <h2 className="font-display mt-5 text-3xl font-semibold leading-[1.08] sm:text-4xl lg:text-5xl">
            <Highlighter action="underline" color="#FF9800">
              Un deroule net,
            </Highlighter>{' '}
            rassurant et utile pour vos equipes.
          </h2>
          <p className="text-muted-foreground mt-4 text-base leading-7 sm:text-lg">
            Nous allons a l&apos;essentiel : comprendre votre besoin, former avec clarte
            et rendre chaque intervention immediatement applicable.
          </p>
        </div>

        {/* Content grid */}
        <div className="mt-16 grid gap-10 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:gap-20">

          {/* Left: sticky image */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="overflow-hidden rounded-[28px] border border-border/60 shadow-sm">
              <img
                src="/images/about/portrait.webp"
                alt="Formatrice Saniform"
                className="h-95 w-full object-cover object-center sm:h-105"
              />
            </div>
            {/* Small trust badge below image */}
            <div className="mt-4 flex items-center gap-2 rounded-2xl border border-border/60 bg-white px-4 py-3 shadow-xs">
              <span className="flex size-2 rounded-full bg-green-500" />
              <p className="text-sm font-medium text-foreground/70">
                Formations certifiées — applicables dès J+1
              </p>
            </div>
          </div>

          {/* Right: steps */}
          <div ref={sectionRef} className="how-it-works relative">
            {/* Timeline track */}
            <div
              className="absolute left-4.75 w-0.5 rounded-full bg-border sm:left-5.75"
              data-line
            />
            <div
              className="absolute left-4.75 w-0.5 origin-top rounded-full bg-primary sm:left-5.75"
              data-progress
            />

            <div className="space-y-0">
              {steps.map((step, index) => {
                const Icon = step.Icon;

                return (
                  <div
                    key={step.number}
                    className={`how-it-works__step relative pl-16 sm:pl-20 ${index === steps.length - 1 ? '' : 'pb-10 sm:pb-12'
                      }`}
                    data-step
                  >
                    {/* Number badge */}
                    <div className="absolute left-0 top-0 flex w-10 justify-center sm:w-12">
                      <div
                        className="relative flex size-10 items-center justify-center rounded-full border-2 border-primary/20 bg-white shadow-sm sm:size-12"
                        data-marker
                      >
                        <span className="how-it-works__marker-fill absolute inset-0 rounded-full bg-primary transition-transform duration-300" />
                        <span className="how-it-works__marker-number relative z-10 text-sm font-bold text-primary transition-all duration-300 sm:text-base">
                          {step.number}
                        </span>
                      </div>
                    </div>

                    {/* Card */}
                    <article className="how-it-works__card rounded-2xl border border-border/70 bg-white p-6 transition-all duration-300 sm:p-7">
                      {/* Icon */}
                      <div className="inline-flex size-12 items-center justify-center rounded-xl bg-[FF9800]-50 sm:size-14">
                        <Icon className="size-5 text-[#FF9800] sm:size-6" />
                      </div>

                      <div className="mt-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[FF9800]">
                          Étape {step.number}
                        </p>
                        <h3 className="mt-2 text-xl font-semibold text-foreground sm:text-2xl">
                          {step.title}
                        </h3>
                      </div>

                      <p className="text-muted-foreground mt-3 text-base leading-7">
                        {step.description}
                      </p>

                      <div className="mt-4 flex items-start gap-2.5 rounded-xl bg-muted/60 px-4 py-3">
                        <span className="mt-1.5 flex size-1.5 shrink-0 rounded-full bg-red-400" />
                        <p className="text-sm leading-relaxed text-foreground/70">{step.detail}</p>
                      </div>
                    </article>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
