import { createFileRoute } from "@tanstack/react-router";

import {
  CtaBand,
  GhostButton,
  OfferGrid,
  PageHero,
  Reveal,
  Section,
  SectionTitle,
  WhatsAppButton,
} from "@/components/site/Primitives";
import { MONTAGE_OFFERS, PUB_OFFERS, UGC_OFFERS, WA_MESSAGES, WEB_OFFERS } from "@/lib/iasa";

export const Route = createFileRoute("/tarifs")({
  head: () => ({
    meta: [
      { title: "Tarifs IASA — Sites web, UGC IA, montage et publicités" },
      {
        name: "description",
        content:
          "Tous les tarifs IASA en un coup d'œil : sites web dès 100 $, vidéos UGC IA dès 20 $, montage dès 10 $ et publicités produits dès 20 $.",
      },
      { property: "og:title", content: "Tarifs IASA" },
      {
        property: "og:description",
        content: "Comparez toutes les offres IASA : web, UGC IA, montage vidéo et publicités.",
      },
    ],
  }),
  component: TarifsPage,
});

function TarifsPage() {
  return (
    <>
      <PageHero
        eyebrow="Tarifs & offres"
        title={
          <>
            Des prix <span className="grad-text">clairs</span>, annoncés à l'avance
          </>
        }
        subtitle="Pas de devis opaque : voici nos tarifs de référence. Chaque projet reçoit ensuite une proposition écrite précisant le périmètre exact."
      >
        <WhatsAppButton message={WA_MESSAGES.devis} label="Demander un devis" />
        <GhostButton to="/collaboration">Collaboration sur la durée</GhostButton>
      </PageHero>

      <Section id="web">
        <Reveal>
          <SectionTitle eyebrow="Sites web" title="Création de sites web" />
        </Reveal>
        <div className="mt-10">
          <OfferGrid offers={WEB_OFFERS} />
        </div>
      </Section>

      <Section id="ugc">
        <Reveal>
          <SectionTitle eyebrow="UGC IA" title="Vidéos UGC générées avec l'IA" />
        </Reveal>
        <div className="mt-10">
          <OfferGrid offers={UGC_OFFERS} />
        </div>
      </Section>

      <Section id="montage">
        <Reveal>
          <SectionTitle eyebrow="Montage" title="Montage vidéo" />
        </Reveal>
        <div className="mt-10">
          <OfferGrid offers={MONTAGE_OFFERS} />
        </div>
      </Section>

      <Section id="publicites">
        <Reveal>
          <SectionTitle eyebrow="Publicité" title="Publicités produits & création visuelle" />
        </Reveal>
        <div className="mt-10">
          <OfferGrid offers={PUB_OFFERS} />
        </div>
      </Section>

      <Section>
        <Reveal>
          <div className="glass rounded-3xl p-8 sm:p-12">
            <SectionTitle
              eyebrow="Bon à savoir"
              title="Remises selon le volume"
              subtitle="Une remise pouvant aller jusqu'à 20 % peut s'appliquer sur les engagements importants."
            />
            <ul className="mt-6 grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
              <li>• La remise dépend du volume commandé et de la durée de la collaboration.</li>
              <li>• Elle n'est pas automatique : elle est étudiée projet par projet.</li>
              <li>• Lorsqu'elle s'applique, elle est indiquée noir sur blanc dans le devis.</li>
              <li>• Les modalités de paiement sont également fixées dans le devis, avant tout démarrage.</li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <WhatsAppButton message={WA_MESSAGES.devis} label="Demander une proposition" />
              <GhostButton to="/faq">Questions fréquentes</GhostButton>
            </div>
          </div>
        </Reveal>
      </Section>

      <CtaBand
        title="Une offre sur mesure ?"
        text="Si aucune formule ne correspond exactement, nous construisons une proposition adaptée à votre besoin."
        message={WA_MESSAGES.devis}
      />
    </>
  );
}
