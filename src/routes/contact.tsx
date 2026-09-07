import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { GhostButton, PageHero, Reveal, Section, WhatsAppButton } from "@/components/site/Primitives";
import {
  EMAIL,
  SERVICES,
  WA_MESSAGES,
  WHATSAPP_DISPLAY,
  mailto,
  waLink,
} from "@/lib/iasa";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & demande de devis | IASA" },
      {
        name: "description",
        content:
          "Contactez IASA par WhatsApp (+243 835 526 603), par email ou via le formulaire de demande de devis. Réponse rapide et proposition claire.",
      },
      { property: "og:title", content: "Contact IASA" },
      {
        property: "og:description",
        content: "WhatsApp, email ou formulaire : choisissez le canal qui vous convient.",
      },
    ],
  }),
  component: ContactPage,
});

const OFFERS_BY_SERVICE: Record<string, string[]> = {
  "Création de sites web": [
    "Landing Page — 100 $",
    "Site vitrine Essentiel — 150 $",
    "Site vitrine Business — 180 $",
    "Site e-commerce — dès 321 $",
    "Site sur mesure — dès 500 $",
    "Business Local — dès 250 $",
    "Business Pro — dès 500 $",
    "Business Premium IA — 850 $",
  ],
  "Vidéos UGC IA": ["1 vidéo — 20 $", "3 vidéos — 55 $", "5 vidéos — 100 $", "Campagne personnalisée"],
  "Montage vidéo": [
    "Montage simple — 10 $",
    "Montage dynamique — 20 $",
    "TikTok / Reel / Short — 20 $",
    "YouTube jusqu'à 5 min — 30 $",
    "YouTube 5–15 min — 40 $",
    "Vidéo publicitaire — 45 $",
    "Projet complexe — sur devis",
  ],
  "Publicités produits & création visuelle": [
    "Publicité simple — 20 $",
    "Publicité avec voix IA — 30 $",
    "Publicité premium — 35 $",
    "Publicité avec avatar IA — 50 $",
    "Pack 3 publicités — 50 $",
    "Campagne personnalisée",
  ],
  "Je ne sais pas encore": ["À définir ensemble"],
};

const SERVICE_NAMES = [...SERVICES.map((s) => s.title), "Je ne sais pas encore"];

const inputCls =
  "min-h-12 w-full rounded-xl border border-border bg-white/5 px-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary";

