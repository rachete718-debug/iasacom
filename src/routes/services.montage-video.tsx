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
  YouTubeEmbed,
} from "@/components/site/Primitives";
import { MONTAGE_OFFERS, WA_MESSAGES } from "@/lib/iasa";

export const Route = createFileRoute("/services/montage-video")({
  head: () => ({
    meta: [
      { title: "Montage vidéo — TikTok, Reels, Shorts et YouTube | IASA" },
      {
        name: "description",
        content:
          "Montage vidéo professionnel par IASA : montage simple 10 $, dynamique 20 $, YouTube dès 30 $, vidéo publicitaire 45 $. Livraison en 1 à 3 jours.",
      },
      { property: "og:title", content: "Montage vidéo — IASA" },
      {
        property: "og:description",
        content: "Montage dynamique, sous-titres, étalonnage et sound design pour tous vos formats.",
      },
    ],
  }),
  component: MontagePage,
});

const INCLUS = [
  { t: "Sous-titres", d: "Lisibles, synchronisés, dans le style de votre marque." },
  { t: "Rythme & coupes", d: "Un montage vivant qui garde l'attention jusqu'au bout." },
  { t: "Étalonnage", d: "Des couleurs harmonisées pour un rendu professionnel." },
  { t: "Sound design", d: "Musique et effets dosés pour soutenir le message." },
  { t: "Formats multiples", d: "Vertical, carré ou horizontal selon la plateforme." },
  { t: "Export optimisé", d: "Un fichier léger et net, prêt à publier." },
];

function MontagePage() {
  return (
    <>
      <PageHero
        eyebrow="Montage vidéo"
        title={
          <>
            Vos rushes deviennent des <span className="grad-text">vidéos qui captivent</span>
          </>
        }
        subtitle="Coupes précises, sous-titres, musique et finitions : un montage qui donne envie de regarder jusqu'à la fin."
      >
        <WhatsAppButton message={WA_MESSAGES.montage} label="Confier un montage" />
        <GhostButton to="/contact">Demander un devis</GhostButton>
      </PageHero>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <Reveal>
            <SectionTitle
              eyebrow="Démonstration"
              title="Un exemple de montage IASA"
              subtitle="Rythme, habillage et finitions : voici ce que nous livrons."
            />
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Envoyez vos rushes par WhatsApp, email ou lien de partage. Nous revenons vers vous avec une
              première version, puis nous ajustons selon le nombre de révisions prévu dans le devis.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <YouTubeEmbed videoKey="montage" />
          </Reveal>
        </div>
      </Section>

      <Section>
        <Reveal>
          <SectionTitle eyebrow="Tarifs" title="Un prix par type de montage" center />
        </Reveal>
        <div className="mt-12">
          <OfferGrid offers={MONTAGE_OFFERS} />
        </div>
        <Reveal>
          <p className="mt-8 text-center text-xs text-muted-foreground">
            Délai indicatif : 1 à 3 jours · projets complexes selon le cahier des charges.
          </p>
        </Reveal>
      </Section>

      <Section>
        <Reveal>
          <SectionTitle eyebrow="Inclus" title="Ce que comprend un montage" center />
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {INCLUS.map((f, i) => (
            <Reveal key={f.t} delay={(i % 3) * 90}>
              <Card className="h-full">
                <h3 className="font-display text-base font-bold">{f.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.d}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand
        title="Envoyez vos rushes"
        text="Nous vous disons rapidement ce qu'il est possible d'en tirer, et à quel prix."
        message={WA_MESSAGES.montage}
      />
    </>
  );
}
