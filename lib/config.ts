// =============================================================
// FICHIER DE CONFIGURATION CENTRALE — SchoolGate
// Modifiez ici tous les placeholders avant la mise en production
// =============================================================

export const SITE_CONFIG = {
  name: "SchoolGate",
  domain: "schoolgate.ma",
  url: "https://schoolgate.ma",
  tagline: "La porte vers la bonne école au Maroc",
  description:
    "SchoolGate centralise et compare les écoles au Maroc — filières, tarifs, transport scolaire, frais d'inscription, cantine et plus encore.",

  // ----------------------------------------------------------
  // PORTEUR DU PROJET
  // ----------------------------------------------------------
  owner: {
    name: "Bayahia Hamza",
    status: "Auto-entrepreneur",
    ice: "00382536000055",
    phone: "0642934427",
    phoneFormatted: "06 42 93 44 27",
    // TODO: ajouter l'adresse email de contact dès disponible
    // email: "contact@schoolgate.ma",
  },

  // ----------------------------------------------------------
  // CNDP — Déclaration protection des données
  // TODO: remplacer null par le numéro reçu de la CNDP — ex: "D-XXXX/2026"
  // ----------------------------------------------------------
  cndp: {
    declarationNumber: null as string | null,
    statusLabel: "Déclaration CNDP en cours",
  },

  // ----------------------------------------------------------
  // HÉBERGEUR
  // ----------------------------------------------------------
  hosting: {
    name: "Vercel Inc.",
    address: "340 Pine Street, Suite 1020, San Francisco, CA 94104, USA",
    website: "https://vercel.com",
  },

  // ----------------------------------------------------------
  // TARIFS ABONNEMENT ÉCOLE (modifiables)
  // ----------------------------------------------------------
  pricing: {
    free: {
      price: 0,
      currency: "DH",
      label: "Gratuit",
      tagline: "Pour commencer",
      features: [
        "Fiche établissement basique",
        "Nom, adresse, filières et niveaux",
        "1 photo de l'établissement",
        "Réception des demandes parents",
        "Visibilité standard dans les résultats",
      ],
      limitations: [
        "Photos limitées (1)",
        "Pas de mise en avant dans les résultats",
        "Pas d'accès aux analyses",
      ],
    },
    premium: {
      price: 300,
      currency: "DH",
      period: "mois",
      label: "Premium",
      tagline: "Pour être visible",
      features: [
        "Tout ce qui est inclus dans Gratuit",
        "Jusqu'à 10 photos haute qualité",
        "Description détaillée et personnalisée",
        "Mise en avant dans les résultats de recherche",
        "Badge « École vérifiée »",
        "Profil enrichi : équipements, activités, pédagogie",
        "Support prioritaire",
      ],
    },
    premiumPlus: {
      price: 600,
      currency: "DH",
      period: "mois",
      label: "Premium+",
      tagline: "Pour piloter votre visibilité",
      features: [
        "Tout ce qui est inclus dans Premium",
        "Position prioritaire en tête des résultats",
        "Rapport d'analyse semestriel personnalisé",
        "Données sur les recherches : filières, villes, budgets tendance",
        "Conseils stratégiques pour optimiser votre fiche",
        "Accès aux statistiques de vues et de demandes",
        "Gestionnaire de compte dédié",
      ],
      reportDetail:
        "Tous les 6 mois, recevez un rapport complet sur ce que recherchent les familles : filières les plus demandées, villes d'où proviennent les recherches, budgets types, périodes de pic — pour adapter votre offre aux tendances réelles du marché.",
    },
    disclaimer:
      "Tarifs indicatifs susceptibles d'évoluer avant le lancement officiel.",
  },

  // ----------------------------------------------------------
  // NAVIGATION
  // ----------------------------------------------------------
  nav: [
    { label: "Accueil", href: "/" },
    { label: "Pour les parents", href: "/parents" },
    { label: "Pour les écoles", href: "/ecoles" },
    { label: "À propos", href: "/a-propos" },
    { label: "Contact", href: "/contact" },
  ],

  legalNav: [
    { label: "Mentions légales", href: "/mentions-legales" },
    { label: "CGU", href: "/cgu" },
    { label: "CGV", href: "/cgv" },
    { label: "Confidentialité", href: "/confidentialite" },
  ],
} as const;

export type SiteConfig = typeof SITE_CONFIG;
