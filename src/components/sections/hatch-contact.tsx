'use client';

import { Mail, MapPin, Phone } from 'lucide-react';
import * as React from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

type ContactSelectOption = {
  label: string;
  value: string;
};

type HatchContactProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  formTitle?: string;
  submitLabel?: string;
  subjectPrefix?: string;
  detailsLabel?: string;
  detailsPlaceholder?: string;

  phoneLabel?: string;
  phoneHref?: string;

  emailLabel?: string;
  emailHref?: string;

  /** Street / city lines; use \n for a second line */
  address?: string;
  /** If set, address is wrapped in a link (e.g. Google Maps). */
  addressHref?: string;
  requestTypeLabel?: string;
  requestTypePlaceholder?: string;
  requestTypeOptions?: ContactSelectOption[];
};

const AVATARS = [
  '/images/avatars/avatar-1.webp',
  '/images/avatars/avatar-2.webp',
  '/images/avatars/avatar-3.webp',
  '/images/avatars/avatar-4.webp',
];

function FieldLabel({
  children,
  required,
}: {
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <div className="text-foreground mb-2 flex items-center gap-2 text-xs font-medium">
      <span>{children}</span>
      {required ? <span className="text-destructive">*</span> : null}
    </div>
  );
}

export default function HatchContact({
  eyebrow = 'CONTACT',
  title = 'Parlons de votre projet linguistique',
  description = "Vous souhaitez apprendre une langue, former vos équipes ou préparer une certification ? Contactez-nous et nous construirons un parcours adapté à votre situation.",
  formTitle = 'Envoyer un message',
  submitLabel = 'Envoyer',
  subjectPrefix = 'Demande de contact',
  detailsLabel = 'Décrivez votre besoin',
  detailsPlaceholder = 'Langue souhaitée, niveau actuel, objectifs, nombre de participants, format préféré...',

  phoneLabel = '06 14 51 11 92',
  phoneHref = 'tel:+33614511192',

  emailLabel = 'bonjour@synapteo.fr',
  emailHref = 'mailto:bonjour@synapteo.fr',

  address = '438 avenue de Montpellier\n34970 Lattes',
  addressHref,
  requestTypeLabel,
  requestTypePlaceholder = 'Sélectionner un motif',
  requestTypeOptions,
}: HatchContactProps) {
  const [form, setForm] = React.useState({
    name: '',
    email: '',
    company: '',
    requestType: '',
    details: '',
  });

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (requestTypeOptions?.length && !form.requestType) {
      return;
    }

    const subjectParts = [subjectPrefix];
    if (form.requestType) {
      const label =
        requestTypeOptions?.find((option) => option.value === form.requestType)?.label ??
        form.requestType;
      subjectParts.push(label);
    }
    if (form.company) {
      subjectParts.push(form.company);
    }

    const lines = [
      `Nom complet : ${form.name || '-'}`,
      `Email : ${form.email || '-'}`,
      `Établissement : ${form.company || '-'}`,
    ];

    if (form.requestType) {
      const label =
        requestTypeOptions?.find((option) => option.value === form.requestType)?.label ??
        form.requestType;
      lines.push(`${requestTypeLabel ?? 'Motif'} : ${label}`);
    }

    lines.push('', form.details || '-');

    window.location.href = `${emailHref}?subject=${encodeURIComponent(
      subjectParts.join(' - ')
    )}&body=${encodeURIComponent(lines.join('\n'))}`;
  }

  return (
    <section className="bg-background">
      <div className="section-padding container">
        <div className="mx-auto w-full">
          <div className="text-[10px] font-semibold tracking-[0.28em] text-[var(--hatch-cta)]">
            {eyebrow}
          </div>

          <h1 className="font-display mt-3 text-3xl leading-[1.1] sm:text-4xl">
            {title}
          </h1>

          <p className="text-muted-foreground mt-4 text-sm leading-[1.7] sm:text-base">
            {description}
          </p>

          <div className="mt-8 flex max-w-full">
            <div className="bg-muted text-muted-foreground flex max-w-full flex-wrap items-center gap-3 rounded-full px-3 py-2 text-sm sm:px-4">
              <div className="flex shrink-0 -space-x-2">
                {AVATARS.map((src, i) => (
                  <div
                    key={src}
                    className="bg-muted relative h-7 w-7 overflow-hidden rounded-full"
                  >
                    <img
                      src={src}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover"
                      sizes="28px"
                      loading={i < 2 ? 'eager' : 'lazy'}
                      decoding="async"
                    />
                  </div>
                ))}
              </div>
              <span>Des formations pensées pour les particuliers, les salariés et les entreprises</span>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-16 w-full lg:mt-20">
          <div className="grid gap-10 lg:grid-cols-3 lg:items-start lg:gap-12">
            <aside className="flex flex-col gap-6 lg:col-span-1">
              <a
                href={phoneHref}
                className="font-body text-muted-foreground hover:text-foreground flex items-start gap-3 py-0.5 text-sm transition-colors sm:text-base"
              >
                <Phone className="text-primary mt-0.5 size-4 shrink-0" />
                <span className="min-w-0">{phoneLabel}</span>
              </a>

              <a
                href={emailHref}
                className="font-body text-muted-foreground hover:text-foreground flex items-start gap-3 py-0.5 text-sm transition-colors sm:text-base"
              >
                <Mail className="text-primary mt-0.5 size-4 shrink-0" />
                <span className="min-w-0 break-all">{emailLabel}</span>
              </a>

              {address ? (
                addressHref ? (
                  <a
                    href={addressHref}
                    target="_blank"
                    rel="noreferrer"
                    className="font-body text-muted-foreground hover:text-foreground flex items-start gap-3 py-0.5 text-sm transition-colors sm:text-base"
                  >
                    <MapPin className="text-primary mt-0.5 size-4 shrink-0" />
                    <span className="whitespace-pre-line">{address}</span>
                  </a>
                ) : (
                  <div className="font-body text-muted-foreground flex items-start gap-3 py-0.5 text-sm sm:text-base">
                    <MapPin className="text-primary mt-0.5 size-4 shrink-0" />
                    <span className="whitespace-pre-line">{address}</span>
                  </div>
                )
              ) : null}
            </aside>

            <div className="lg:col-span-2">
              <div className="bg-muted rounded-[22px] p-6 sm:p-7">
                <div className="mb-5">
                  <div className="text-foreground font-display text-2xl">
                    {formTitle}
                  </div>
                </div>

                <form onSubmit={onSubmit} className="space-y-4">
                  <div>
                    <FieldLabel required>Nom complet</FieldLabel>
                    <Input
                      value={form.name}
                      onChange={(e) => update('name', e.target.value)}
                      placeholder="Votre nom"
                      className="dark:bg-card h-10 rounded-[12px] bg-white"
                    />
                  </div>

                  <div>
                    <FieldLabel required>Email</FieldLabel>
                    <Input
                      value={form.email}
                      onChange={(e) => update('email', e.target.value)}
                      placeholder="nom@entreprise.fr"
                      type="email"
                      className="dark:bg-card h-10 rounded-[12px] bg-white"
                    />
                  </div>

                  <div>
                    <FieldLabel>Établissement (optionnel)</FieldLabel>
                    <Input
                      value={form.company}
                      onChange={(e) => update('company', e.target.value)}
                      placeholder="Nom du restaurant ou de l'entreprise"
                      className="dark:bg-card h-10 rounded-[12px] bg-white"
                    />
                  </div>

                  {requestTypeOptions?.length ? (
                    <div>
                      <FieldLabel required>{requestTypeLabel ?? 'Motif'}</FieldLabel>
                      <Select
                        value={form.requestType}
                        onValueChange={(value) => update('requestType', value)}
                      >
                        <SelectTrigger className="dark:bg-card h-10 w-full rounded-[12px] bg-white px-3 text-left">
                          <SelectValue placeholder={requestTypePlaceholder} />
                        </SelectTrigger>
                        <SelectContent position="popper" align="start">
                          {requestTypeOptions.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  ) : null}

                  <div>
                    <FieldLabel required>{detailsLabel}</FieldLabel>
                    <Textarea
                      value={form.details}
                      onChange={(e) => update('details', e.target.value)}
                      placeholder={detailsPlaceholder}
                      className="dark:bg-card min-h-[120px] resize-none rounded-[12px] bg-white"
                    />
                  </div>

                  <div className="flex justify-end pt-1">
                    <Button
                      type="submit"
                      disabled={Boolean(requestTypeOptions?.length && !form.requestType)}
                      className="h-9 rounded-full px-4 text-base"
                    >
                      {submitLabel}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
