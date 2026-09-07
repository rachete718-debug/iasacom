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
import { UGC_OFFERS, WA_MESSAGES } from "@/lib/iasa";

export const Route = createFileRoute("/services/ugc-ia")({
  head: () => ({
    meta: [
      { title: "Vidéos UGC IA — 1 vidéo 20 $, pack 5 vidéos 100 $ | IASA" },
      {
        name: "description",
        content:
          "Vidéos UGC générées avec l'IA par IASA : 1 vidéo 20 $, 3 vidéos 55 $, 5 vidéos 100 $. Livraison en 1 à 3 jours, format vertical prêt à publier.",
      },
      { property: "og:title", content: "Vidéos UGC IA — IASA" },
      {
        property: "og:description",
        content: "Des vidéos style créateur, produites avec l'IA, prêtes à publier en 1 à 3 jours.",
      },
    ],
  }),
  component: UgcPage,
});

const STEPS = [
  { t: "Vous décrivez le produit", d: "Nom, promesse, cible et ce que vous voulez mettre en avant." },
  { t: "Nous écrivons le script", d: "Une accroche forte, un message clair, un appel à l'action." },
  { t: "Nous produisons la vidéo", d: "Génération et montage avec des outils d'IA, format vertical." },
  { t: "Vous recevez le fichier", d: "Prêt à publier sur TikTok, Instagram, Facebook ou YouTube." },
];

function UgcPage() {
  return (
    <>
      <PageHero
        eyebrow="Vidéos UGC IA"
        title={
          <>
            Le style créateur, <span className="grad-text">la vitesse de l'IA</span>
          </>
        }
        subtitle="Des vidéos naturelles qui présentent votre produit comme le ferait un vrai utilisateur, produites en quelques jours."
      >
        <WhatsAppButton message={WA_MESSAGES.ugc} label="Commander des vidéos UGC" />
        <GhostButton to="/contact">Demander un devis</GhostButton>
      </PageHero>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <Reveal>
            <SectionTitle
              eyebrow="Démonstration"
              title="Un exemple de vidéo UGC IA"
              subtitle="Voici une vidéo produite par IASA. C'est le type de rendu que vous recevez."
            />
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Nous utilisons des outils d'intelligence artificielle pour la génération et l'habillage des
              vidéos. Nous vous présentons uniquement ce que nous savons réellement produire : si une idée
              n'est pas réalisable dans de bonnes conditions, nous vous le disons avant de commencer.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <YouTubeEmbed videoKey="ugc" />
          </Reveal>
        </div>
      </Section>

      <Section>
        <Reveal>
          <SectionTitle eyebrow="Tarifs" title="Vidéos à l'unité ou en pack" center />
        </Reveal>
        <div className="mt-12">
          <OfferGrid offers={UGC_OFFERS} />
        </div>
        <Reveal>
          <p className="mt-8 text-center text-xs text-muted-foreground">
            Délai indicatif : 1 à 3 jours selon le volume.
          </p>
        </Reveal>
      </Section>

      <Section>
        <Reveal>
          <SectionTitle eyebrow="Déroulé" title="Comment ça se passe" center />
        </Reveal>
        <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <Reveal key={s.t} delay={i * 80} as="li">
              <Card className="h-full">
                <span className="font-mono text-xs text-primary">0{i + 1}</span>
                <h3 className="mt-2 font-display text-base font-bold">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              </Card>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section>
        <Reveal>
          <div className="glass rounded-3xl p-8 sm:p-12">
            <SectionTitle
              eyebrow="Sur la durée"
              title="Collaboration à long terme"
              subtitle="Beaucoup de marques ont besoin de contenus chaque semaine, pas une seule fois."
            />
            <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              Nous pouvons mettre en place un volume régulier de vidéos, avec un calendrier de livraison
              défini ensemble et un tarif adapté au volume. Une remise pouvant aller jusqu'à 20 % est
              possible sur les engagements importants ; elle est étudiée au cas par cas et confirmée dans le
              devis.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <WhatsAppButton message={WA_MESSAGES.collab} label="Discuter d'une collaboration" />
              <GhostButton to="/collaboration">Voir les formules</GhostButton>
            </div>
          </div>
        </Reveal>
      </Section>

      <CtaBand
        title="Lancez votre première série de vidéos"
        text="Envoyez-nous votre produit : nous vous proposons des angles créatifs adaptés."
        message={WA_MESSAGES.ugc}
      />
    </>
  );
}