function ContactPage() {
  const [form, setForm] = useState({
    nom: "",
    entreprise: "",
    email: "",
    whatsapp: "",
    service: SERVICE_NAMES[0] ?? "",
    offre: "",
    budget: "",
    message: "",
  });

  const offers = OFFERS_BY_SERVICE[form.service] ?? ["À définir ensemble"];

  const recap = `Bonjour IASA, je souhaite demander un devis.
Nom : ${form.nom || "—"}
Entreprise : ${form.entreprise || "—"}
Email : ${form.email || "—"}
WhatsApp : ${form.whatsapp || "—"}
Service : ${form.service}
Offre : ${form.offre || "à définir"}
Budget indicatif : ${form.budget || "à définir"}
Message : ${form.message || "—"}`;

  const set = (k: keyof typeof form) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [k]: e.target.value, ...(k === "service" ? { offre: "" } : {}) }));

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Parlons de <span className="grad-text">votre projet</span>
          </>
        }
        subtitle="Remplissez le formulaire pour préparer votre demande, puis envoyez-la en un clic par WhatsApp ou par email."
      >
        <WhatsAppButton message={WA_MESSAGES.devis} label={`WhatsApp ${WHATSAPP_DISPLAY}`} />
        <GhostButton href={mailto("Demande de devis — IASA")}>{EMAIL}</GhostButton>
      </PageHero>

      <Section>
        <div className="grid gap-8 lg:grid-cols-[1.4fr_0.6fr]">
          <Reveal>
            <form
              className="glass rounded-3xl p-6 sm:p-8"
              onSubmit={(e) => {
                e.preventDefault();
                window.open(waLink(recap), "_blank", "noopener");
              }}
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                    Nom complet *
                  </span>
                  <input required className={inputCls} value={form.nom} onChange={set("nom")} placeholder="Votre nom" />
                </label>
                <label className="block">
                  <span className="mb-2 block text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                    Entreprise
                  </span>
                  <input
                    className={inputCls}
                    value={form.entreprise}
                    onChange={set("entreprise")}
                    placeholder="Nom de votre marque"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                    Email *
                  </span>
                  <input
                    required
                    type="email"
                    className={inputCls}
                    value={form.email}
                    onChange={set("email")}
                    placeholder="vous@exemple.com"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                    WhatsApp
                  </span>
                  <input
                    className={inputCls}
                    value={form.whatsapp}
                    onChange={set("whatsapp")}
                    placeholder="+243 ..."
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                    Service souhaité
                  </span>
                  <select className={inputCls} value={form.service} onChange={set("service")}>
                    {SERVICE_NAMES.map((s) => (
                      <option key={s} value={s} className="bg-background">
                        {s}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="block">
                  <span className="mb-2 block text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                    Offre
                  </span>
                  <select className={inputCls} value={form.offre} onChange={set("offre")}>
                    <option value="" className="bg-background">
                      Choisir une offre
                    </option>
                    {offers.map((o) => (
                      <option key={o} value={o} className="bg-background">
                        {o}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="block sm:col-span-2">
                  <span className="mb-2 block text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                    Budget indicatif
                  </span>
                  <input
                    className={inputCls}
                    value={form.budget}
                    onChange={set("budget")}
                    placeholder="Ex. 150 $ — 500 $"
                  />
                </label>
                <label className="block sm:col-span-2">
                  <span className="mb-2 block text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                    Votre message *
                  </span>
                  <textarea
                    required
                    rows={5}
                    className={`${inputCls} py-3`}
                    value={form.message}
                    onChange={set("message")}
                    placeholder="Décrivez votre projet, votre cible et votre échéance."
                  />
                </label>
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <button
                  type="submit"
                  className="btn-glow inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-semibold text-primary-foreground"
                  style={{ background: "var(--grad-brand)" }}
                >
                  Envoyer via WhatsApp
                </button>
                <a
                  href={`mailto:${EMAIL}?subject=${encodeURIComponent("Demande de devis — IASA")}&body=${encodeURIComponent(recap)}`}
                  className="glass inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-semibold"
                >
                  Envoyer par email
                </a>
              </div>
              <p className="mt-4 text-xs text-muted-foreground">
                Vos informations servent uniquement à préparer votre devis. Aucun envoi automatique n'a lieu
                sans votre action.
              </p>
            </form>
          </Reveal>

          <Reveal delay={120}>
            <aside className="glass space-y-6 rounded-3xl p-6 sm:p-8">
              <div>
                <h2 className="font-display text-lg font-bold">Contact direct</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Le plus rapide reste WhatsApp. Nous répondons dès que possible.
                </p>
              </div>
              <div className="space-y-3">
                <WhatsAppButton message={WA_MESSAGES.devis} label="Demander un devis" className="w-full" />
                <a
                  href={mailto("Demande de devis — IASA")}
                  className="glass flex min-h-12 w-full items-center justify-center rounded-full px-5 text-sm break-all"
                >
                  {EMAIL}
                </a>
              </div>
              <div className="space-y-2 border-t border-border/60 pt-5 text-sm text-muted-foreground">
                <p>
                  <span className="text-foreground">WhatsApp :</span> {WHATSAPP_DISPLAY}
                </p>
                <p>
                  <span className="text-foreground">Délais :</span> vidéo 1–3 jours, site 3–7 jours.
                </p>
                <p>
                  <span className="text-foreground">Travail :</span> 100 % à distance.
                </p>
              </div>
              <div className="space-y-2 border-t border-border/60 pt-5">
                <p className="text-xs text-muted-foreground">Messages WhatsApp préremplis :</p>
                <div className="flex flex-wrap gap-2">
                  <WhatsAppButton message={WA_MESSAGES.web} label="Site web" className="px-4 text-xs" />
                  <WhatsAppButton message={WA_MESSAGES.ugc} label="UGC IA" className="px-4 text-xs" />
                  <WhatsAppButton message={WA_MESSAGES.montage} label="Montage" className="px-4 text-xs" />
                  <WhatsAppButton message={WA_MESSAGES.pub} label="Publicité" className="px-4 text-xs" />
                </div>
              </div>
            </aside>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
