import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "À propos — Qui sommes-nous",
  description:
    "Découvrez l'histoire et la vision de SchoolGate, portée par Bayahia Hamza, auto-entrepreneur marocain engagé pour la transparence scolaire.",
};

function PageHero() {
  return (
    <section className="bg-gradient-to-br from-blue-950 to-blue-800 text-white py-16 sm:py-20">
      <div className="section-container">
        <nav className="text-sm text-blue-300 mb-6">
          <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
          <span className="mx-2">/</span>
          <span className="text-white">À propos</span>
        </nav>
        <h1 className="text-3xl sm:text-4xl font-display font-bold text-white">
          Qui suis-je ?
        </h1>
        <p className="mt-4 text-blue-200 text-lg max-w-xl">
          Le porteur du projet, la vision, et les engagements de SchoolGate.
        </p>
      </div>
    </section>
  );
}

export default function AProposPage() {
  return (
    <>
      <PageHero />

      <section className="py-14 sm:py-20">
        <div className="section-container max-w-4xl">

          {/* Porteur */}
          <div className="card mb-10 flex flex-col sm:flex-row gap-6 items-start">
            <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <div>
              <h2 className="font-display font-bold text-2xl text-blue-900 mb-1">
                {SITE_CONFIG.owner.name}
              </h2>
              <p className="text-amber-600 font-semibold text-sm mb-3">
                {SITE_CONFIG.owner.status} — ICE&nbsp;: {SITE_CONFIG.owner.ice}
              </p>
              <p className="text-gray-700 leading-relaxed">
                Porteur du projet SchoolGate, je suis un entrepreneur marocain convaincu que
                l'accès à une information scolaire claire et complète peut transformer le quotidien
                des familles. J'ai lancé ce projet pour apporter une solution concrète à un problème
                que j'ai moi-même observé : l'absence d'un outil centralisé pour comparer les écoles
                au Maroc.
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm text-gray-600">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.05 1.22 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z" />
                </svg>
                <a href={`tel:${SITE_CONFIG.owner.phone}`} className="hover:text-blue-700 transition-colors">
                  {SITE_CONFIG.owner.phoneFormatted}
                </a>
              </div>
            </div>
          </div>

          {/* Vision */}
          <div className="space-y-8">
            <div>
              <h2 className="font-display font-bold text-2xl text-blue-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-lg">💡</span>
                La vision
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Au Maroc, les familles passent des semaines à collecter des informations sur les établissements
                scolaires : appels téléphoniques, groupes WhatsApp, visites en personne… Pour finalement
                avoir des données souvent incomplètes ou outdatées.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                SchoolGate est né de ce constat. L'ambition est simple : offrir à chaque parent la possibilité
                de rechercher, filtrer et comparer les écoles selon ses critères réels — filière, ville, budget,
                transport, frais d'inscription, cantine — depuis son téléphone, en quelques minutes.
              </p>
            </div>

            {/* Origin */}
            <div>
              <h2 className="font-display font-bold text-2xl text-blue-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-lg">🏫</span>
                L'origine du projet
              </h2>
              <p className="text-gray-700 leading-relaxed">
                L'idée est venue d'une observation directe : lorsque l'on cherche une école pour le bac
                scientifique à Rabat, par exemple, il n'existe aucune source unique et fiable. Chaque famille
                part de zéro. Les écoles, elles, n'ont souvent pas les moyens de communiquer efficacement
                sur leur offre.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                SchoolGate crée le pont entre les deux : une plateforme où les écoles publient leurs informations
                une fois, et où les familles peuvent les consulter et comparer librement.
              </p>
            </div>

            {/* Commitments */}
            <div>
              <h2 className="font-display font-bold text-2xl text-blue-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-lg">🔒</span>
                Nos engagements
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    title: "Transparence totale",
                    desc: "Les informations publiées sont saisies par les écoles elles-mêmes et destinées à être publiques. Aucun contenu trompeur.",
                  },
                  {
                    title: "Protection des données",
                    desc: "Conformité à la loi marocaine n° 09-08. Les données personnelles des parents ne sont jamais revendues ni partagées sans consentement.",
                  },
                  {
                    title: "Accès gratuit aux familles",
                    desc: "Rechercher et comparer les écoles sera toujours gratuit pour les parents et les étudiants.",
                  },
                  {
                    title: "Honnêteté sur l'avancement",
                    desc: "La plateforme est en cours de développement. Nous ne présentons que ce qui existera réellement.",
                  },
                ].map((c) => (
                  <div key={c.title} className="bg-stone-50 rounded-xl p-4 border border-gray-100">
                    <h3 className="font-semibold text-blue-900 mb-1 text-sm">{c.title}</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">{c.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Legal */}
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
              <h2 className="font-display font-semibold text-lg text-blue-900 mb-3">
                Cadre légal et protection des données
              </h2>
              <p className="text-sm text-blue-800 leading-relaxed">
                SchoolGate respecte la <strong>loi n° 09-08</strong> relative à la protection des personnes
                physiques à l'égard du traitement des données à caractère personnel, sous le contrôle de la{" "}
                <strong>CNDP</strong> (Commission Nationale de contrôle de la protection des Données à
                caractère Personnel). La déclaration de traitement est en cours d'enregistrement.
              </p>
              <Link href="/confidentialite" className="text-sm text-blue-700 font-medium underline underline-offset-2 mt-3 inline-block hover:text-blue-900">
                Consulter notre politique de confidentialité →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
