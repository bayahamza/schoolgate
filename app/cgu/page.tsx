import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Conditions Générales d'Utilisation (CGU)",
  description:
    "Conditions Générales d'Utilisation de SchoolGate — Règles d'utilisation, abonnements, remboursements et responsabilités.",
};

function PageHero() {
  return (
    <section className="bg-gradient-to-br from-blue-950 to-blue-800 text-white py-16 sm:py-20">
      <div className="section-container">
        <nav className="text-sm text-blue-300 mb-6">
          <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
          <span className="mx-2">/</span>
          <span className="text-white">CGU</span>
        </nav>
        <h1 className="text-3xl sm:text-4xl font-display font-bold text-white">
          Conditions Générales d'Utilisation
        </h1>
        <p className="mt-4 text-blue-200 max-w-xl">
          Règles régissant l'utilisation de la plateforme SchoolGate par les parents, étudiants et établissements scolaires.
        </p>
        <p className="text-blue-300 text-sm mt-3">Dernière mise à jour : juin 2026</p>
      </div>
    </section>
  );
}

export default function CguPage() {
  const { free, premium, premiumPlus, disclaimer } = SITE_CONFIG.pricing;

  return (
    <>
      <PageHero />

      <section className="py-14 sm:py-20">
        <div className="section-container max-w-3xl">
          <div className="space-y-10 text-gray-700 text-sm leading-relaxed">

            {/* Article 1 */}
            <div>
              <h2 className="font-display font-bold text-2xl text-blue-900 mb-4">
                Article 1 — Objet
              </h2>
              <p>
                Les présentes Conditions Générales d'Utilisation (CGU) ont pour objet de définir
                les modalités et conditions d'utilisation de la plateforme <strong>SchoolGate</strong>,
                accessible à l'adresse <strong>{SITE_CONFIG.domain}</strong>, ainsi que les droits
                et obligations des utilisateurs.
              </p>
              <p className="mt-3">
                SchoolGate est une plateforme marocaine de recherche, comparaison et mise en relation
                entre familles (parents et étudiants) et établissements scolaires. L'accès à la
                plateforme implique l'acceptation pleine et entière des présentes CGU.
              </p>
            </div>

            {/* Article 2 */}
            <div>
              <h2 className="font-display font-bold text-2xl text-blue-900 mb-4">
                Article 2 — Description du service
              </h2>
              <p>
                SchoolGate permet aux parents et étudiants de :
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Rechercher des établissements scolaires selon des critères précis (ville, filière, budget, etc.)</li>
                <li>Comparer plusieurs établissements côte à côte</li>
                <li>Consulter les fiches d'information publiées par les écoles</li>
                <li>Prendre contact avec un établissement via la plateforme</li>
              </ul>
              <p className="mt-3">
                SchoolGate permet aux établissements scolaires de :
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Créer et gérer une fiche de présentation publique</li>
                <li>Publier leurs filières, tarifs et informations pratiques</li>
                <li>Recevoir des demandes de contact de la part des familles</li>
              </ul>
              <div className="mt-4 bg-amber-50 border border-amber-200 rounded-xl p-4">
                <p className="text-amber-800 text-sm font-medium">
                  La plateforme est actuellement en cours de développement. Ces fonctionnalités seront
                  disponibles lors du lancement officiel.
                </p>
              </div>
            </div>

            {/* Article 3 */}
            <div>
              <h2 className="font-display font-bold text-2xl text-blue-900 mb-4">
                Article 3 — Types de comptes
              </h2>

              <h3 className="font-semibold text-blue-800 text-base mb-2">3.1 Compte parent / étudiant (gratuit)</h3>
              <p>
                La création d'un compte parent ou étudiant est gratuite. L'accès à l'ensemble des
                fonctionnalités de recherche, comparaison et consultation est fourni sans contrepartie financière.
                L'utilisateur doit être majeur pour créer un compte. S'il renseigne des informations relatives
                à un enfant mineur, il confirme agir en qualité de représentant légal.
              </p>

              <h3 className="font-semibold text-blue-800 text-base mb-2 mt-5">3.2 Compte établissement</h3>
              <p>
                Les établissements scolaires peuvent rejoindre SchoolGate selon trois formules :
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li><strong>Gratuit</strong> — fiche basique, listing standard, sans frais.</li>
                <li><strong>Premium ({premium.price} {premium.currency}/{premium.period})</strong> — fiche enrichie, photos multiples, mise en avant dans les résultats.</li>
                <li><strong>Premium+ ({premiumPlus.price} {premiumPlus.currency}/{premiumPlus.period})</strong> — tout Premium + rapport d'analyse semestriel sur les tendances de recherche.</li>
              </ul>
              <p className="mt-2">
                Seul un représentant légalement habilité de l'établissement peut créer un compte école.
              </p>
            </div>

            {/* Article 4 */}
            <div>
              <h2 className="font-display font-bold text-2xl text-blue-900 mb-4">
                Article 4 — Abonnement école : tarifs et paiement
              </h2>

              <div className="bg-stone-50 border border-gray-100 rounded-xl p-5 mb-4">
                <p className="text-xs text-amber-700 font-medium uppercase tracking-wide mb-3">
                  ⚠ Tarifs indicatifs — {disclaimer}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-white rounded-lg p-4 border border-gray-100">
                    <p className="font-semibold text-blue-900">{free.label}</p>
                    <p className="text-2xl font-display font-bold text-blue-800 mt-1">
                      Gratuit
                    </p>
                    <p className="text-xs text-gray-500 mt-1">Pour toujours</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-gray-100">
                    <p className="font-semibold text-blue-900">{premium.label}</p>
                    <p className="text-2xl font-display font-bold text-blue-800 mt-1">
                      {premium.price} {premium.currency}
                      <span className="text-sm font-normal text-gray-500"> / {premium.period}</span>
                    </p>
                  </div>
                  <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
                    <p className="font-semibold text-blue-900">{premiumPlus.label}</p>
                    <p className="text-2xl font-display font-bold text-blue-800 mt-1">
                      {premiumPlus.price} {premiumPlus.currency}
                      <span className="text-sm font-normal text-gray-500"> / {premiumPlus.period}</span>
                    </p>
                    <p className="text-xs text-amber-700 mt-1">+ rapport semestriel</p>
                  </div>
                </div>
              </div>

              <p>
                Le paiement s'effectue en ligne de façon sécurisée via notre partenaire bancaire, par carte
                bancaire ou tout autre moyen de paiement proposé sur la plateforme. L'abonnement est facturé
                en avance pour la période mensuelle choisie.
              </p>
              <p className="mt-3">
                Un reçu de paiement est transmis à l'adresse email du responsable du compte école après chaque
                transaction.
              </p>
            </div>

            {/* Article 5 — Résiliation / Remboursement (important pour banque) */}
            <div>
              <h2 className="font-display font-bold text-2xl text-blue-900 mb-4">
                Article 5 — Résiliation et remboursement
              </h2>

              <h3 className="font-semibold text-blue-800 text-base mb-2">5.1 Résiliation par l'école</h3>
              <p>
                L'établissement peut résilier son abonnement à tout moment depuis son espace de gestion,
                avant la date de renouvellement. La résiliation prend effet à la fin de la période en cours,
                sans remboursement prorata pour la période déjà engagée.
              </p>

              <h3 className="font-semibold text-blue-800 text-base mb-2 mt-4">5.2 Droit de rétractation</h3>
              <p>
                Conformément aux pratiques commerciales équitables, tout nouvel abonné dispose d'un{" "}
                <strong>délai de 14 jours calendaires</strong> à compter de la souscription pour demander
                le remboursement intégral de son abonnement, sans justification, à condition que l'espace
                école n'ait pas encore été utilisé (aucune fiche publiée, aucune demande reçue).
              </p>
              <p className="mt-3">
                Pour exercer ce droit, le responsable du compte doit contacter SchoolGate via la{" "}
                <Link href="/contact" className="text-blue-700 underline hover:text-blue-900">page Contact</Link>{" "}
                ou par téléphone au{" "}
                <a href={`tel:${SITE_CONFIG.owner.phone}`} className="text-blue-700 underline">
                  {SITE_CONFIG.owner.phoneFormatted}
                </a>
                .
              </p>

              <h3 className="font-semibold text-blue-800 text-base mb-2 mt-4">5.3 Résiliation par SchoolGate</h3>
              <p>
                SchoolGate se réserve le droit de suspendre ou résilier un compte école en cas de
                non-respect des présentes CGU, de publication d'informations fausses ou trompeuses,
                ou de comportement préjudiciable à la plateforme. Dans ce cas, aucun remboursement ne sera dû.
              </p>

              <h3 className="font-semibold text-blue-800 text-base mb-2 mt-4">5.4 Renouvellement automatique</h3>
              <p>
                L'abonnement est renouvelé automatiquement à son terme, sauf résiliation expresse avant
                la date de renouvellement. L'abonné sera notifié par email avant chaque renouvellement.
              </p>
            </div>

            {/* Article 6 */}
            <div>
              <h2 className="font-display font-bold text-2xl text-blue-900 mb-4">
                Article 6 — Responsabilités
              </h2>
              <p>
                <strong>SchoolGate</strong> fournit une infrastructure technique de publication et de mise
                en relation. La plateforme ne garantit pas l'exactitude des informations publiées par les
                établissements, qui en sont seuls responsables.
              </p>
              <p className="mt-3">
                <strong>Les établissements</strong> s'engagent à publier des informations exactes, à jour
                et non trompeuses. Toute information erronée délibérée peut entraîner la suspension du compte.
              </p>
              <p className="mt-3">
                <strong>Les parents et étudiants</strong> sont responsables des informations qu'ils
                fournissent lors de la création de leur compte et de leurs demandes de contact.
              </p>
            </div>

            {/* Article 7 */}
            <div>
              <h2 className="font-display font-bold text-2xl text-blue-900 mb-4">
                Article 7 — Propriété intellectuelle
              </h2>
              <p>
                Le contenu de la plateforme SchoolGate (textes, design, logo, code, structure) est protégé
                et appartient à {SITE_CONFIG.owner.name}. Les informations publiées par les établissements
                restent leur propriété. L'utilisation de la plateforme ne confère aucun droit de propriété
                sur ces éléments.
              </p>
            </div>

            {/* Article 8 */}
            <div>
              <h2 className="font-display font-bold text-2xl text-blue-900 mb-4">
                Article 8 — Protection des données personnelles
              </h2>
              <p>
                Le traitement des données personnelles est régi par notre{" "}
                <Link href="/confidentialite" className="text-blue-700 underline hover:text-blue-900">
                  Politique de Confidentialité
                </Link>{" "}
                et la loi marocaine n° 09-08. En acceptant les présentes CGU, l'utilisateur consent au
                traitement de ses données dans les conditions décrites.
              </p>
            </div>

            {/* Article 9 */}
            <div>
              <h2 className="font-display font-bold text-2xl text-blue-900 mb-4">
                Article 9 — Droit applicable et juridiction compétente
              </h2>
              <p>
                Les présentes CGU sont régies par le <strong>droit marocain</strong>. Tout litige relatif
                à leur interprétation ou leur exécution sera soumis à la compétence exclusive des juridictions
                compétentes du Maroc.
              </p>
            </div>

            {/* Article 10 */}
            <div>
              <h2 className="font-display font-bold text-2xl text-blue-900 mb-4">
                Article 10 — Modification des CGU
              </h2>
              <p>
                SchoolGate se réserve le droit de modifier les présentes CGU à tout moment. Les utilisateurs
                seront informés de toute modification substantielle par email (pour les comptes enregistrés)
                ou par un avis sur la plateforme. L'utilisation continue du service après modification vaut
                acceptation des nouvelles conditions.
              </p>
            </div>

            {/* Contact */}
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
              <h2 className="font-display font-semibold text-lg text-blue-900 mb-2">Contact</h2>
              <p className="text-blue-800">
                Pour toute question relative aux présentes CGU :
              </p>
              <div className="mt-2 space-y-1">
                <p className="font-medium text-blue-900">{SITE_CONFIG.owner.name} — {SITE_CONFIG.owner.status}</p>
                <a href={`tel:${SITE_CONFIG.owner.phone}`} className="text-blue-700 font-medium hover:underline block">
                  Tél. : {SITE_CONFIG.owner.phoneFormatted}
                </a>
                <Link href="/contact" className="text-blue-700 font-medium hover:underline block">
                  Page Contact →
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
