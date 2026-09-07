export const WHATSAPP_NUMBER = "243835526603";
export const WHATSAPP_DISPLAY = "+243 835 526 603";
export const EMAIL = "rachete718@gmail.com";
export const BRAND = "IASA";
export const TAGLINE = "IA au service de ton avenir";

export function waLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WA_MESSAGES = {
  general: "Bonjour IASA, je souhaite parler de mon projet.",
  devis: "Bonjour IASA, je souhaite demander un devis personnalisé.",
  web: "Bonjour IASA, je suis intéressé(e) par la création d'un site web.",
  ugc: "Bonjour IASA, je suis intéressé(e) par l'offre UGC IA.",
  montage: "Bonjour IASA, je suis intéressé(e) par le montage vidéo.",
  pub: "Bonjour IASA, je suis intéressé(e) par les publicités produits / création visuelle.",
  collab: "Bonjour IASA, je souhaite discuter d'une collaboration sur la durée.",
} as const;

export function mailto(subject: string): string {
  return `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}`;
}

/** Vidéos YouTube fournies (Shorts convertis en ID d'embed). */
export const VIDEOS = {
  web: { id: "ipuKxxKljjA", title: "Démonstration IASA — création de site web" },
  ugc: { id: "8g3lZG_zMBk", title: "Démonstration IASA — vidéo UGC IA" },
  montage: { id: "DLbO_lQ2KAw", title: "Démonstration IASA — montage vidéo" },
} as const;

export type ServiceKey = "sites-web" | "ugc-ia" | "montage-video" | "publicites";

export type Service = {
  key: ServiceKey;
  slug: string;
  title: string;
  short: string;
  icon: string;
  from: string;
  bullets: string[];
  wa: string;
};

export const SERVICES: Service[] = [
  {
    key: "sites-web",
    slug: "/services/sites-web",
    title: "Création de sites web",
    short:
      "Landing pages, sites vitrines, e-commerce et sites sur mesure : rapides, responsives et pensés pour convertir.",
    icon: "💻",
    from: "à partir de 100 $",
    bullets: ["Design premium", "100 % responsive", "SEO de base", "Formulaire & WhatsApp"],
    wa: WA_MESSAGES.web,
  },
  {
    key: "ugc-ia",
    slug: "/services/ugc-ia",
    title: "Vidéos UGC IA",
    short:
      "Des vidéos style créateur, générées et montées avec l'IA, pour présenter un produit ou un service de façon naturelle.",
    icon: "🎬",
    from: "à partir de 20 $",
    bullets: ["Format vertical", "Script inclus", "Livraison 1–3 jours", "Packs disponibles"],
    wa: WA_MESSAGES.ugc,
  },
  {
    key: "montage-video",
    slug: "/services/montage-video",
    title: "Montage vidéo",
    short:
      "Montage dynamique pour TikTok, Reels, Shorts et YouTube : rythme, sous-titres, musique et image soignée.",
    icon: "✂️",
    from: "à partir de 10 $",
    bullets: ["Sous-titres", "Étalonnage", "Sound design", "Formats multiples"],
    wa: WA_MESSAGES.montage,
  },
  {
    key: "publicites",
    slug: "/services/publicites",
    title: "Publicités produits & création visuelle",
    short:
      "Vidéos publicitaires et visuels produits pensés pour les réseaux sociaux et les campagnes payantes.",
    icon: "✨",
    from: "à partir de 20 $",
    bullets: ["Voix IA en option", "Avatar IA en option", "Packs 3 pubs", "Adapté aux ads"],
    wa: WA_MESSAGES.pub,
  },
];

export type Offer = {
  name: string;
  price: string;
  delay: string;
  desc: string;
  features: string[];
  wa: string;
  highlight?: boolean;
};

