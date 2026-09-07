import { createFileRoute } from "@tanstack/react-router";

import photoMain from "@/assets/cofondatrice-1.jpg.asset.json";
import photoAlt from "@/assets/cofondatrice-2.png.asset.json";
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

export const Route = createFileRoute("/vision")({
  head: () => ({
    meta: [
      { title: "Notre vision — Co-fondatrice d'IASA" },
      {
        name: "description",
        content:
          "La vision d'IASA portée par sa co-fondatrice : mettre la technologie et la créativité au service de projets humains et professionnels.",
      },
      { property: "og:title", content: "Notre vision — IASA" },
      {
        property: "og:description",
        content: "La vision qui guide IASA, portée et mise en œuvre par sa co-fondatrice.",
      },
    ],
  }),
  component: VisionPage,
});

const PILIERS = [
  { t: "Servir avant de vendre", d: "Comprendre le besoin réel du client passe avant la prestation." },
  { t: "Élever le niveau", d: "Offrir un rendu premium à des porteurs de projets qui n'y avaient pas accès." },
  { t: "Former et transmettre", d: "Expliquer nos choix pour que le client reste autonome sur son image." },
  { t: "Durer", d: "Construire des relations longues plutôt que des missions isolées." },
];

function VisionPage() {
  return (
    <>
      <PageHero
        eyebrow="Notre vision"
        title={
          <>
            Une vision reçue, <span className="grad-text">portée et mise en œuvre</span>
          </>
        }
        subtitle="IASA n'est pas née d'une simple opportunité commerciale, mais d'une conviction : la technologie doit servir des projets humains."
      >
        <WhatsAppButton message={WA_MESSAGES.general} label="Échanger avec nous" />
        <GhostButton to="/a-propos">À propos d'IASA</GhostButton>
      </PageHero>

      <Section>
        <Reveal>
          <div className="glass rounded-3xl p-6 sm:p-10">
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <div className="relative mx-auto w-full max-w-sm">
                <img
                  src={photoMain.url}
                  alt="Portrait de la co-fondatrice d'IASA"
                  loading="lazy"
                  className="aspect-[3/4] w-full rounded-2xl object-cover"
                />
                <img
                  src={photoAlt.url}
                  alt="Second portrait de la co-fondatrice d'IASA"
                  loading="lazy"
                  className="absolute -right-3 -bottom-4 aspect-square w-[38%] rounded-full border-4 border-background object-cover shadow-2xl"
                />
              </div>

              <div>
                <p className="font-mono text-[11px] tracking-[0.2em] text-pink-brand uppercase">
                  Co-fondatrice & Porteuse de la vision IASA
                </p>
                <h2 className="mt-3 font-display text-2xl font-bold sm:text-3xl">
                  « Ce projet est plus grand que moi »
                </h2>
                <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
                  <p>
                    À l'origine d'IASA, il y a une vision que je crois avoir reçue de Dieu : mettre les
                    outils de notre époque au service des personnes qui construisent quelque chose. Mon rôle
                    est de porter cette vision, de la développer et de la mettre en œuvre concrètement, jour
                    après jour.
                  </p>
                  <p>
                    Concrètement, cela veut dire refuser le travail bâclé, tenir parole sur les délais, et
                    traiter le projet d'un petit commerce avec la même attention que celui d'une grande
                    entreprise. La qualité n'est pas réservée à ceux qui ont les plus gros budgets.
                  </p>
                  <p>
                    IASA reste une agence : nous vendons des sites, des vidéos et des visuels. Mais la façon
                    dont nous le faisons — écoute, honnêteté, exigence — vient directement de cette vision.
                  </p>
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <WhatsAppButton message={WA_MESSAGES.general} label="Parler de votre projet" />
                  <GhostButton to="/contact">Nous contacter</GhostButton>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      <Section>
        <Reveal>
          <SectionTitle eyebrow="Les piliers" title="Ce que cette vision change au quotidien" center />
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PILIERS.map((p, i) => (
            <Reveal key={p.t} delay={i * 80}>
              <Card className="h-full">
                <h3 className="font-display text-base font-bold">{p.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand
        title="Construisons quelque chose de solide"
        text="Que votre projet soit petit ou ambitieux, il mérite un vrai travail."
        message={WA_MESSAGES.general}
      />
    </>
  );
}
