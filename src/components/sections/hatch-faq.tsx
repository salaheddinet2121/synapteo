'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQS = [
  {
    question: 'Les formations Saniform sont-elles adaptées à la restauration ?',
    answer:
      'Oui. Les contenus sont pensés pour les restaurants, hôtels, cuisines collectives et métiers de bouche, avec des exemples directement issus du terrain.',
  },
  {
    question: 'Peut-on organiser une formation dans notre établissement ?',
    answer:
      'Oui. Saniform propose des formats intra-entreprise afin d’adapter la pédagogie à votre organisation, vos équipes et vos contraintes horaires.',
  },
  {
    question: 'Proposez-vous un accompagnement sur le PMS et la traçabilité ?',
    answer:
      'Oui. Saniform intervient aussi sur la structuration du plan de maîtrise sanitaire, la mise en ordre documentaire et les bonnes pratiques de suivi.',
  },
  {
    question: 'Comment demander un devis ?',
    answer:
      'Il suffit de nous contacter avec votre besoin, le type d’établissement, le nombre de participants et le format souhaité. Nous revenons vers vous avec une proposition adaptée.',
  },
];

export default function HatchFaq() {
  return (
    <section className="bg-background">
      <div className="container py-16 sm:py-20">
        <div className="max-w-3xl">
          <p className="text-muted-foreground text-sm font-medium uppercase tracking-[0.18em]">
            FAQ
          </p>
          <h2 className="font-display mt-4 text-3xl leading-[1.05] sm:text-4xl">
            Questions fréquentes
          </h2>
        </div>

        <div className="mt-10 rounded-[28px] border border-border/70 bg-card/30 p-4 sm:p-6">
          <Accordion type="single" collapsible>
            {FAQS.map((item) => (
              <AccordionItem key={item.question} value={item.question}>
                <AccordionTrigger className="text-base sm:text-lg">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-7">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