export const WEB_OFFERS: Offer[] = [
  {
    name: "Landing Page",
    price: "100 $",
    delay: "3–7 jours",
    desc: "Une page unique, percutante, conçue pour une offre ou une campagne précise.",
    features: [
      "1 page longue optimisée conversion",
      "Design sur mesure & animations légères",
      "Formulaire de contact + bouton WhatsApp",
      "Responsive mobile, tablette, desktop",
    ],
    wa: "Bonjour IASA, je suis intéressé(e) par l'offre Landing Page (100 $).",
  },
  {
    name: "Site vitrine Essentiel",
    price: "150 $",
    delay: "3–7 jours",
    desc: "L'essentiel pour exister en ligne avec une image professionnelle.",
    features: [
      "3 à 4 pages (accueil, services, à propos, contact)",
      "Design premium cohérent avec votre marque",
      "SEO de base (titres, descriptions, alt)",
      "Formulaire + WhatsApp + liens réseaux",
    ],
    wa: "Bonjour IASA, je suis intéressé(e) par le Site vitrine Essentiel (150 $).",
  },
  {
    name: "Site vitrine Business",
    price: "180 $",
    delay: "3–7 jours",
    desc: "Une vitrine plus riche pour présenter une gamme complète de services.",
    features: [
      "5 à 7 pages + pages de services détaillées",
      "Galerie / portfolio",
      "FAQ et section avis",
      "Animations au scroll et micro-interactions",
    ],
    wa: "Bonjour IASA, je suis intéressé(e) par le Site vitrine Business (180 $).",
    highlight: true,
  },
  {
    name: "Site e-commerce",
    price: "à partir de 321 $",
    delay: "selon cahier des charges",
    desc: "Une boutique en ligne pour vendre vos produits simplement.",
    features: [
      "Catalogue produits et fiches détaillées",
      "Panier et parcours de commande",
      "Gestion des catégories",
      "Configuration adaptée à votre mode de paiement",
    ],
    wa: "Bonjour IASA, je suis intéressé(e) par un site e-commerce.",
  },
  {
    name: "Site sur mesure",
    price: "à partir de 500 $",
    delay: "selon cahier des charges",
    desc: "Un projet spécifique, avec des fonctionnalités définies ensemble.",
    features: [
      "Cahier des charges rédigé avec vous",
      "Fonctionnalités spécifiques",
      "Interface et parcours personnalisés",
      "Accompagnement du début à la livraison",
    ],
    wa: "Bonjour IASA, je souhaite un site sur mesure.",
  },
  {
    name: "Business Local",
    price: "à partir de 250 $",
    delay: "3–7 jours",
    desc: "Pensé pour les commerces de proximité : restaurants, salons, boutiques.",
    features: [
      "Présentation de l'activité et des offres",
      "Carte / menu / catalogue simple",
      "Horaires, localisation et itinéraire",
      "Contact direct WhatsApp",
    ],
    wa: "Bonjour IASA, je suis intéressé(e) par l'offre Business Local.",
  },
  {
    name: "Business Pro",
    price: "à partir de 500 $",
    delay: "selon cahier des charges",
    desc: "Pour les entreprises qui veulent une présence solide et évolutive.",
    features: [
      "Architecture multi-pages complète",
      "Pages services détaillées",
      "Blog ou actualités si nécessaire",
      "Optimisation des performances",
    ],
    wa: "Bonjour IASA, je suis intéressé(e) par l'offre Business Pro.",
  },
  {
    name: "Business Premium IA",
    price: "850 $",
    delay: "8–14 jours",
    desc: "Notre offre la plus complète, avec contenus visuels et vidéo produits par IASA.",
    features: [
      "Site complet multi-pages premium",
      "Contenus visuels et vidéo créés pour vous",
      "Animations avancées et expérience soignée",
      "Accompagnement renforcé après livraison",
    ],
    wa: "Bonjour IASA, je suis intéressé(e) par l'offre Business Premium IA (850 $).",
    highlight: true,
  },
];

export const UGC_OFFERS: Offer[] = [
  {
    name: "1 vidéo UGC IA",
    price: "20 $",
    delay: "1–3 jours",
    desc: "Une vidéo verticale prête à publier.",
    features: ["Script court", "Voix et rythme adaptés", "Format 9:16", "1 révision incluse"],
    wa: "Bonjour IASA, je suis intéressé(e) par 1 vidéo UGC IA (20 $).",
  },
  {
    name: "Pack 3 vidéos",
    price: "55 $",
    delay: "1–3 jours",
    desc: "Trois angles différents pour tester ce qui fonctionne.",
    features: ["3 scripts distincts", "Variations de accroches", "Format 9:16", "Cohérence de marque"],
    wa: "Bonjour IASA, je suis intéressé(e) par le pack 3 vidéos UGC IA (55 $).",
    highlight: true,
  },
  {
    name: "Pack 5 vidéos",
    price: "100 $",
    delay: "1–3 jours",
    desc: "De quoi alimenter vos publications pendant plusieurs semaines.",
    features: ["5 scripts distincts", "Angles variés", "Format 9:16", "Idéal test créatif"],
    wa: "Bonjour IASA, je suis intéressé(e) par le pack 5 vidéos UGC IA (100 $).",
  },
  {
    name: "Campagne personnalisée",
    price: "sur devis",
    delay: "selon volume",
    desc: "Un volume régulier de contenus, planifié avec vous.",
    features: ["Volume défini ensemble", "Calendrier de livraison", "Suivi continu", "Tarif adapté au volume"],
    wa: "Bonjour IASA, je souhaite une campagne UGC IA personnalisée.",
  },
];

