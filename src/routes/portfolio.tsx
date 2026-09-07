import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import {
  CtaBand,
  GhostButton,
  PageHero,
  Reveal,
  Section,
  WhatsAppButton,
  YouTubeEmbed,
} from "@/components/site/Primitives";
import { VIDEOS, WA_MESSAGES } from "@/lib/iasa";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Réalisations web, UGC IA et vidéo | IASA" },
      {
        name: "description",
        content:
          "Découvrez les réalisations IASA : sites web, vidéos UGC IA, montages vidéo et publicités produits, avec des démonstrations vidéo à regarder directement.",
      },
      { property: "og:title", content: "Portfolio IASA" },
      {
        property: "og:description",
        content: "Sites web, UGC IA, montage vidéo et publicité : des exemples concrets de notre travail.",
      },
    ],
  }),
  component: PortfolioPage,
});

type Cat = "tous" | "web" | "ugc" | "montage" | "pub";

const FILTERS: Array<{ key: Cat; label: string }> = [
  { key: "tous", label: "Tous" },
  { key: "web", label: "Sites web" },
  { key: "ugc", label: "UGC IA" },
  { key: "montage", label: "Montage vidéo" },
  { key: "pub", label: "Publicité" },
];

type Item = {
  id: string;
  cat: Exclude<Cat, "tous">;
  title: string;
  kind: "Démonstration" | "Exemple de réalisation";
  desc: string;
  video?: keyof typeof VIDEOS;
  wa: string;
};

const ITEMS: Item[] = [
  {
    id: "web-1",
    cat: "web",
    title: "Site web animé pour une marque",
    kind: "Démonstration",
    desc: "Présentation d'un site créé par IASA : navigation fluide, animations au scroll et rendu premium sur mobile comme sur desktop.",
    video: "web",
    wa: WA_MESSAGES.web,
  },
  {
    id: "ugc-1",
    cat: "ugc",
    title: "Vidéo UGC IA produit",
    kind: "Démonstration",
    desc: "Une vidéo au style créateur, générée et montée avec l'IA, pensée pour les réseaux sociaux au format vertical.",
    video: "ugc",
    wa: WA_MESSAGES.ugc,
  },
  {
    id: "montage-1",
    cat: "montage",
    title: "Montage dynamique format court",
    kind: "Démonstration",
    desc: "Rythme soutenu, sous-titres et habillage : un montage conçu pour retenir l'attention dès la première seconde.",
    video: "montage",
    wa: WA_MESSAGES.montage,
  },
  {
    id: "pub-1",
    cat: "pub",
    title: "Publicité produit avec voix IA",
    kind: "Exemple de réalisation",
    desc: "Structure publicitaire courte : accroche, bénéfice, preuve et appel à l'action, avec une voix off générée par IA.",
    wa: WA_MESSAGES.pub,
  },
  {
    id: "pub-2",
    cat: "pub",
    title: "Pack de variantes publicitaires",
    kind: "Exemple de réalisation",
    desc: "Trois déclinaisons d'une même publicité pour tester plusieurs accroches sur une campagne payante.",
    wa: WA_MESSAGES.pub,
  },
  {
    id: "web-2",
    cat: "web",
    title: "Site vitrine pour commerce local",
    kind: "Exemple de réalisation",
    desc: "Une vitrine simple et efficace : offres, horaires, localisation et contact WhatsApp en un clic.",
    wa: WA_MESSAGES.web,
  },
];

function PortfolioPage() {
  const [cat, setCat] = useState<Cat>("tous");
  const visible = cat === "tous" ? ITEMS : ITEMS.filter((i) => i.cat === cat);

  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title={
          <>
            Nos réalisations et <span className="grad-text">démonstrations</span>
          </>
        }
        subtitle="Nous préférons montrer plutôt que promettre. Voici ce que nous produisons, filtré par type de prestation."
      >
        <WhatsAppButton message={WA_MESSAGES.devis} label="Demander un projet similaire" />
        <GhostButton to="/tarifs">Voir les tarifs</GhostButton>
      </PageHero>

      <Section>
        <Reveal>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrer le portfolio">
            {FILTERS.map((f) => (
              <button
                key={f.key}
                type="button"
                onClick={() => setCat(f.key)}
                aria-pressed={cat === f.key}
                className={cn(
                  "min-h-11 rounded-full px-5 text-sm font-medium transition-colors",
                  cat === f.key
                    ? "text-primary-foreground"
                    : "glass text-muted-foreground hover:text-foreground",
                )}
                style={cat === f.key ? { background: "var(--grad-brand)" } : undefined}
              >
                {f.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((item, i) => (
            <Reveal key={item.id} delay={(i % 3) * 90}>
              <article className="glass card-hover flex h-full flex-col rounded-2xl p-6">
                <span className="self-start rounded-full bg-white/8 px-3 py-1 font-mono text-[10px] tracking-[0.16em] text-primary uppercase">
                  {item.kind}
                </span>
                {item.video ? (
                  <div className="mt-5">
                    <YouTubeEmbed videoKey={item.video} className="max-w-[260px]" />
                  </div>
                ) : (
                  <div
                    aria-hidden="true"
                    className="mt-5 h-32 rounded-xl"
                    style={{
                      background:
                        "linear-gradient(135deg, oklch(0.78 0.14 227 / 25%), oklch(0.62 0.21 296 / 25%) 55%, oklch(0.65 0.25 351 / 25%))",
                    }}
                  />
                )}
                <h2 className="mt-5 font-display text-lg font-bold">{item.title}</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                <div className="mt-5">
                  <WhatsAppButton message={item.wa} label="Je veux la même chose" className="px-5 text-xs" />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand
        title="Votre projet peut être le prochain"
        text="Décrivez votre idée : nous vous disons comment nous la réaliserions, avec un prix et un délai."
        message={WA_MESSAGES.devis}
      />
    </>
  );
}
