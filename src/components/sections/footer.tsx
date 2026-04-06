import { ArrowRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

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
  { label: 'Catalogue', href: '/catalogue' },
  { label: 'Informations pratiques', href: '/information-pratique' },
  { label: 'À propos', href: '/about' },
];

export function Footer({
  name = 'Saniform',
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
    <footer className="bg-background border-t">
      <div className="container py-12 sm:py-14">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-start">
          <div className="space-y-6">
            <a href="/" className="inline-flex flex-col items-start gap-4" aria-label="Accueil Saniform">
              <img
                src="/images/layout/logo.svg"
                alt={name}
                width={42}
                height={35}
                className="h-[35px] w-[42px]"
                loading="eager"
                decoding="async"
              />

              <div
                className={cn(
                  'bg-muted/50 flex min-h-24 w-full min-w-[180px] items-center justify-center rounded-2xl border border-dashed px-4 py-3',
                  qualiopiLogoSrc && 'border-solid bg-background',
                )}
              >
                {qualiopiLogoSrc ? (
                  <img
                    src={qualiopiLogoSrc}
                    alt={qualiopiLogoAlt}
                    className="max-h-16 w-auto object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <span className="text-muted-foreground text-center text-sm">
                    Emplacement logo Qualiopi
                  </span>
                )}
              </div>
            </a>

            <p className="text-muted-foreground max-w-md text-sm leading-6">
              Formations en hygiène alimentaire, HACCP et prévention des risques pour les
              restaurants, hôtels, cuisines collectives et métiers de bouche.
            </p>

            <Button asChild variant="outline" className="rounded-full px-5">
              <a href="/contact">
                Nous contacter
                <ArrowRight className="ml-1 size-4" />
              </a>
            </Button>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-foreground text-sm font-medium">Navigation</h2>
              <nav className="flex flex-col gap-3">
                {FOOTER_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            <div className="space-y-4">
              <h2 className="text-foreground text-sm font-medium">Suivez-nous</h2>
              <div className="flex items-center gap-3">
                {socials.map((s) => (
                  <a
                    key={s.href}
                    href={s.href}
                    aria-label={s.label}
                    className="bg-muted/60 hover:bg-muted inline-flex size-10 items-center justify-center rounded-full border transition-colors"
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
            </div>
          </div>
        </div>

        <div className="border-border/70 text-muted-foreground mt-10 flex flex-col gap-3 border-t pt-5 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {name}. Tous droits réservés.
          </p>
          <p>Organisme de formation pour les équipes de restauration.</p>
        </div>
      </div>
    </footer>
  );
}
