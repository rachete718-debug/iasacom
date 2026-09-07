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
import { TAGLINE, WA_MESSAGES } from "@/lib/iasa";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title: "À propos d'IASA — Agence digitale créative" },
      {
        name: "description",
        content:
          "IASA est une agence digitale créative : mission, valeurs, approche et façon d'accompagner ses clients avec l'IA au service de projets humains.",
      },
      { property: "og:title", content: "À propos d'IASA" },
      {
        property: "og:description",
        content: "Notre mission, nos valeurs et notre façon de travailler avec nos clients.",
      },
    ],
  }),
  component: AboutPage,
});

const VALEURS = [
  { t: "Honnêteté", d: "Nous annonçons ce que nous savons faire, et nous le disons quand ce n'est pas le cas." },
  { t: "Exigence", d: "Chaque livrable est vérifié : lisibilité, rythme, cohérence, rendu mobile." },
  { t: "Réactivité", d: "Des réponses rapides et des délais courts, sans sacrifier la qualité." },
  { t: "Créativité", d: "Une direction visuelle affirmée, jamais un modèle recyclé." },
  { t: "Accessibilité", d: "Des tarifs pensés pour les entrepreneurs qui démarrent aussi." },
  { t: "Accompagnement", d: "Nous restons disponibles après la livraison, pas seulement avant." },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="À propos"
        title={
          <>
            IASA, <span className="grad-text">{TAGLINE}</span>
          </>
        }
        subtitle="Une agence digitale créative qui associe le web, l'intelligence artificielle, la vidéo et la création visuelle pour servir des projets concrets."
      >
        <WhatsAppButton message={WA_MESSAGES.general} label="Nous écrire" />
        <GhostButton to="/vision">Découvrir notre vision</GhostButton>
      </PageHero>

      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <SectionTitle eyebrow="Mission" title="Rendre le digital accessible et efficace" />
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Beaucoup d'entrepreneurs ont une belle offre mais une présence en ligne qui ne leur rend pas
              justice. Notre mission est de corriger cet écart : un site clair, des vidéos qui donnent envie,
              des visuels qui inspirent confiance. Le tout à un prix compréhensible et dans un délai
              raisonnable.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Nous travaillons à distance avec des clients de tous horizons : commerces locaux, marques en
              ligne, créateurs de contenu et entreprises qui veulent structurer leur image.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <SectionTitle eyebrow="Approche" title="L'IA comme outil, l'humain comme boussole" />
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              L'intelligence artificielle nous permet de produire plus vite et d'explorer plus d'idées. Mais
              c'est votre objectif qui décide de tout : le message, le ton, la direction visuelle. Nous ne
              livrons jamais un contenu généré à la chaîne sans regard critique.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Concrètement : nous écoutons, nous proposons, nous produisons, nous ajustons avec vous. Chaque
              étape est décrite dans notre processus de travail.
            </p>
            <div className="mt-8">
              <GhostButton to="/processus">Voir le processus</GhostButton>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section>
        <Reveal>
          <SectionTitle eyebrow="Valeurs" title="Ce à quoi nous tenons" center />
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {VALEURS.map((v, i) => (
            <Reveal key={v.t} delay={(i % 3) * 90}>
              <Card className="h-full">
                <h3 className="font-display text-base font-bold">{v.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <Reveal>
          <div className="glass rounded-3xl p-8 sm:p-12">
            <SectionTitle
              eyebrow="Innovation"
              title="Chercher, tester, améliorer"
              subtitle="Les outils évoluent vite. Nous testons régulièrement de nouvelles méthodes de création visuelle et vidéo."
            />
            <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              Nous n'intégrons une nouvelle technologie que lorsqu'elle apporte un vrai gain pour nos
              clients : meilleure qualité, délai plus court ou coût réduit. Nous ne promettons pas une
              technologie que nous ne maîtrisons pas encore.
            </p>
          </div>
        </Reveal>
      </Section>

      <CtaBand message={WA_MESSAGES.general} />
    </>
  );
}
