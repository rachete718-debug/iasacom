import { createFileRoute } from "@tanstack/react-router";

import {
  CtaBand,
  GhostButton,
  PageHero,
  Reveal,
  Section,
  SectionTitle,
  WhatsAppButton,
} from "@/components/site/Primitives";
import { PROCESS_STEPS, WA_MESSAGES } from "@/lib/iasa";

export const Route = createFileRoute("/processus")({
  head: () => ({
    meta: [
      { title: "Notre processus de travail en 7 étapes | IASA" },
      {
        name: "description",
        content:
          "De la prise de contact au suivi après livraison : découvrez les 7 étapes du processus de travail d'IASA, clair et sans mauvaise surprise.",
      },
      { property: "og:title", content: "Le processus de travail IASA" },
      {
        property: "og:description",
        content: "Contact, besoin, devis, création, révisions, livraison et suivi.",
      },
    ],
  }),
  component: ProcessusPage,
});

function ProcessusPage() {
  return (
    <>
      <PageHero
        eyebrow="Processus"
        title={
          <>
            Sept étapes, <span className="grad-text">zéro mauvaise surprise</span>
          </>
        }
        subtitle="Vous savez toujours où en est votre projet et ce qui vous attend à l'étape suivante."
      >
        <WhatsAppButton message={WA_MESSAGES.general} label="Démarrer maintenant" />
        <GhostButton to="/faq">Questions fréquentes</GhostButton>
      </PageHero>

      <Section>
        <ol className="relative mx-auto max-w-3xl space-y-5">
          {PROCESS_STEPS.map((s, i) => (
            <Reveal key={s.n} delay={(i % 4) * 70} as="li">
              <div className="glass card-hover flex gap-5 rounded-2xl p-6">
                <span
                  className="flex size-11 shrink-0 items-center justify-center rounded-full font-display text-sm font-bold text-primary-foreground"
                  style={{ background: "var(--grad-brand)" }}
                >
                  {s.n}
                </span>
                <div>
                  <h2 className="font-display text-lg font-bold">{s.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section>
        <Reveal>
          <div className="glass rounded-3xl p-8 sm:p-12">
            <SectionTitle
              eyebrow="Engagement"
              title="Ce que nous garantissons vraiment"
              subtitle="Pas de conditions génériques : ce qui compte, c'est ce qui est écrit dans votre devis."
            />
            <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              Chaque proposition précise le périmètre exact, le délai, le nombre de révisions incluses et les
              modalités de paiement. Notre engagement est de livrer ce qui a été convenu, et d'ajuster dans
              le cadre prévu jusqu'à ce que le résultat vous convienne.
            </p>
          </div>
        </Reveal>
      </Section>

      <CtaBand message={WA_MESSAGES.general} />
    </>
  );
}
