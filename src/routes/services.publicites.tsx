import { createFileRoute } from "@tanstack/react-router";

import {
  Card,
  CtaBand,
  GhostButton,
  OfferGrid,
  PageHero,
  Reveal,
  Section,
  SectionTitle,
  WhatsAppButton,
} from "@/components/site/Primitives";
import { PUB_OFFERS, WA_MESSAGES } from "@/lib/iasa";

export const Route = createFileRoute("/services/publicites")({
  head: () => ({
    meta: [
      { title: "Publicités produits & création visuelle | IASA" },
      {
        name: "description",
        content:
          "Publicités vidéo produits par IASA : publicité simple 20 $, voix IA 30 $, premium 35 $, avatar IA 50 $, pack 3 publicités 50 $. Livraison 1 à 3 jours.",
      },
      { property: "og:title", content: "Publicités produits & création visuelle — IASA" },
      {
        property: "og:description",
        content: "Des vidéos publicitaires et visuels produits pensés pour les réseaux et les campagnes.",
      },
    ],
  }),
  component: PubPage,
});

const USAGES = [
  { t: "Lancement de produit", d: "Une vidéo courte qui explique l'intérêt du produit en quelques secondes." },
  { t: "Campagnes payantes", d: "Des formats adaptés aux publicités Facebook, Instagram et TikTok." },
  { t: "Catalogue & boutique", d: "Des visuels cohérents pour présenter toute une gamme." },
  { t: "Tests créatifs", d: "Plusieurs variantes d'accroche pour identifier celle qui fonctionne." },
];

function PubPage() {
  return (
    <>
      <PageHero
        eyebrow="Publicités produits"
        title={
          <>
            Des visuels qui donnent <span className="grad-text">envie d'acheter</span>
          </>
        }
        subtitle="Vidéos publicitaires et créations visuelles conçues pour les réseaux sociaux et vos campagnes payantes."
      >
        <WhatsAppButton message={WA_MESSAGES.pub} label="Commander une publicité" />
        <GhostButton to="/contact">Demander un devis</GhostButton>
      </PageHero>

      <Section>
        <Reveal>
          <SectionTitle eyebrow="Tarifs" title="Choisissez le niveau de production" center />
        </Reveal>
        <div className="mt-12">
          <OfferGrid offers={PUB_OFFERS} />
        </div>
        <Reveal>
          <p className="mt-8 text-center text-xs text-muted-foreground">
            Délai indicatif : 1 à 3 jours. Les options voix IA et avatar IA sont proposées uniquement
            lorsqu'elles conviennent réellement à votre produit ; nous vous le confirmons avant de démarrer.
          </p>
        </Reveal>
      </Section>

      <Section>
        <Reveal>
          <SectionTitle eyebrow="Usages" title="Dans quels cas c'est utile" center />
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {USAGES.map((u, i) => (
            <Reveal key={u.t} delay={i * 80}>
              <Card className="h-full">
                <h3 className="font-display text-base font-bold">{u.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{u.d}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand
        title="Présentez-nous votre produit"
        text="Quelques photos ou une description suffisent pour démarrer."
        message={WA_MESSAGES.pub}
      />
    </>
  );
}
