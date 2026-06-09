import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Conditions Générales de Vente (CGV)",
  description:
    "Conditions Générales de Vente de SchoolGate — Abonnements, tarifs, modalités de paiement, droit de rétractation et remboursements.",
};

function PageHero() {
  return (
    <section className="bg-gradient-to-br from-blue-950 to-blue-800 text-white py-16 sm:py-20">
      <div className="section-container">
        <nav className="text-sm text-blue-300 mb-6">
          <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
          <span className="mx-2">/</span>
          <span className="text-white">CGV</span>
        </nav>
        <h1 className="text-3xl sm:text-4xl font-display font-bold text-white">
          Conditions Générales de Vente
        </h1>
        <p className="mt-4 text-blue-200 max-w-xl">
          Conditions régissant la souscription aux abonnements payants proposés par SchoolGate aux établissements scolaires.
        </p>
        <p className="text-blue-300 text-sm mt-3">Dernière mise à jour : juin 2026</p>
      </div>
    </section>
  );
}

export default function CgvPage() {
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
                Article 1 — Objet et champ d'application
              </h2>
              <p>
                Les présentes Conditions Générales de Vente (CGV) régissent toutes les ventes d'abonnements
                conclues entre <strong>{SITE_CONFIG.owner.name}</strong>, auto-entrepreneur, ICE&nbsp;
                {SITE_CONFIG.owner.ice} (ci-après « SchoolGate » ou « le Vendeur »), et tout établissement
                scolaire souhaitant souscrire à un abonnement payant sur la plateforme{" "}
                <strong>{SITE_CONFIG.domain}</strong> (ci-après « le Client »).
              </p>
              <p className="mt-3">
                Toute commande implique l'acceptation sans réserve des présentes CGV. Ces CGV prévalent sur
                tout autre document du Client, notamment ses propres conditions générales d'achat.
              </p>
            </div>

            {/* Article 2 */}
            <div>
              <h2 className="font-display font-bold text-2xl text-blue-900 mb-4">
                Article 2 — Produits et services proposés
              </h2>
              <p>
                SchoolGate propose aux établissements scolaires marocains des abonnements donnant accès à des
                fonctionnalités de visibilité et de gestion de leur fiche sur la plateforme :
              </p>

              <div className="mt-4 bg-stone-50 border border-gray-100 rounded-xl p-5">
                <p className="text-xs text-amber-700 font-medium uppercase tracking-wide mb-3">
                  ⚠ Tarifs indicatifs — {disclaimer}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-white rounded-lg p-4 border border-gray-100">
                    <p className="font-semibold text-blue-900">{free.label}</p>
                    <p className="text-2xl font-display font-bold text-blue-800 mt-1">Gratuit</p>
                    <p className="text-xs text-gray-500 mt-1">Pour toujours</p>
                    <ul className="mt-3 text-xs text-gray-600 space-y-1">
                      <li>• Fiche basique</li>
                      <li>• 1 photo</li>
                      <li>• Réception des demandes</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-gray-100">
                    <p className="font-semibold text-blue-900">{premium.label}</p>
                    <p className="text-2xl font-display font-bold text-blue-800 mt-1">
                      {premium.price} {premium.currency}
                      <span className="text-sm font-normal text-gray-500"> / {premium.period}</span>
                    </p>
                    <ul className="mt-3 text-xs text-gray-600 space-y-1">
                      <li>• Jusqu'à 10 photos</li>
                      <li>• Mise en avant</li>
                      <li>• Badge vérifiée</li>
                    </ul>
                  </div>
                  <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
                    <p className="font-semibold text-blue-900">{premiumPlus.label}</p>
                    <p className="text-2xl font-display font-bold text-blue-800 mt-1">
                      {premiumPlus.price} {premiumPlus.currency}
                      <span className="text-sm font-normal text-gray-500"> / {premiumPlus.period}</span>
                    </p>
                    <ul className="mt-3 text-xs text-gray-600 space-y-1">
                      <li>• Position prioritaire</li>
                      <li>• Rapport semestriel</li>
                      <li>• Gestionnaire dédié</li>
                    </ul>
                  </div>
                </div>
              </div>

              <p className="mt-4">
                Les caractéristiques détaillées de chaque formule sont décrites sur la page{" "}
                <Link href="/ecoles" className="text-blue-700 underline hover:text-blue-900">
                  Espace Écoles
                </Link>{" "}
                de la plateforme.
              </p>
            </div>

            {/* Article 3 */}
            <div>
              <h2 className="font-display font-bold text-2xl text-blue-900 mb-4">
                Article 3 — Prix et facturation
              </h2>
              <p>
                Les prix sont exprimés en dirhams marocains (MAD), toutes taxes comprises (TTC).
                Les abonnements payants sont facturés mensuellement, en avance, à la date de souscription.
              </p>
              <p className="mt-3">
                SchoolGate se réserve le droit de modifier ses tarifs à tout moment. Les modifications
                de tarif sont communiquées au Client par email au moins <strong>30 jours avant</strong> leur
                entrée en vigueur. Le Client peut résilier son abonnement avant la date d'effet s'il refuse
                le nouveau tarif.
              </p>
              <p className="mt-3">
                Une <strong>facture électronique</strong> est émise et transmise par email après chaque
                transaction.
              </p>
            </div>

            {/* Article 4 */}
            <div>
              <h2 className="font-display font-bold text-2xl text-blue-900 mb-4">
                Article 4 — Modalités de paiement
              </h2>
              <p>
                Le paiement s'effectue exclusivement en ligne, de manière sécurisée, via les moyens
                suivants :
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>
                  <strong>Carte bancaire Visa</strong> — acceptée via la passerelle sécurisée CMI
                </li>
                <li>
                  <strong>Carte bancaire Mastercard</strong> — acceptée via la passerelle sécurisée CMI
                </li>
                <li>
                  <strong>CMI (Centre Monétique Interbancaire)</strong> — toutes cartes bancaires marocaines
                  émises par les banques membres du CMI
                </li>
                <li>
                  <strong>Virement bancaire</strong> — sur demande expresse pour les abonnements annuels
                </li>
              </ul>
              <p className="mt-3">
                Toutes les transactions sont sécurisées par le protocole SSL/TLS. Les données bancaires
                du Client ne sont jamais stockées sur les serveurs de SchoolGate ; elles sont traitées
                exclusivement par notre partenaire de paiement certifié PCI-DSS.
              </p>
              <div className="mt-4 bg-blue-50 border border-blue-100 rounded-xl p-4">
                <p className="text-blue-800 text-sm">
                  En cas de refus de paiement ou de défaut de règlement, SchoolGate se réserve le droit
                  de suspendre l'accès au service jusqu'à régularisation de la situation.
                </p>
              </div>
            </div>

            {/* Article 5 */}
            <div>
              <h2 className="font-display font-bold text-2xl text-blue-900 mb-4">
                Article 5 — Activation et livraison du service
              </h2>
              <p>
                L'abonnement est activé dans les <strong>24 heures</strong> suivant la confirmation du
                paiement. Une notification d'activation est envoyée à l'adresse email du responsable du compte.
              </p>
              <p className="mt-3">
                Le service étant fourni par voie électronique, il n'y a pas de livraison physique.
                L'accès aux fonctionnalités de l'abonnement souscrit est immédiatement disponible
                après activation.
              </p>
            </div>

            {/* Article 6 */}
            <div>
              <h2 className="font-display font-bold text-2xl text-blue-900 mb-4">
                Article 6 — Durée et renouvellement
              </h2>
              <p>
                Les abonnements sont souscrits pour une durée d'un mois, renouvelable automatiquement
                par tacite reconduction à chaque échéance, sauf résiliation expresse du Client avant la
                date de renouvellement.
              </p>
              <p className="mt-3">
                Le Client est notifié par email <strong>5 jours avant</strong> chaque date de renouvellement.
              </p>
            </div>

            {/* Article 7 */}
            <div>
              <h2 className="font-display font-bold text-2xl text-blue-900 mb-4">
                Article 7 — Droit de rétractation
              </h2>
              <p>
                Conformément aux pratiques commerciales équitables, le Client dispose d'un{" "}
                <strong>délai de 14 jours calendaires</strong> à compter de la date de souscription pour
                exercer son droit de rétractation et obtenir le remboursement intégral de son abonnement,
                sans pénalité ni justification.
              </p>
              <p className="mt-3">
                Ce droit de rétractation ne s'applique pas si le Client a commencé à utiliser le service
                avant l'expiration du délai (fiche publiée, demandes reçues). Dans ce cas, le Client est
                réputé avoir renoncé à son droit de rétractation en ayant expressément demandé l'exécution
                immédiate du service.
              </p>
              <p className="mt-3">
                Pour exercer ce droit, le Client doit contacter SchoolGate par :
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  Téléphone :{" "}
                  <a href={`tel:${SITE_CONFIG.owner.phone}`} className="text-blue-700 underline">
                    {SITE_CONFIG.owner.phoneFormatted}
                  </a>
                </li>
                <li>
                  Formulaire :{" "}
                  <Link href="/contact" className="text-blue-700 underline hover:text-blue-900">
                    Page Contact
                  </Link>
                </li>
              </ul>
              <p className="mt-3">
                Le remboursement est effectué dans un délai de <strong>14 jours</strong> à compter de la
                réception de la demande, par le même moyen de paiement que celui utilisé lors de la transaction.
              </p>
            </div>

            {/* Article 8 */}
            <div>
              <h2 className="font-display font-bold text-2xl text-blue-900 mb-4">
                Article 8 — Résiliation
              </h2>

              <h3 className="font-semibold text-blue-800 text-base mb-2">8.1 Résiliation par le Client</h3>
              <p>
                Le Client peut résilier son abonnement à tout moment depuis son espace de gestion, avant
                la date de renouvellement. La résiliation prend effet à la fin de la période mensuelle en cours.
                Aucun remboursement prorata n'est accordé pour la période déjà payée.
              </p>

              <h3 className="font-semibold text-blue-800 text-base mb-2 mt-4">8.2 Résiliation par SchoolGate</h3>
              <p>
                SchoolGate peut résilier l'abonnement en cas de :
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Non-paiement ou paiement frauduleux</li>
                <li>Violation des présentes CGV ou des CGU</li>
                <li>Publication d'informations fausses, trompeuses ou illicites</li>
              </ul>
              <p className="mt-2">
                Dans ce cas, SchoolGate peut procéder à la résiliation sans préavis ni remboursement.
              </p>
            </div>

            {/* Article 9 */}
            <div>
              <h2 className="font-display font-bold text-2xl text-blue-900 mb-4">
                Article 9 — Garanties et limitation de responsabilité
              </h2>
              <p>
                SchoolGate garantit l'accès au service conformément aux caractéristiques décrites, pendant
                toute la durée de l'abonnement, sous réserve de maintenance planifiée ou d'événements de
                force majeure.
              </p>
              <p className="mt-3">
                SchoolGate ne saurait être tenu responsable des dommages indirects, pertes de chiffre
                d'affaires ou manque à gagner résultant de l'utilisation ou de l'indisponibilité temporaire
                du service.
              </p>
              <p className="mt-3">
                La responsabilité totale de SchoolGate, pour quelque cause que ce soit, est limitée au
                montant des sommes effectivement perçues du Client au cours des 3 derniers mois précédant
                le sinistre.
              </p>
            </div>

            {/* Article 10 */}
            <div>
              <h2 className="font-display font-bold text-2xl text-blue-900 mb-4">
                Article 10 — Réclamations et médiation
              </h2>
              <p>
                Pour toute réclamation, le Client est invité à contacter SchoolGate en priorité par
                téléphone ou via la{" "}
                <Link href="/contact" className="text-blue-700 underline hover:text-blue-900">
                  page Contact
                </Link>
                . SchoolGate s'engage à apporter une réponse dans un délai de <strong>72 heures ouvrées</strong>.
              </p>
              <p className="mt-3">
                En cas de litige non résolu à l'amiable, les parties pourront recourir à une procédure
                de médiation ou de règlement alternatif des différends avant tout recours judiciaire.
              </p>
            </div>

            {/* Article 11 */}
            <div>
              <h2 className="font-display font-bold text-2xl text-blue-900 mb-4">
                Article 11 — Droit applicable et juridiction
              </h2>
              <p>
                Les présentes CGV sont régies par le <strong>droit marocain</strong>, notamment la loi
                n°&nbsp;31-08 édictant des mesures de protection du consommateur. Tout litige sera soumis
                à la compétence exclusive des juridictions compétentes du Maroc.
              </p>
            </div>

            {/* Article 12 */}
            <div>
              <h2 className="font-display font-bold text-2xl text-blue-900 mb-4">
                Article 12 — Modification des CGV
              </h2>
              <p>
                SchoolGate se réserve le droit de modifier les présentes CGV à tout moment. La version
                applicable est celle en vigueur à la date de la commande. Les Clients abonnés seront
                informés de toute modification substantielle par email au moins <strong>30 jours avant</strong>{" "}
                son entrée en vigueur.
              </p>
            </div>

            {/* Vendeur */}
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
              <h2 className="font-display font-semibold text-lg text-blue-900 mb-2">Vendeur</h2>
              <div className="space-y-1 text-blue-800">
                <p className="font-medium text-blue-900">{SITE_CONFIG.owner.name}</p>
                <p>{SITE_CONFIG.owner.status}</p>
                <p>ICE : {SITE_CONFIG.owner.ice}</p>
                <a
                  href={`tel:${SITE_CONFIG.owner.phone}`}
                  className="text-blue-700 font-medium hover:underline block"
                >
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
