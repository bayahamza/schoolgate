import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — SchoolGate",
  description:
    "Contactez SchoolGate — Bayahia Hamza, auto-entrepreneur. Téléphone : 06 42 93 44 27. Pour toute question sur la plateforme ou son lancement.",
};

function PageHero() {
  return (
    <section className="bg-gradient-to-br from-blue-950 to-blue-800 text-white py-16 sm:py-20">
      <div className="section-container">
        <nav className="text-sm text-blue-300 mb-6">
          <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
          <span className="mx-2">/</span>
          <span className="text-white">Contact</span>
        </nav>
        <h1 className="text-3xl sm:text-4xl font-display font-bold text-white">
          Nous contacter
        </h1>
        <p className="mt-4 text-blue-200 text-lg max-w-lg">
          Une question sur SchoolGate, sur le lancement de la plateforme, ou sur un partenariat ?
          Nous sommes disponibles.
        </p>
      </div>
    </section>
  );
}

export default function ContactPage() {
  return (
    <>
      <PageHero />

      <section className="py-14 sm:py-20">
        <div className="section-container max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* Coordonnées */}
            <div className="space-y-6">
              <h2 className="font-display font-bold text-2xl text-blue-900">
                Coordonnées
              </h2>

              {/* Phone */}
              <a
                href={`tel:${SITE_CONFIG.owner.phone}`}
                className="flex items-center gap-4 bg-blue-900 text-white rounded-2xl p-6 hover:bg-blue-800 transition-colors group"
              >
                <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.05 1.22 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-blue-200 text-xs uppercase tracking-wide font-medium mb-1">Téléphone</p>
                  <p className="text-2xl font-display font-bold text-white tracking-wide">
                    {SITE_CONFIG.owner.phoneFormatted}
                  </p>
                  <p className="text-blue-300 text-xs mt-1">Appuyez pour appeler</p>
                </div>
              </a>

              {/* Raisons */}
              <div>
                <h3 className="font-semibold text-blue-900 text-sm uppercase tracking-wide mb-3">
                  Pourquoi nous contacter ?
                </h3>
                <ul className="space-y-2">
                  {[
                    "Être informé du lancement de SchoolGate",
                    "Inscrire votre établissement (liste d'attente)",
                    "Questions sur les abonnements et tarifs",
                    "Exercer vos droits sur vos données personnelles",
                    "Partenariat ou presse",
                  ].map((reason) => (
                    <li key={reason} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                      {reason}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Legal */}
              <div className="text-xs text-gray-400 flex items-start gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="flex-shrink-0 mt-0.5" aria-hidden="true">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0110 0v4" />
                </svg>
                Vos données sont traitées conformément à la loi n° 09-08.{" "}
                <Link href="/confidentialite" className="text-blue-600 hover:underline">
                  Politique de confidentialité
                </Link>
              </div>
            </div>

            {/* Formulaire */}
            <div>
              <h2 className="font-display font-bold text-2xl text-blue-900 mb-6">
                Formulaire de contact
              </h2>
              <ContactForm />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
