import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';

import { Button } from '@/components/ui/button';

type FooterProps = {
  name?: string;
  qualiopiLogoSrc?: string;
  qualiopiLogoAlt?: string;
  socials?: {
    href: string;
    label: string;
    iconSrc: string;
  }[];
};

const FOOTER_LINKS = [
  { label: 'Accueil', href: '/' },
  { label: 'Nos formations', href: '/catalogue' },
  { label: 'Informations pratiques', href: '/information-pratique' },
  { label: 'À propos', href: '/about' },
];

const CONTACT_LINKS = [
  {
    label: '06 14 51 11 92',
    href: 'tel:+33614511192',
    Icon: Phone,
  },
  {
    label: 'lirecteurdem@gmail.com',
    href: 'mailto:lirecteurdem@gmail.com',
    Icon: Mail,
  },
  {
    label: '438 avenue de Montpellier, 34970 Lattes',
    href: undefined,
    Icon: MapPin,
  },
];

export function Footer({
  name = 'Synapteo',
  qualiopiLogoSrc = '/images/qualiopi.webp',
  qualiopiLogoAlt = 'Logo Qualiopi',
  socials = [
    {
      href: 'https://framer.com',
      label: 'Framer',
      iconSrc: '/icons/socials/framer.svg',
    },
    {
      href: 'https://instagram.com',
      label: 'Instagram',
      iconSrc: '/icons/socials/instagram.svg',
    },
    {
      href: 'https://x.com',
      label: 'X',
      iconSrc: '/icons/socials/x.svg',
    },
  ],
}: FooterProps) {
  return (
    <footer className="border-t bg-background">
      <div className="container py-10 sm:py-12">
        <div className="rounded-[28px] border border-border/70 bg-muted/45 px-5 py-6 sm:px-7 sm:py-8 lg:px-9">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-primary">
                Centre certifié Qualiopi
              </p>
              <h2 className="mt-2 text-2xl font-semibold leading-tight text-foreground sm:text-3xl">
                Besoin d'un parcours linguistique adapté ?
              </h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base">
                Synapteo accompagne les particuliers, les salariés et les entreprises avec
                des formations en langues en présentiel, à distance ou en entreprise.
              </p>
            </div>

            <Button asChild variant="hatch" className="h-11 w-full rounded-full px-6 sm:w-fit">
              <a href="/contact">
                Nous contacter
                <ArrowRight className="ml-1 size-4" />
              </a>
            </Button>
          </div>
        </div>

        <div className="grid gap-10 py-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(12rem,0.45fr)_minmax(16rem,0.65fr)] lg:gap-12">
          <div className="space-y-6">
            <a href="/" className="inline-flex items-center gap-4" aria-label="Accueil Synapteo">
              <img
                src="/images/layout/logo.svg"
                alt={name}
                width={52}
                height={36}
                className="h-11 w-auto"
                loading="eager"
                decoding="async"
              />
              <span className="text-lg font-semibold text-foreground">{name}</span>
            </a>

            <p className="text-muted-foreground max-w-md text-sm leading-6">
              Centre de formation en langues étrangères certifié Qualiopi. Cours d'anglais,
              espagnol, allemand et FLE pour les particuliers et les entreprises, éligibles
              CPF et OPCO.
            </p>

            <div className="max-w-xl space-y-3">
              {qualiopiLogoSrc ? (
                <div className="rounded-[24px] border border-border/70 bg-background p-5 shadow-sm">
                  <p className="mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-primary">
                    Certification qualité
                  </p>
                  <div className="flex min-h-28 items-center justify-center">
                    <img
                      src={qualiopiLogoSrc}
                      alt={qualiopiLogoAlt}
                      className="h-auto max-h-24 w-full max-w-[420px] object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
              ) : null}

              <div className="rounded-2xl border border-border/70 bg-background px-5 py-4">
                <p className="text-sm font-semibold text-foreground">
                  Éligible CPF et OPCO
                </p>
                <p className="mt-1 text-xs leading-5 text-muted-foreground">
                  Parcours finançables selon votre situation.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-sm font-semibold text-foreground">Navigation</h2>
            <nav className="flex flex-col gap-3">
              {FOOTER_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="space-y-4">
            <h2 className="text-sm font-semibold text-foreground">Contact</h2>
            <div className="space-y-3">
              {CONTACT_LINKS.map(({ label, href, Icon }) => {
                const content = (
                  <>
                    <Icon className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span className="min-w-0 leading-6">{label}</span>
                  </>
                );

                return href ? (
                  <a
                    key={label}
                    href={href}
                    className="flex items-start gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={label} className="flex items-start gap-3 text-sm text-muted-foreground">
                    {content}
                  </div>
                );
              })}
            </div>

            {socials.length > 0 ? (
              <div className="flex items-center gap-3">
                {socials.map((s) => (
                  <a
                    key={s.href}
                    href={s.href}
                    aria-label={s.label}
                    className="inline-flex size-9 items-center justify-center rounded-full border border-border/70 bg-background transition-colors hover:bg-muted"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="sr-only">{s.label}</span>
                    <img
                      src={s.iconSrc}
                      alt=""
                      width={18}
                      height={18}
                      className="opacity-80 transition-opacity hover:opacity-100"
                    />
                  </a>
                ))}
              </div>
            ) : null}
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-border/70 pt-5 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {name}. Tous droits réservés.
          </p>
          <p>Organisme de formation en langues étrangères — certifié Qualiopi.</p>
        </div>
      </div>
    </footer>
  );
}
