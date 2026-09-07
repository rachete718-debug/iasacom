import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import {
  CtaBand,
  GhostButton,
  PageHero,
  Reveal,
  Section,
  WhatsAppButton,
} from "@/components/site/Primitives";
import { FAQ_ITEMS, WA_MESSAGES } from "@/lib/iasa";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Délais, devis, paiement et révisions | IASA" },
      {
        name: "description",
        content:
          "Toutes les réponses aux questions fréquentes sur IASA : délais, demande de devis, paiement, révisions, travail à distance et collaborations mensuelles.",
      },
      { property: "og:title", content: "Questions fréquentes — IASA" },
      {
        property: "og:description",
        content: "Délais, devis, paiement, révisions et collaborations : tout est expliqué ici.",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQ_ITEMS.map((i) => ({
            "@type": "Question",
            name: i.q,
            acceptedAnswer: { "@type": "Answer", text: i.a },
          })),
        }),
      },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title={
          <>
            Vos questions, <span className="grad-text">nos réponses</span>
          </>
        }
        subtitle="Si vous ne trouvez pas votre réponse ici, écrivez-nous : nous répondons rapidement."
      >
        <WhatsAppButton message={WA_MESSAGES.general} label="Poser une question" />
        <GhostButton to="/contact">Formulaire de contact</GhostButton>
      </PageHero>

      <Section>
        <div className="mx-auto max-w-3xl space-y-3">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.q} delay={(i % 4) * 60}>
                <div className={cn("glass overflow-hidden rounded-2xl", isOpen && "border-primary/40")}>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex min-h-14 w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span className="font-display text-base font-semibold">{item.q}</span>
                    <span
                      aria-hidden="true"
                      className={cn(
                        "shrink-0 text-primary transition-transform duration-300",
                        isOpen && "rotate-45",
                      )}
                    >
                      +
                    </span>
                  </button>
                  <div
                    className={cn(
                      "grid transition-all duration-300",
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <CtaBand
        title="Une question qui n'est pas ici ?"
        text="Écrivez-nous sur WhatsApp : c'est le plus rapide."
        message={WA_MESSAGES.general}
      />
    </>
  );
}
