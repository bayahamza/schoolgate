"use client";

import { useActionState } from "react";
import { submitContact, type ContactFormState } from "@/app/actions/contact";

const initialState: ContactFormState = { status: "idle" };

const REASONS = [
  "Être informé du lancement",
  "Question sur les abonnements",
  "Inscrire mon établissement",
  "Exercer mes droits sur mes données",
  "Autre",
];

export default function ContactForm() {
  const [state, action, isPending] = useActionState(submitContact, initialState);

  if (state.status === "success") {
    return (
      <div className="card border-2 border-green-200 bg-green-50 text-center py-12">
        <div className="w-16 h-16 rounded-2xl bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-4">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="font-display font-bold text-xl text-green-800 mb-2">
          Message envoyé !
        </h3>
        <p className="text-green-700 text-sm max-w-xs mx-auto">
          Votre demande a bien été enregistrée. Nous vous recontacterons
          dans les meilleurs délais.
        </p>
      </div>
    );
  }

  return (
    <form action={action} className="card space-y-5" noValidate>
      {state.status === "error" && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-2 text-sm text-red-700">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="flex-shrink-0 mt-0.5" aria-hidden="true">
            <circle cx="12" cy="12" r="10" /><path d="M12 8v4M12 16h.01" />
          </svg>
          {state.message}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-blue-900 mb-1.5">
            Nom complet <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Prénom et nom"
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-blue-900 mb-1.5">
            Téléphone <span className="text-gray-400 font-normal">(facultatif)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="06XXXXXXXX"
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
          />
        </div>
      </div>

      <div>
        <label htmlFor="reason" className="block text-sm font-semibold text-blue-900 mb-1.5">
          Objet de votre demande
        </label>
        <select
          id="reason"
          name="reason"
          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
        >
          <option value="">Choisir un objet...</option>
          {REASONS.map((r) => (
            <option key={r} value={r}>{r}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-blue-900 mb-1.5">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Décrivez votre demande..."
          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent resize-none"
        />
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-1">
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
              Envoyer le message
            </>
          )}
        </button>
        <p className="text-xs text-gray-400">
          Vos données sont traitées conformément à notre{" "}
          <a href="/confidentialite" className="underline hover:text-gray-600">
            politique de confidentialité
          </a>
          .
        </p>
      </div>
    </form>
  );
}
