import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pour les parents et étudiants — Recherche d'école gratuite",
  description:
    "Recherchez et comparez les écoles au Maroc gratuitement : filières, tarifs, transport scolaire, frais d'inscription, cantine. SchoolGate — bientôt disponible.",
};

function PageHero() {
  return (
    <section className="bg-gradient-to-br from-blue-950 to-blue-800 text-white py-16 sm:py-20">
      <div className="section-container">
        <nav className="text-sm text-blue-300 mb-6">
          <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
          <span className="mx-2">/</span>
          <span className="text-white">Pour les parents</span>
        </nav>
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="badge-free font-semibold text-sm">
              ✓ Gratuit pour les familles
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-white">
            Trouvez la bonne école pour votre enfant
          </h1>
          <p className="mt-4 text-blue-200 text-lg leading-relaxed">
            Comparez les établissements scolaires au Maroc selon vos critères réels —
            filière, ville, budget, transport, frais d'inscription — depuis votre téléphone.
          </p>
          <span className="badge-coming-soon mt-6 inline-flex">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 inline-block" />
            Plateforme bientôt disponible
          </span>
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
          <circle cx="11" cy="11" r="8" />
          <path d="M21 21l-4.35-4.35" />
        </svg>
      ),
      title: "Recherche multi-critères",
      desc: "Cherchez par filière (Bac scientifique, économique, littéraire, CPGE, BTS…), par ville ou région, et par niveau scolaire de votre enfant.",
    },
    {
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
          <path d="M3 6h18M3 12h18M3 18h11" />
        </svg>
      ),
      title: "Filtres avancés",
      desc: "Affinez par budget mensuel, présence de transport scolaire, cantine, internat, et fourchette de frais d'inscription.",
    },
    {
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
          <rect x="2" y="3" width="9" height="18" rx="2" />
          <rect x="13" y="3" width="9" height="18" rx="2" />
        </svg>
      ),
      title: "Comparaison côte à côte",
      desc: "Sélectionnez plusieurs établissements et comparez-les côte à côte : tarifs, filières, équipements, localisation.",
    },
    {
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
          <polyline points="14 2 14 8 20 8" />
        </svg>
      ),
      title: "Fiches école complètes",
      desc: "Consultez les informations détaillées de chaque établissement : adresse, filières, tarifs annuels, effectifs, photos, options disponibles.",
    },
    {
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.05 1.22 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z" />
        </svg>
      ),
      title: "Contact direct avec l'école",
      desc: "Envoyez une demande de contact ou de visite directement à l'établissement depuis la plateforme.",
    },
    {
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
          <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
        </svg>
      ),
      title: "Favoris et sélection",
      desc: "Enregistrez les écoles qui vous intéressent pour y revenir facilement et construire votre liste de choix.",
    },
  ];

  return (
    <section className="py-14 sm:py-20 bg-stone-50">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title">Ce que vous pourrez faire</h2>
          <p className="section-subtitle max-w-xl mx-auto">
            SchoolGate met tous les outils à votre disposition pour comparer les écoles avec sérénité.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="card">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mb-4">
                {f.icon}
              </div>
              <h3 className="font-display font-semibold text-blue-900 mb-2">{f.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DataSection() {
  return (
    <section className="py-14 sm:py-20 bg-white">
      <div className="section-container max-w-4xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="section-title mb-4">Données demandées et usage</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Pour créer un compte et bénéficier d'un profil personnalisé, nous vous demanderons
              les informations suivantes :
            </p>
            <ul className="space-y-3">
              {[
                { field: "Adresse email", usage: "Pour la création et la gestion de votre compte." },
                { field: "Ville / région", usage: "Pour vous proposer les écoles proches de chez vous." },
                { field: "Niveau ou classe de votre enfant", usage: "Pour filtrer les établissements adaptés." },
              ].map((item) => (
                <li key={item.field} className="flex gap-3">
                  <span className="w-2 h-2 rounded-full bg-amber-400 mt-2 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-blue-900 text-sm">{item.field}</span>
                    <span className="text-gray-600 text-sm"> — {item.usage}</span>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-6 bg-green-50 border border-green-200 rounded-xl p-4">
              <p className="text-sm text-green-800 font-medium">
                ✓ Ces données ne seront jamais revendues ni partagées avec des tiers sans votre consentement.
                Elles sont utilisées uniquement pour personnaliser votre expérience sur SchoolGate.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
            <h3 className="font-display font-semibold text-blue-900 text-lg mb-4">
              Vos droits sur vos données
            </h3>
            <p className="text-sm text-blue-800 mb-4">
              Conformément à la <strong>loi n° 09-08</strong>, vous disposez des droits suivants :
            </p>
            <ul className="space-y-2">
              {[
                "Droit d'accès à vos données",
                "Droit de rectification",
                "Droit d'opposition au traitement",
                "Droit de suppression de votre compte",
              ].map((right) => (
                <li key={right} className="flex items-center gap-2 text-sm text-blue-700">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {right}
                </li>
              ))}
            </ul>
            <Link href="/confidentialite" className="text-sm text-blue-700 font-medium underline underline-offset-2 mt-4 inline-block hover:text-blue-900">
              Lire notre politique de confidentialité →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function ComingSoonBanner() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
      <div className="section-container text-center">
        <div className="w-16 h-16 rounded-2xl bg-white/10 text-white flex items-center justify-center mx-auto mb-6">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
        </div>
        <h2 className="text-3xl font-display font-bold text-white mb-4">
          Bientôt disponible pour les familles
        </h2>
        <p className="text-blue-200 text-lg max-w-lg mx-auto mb-8">
          La plateforme est en cours de développement. Soyez parmi les premiers informés
          du lancement en nous contactant.
        </p>
        <Link href="/contact" className="btn-primary">
          Être notifié du lancement
        </Link>
        <p className="text-blue-400 text-sm mt-4">
          Accès gratuit pour toutes les familles — aucun abonnement requis.
        </p>
      </div>
    </section>
  );
}

export default function ParentsPage() {
  return (
    <>
      <PageHero />
      <FeaturesSection />
      <DataSection />
      <ComingSoonBanner />
    </>
  );
}
