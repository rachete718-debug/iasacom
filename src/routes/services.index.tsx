import { createFileRoute, Link } from "@tanstack/react-router";

import {
  Card,
  CtaBand,
  PageHero,
  Reveal,
  Section,
  SectionTitle,
  WhatsAppButton,
  YouTubeEmbed,
  GhostButton,
} from "@/components/site/Primitives";
import { SERVICES, WA_MESSAGES } from "@/lib/iasa";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services — Sites web, UGC IA, montage vidéo, publicités | IASA" },
      {
        name: "description",
        content:
          "Découvrez les services IASA : création de sites web, vidéos UGC IA, montage vidéo et publicités produits. Tarifs clairs et délais indicatifs.",
      },
      { property: "og:title", content: "Services IASA" },
      {
        property: "og:description",
        content: "Sites web, UGC IA, montage vidéo et publicités produits par IASA.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Nos services"
        title={
          <>
            Quatre expertises pour faire <span className="grad-text">grandir votre marque</span>
          </>
        }
        subtitle="Du site web à la publicité vidéo, IASA couvre tout ce dont vous avez besoin pour exister et convaincre en ligne."
      >
        <WhatsAppButton message={WA_MESSAGES.devis} label="Demander un devis" />
        <GhostButton to="/tarifs">Voir tous les tarifs</GhostButton>
      </PageHero>

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {SERVICES.map((s, i) => (
            <Reveal key={s.key} delay={(i % 2) * 90}>
              <Card className="flex h-full flex-col">
                <span aria-hidden="true" className="text-3xl">
                  {s.icon}
                </span>
                <h2 className="mt-4 font-display text-2xl font-bold">{s.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.short}</p>
                <ul className="mt-5 grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="text-primary">✓</span>
                      {b}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 font-mono text-xs tracking-wider text-primary uppercase">{s.from}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  <Link
                    to={s.slug}
                    className="inline-flex min-h-11 items-center rounded-full px-5 text-xs font-semibold text-primary-foreground"
                    style={{ background: "var(--grad-brand)" }}
                  >
                    Découvrir l'offre
                  </Link>
                  <WhatsAppButton message={s.wa} label="WhatsApp" className="px-5 text-xs" />
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <Reveal>
          <SectionTitle
            eyebrow="Démonstrations"
            title="Ce que nous produisons concrètement"
            subtitle="Trois exemples de réalisations IASA : un site web, une vidéo UGC IA et un montage vidéo."
            center
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
      </Section>

      <CtaBand
        title="Vous hésitez entre plusieurs services ?"
        text="Décrivez-nous votre objectif : nous vous orientons vers la formule la plus utile pour vous."
        message={WA_MESSAGES.devis}
      />
    </>
  );
}
