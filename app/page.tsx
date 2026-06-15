import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
  description: SITE_CONFIG.description,
};

function StatusBanner() {
  return (
    <div className="bg-amber-50 border-b border-amber-200">
      <div className="section-container py-2.5">
        <p className="text-center text-sm text-amber-800 font-medium flex items-center justify-center gap-2">
          <span className="w-2 h-2 rounded-full bg-amber-400 inline-block animate-pulse" />
          Plateforme en cours de développement — Lancement prévu prochainement
        </p>
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="section-container relative py-12 sm:py-24 lg:py-36">
        <div className="max-w-3xl">
          {/* Logo hero */}
          <div className="mb-6">
            <Image
              src="/logo.png"
              alt="SchoolGate"
              width={540}
              height={177}
              priority
              className="h-20 sm:h-32 lg:h-44 w-auto brightness-0 invert"
            />
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-tight text-balance">
            La porte vers la bonne école au Maroc
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-blue-100 leading-relaxed max-w-2xl">
            SchoolGate centralise toutes les informations scolaires pour vous aider à comparer et choisir
            l'établissement idéal — filières, tarifs, transport, frais d'inscription, cantine, et bien plus.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link href="/parents" className="btn-primary">
              Découvrir pour les parents
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link href="/ecoles" className="btn-outline-white">
              Pour les écoles
            </Link>
          </div>
        </div>
      </div>

      {/* Wave */}
      <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 60L1440 60L1440 20C1200 60 960 0 720 20C480 40 240 0 0 20L0 60Z" fill="#FAFAF8" />
        </svg>
      </div>
    </section>
  );
}

function ProblemSection() {
  const problems = [
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v4M12 16h.01" />
        </svg>
      ),
      title: "Informations dispersées",
      desc: "Les détails sur les écoles (filières, tarifs, transport…) sont éparpillés sur des dizaines de sites, réseaux sociaux et pages WhatsApp.",
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
          <path d="M3 3h18v18H3z" />
          <path d="M9 9h6v6H9z" />
        </svg>
      ),
      title: "Comparaison impossible",
      desc: "Comparer plusieurs établissements implique des dizaines d'appels, de visites et un effort considérable — sans garantie d'avoir les bonnes infos.",
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
          <circle cx="11" cy="11" r="8" />
          <path d="M21 21l-4.35-4.35" />
        </svg>
      ),
      title: "Manque de transparence",
      desc: "Les frais réels, les effectifs, la présence d'une cantine ou d'un transport scolaire : ces informations essentielles sont rarement publiées clairement.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-stone-50">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title">Le problème aujourd'hui</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Au Maroc, choisir une école pour son enfant est un parcours du combattant.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {problems.map((p) => (
            <div key={p.title} className="card text-center">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center mx-auto mb-4">
                {p.icon}
              </div>
              <h3 className="font-display font-semibold text-lg text-blue-900 mb-2">{p.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SolutionSection() {
  const features = [
    "Recherche par ville, région, filière (Bac scientifique, économique, CPGE…)",
    "Filtres avancés : budget, frais d'inscription, présence de transport scolaire",
    "Informations sur la cantine, l'internat, le nombre d'élèves",
    "Comparaison côte à côte de plusieurs établissements",
    "Fiches école complètes avec tarifs, adresse, contacts",
    "Accès entièrement gratuit pour les parents et les étudiants",
  ];

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title">La solution SchoolGate</h2>
            <p className="section-subtitle">
              Une plateforme unique, centralisée et transparente pour comparer les écoles
              selon vos critères — en quelques clics, depuis votre téléphone.
            </p>

            <ul className="mt-8 space-y-3">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-gray-700 text-sm">
                  <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  {f}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex gap-4 flex-wrap">
              <Link href="/parents" className="btn-primary">
                En savoir plus
              </Link>
            </div>
          </div>

          {/* Illustration placeholder */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 flex items-center justify-center min-h-64 lg:min-h-96">
            <div className="text-center space-y-4">
              <Image
                src="/logo.png"
                alt="SchoolGate"
                width={220}
                height={72}
                className="mx-auto opacity-80"
              />
              <p className="text-blue-500 text-sm">Interface disponible au lancement</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  const stepsParents = [
    {
      num: "01",
      title: "Recherchez",
      desc: "Entrez votre ville, la région, le niveau ou la filière souhaitée. Filtrez selon votre budget et vos critères (transport, cantine, frais…).",
    },
    {
      num: "02",
      title: "Comparez",
      desc: "Consultez les fiches détaillées des établissements. Comparez plusieurs écoles côte à côte pour faire un choix éclairé.",
    },
    {
      num: "03",
      title: "Contactez",
      desc: "Envoyez une demande directement à l'école depuis la plateforme. L'équipe pédagogique vous répond.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-stone-50">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title">Comment ça marche</h2>
          <p className="section-subtitle max-w-xl mx-auto">
            Trois étapes simples pour trouver l'école idéale.
          </p>
        </div>

        {/* Steps parents */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-8">
            <span className="badge-free font-semibold">Pour les parents — gratuit</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {stepsParents.map((step) => (
              <div key={step.num} className="relative card">
                <div className="text-4xl font-display font-bold text-blue-100 select-none mb-3">
                  {step.num}
                </div>
                <h3 className="font-display font-semibold text-lg text-blue-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Schools preview */}
        <div className="bg-blue-900 rounded-2xl p-6 sm:p-8 text-white">
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <div className="flex-1 min-w-0">
              <span className="badge-coming-soon mb-3 inline-flex">Pour les écoles</span>
              <h3 className="font-display font-semibold text-xl mb-2">
                Un espace dédié à chaque établissement
              </h3>
              <p className="text-blue-200 text-sm leading-relaxed">
                Créez votre fiche, publiez vos filières et tarifs, gérez vos demandes de parents.
                Un abonnement mensuel ou annuel vous donne accès à toutes les fonctionnalités.
              </p>
            </div>
            <Link href="/ecoles" className="btn-outline-white self-center flex-shrink-0">
              Découvrir les offres
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-r from-amber-500 to-amber-400">
      <div className="section-container text-center">
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
          Prêt à simplifier votre recherche d'école ?
        </h2>
        <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto">
          SchoolGate sera bientôt disponible. Restez informé du lancement
          en nous contactant dès maintenant.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <Link href="/contact" className="bg-white text-amber-600 font-semibold px-8 py-3 rounded-xl hover:bg-amber-50 transition-colors shadow-md">
            Nous contacter
          </Link>
          <Link href="/ecoles" className="btn-outline-white">
            Pour les écoles
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <StatusBanner />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <CtaSection />
    </>
  );
}
