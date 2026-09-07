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
import { WA_MESSAGES, WEB_OFFERS } from "@/lib/iasa";

export const Route = createFileRoute("/services/sites-web")({
  head: () => ({
    meta: [
      { title: "Création de sites web — Landing, vitrine, e-commerce | IASA" },
      {
        name: "description",
        content:
          "Sites web professionnels par IASA : landing page 100 $, vitrine dès 150 $, e-commerce dès 321 $, Business Premium IA 850 $. Responsive, SEO de base, WhatsApp.",
      },
      { property: "og:title", content: "Création de sites web — IASA" },
      {
        property: "og:description",
        content: "Landing pages, sites vitrines, e-commerce et sites sur mesure conçus pour convertir.",
      },
    ],
  }),
  component: SitesWebPage,
});

const CLIENTS = [
  { t: "Restaurants", d: "Menu, réservations par WhatsApp, photos et horaires." },
  { t: "Boutiques", d: "Catalogue, mise en avant des nouveautés, commande directe." },
  { t: "Hôtels & maisons d'hôtes", d: "Chambres, services, galerie et demande de disponibilité." },
  { t: "Petites entreprises", d: "Présentation claire des services et génération de contacts." },
  { t: "Grandes entreprises", d: "Architecture multi-pages, pages services, contenus riches." },
  { t: "Créateurs & indépendants", d: "Portfolio, offres et prise de contact simplifiée." },
];

const FEATURES = [
  { t: "Responsive complet", d: "Téléphone, tablette, ordinateur portable, grand écran et TV." },
  { t: "Animations légères", d: "Apparitions au scroll et micro-interactions, sans ralentir le mobile." },
  { t: "SEO de base", d: "Titres, descriptions, structure des titres et textes alternatifs sur les images." },
  { t: "Formulaire de contact", d: "Un formulaire clair, relié à votre adresse email." },
  { t: "Bouton WhatsApp", d: "Message prérempli pour que le visiteur vous écrive en un clic." },
  { t: "Performance", d: "Images optimisées et code allégé pour un chargement rapide." },
];

function SitesWebPage() {
  return (
    <>
      <PageHero
        eyebrow="Création de sites web"
        title={
          <>
            Un site qui travaille <span className="grad-text">pour vous</span>, jour et nuit
          </>
        }
        subtitle="De la landing page à la boutique en ligne : des sites rapides, élégants, pensés pour transformer un visiteur en client."
      >
        <WhatsAppButton message={WA_MESSAGES.web} label="Discuter de mon site" />
        <GhostButton to="/contact">Demander un devis</GhostButton>
      </PageHero>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <Reveal>
            <SectionTitle
              eyebrow="Démonstration"
              title="Un aperçu de notre travail web"
              subtitle="Cette vidéo présente un site réalisé par IASA : design, animations et navigation."
            />
          </Reveal>
          <Reveal delay={120}>
            <YouTubeEmbed videoKey="web" />
          </Reveal>
        </div>
      </Section>

      <Section>
        <Reveal>
          <SectionTitle eyebrow="Nos offres" title="Des formules claires, sans surprise" center />
        </Reveal>
        <div className="mt-12">
          <OfferGrid offers={WEB_OFFERS} />
        </div>
        <Reveal>
          <p className="mt-8 text-center text-xs text-muted-foreground">
            Délais indicatifs : projets simples 3 à 7 jours · Business Premium IA 8 à 14 jours · projets
            complexes selon le cahier des charges convenu ensemble.
          </p>
        </Reveal>
      </Section>

      <Section>
        <Reveal>
          <SectionTitle eyebrow="Pour qui" title="Des sites adaptés à votre activité" center />
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CLIENTS.map((c, i) => (
            <Reveal key={c.t} delay={(i % 3) * 90}>
              <Card className="h-full">
                <h3 className="font-display text-base font-bold">{c.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <Reveal>
          <SectionTitle eyebrow="Ce qui est inclus" title="Les fonctionnalités de base" center />
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
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
        title="Parlons de votre site"
        text="Dites-nous ce que vous vendez et à qui : nous vous proposons la formule la plus adaptée."
        message={WA_MESSAGES.web}
      />
    </>
  );
}