export const MONTAGE_OFFERS: Offer[] = [
  {
    name: "Montage simple",
    price: "10 $",
    delay: "1–3 jours",
    desc: "Coupes propres, musique et rendu net.",
    features: ["Nettoyage des rushes", "Musique libre de droits", "Export optimisé"],
    wa: "Bonjour IASA, je suis intéressé(e) par un montage simple (10 $).",
  },
  {
    name: "Montage dynamique",
    price: "20 $",
    delay: "1–3 jours",
    desc: "Rythme soutenu, effets et sous-titres.",
    features: ["Sous-titres animés", "Transitions dynamiques", "Sound design léger"],
    wa: "Bonjour IASA, je suis intéressé(e) par un montage dynamique (20 $).",
    highlight: true,
  },
  {
    name: "TikTok / Reel / Short",
    price: "20 $",
    delay: "1–3 jours",
    desc: "Format vertical pensé pour la rétention.",
    features: ["Accroche travaillée", "Format 9:16", "Sous-titres inclus"],
    wa: "Bonjour IASA, je suis intéressé(e) par un montage TikTok / Reel / Short (20 $).",
  },
  {
    name: "YouTube jusqu'à 5 min",
    price: "30 $",
    delay: "1–3 jours",
    desc: "Un montage clair et rythmé pour votre chaîne.",
    features: ["Structure narrative", "Habillage simple", "Étalonnage"],
    wa: "Bonjour IASA, je suis intéressé(e) par un montage YouTube (jusqu'à 5 min, 30 $).",
  },
  {
    name: "YouTube 5–15 min",
    price: "40 $",
    delay: "1–3 jours",
    desc: "Format long, avec chapitrage et habillage.",
    features: ["Montage long format", "Habillage graphique", "Mixage audio"],
    wa: "Bonjour IASA, je suis intéressé(e) par un montage YouTube 5–15 min (40 $).",
  },
  {
    name: "Vidéo publicitaire",
    price: "45 $",
    delay: "1–3 jours",
    desc: "Un montage orienté vente, prêt pour vos campagnes.",
    features: ["Structure publicitaire", "Appel à l'action", "Déclinaison de format possible"],
    wa: "Bonjour IASA, je suis intéressé(e) par une vidéo publicitaire (45 $).",
  },
  {
    name: "Projet complexe",
    price: "sur devis",
    delay: "selon cahier des charges",
    desc: "Documentaire, série de contenus, projet à fort volume.",
    features: ["Analyse du besoin", "Devis détaillé", "Planning de production"],
    wa: "Bonjour IASA, je souhaite un devis pour un projet de montage complexe.",
  },
];

export const PUB_OFFERS: Offer[] = [
  {
    name: "Publicité simple",
    price: "20 $",
    delay: "1–3 jours",
    desc: "Une vidéo courte qui met le produit en avant.",
    features: ["Mise en avant produit", "Musique et texte", "Format réseaux sociaux"],
    wa: "Bonjour IASA, je suis intéressé(e) par une publicité simple (20 $).",
  },
  {
    name: "Publicité avec voix IA",
    price: "30 $",
    delay: "1–3 jours",
    desc: "Une voix off générée par IA porte votre message.",
    features: ["Script publicitaire", "Voix off IA", "Sous-titres"],
    wa: "Bonjour IASA, je suis intéressé(e) par une publicité avec voix IA (30 $).",
    highlight: true,
  },
  {
    name: "Publicité premium",
    price: "35 $",
    delay: "1–3 jours",
    desc: "Un rendu plus travaillé : rythme, effets et finitions.",
    features: ["Direction créative", "Effets soignés", "Étalonnage"],
    wa: "Bonjour IASA, je suis intéressé(e) par une publicité premium (35 $).",
  },
  {
    name: "Publicité avec avatar IA",
    price: "50 $",
    delay: "1–3 jours",
    desc: "Un présentateur généré par IA parle de votre produit.",
    features: ["Avatar IA", "Script personnalisé", "Format vertical ou horizontal"],
    wa: "Bonjour IASA, je suis intéressé(e) par une publicité avec avatar IA (50 $).",
  },
  {
    name: "Pack 3 publicités simples",
    price: "50 $",
    delay: "1–3 jours",
    desc: "Trois variantes pour tester vos accroches.",
    features: ["3 vidéos", "Angles différents", "Tarif groupé"],
    wa: "Bonjour IASA, je suis intéressé(e) par le pack 3 publicités simples (50 $).",
  },
  {
    name: "Campagne personnalisée",
    price: "sur devis",
    delay: "selon volume",
    desc: "Une série de publicités planifiée sur la durée.",
    features: ["Volume défini ensemble", "Calendrier", "Tarif selon volume"],
    wa: "Bonjour IASA, je souhaite une campagne publicitaire personnalisée.",
  },
];

