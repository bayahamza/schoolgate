"use client";

import { useActionState } from "react";
import { submitSchoolRegistration, type SchoolRegState } from "@/app/actions/school-registration";
import { SITE_CONFIG } from "@/lib/config";

const initialState: SchoolRegState = { status: "idle" };

const PLANS = [
  { value: "free",         label: "Gratuit — listing de base" },
  { value: "premium",      label: `Premium — ${SITE_CONFIG.pricing.premium.price} ${SITE_CONFIG.pricing.premium.currency} / mois` },
  { value: "premium_plus", label: `Premium+ — ${SITE_CONFIG.pricing.premiumPlus.price} ${SITE_CONFIG.pricing.premiumPlus.currency} / mois` },
  { value: "unknown",      label: "Je ne sais pas encore" },
];

export default function PreRegistrationForm() {
  const [state, action, isPending] = useActionState(
    submitSchoolRegistration,
    initialState
  );

  return (
    <section id="preinscrire" className="py-14 sm:py-24 bg-stone-50">
      <div className="section-container max-w-3xl">
        <div className="text-center mb-10">
          <span className="badge-coming-soon mb-4 inline-flex">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 inline-block" />
            Liste d'attente ouverte
          </span>
          <h2 className="section-title">Pré-inscrivez votre école</h2>
          <p className="section-subtitle max-w-xl mx-auto">
            SchoolGate n'est pas encore ouvert aux inscriptions officielles. Laissez vos coordonnées
            et soyez parmi les <strong>premiers établissements référencés</strong> au lancement.
            C'est gratuit et sans engagement.
          </p>
        </div>

        {state.status === "success" ? (
          <div className="card border-2 border-green-200 bg-green-50 text-center py-14">
            <div className="w-16 h-16 rounded-2xl bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-4">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h3 className="font-display font-bold text-xl text-green-800 mb-2">
              Pré-inscription enregistrée !
            </h3>
            <p className="text-green-700 text-sm max-w-sm mx-auto">
              Votre établissement a bien été ajouté à notre liste de lancement.
              Nous vous contacterons en priorité à l'ouverture de la plateforme.
            </p>
          </div>
        ) : (
          <div className="card border-2 border-blue-100">
            {state.status === "error" && (
              <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-5 flex items-start gap-2 text-sm text-red-700">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="flex-shrink-0 mt-0.5" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" /><path d="M12 8v4M12 16h.01" />
                </svg>
                {state.message}
              </div>
            )}

            <form action={action} noValidate className="space-y-5">
              {/* Ligne 1 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="schoolName" className="block text-sm font-semibold text-blue-900 mb-1.5">
                    Nom de l'établissement <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="schoolName"
                    name="schoolName"
                    type="text"
                    required
                    placeholder="Ex : Lycée Al Khawarizmi"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="city" className="block text-sm font-semibold text-blue-900 mb-1.5">
                    Ville <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="city"
                    name="city"
                    type="text"
                    required
                    placeholder="Ex : Casablanca"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Ligne 2 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="contactName" className="block text-sm font-semibold text-blue-900 mb-1.5">
                    Nom du responsable <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="contactName"
                    name="contactName"
                    type="text"
                    required
                    placeholder="Prénom et nom"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-blue-900 mb-1.5">
                    Téléphone <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="06XXXXXXXX"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-blue-900 mb-1.5">
                  Email professionnel{" "}
                  <span className="text-gray-400 font-normal">(facultatif)</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="direction@monecole.ma"
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                />
              </div>

              {/* Plan */}
              <div>
                <label htmlFor="planInterest" className="block text-sm font-semibold text-blue-900 mb-1.5">
                  Formule envisagée
                </label>
                <select
                  id="planInterest"
                  name="planInterest"
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                >
                  {PLANS.map((p) => (
                    <option key={p.value} value={p.value}>{p.label}</option>
                  ))}
                </select>
                <p className="text-xs text-gray-400 mt-1.5">
                  {SITE_CONFIG.pricing.disclaimer}
                </p>
              </div>

              {/* Submit */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
                <button
                  type="submit"
                  disabled={isPending}
                  className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isPending ? (
                    <>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="animate-spin" aria-hidden="true">
                        <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" opacity=".25"/><path d="M21 12a9 9 0 00-9-9"/>
                      </svg>
                      Envoi en cours…
                    </>
                  ) : (
                    <>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                      </svg>
                      Envoyer ma pré-inscription
                    </>
                  )}
                </button>
                <p className="text-xs text-gray-400">
                  Sans engagement — nous vous contacterons avant le lancement.
                </p>
              </div>
            </form>

            {/* Alternative */}
            <div className="mt-6 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center gap-4">
              <p className="text-sm text-gray-500">Ou contactez-nous directement :</p>
              <a href={`tel:${SITE_CONFIG.owner.phone}`} className="btn-secondary text-sm flex-shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.05 1.22 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z"/>
                </svg>
                {SITE_CONFIG.owner.phoneFormatted}
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
