import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";
import PreRegistrationForm from "@/components/PreRegistrationForm";

export const metadata: Metadata = {
  title: "Pour les écoles — Référencez votre établissement sur SchoolGate",
  description:
    "Publiez votre fiche école, vos filières, tarifs et informations pratiques. Offres Gratuit, Premium et Premium+ pour les établissements scolaires marocains.",
};

function PageHero() {
  return (
    <section className="bg-gradient-to-br from-blue-950 to-blue-800 text-white py-16 sm:py-20">
      <div className="section-container">
        <nav className="text-sm text-blue-300 mb-6">
          <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
          <span className="mx-2">/</span>
          <span className="text-white">Pour les écoles</span>
        </nav>
        <div className="max-w-2xl">
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-white">
            Donnez à votre école la visibilité qu'elle mérite
          </h1>
          <p className="mt-4 text-blue-200 text-lg leading-relaxed">
            SchoolGate est la plateforme marocaine de référence pour les familles qui cherchent
            une école. Référencez votre établissement, publiez vos informations et recevez
            directement les demandes des parents.
          </p>
          <div className="mt-6 flex items-center gap-3 flex-wrap">
            <span className="badge-coming-soon">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 inline-block" />
              Inscriptions écoles — bientôt ouvertes
            </span>
            <a href="#preinscrire" className="btn-primary text-sm">
              Pré-inscription gratuite →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ObjectiveSection() {
  return (
    <section className="py-14 sm:py-20 bg-white">
      <div className="section-container max-w-4xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title mb-4">Pourquoi rejoindre SchoolGate ?</h2>
            <p className="text-gray-600 leading-relaxed">
              Aujourd'hui, les familles marocaines cherchent une école en passant des dizaines
              d'appels et en consultant des dizaines de pages non structurées. Les informations
              essentielles — tarifs, filières, transport, frais d'inscription — sont rarement
              regroupées au même endroit.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              SchoolGate change ça. En publiant votre fiche une seule fois, vous devenez
              immédiatement visible auprès de milliers de familles qui cherchent activement
              un établissement comme le vôtre — dans votre ville, pour vos filières,
              dans leur budget.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              C'est un canal d'acquisition direct, transparent et maîtrisé par votre école.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              {
                icon: "🎯",
                title: "Audience qualifiée",
                desc: "Des parents qui cherchent activement — filière, ville, budget correspondant à votre profil.",
              },
              {
                icon: "📋",
                title: "Une fiche complète",
                desc: "Publiez toutes vos infos en une fois : filières, tarifs, équipements, photos.",
              },
              {
                icon: "📩",
                title: "Demandes directes",
                desc: "Recevez les demandes de contact et de renseignement des familles intéressées.",
              },
              {
                icon: "📊",
                title: "Données de marché",
                desc: "Avec Premium+, accédez aux tendances de recherche pour adapter votre communication.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-stone-50 rounded-2xl p-4 border border-gray-100">
                <span className="text-2xl mb-2 block">{item.icon}</span>
                <h3 className="font-semibold text-blue-900 text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const features = [
    {
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M8 21h8M12 17v4" />
        </svg>
      ),
      title: "Fiche établissement",
      desc: "Nom, adresse, photos, filières, niveaux, frais d'inscription, frais de scolarité, transport, cantine, internat, effectifs.",
    },
    {
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
        </svg>
      ),
      title: "Réception des demandes",
      desc: "Les familles intéressées vous envoient une demande directement depuis votre fiche.",
    },
    {
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
          <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Gestion et mise à jour",
      desc: "Mettez à jour vos informations à tout moment depuis votre espace de gestion.",
    },
    {
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
          <circle cx="11" cy="11" r="8" />
          <path d="M21 21l-4.35-4.35" />
        </svg>
      ),
      title: "Visibilité dans les recherches",
      desc: "Votre école apparaît dans les résultats filtrés par ville, filière, budget et options — exactement là où les familles cherchent.",
    },
  ];

  return (
    <section className="py-14 sm:py-20 bg-stone-50">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title">Ce que vous obtenez</h2>
          <p className="section-subtitle max-w-xl mx-auto">
            Un espace complet pour présenter votre école et recevoir des demandes qualifiées.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((f) => (
            <div key={f.title} className="card flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center flex-shrink-0">
                {f.icon}
              </div>
              <div>
                <h3 className="font-display font-semibold text-base text-blue-900 mb-1">{f.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DataSection() {
  const dataFields = [
    "Nom et adresse complète de l'établissement",
    "Filières et niveaux proposés",
    "Frais de scolarité par niveau",
    "Frais d'inscription",
    "Nombre d'élèves",
    "Transport scolaire (oui / non)",
    "Cantine (oui / non)",
    "Internat (oui / non)",
    "Photos de l'établissement",
    "Email et nom du responsable du compte (non publié)",
  ];

  return (
    <section className="py-14 sm:py-20 bg-white">
      <div className="section-container max-w-4xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="section-title mb-4">Données publiées sur la plateforme</h2>
            <p className="text-gray-600 leading-relaxed">
              Les informations que vous saisissez sont <strong>destinées à être publiées</strong> et
              consultées par les familles. Ce sont des données d'établissement, saisies et validées
              par votre école — vous en gardez le contrôle total.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4 text-sm">
              La seule donnée personnelle collectée côté école est l'email et le nom du responsable
              du compte, utilisés uniquement pour la gestion de l'abonnement — non publiés.
            </p>
          </div>
          <div className="bg-stone-50 rounded-2xl p-6 border border-gray-100">
            <h3 className="font-semibold text-blue-900 text-sm uppercase tracking-wide mb-4">
              Informations saisies par l'école
            </h3>
            <ul className="space-y-2">
              {dataFields.map((field) => (
                <li key={field} className="flex items-center gap-2 text-sm text-gray-700">
                  <span className="w-4 h-4 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  {field}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  const { free, premium, premiumPlus, disclaimer } = SITE_CONFIG.pricing;

  const plans = [
    {
      key: "free",
      data: free,
      highlight: false,
      badge: null,
      priceLabel: "Gratuit",
      priceSubLabel: "Pour toujours",
      features: free.features,
      btnLabel: "Démarrer gratuitement",
      btnClass: "w-full bg-white border-2 border-blue-800 text-blue-800 font-semibold py-3 rounded-xl cursor-not-allowed opacity-60 text-sm",
    },
    {
      key: "premium",
      data: premium,
      highlight: false,
      badge: null,
      priceLabel: `${premium.price} ${premium.currency}`,
      priceSubLabel: `/ ${premium.period}`,
      features: premium.features,
      btnLabel: "Choisir Premium",
      btnClass: "w-full bg-blue-800 text-white font-semibold py-3 rounded-xl cursor-not-allowed opacity-60 text-sm",
    },
    {
      key: "premiumPlus",
      data: premiumPlus,
      highlight: true,
      badge: "RECOMMANDÉ",
      priceLabel: `${premiumPlus.price} ${premiumPlus.currency}`,
      priceSubLabel: `/ ${premiumPlus.period}`,
      features: premiumPlus.features,
      btnLabel: "Choisir Premium+",
      btnClass: "w-full bg-amber-500 text-white font-bold py-3 rounded-xl cursor-not-allowed opacity-60 text-sm",
    },
  ];

  return (
    <section className="py-14 sm:py-24 bg-gradient-to-br from-blue-950 to-blue-800 text-white">
      <div className="section-container">
        <div className="text-center mb-4">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
            Choisissez votre formule
          </h2>
          <p className="text-blue-200 mt-4 max-w-lg mx-auto">
            Commencez gratuitement et évoluez selon vos ambitions.
            Les parents et étudiants accèdent à la plateforme entièrement gratuitement.
          </p>
          <div className="mt-3 inline-flex items-center gap-1.5 bg-white/10 border border-white/20 text-amber-300 text-xs font-medium px-3 py-1.5 rounded-full">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 8v4M12 16h.01" />
            </svg>
            {disclaimer}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.key}
              className={`relative rounded-2xl p-6 flex flex-col ${
                plan.highlight
                  ? "bg-amber-500 shadow-2xl scale-105"
                  : "bg-white/10 border border-white/20 backdrop-blur-sm"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-blue-900 text-white text-xs font-bold px-4 py-1 rounded-full shadow">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <p className={`text-xs font-semibold uppercase tracking-widest mb-1 ${plan.highlight ? "text-amber-100" : "text-blue-300"}`}>
                  {plan.data.label}
                </p>
                <p className={`text-sm mb-3 ${plan.highlight ? "text-amber-100" : "text-blue-200"}`}>
                  {plan.data.tagline}
                </p>
                <div className="flex items-end gap-1">
                  <span className="text-3xl font-display font-bold text-white">{plan.priceLabel}</span>
                  <span className={`pb-1 text-sm ${plan.highlight ? "text-amber-100" : "text-blue-200"}`}>
                    {plan.priceSubLabel}
                  </span>
                </div>
              </div>

              <ul className="space-y-2.5 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-white">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={plan.highlight ? "white" : "#E67E22"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-0.5" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <button disabled className={plan.btnClass}>
                Bientôt disponible
              </button>
            </div>
          ))}
        </div>

        {/* Premium+ rapport detail */}
        <div className="mt-10 max-w-2xl mx-auto bg-white/10 border border-white/20 rounded-2xl p-6 text-center">
          <div className="text-2xl mb-2">📊</div>
          <h3 className="font-display font-semibold text-white text-lg mb-2">
            Le rapport d'analyse Premium+
          </h3>
          <p className="text-blue-200 text-sm leading-relaxed">
            {SITE_CONFIG.pricing.premiumPlus.reportDetail}
          </p>
        </div>

        {/* Payment note */}
        <p className="text-center text-blue-300 text-sm mt-8 max-w-md mx-auto">
          Le paiement se fera en ligne de façon sécurisée via notre partenaire bancaire,
          une fois la plateforme lancée.
        </p>
      </div>
    </section>
  );
}


export default function EcolesPage() {
  return (
    <>
      <PageHero />
      <ObjectiveSection />
      <FeaturesSection />
      <DataSection />
      <PricingSection />
      <PreRegistrationForm />
    </>
  );
}
