import { createFileRoute } from "@tanstack/react-router";

import {
  Card,
  CtaBand,
  GhostButton,
  PageHero,
  Reveal,
  Section,
  SectionTitle,
  WhatsAppButton,
} from "@/components/site/Primitives";
import { WA_MESSAGES } from "@/lib/iasa";

export const Route = createFileRoute("/collaboration")({
  head: () => ({
    meta: [
      { title: "Collaboration — Projet ponctuel, mensuel ou partenariat | IASA" },
      {
        name: "description",
        content:
          "Travaillez avec IASA sur un projet ponctuel, une collaboration mensuelle ou un partenariat long terme, avec un volume et des modalités définis ensemble.",
      },
      { property: "og:title", content: "Collaborer avec IASA" },
      {
        property: "og:description",
        content: "Projet ponctuel, collaboration mensuelle ou partenariat sur la durée.",
      },
    ],
  }),
  component: CollaborationPage,
});

const FORMULES = [
  {
    t: "Projet ponctuel",
    d: "Un besoin précis, un livrable défini.",
    points: [
      "Périmètre et prix fixés dans le devis",
      "Idéal pour un lancement ou un test",
      "Aucun engagement de durée",
    ],
    wa: WA_MESSAGES.devis,
  },
  {
    t: "Collaboration mensuelle",
    d: "Un volume régulier de contenus ou d'évolutions.",
    points: [
      "Volume mensuel convenu à l'avance",
      "Calendrier de livraison partagé",
      "Tarif adapté au volume",
    ],
    wa: WA_MESSAGES.collab,
  },
  {
    t: "Partenariat long terme",
    d: "IASA devient votre équipe créative externe.",
    points: [
      "Accord écrit sur la durée et le volume",
      "Priorité sur les demandes urgentes",
      "Remise possible selon l'engagement",
    ],
    wa: "Bonjour IASA, je souhaite discuter d'un partenariat long terme.",
  },
];

function CollaborationPage() {
  return (
    <>
      <PageHero
        eyebrow="Collaboration"
        title={
          <>
            Une fois, chaque mois, ou <span className="grad-text">sur la durée</span>
          </>
        }
        subtitle="Nous nous adaptons à votre rythme : une mission unique, un volume mensuel régulier ou un véritable partenariat."
      >
        <WhatsAppButton message={WA_MESSAGES.collab} label="Discuter d'une collaboration" />
        <GhostButton to="/tarifs">Voir les tarifs</GhostButton>
      </PageHero>

      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          {FORMULES.map((f, i) => (
            <Reveal key={f.t} delay={i * 90}>
              <Card className="flex h-full flex-col">
                <h2 className="font-display text-xl font-bold">{f.t}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{f.d}</p>
                <ul className="mt-5 flex-1 space-y-2 text-sm text-muted-foreground">
                  {f.points.map((p) => (
                    <li key={p} className="flex gap-2">
                      <span className="text-primary">✓</span>
                      {p}
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <WhatsAppButton message={f.wa} label="En parler" className="px-5 text-xs" />
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <SectionTitle eyebrow="Cadre" title="Comment se formalise un accord" />
            <ul className="mt-6 space-y-3 text-sm leading-relaxed text-muted-foreground">
              <li>• Le contrat est établi selon le volume commandé et la durée souhaitée.</li>
              <li>• Le périmètre, les délais et les révisions sont écrits noir sur blanc.</li>
              <li>• Les modalités de paiement sont fixées avant le démarrage.</li>
              <li>• Toute modification importante fait l'objet d'un avenant clair.</li>
            </ul>
          </Reveal>
          <Reveal delay={120}>
            <SectionTitle eyebrow="Disponibilité" title="Un rythme convenu ensemble" />
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Nous ne promettons pas un nombre fixe d'heures par semaine à tout le monde. Notre disponibilité
              est organisée selon le projet et l'accord passé avec chaque client : rythme de livraison,
              délais de réponse et priorités sont définis au départ, puis respectés.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Sur les collaborations importantes, une remise pouvant aller jusqu'à 20 % peut être appliquée.
              Elle est étudiée au cas par cas et confirmée dans le devis.
            </p>
            <div className="mt-8">
              <GhostButton to="/contact">Demander une proposition</GhostButton>
            </div>
          </Reveal>
        </div>
      </Section>

      <CtaBand
        title="Travaillons ensemble sur la durée"
        text="Dites-nous quel volume vous envisagez : nous construisons une formule adaptée."
        message={WA_MESSAGES.collab}
      />
    </>
  );
}