export const PROCESS_STEPS = [
  {
    n: "01",
    title: "Prise de contact",
    text: "Vous nous écrivez sur WhatsApp, par email ou via le formulaire. Nous répondons rapidement.",
  },
  {
    n: "02",
    title: "Compréhension du besoin",
    text: "Nous posons les bonnes questions : objectif, cible, contenus disponibles, échéance.",
  },
  {
    n: "03",
    title: "Proposition & devis",
    text: "Vous recevez une proposition claire : périmètre, prix, délai et nombre de révisions.",
  },
  {
    n: "04",
    title: "Création",
    text: "Nous produisons le site, les vidéos ou les visuels, en vous tenant informé de l'avancée.",
  },
  {
    n: "05",
    title: "Révisions",
    text: "Vous donnez votre retour, nous ajustons selon ce qui est prévu dans le devis.",
  },
  {
    n: "06",
    title: "Livraison",
    text: "Vous recevez les fichiers finaux ou le site mis en ligne, prêt à être utilisé.",
  },
  {
    n: "07",
    title: "Suivi",
    text: "Nous restons disponibles pour vous accompagner après la livraison.",
  },
];

export const FAQ_ITEMS = [
  {
    q: "Quels sont les délais ?",
    a: "Pour les vidéos (UGC IA, montage, publicités), comptez généralement 1 à 3 jours. Pour un site simple, environ 3 à 7 jours. L'offre Business Premium IA demande 8 à 14 jours. Les projets complexes sont planifiés selon le cahier des charges convenu ensemble.",
  },
  {
    q: "Comment demander un devis ?",
    a: "Écrivez-nous sur WhatsApp, envoyez un email ou remplissez le formulaire de la page Contact. Décrivez votre besoin, votre budget indicatif et votre échéance : nous revenons vers vous avec une proposition claire.",
  },
  {
    q: "Comment fonctionne le paiement ?",
    a: "Les modalités sont fixées dans le devis avant le démarrage : montant, échéancier et moyen de paiement convenu ensemble. Rien ne commence sans accord écrit sur ces points.",
  },
  {
    q: "Combien de révisions sont incluses ?",
    a: "Le nombre de révisions est précisé dans chaque devis, selon le type de prestation. L'objectif est simple : que le résultat final vous convienne, dans le cadre défini au départ.",
  },
  {
    q: "Travaillez-vous avec des clients à distance ?",
    a: "Oui. Tout se fait à distance : échanges par WhatsApp ou email, partage des contenus en ligne, livraison des fichiers ou mise en ligne du site.",
  },
  {
    q: "Faites-vous des collaborations mensuelles ?",
    a: "Oui. En plus des projets ponctuels, nous proposons des collaborations mensuelles et des partenariats sur la durée, avec un volume et un rythme définis ensemble dans un accord écrit.",
  },
  {
    q: "Quels types de sites créez-vous ?",
    a: "Landing pages, sites vitrines, sites pour commerces locaux (restaurants, boutiques, hôtels, salons), sites d'entreprise, boutiques e-commerce et projets sur mesure.",
  },
  {
    q: "Pouvez-vous créer des vidéos publicitaires ?",
    a: "Oui. Nous réalisons des vidéos publicitaires produits, avec voix off IA ou avatar IA en option, ainsi que des packs de plusieurs variantes pour tester vos accroches.",
  },
  {
    q: "Comment envoyer les contenus nécessaires ?",
    a: "Vous pouvez nous transmettre vos textes, photos, logos et rushes par WhatsApp ou par email, ou via un lien de partage (Drive, WeTransfer). Nous vous indiquons précisément ce dont nous avons besoin au démarrage.",
  },
  {
    q: "Quelle est votre politique de satisfaction ?",
    a: "Nous ne promettons pas de conditions juridiques génériques : chaque devis précise le périmètre, les révisions incluses et les modalités convenues. C'est ce document qui fait foi entre nous.",
  },
];

export const NAV_LINKS = [
  { to: "/", label: "Accueil" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/tarifs", label: "Tarifs" },
  { to: "/a-propos", label: "À propos" },
  { to: "/vision", label: "Vision" },
  { to: "/collaboration", label: "Collaboration" },
  { to: "/processus", label: "Processus" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;
