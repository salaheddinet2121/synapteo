'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQS = [
  {
    question: 'Les formations Synapteo sont-elles éligibles au CPF ?',
    answer:
      "Oui. Synapteo est certifié Qualiopi, ce qui permet la prise en charge de nos formations via le Compte Personnel de Formation (CPF), les OPCO et d'autres dispositifs publics de financement.",
  },
  {
    question: 'Comment se déroule le premier cours ?',
    answer:
      "Avant le début de la formation, nous réalisons un test de positionnement afin d'évaluer votre niveau et de définir avec vous un programme adapté à vos objectifs et à votre rythme.",
  },
  {
    question: 'Proposez-vous des cours en ligne ?',
    answer:
      'Oui. Toutes nos formations sont disponibles en visioconférence, en présentiel ou en mode hybride. Vous choisissez le format qui correspond le mieux à votre situation.',
  },
  {
    question: 'Quelles langues enseignez-vous ?',
    answer:
      "Nous proposons des cours d'anglais, d'espagnol, d'allemand, de français langue étrangère (FLE) et d'autres langues sur demande. Contactez-nous pour vérifier la disponibilité pour votre langue cible.",
  },
  {
    question: 'Comment demander un devis ?',
    answer:
      'Il vous suffit de nous contacter via le formulaire ou par téléphone en précisant la langue souhaitée, votre niveau actuel, vos objectifs et le nombre de participants. Nous vous adressons une proposition sous 48 h.',
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
