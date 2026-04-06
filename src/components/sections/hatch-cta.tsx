import { ArrowUpRight, BookOpen, Zap } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type HatchCtaCard = {
  title: string;
  description: string;
  href: string;
  icon: "zap" | "book";
};

type HatchCtaProps = {
  className?: string;
  title?: string;
  description?: string;
  ctaHref?: string;
  ctaLabel?: string;
  backgroundLightSrc?: string;
  backgroundDarkSrc?: string;
  backgroundAlt?: string;
  cards?: HatchCtaCard[];
};

const defaultCards: HatchCtaCard[] = [
  {
    title: "À propos",
    description:
      "Découvrez mon parcours, mon approche terrain et la manière dont j’accompagne les équipes.",
    href: "/about",
    icon: "zap",
  },
  {
    title: "Découvrir le catalogue",
    description:
      "Consultez les formations disponibles et identifiez le format le plus utile pour votre activité.",
    href: "/catalogue",
    icon: "book",
  },
];

const iconMap = {
  zap: Zap,
  book: BookOpen,
} satisfies Record<HatchCtaCard["icon"], typeof Zap>;

export default function HatchCta({
  className,
  title = "Faites progresser vos équipes\navec une formation utile.",
  description = "Des formations claires, applicables et adaptées à votre organisation. Vous pourrez remplacer les visuels et les contenus plus tard.",
  ctaHref = "/contact",
  ctaLabel = "Parler de votre besoin",
  backgroundLightSrc = "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/full-width-backgrounds/denis96-gmsf4Zo2-rY-unsplash.webp",
  backgroundDarkSrc = "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/full-width-backgrounds/andrew-kliatskyi-LYZxo7oVFOI-unsplash.webp",
  backgroundAlt = "Illustration d'une session de formation",
  cards = defaultCards,
}: HatchCtaProps) {
  return (
    <section className={cn("py-20 sm:py-24 lg:py-28", className)}>
      <div className="container">
        <div className="relative overflow-hidden rounded-[28px] border border-border bg-card shadow-sm">
          <img
            src={backgroundDarkSrc}
            alt={backgroundAlt}
            className="hidden h-[24rem] w-full object-cover dark:block"
          />
          <img
            src={backgroundLightSrc}
            alt={backgroundAlt}
            className="h-[24rem] w-full object-cover dark:hidden"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/75 to-background/55 sm:bg-gradient-to-r sm:from-background sm:via-background/82 sm:to-background/10" />

          <div className="absolute inset-0 flex items-center justify-center p-6 sm:p-10">
            <div className="mx-auto flex max-w-3xl flex-col items-center gap-7 text-center">
              <div>
                <h2 className="font-display text-3xl font-semibold leading-[1.05] sm:text-4xl lg:text-5xl">
                  {title.split("\n").map((line, index) => (
                    <span key={index} className="block">
                      {line}
                    </span>
                  ))}
                </h2>
                <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-base leading-7 sm:text-lg">
                  {description}
                </p>
              </div>

              <Button asChild size="lg" className="rounded-full px-6">
                <a href={ctaHref}>
                  {ctaLabel}
                  <ArrowUpRight className="size-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {cards.length > 0 ? (
          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
            {cards.map((card) => {
              const Icon = iconMap[card.icon];

              return (
                <a
                  key={`${card.href}-${card.title}`}
                  href={card.href}
                  className="group flex flex-col items-start gap-8 rounded-[24px] border border-border bg-muted/50 px-8 py-7 transition-all hover:-translate-y-0.5 hover:bg-muted/70 sm:px-10 sm:py-8"
                >
                  <span className="grid size-12 place-items-center rounded-xl border border-border bg-background">
                    <Icon className="size-5 text-primary" />
                  </span>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-2xl font-medium md:text-3xl">
                      {card.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-6 sm:text-base">
                      {card.description}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        ) : null}
      </div>
    </section>
  );
}

export { HatchCta as Cta26 };
