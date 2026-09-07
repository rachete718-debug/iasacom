import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import logoAsset from "@/assets/logo-iasa.png.asset.json";
import {
  Card,
  CtaBand,
  GhostButton,
  Reveal,
  Section,
  SectionTitle,
  WhatsAppButton,
  YouTubeEmbed,
} from "@/components/site/Primitives";
import { PROCESS_STEPS, SERVICES, TAGLINE, WA_MESSAGES } from "@/lib/iasa";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "IASA — Agence digitale créative | IA au service de ton avenir" },
      {
        name: "description",
        content:
          "IASA conçoit des sites web, des vidéos UGC IA, du montage vidéo et des publicités produits. Devis clair, délais courts, contact direct WhatsApp.",
      },
      { property: "og:title", content: "IASA — Agence digitale créative" },
      {
        property: "og:description",
        content:
          "Sites web, UGC IA, montage vidéo et publicités produits : l'IA au service de votre avenir.",
      },
    ],
  }),
  component: HomePage,
});

function Intro() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1500);
    return () => clearTimeout(t);
  }, []);
  return (
    <div
      aria-hidden={done}
      className={`fixed inset-0 z-[60] flex items-center justify-center bg-background transition-opacity duration-700 ${
        done ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center">
        <img
          src={logoAsset.url}
          alt="Logo IASA"
          className="size-20 animate-in fade-in zoom-in-75 rounded-2xl object-contain duration-1000"
        />
        <p className="mt-5 font-mono text-[11px] tracking-[0.3em] text-muted-foreground uppercase animate-in fade-in duration-1000">
          {TAGLINE}
        </p>
        <span className="mt-6 block h-px w-32 overflow-hidden bg-white/10">
          <span className="block h-full w-full origin-left animate-in slide-in-from-left duration-1000" style={{ background: "var(--grad-brand)" }} />
        </span>
      </div>
    </div>
  );
}

function HomePage() {
  return (
    <>
      <Intro />

      <section className="relative flex min-h-[92vh] items-center pt-28 pb-16">
        <div className="container-iasa">
          <Reveal>
            <p className="mb-5 font-mono text-[11px] tracking-[0.22em] text-primary uppercase">
              ✦ Agence créative & digitale
            </p>
          </Reveal>
          <Reveal delay={90}>
            <h1 className="max-w-4xl font-display text-4xl leading-[1.08] font-bold text-balance sm:text-5xl lg:text-7xl">
              Nous créons des expériences digitales qui <span className="grad-text">attirent</span>,{" "}
              <span className="grad-text">convainquent</span> et convertissent.
            </h1>
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              IASA accompagne les entreprises et les créateurs avec des solutions modernes : sites web,
              vidéos UGC propulsées par l'intelligence artificielle, montage vidéo et publicités produits.
            </p>
          </Reveal>
          <Reveal delay={260}>
            <div className="mt-9 flex flex-wrap gap-3">
              <WhatsAppButton message={WA_MESSAGES.general} label="Parlons de votre projet" />
              <GhostButton to="/services">Découvrir nos services</GhostButton>
            </div>
          </Reveal>
          <Reveal delay={340}>
            <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { k: "Web", v: "Sites qui convertissent" },
                { k: "UGC IA", v: "Contenus prêts à publier" },
                { k: "Montage", v: "Rythme et finitions" },
                { k: "Publicité", v: "Visuels orientés vente" },
              ].map((p) => (
                <li key={p.k} className="glass rounded-2xl px-5 py-4">
                  <p className="font-display text-sm font-bold">{p.k}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{p.v}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <Section id="services">
        <Reveal>
          <SectionTitle
            eyebrow="Nos expertises"
            title={
              <>
                Trois piliers, une même exigence : <span className="grad-text">la qualité</span>
              </>
            }
            subtitle="Chaque service est pensé pour un résultat concret : plus de visibilité, plus de crédibilité, plus de ventes."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {SERVICES.slice(0, 3).map((s, i) => (
            <Reveal key={s.key} delay={i * 100}>
              <Card className="flex h-full flex-col">
                <span aria-hidden="true" className="text-3xl">
                  {s.icon}
                </span>
                <h3 className="mt-4 font-display text-xl font-bold">{s.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{s.short}</p>
                <p className="mt-4 font-mono text-xs tracking-wider text-primary uppercase">{s.from}</p>
                <Link
                  to={s.slug}
                  className="mt-5 inline-flex text-sm font-semibold text-foreground hover:text-primary"
                >
                  En savoir plus →
                </Link>
              </Card>
            </Reveal>
          ))}
        </div>
        <Reveal delay={120}>
          <div className="mt-8 text-center">
            <GhostButton to="/services">Voir les 4 services</GhostButton>
          </div>
        </Reveal>
      </Section>

      <Section>
        <Reveal>
          <SectionTitle
            eyebrow="Aperçu du portfolio"
            title="Des démonstrations, pas des promesses"
            subtitle="Voici des exemples de réalisations produites par IASA. Chaque vidéo est un vrai rendu, visible directement ici."
          />
        </Reveal>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <Reveal>
            <YouTubeEmbed videoKey="web" />
          </Reveal>
          <Reveal delay={100}>
            <YouTubeEmbed videoKey="ugc" />
          </Reveal>
          <Reveal delay={200}>
            <YouTubeEmbed videoKey="montage" />
          </Reveal>
        </div>
        <Reveal delay={120}>
          <div className="mt-10 text-center">
            <GhostButton to="/portfolio">Voir tout le portfolio</GhostButton>
          </div>
        </Reveal>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <SectionTitle
              eyebrow="Qui sommes-nous"
              title={
                <>
                  IASA, <span className="grad-text">l'IA au service de ton avenir</span>
                </>
              }
              subtitle="Nous sommes une agence digitale créative qui met la technologie au service de projets profondément humains."
            />
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Notre approche est simple : comprendre votre objectif, produire vite et bien, rester
              disponible. L'intelligence artificielle nous permet d'aller plus loin en création visuelle et
              vidéo, sans jamais remplacer l'écoute et le soin apporté à chaque projet.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <GhostButton to="/a-propos">À propos d'IASA</GhostButton>
              <GhostButton to="/vision">Notre vision</GhostButton>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { t: "Écoute", d: "On part de votre besoin réel, pas d'un modèle générique." },
                { t: "Rapidité", d: "1 à 3 jours pour la vidéo, 3 à 7 jours pour un site simple." },
                { t: "Clarté", d: "Un devis lisible : périmètre, prix, délai, révisions." },
                { t: "Créativité", d: "Une direction visuelle premium et cohérente." },
              ].map((c) => (
                <Card key={c.t}>
                  <h3 className="font-display text-base font-bold">{c.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
                </Card>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      <Section>
        <Reveal>
          <SectionTitle
            eyebrow="Processus"
            title="Comment nous travaillons"
            subtitle="Sept étapes claires, du premier message jusqu'au suivi après livraison."
            center
          />
        </Reveal>
        <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.slice(0, 4).map((s, i) => (
            <Reveal key={s.n} delay={i * 80} as="li">
              <Card className="h-full">
                <span className="font-mono text-xs text-primary">{s.n}</span>
                <h3 className="mt-2 font-display text-base font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
              </Card>
            </Reveal>
          ))}
        </ol>
        <Reveal delay={120}>
          <div className="mt-8 text-center">
            <GhostButton to="/processus">Voir les 7 étapes</GhostButton>
          </div>
        </Reveal>
      </Section>

      <CtaBand message={WA_MESSAGES.general} />
    </>
  );
}
