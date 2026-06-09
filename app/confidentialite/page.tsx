import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité de SchoolGate — Protection des données conformément à la loi marocaine n° 09-08 et sous le contrôle de la CNDP.",
};

function PageHero() {
  return (
    <section className="bg-gradient-to-br from-blue-950 to-blue-800 text-white py-16 sm:py-20">
      <div className="section-container">
        <nav className="text-sm text-blue-300 mb-6">
          <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
          <span className="mx-2">/</span>
          <span className="text-white">Politique de confidentialité</span>
        </nav>
        <h1 className="text-3xl sm:text-4xl font-display font-bold text-white">
          Politique de confidentialité
        </h1>
        <p className="mt-4 text-blue-200 max-w-xl">
          Conformément à la loi marocaine n° 09-08 relative à la protection des données à caractère personnel.
        </p>
        <p className="text-blue-300 text-sm mt-3">Dernière mise à jour : juin 2026</p>
      </div>
    </section>
  );
}

export default function ConfidentialitePage() {
  return (
    <>
      <PageHero />

      <section className="py-14 sm:py-20">
        <div className="section-container max-w-3xl">
          <div className="space-y-10 text-gray-700">

            {/* Responsable */}
            <div>
              <h2 className="font-display font-bold text-2xl text-blue-900 mb-4">
                1. Responsable du traitement
              </h2>
              <div className="bg-stone-50 rounded-xl p-5 border border-gray-100 space-y-1 text-sm">
                <p><span className="font-semibold text-blue-900">Nom :</span> {SITE_CONFIG.owner.name}</p>
                <p><span className="font-semibold text-blue-900">Statut :</span> {SITE_CONFIG.owner.status}</p>
                <p><span className="font-semibold text-blue-900">ICE :</span> {SITE_CONFIG.owner.ice}</p>
                <p><span className="font-semibold text-blue-900">Téléphone :</span>{" "}
                  <a href={`tel:${SITE_CONFIG.owner.phone}`} className="text-blue-700 hover:underline">
                    {SITE_CONFIG.owner.phoneFormatted}
                  </a>
                </p>
                <p><span className="font-semibold text-blue-900">Contact :</span>{" "}
                  <Link href="/contact" className="text-blue-700 hover:underline">Page Contact</Link>
                </p>
                {/* email à ajouter plus tard */}
              </div>
            </div>

            {/* Cadre légal */}
            <div>
              <h2 className="font-display font-bold text-2xl text-blue-900 mb-4">
                2. Cadre légal applicable
              </h2>
              <p className="leading-relaxed">
                Le traitement des données personnelles réalisé par SchoolGate est régi par la{" "}
                <strong>loi n° 09-08</strong> relative à la protection des personnes physiques à l'égard
                du traitement des données à caractère personnel, promulguée au Maroc. L'autorité de contrôle
                compétente est la <strong>CNDP</strong> (Commission Nationale de contrôle de la protection
                des Données à caractère Personnel).
              </p>
              {/* Placeholder CNDP */}
              <div className="mt-4 bg-amber-50 border border-amber-200 rounded-xl p-4">
                <p className="text-sm text-amber-800">
                  <span className="font-semibold">Déclaration CNDP :</span>{" "}
                  {SITE_CONFIG.cndp.statusLabel}.
                  {/* TODO: remplacer par le numéro CNDP dès réception — ex: n° D-XXXX/2026 */}
                  &nbsp;Le numéro de déclaration sera publié ici dès réception.
                </p>
              </div>
            </div>

            {/* Données parents */}
            <div>
              <h2 className="font-display font-bold text-2xl text-blue-900 mb-4">
                3. Données des parents et étudiants
              </h2>

              <h3 className="font-semibold text-blue-800 text-lg mb-2">a) Données collectées</h3>
              <ul className="list-disc pl-6 space-y-1 text-sm mb-4">
                <li>Adresse email</li>
                <li>Ville de résidence</li>
                <li>Région</li>
                <li>Niveau scolaire ou classe de l'enfant (saisi par le parent adulte)</li>
              </ul>
              <p className="text-sm leading-relaxed mb-4">
                Ces données sont saisies librement par l'utilisateur lors de la création de son compte.
                Le compte est créé par le parent (adulte majeur), qui renseigne les informations relatives
                à l'enfant dans un but d'orientation scolaire.
              </p>

              <h3 className="font-semibold text-blue-800 text-lg mb-2">b) Finalité du traitement</h3>
              <p className="text-sm leading-relaxed mb-4">
                Ces données sont utilisées exclusivement pour proposer des résultats de recherche pertinents
                (matching par ville, région et niveau scolaire) et pour la gestion du compte utilisateur.
                Elles ne font l'objet d'aucune utilisation commerciale, publicitaire ou de profilage.
              </p>

              <h3 className="font-semibold text-blue-800 text-lg mb-2">c) Partage des données</h3>
              <p className="text-sm leading-relaxed mb-4">
                Les données personnelles des parents et étudiants ne sont <strong>jamais revendues
                ni transmises à des tiers</strong> sans consentement explicite. Elles ne sont pas
                accessibles aux écoles référencées sur la plateforme, sauf demande volontaire de contact
                initiée par l'utilisateur.
              </p>

              <h3 className="font-semibold text-blue-800 text-lg mb-2">d) Durée de conservation</h3>
              <p className="text-sm leading-relaxed">
                Les données sont conservées pendant toute la durée d'activité du compte utilisateur,
                puis supprimées dans un délai raisonnable suivant la demande de clôture du compte.
              </p>
            </div>

            {/* Données écoles */}
            <div>
              <h2 className="font-display font-bold text-2xl text-blue-900 mb-4">
                4. Données des établissements scolaires
              </h2>

              <h3 className="font-semibold text-blue-800 text-lg mb-2">a) Données publiées (établissement)</h3>
              <p className="text-sm leading-relaxed mb-3">
                Les informations suivantes sont saisies par l'école elle-même et sont{" "}
                <strong>destinées à être publiées</strong> sur la plateforme SchoolGate pour être consultées
                par les familles. Il s'agit de données d'établissement, non de données personnelles
                d'individus :
              </p>
              <ul className="list-disc pl-6 space-y-1 text-sm mb-4">
                <li>Nom et adresse de l'établissement</li>
                <li>Filières et niveaux proposés</li>
                <li>Tarifs de scolarité et frais d'inscription</li>
                <li>Nombre d'élèves</li>
                <li>Présence d'un transport scolaire, d'une cantine, d'un internat</li>
                <li>Photos de l'établissement (optionnel)</li>
              </ul>

              <h3 className="font-semibold text-blue-800 text-lg mb-2">b) Données personnelles du compte école</h3>
              <p className="text-sm leading-relaxed mb-4">
                La seule donnée personnelle collectée côté école est l'<strong>email et le nom du responsable
                du compte</strong>, utilisés pour la gestion de l'abonnement et la communication opérationnelle.
                Ces données ne sont pas publiées sur la plateforme.
              </p>

              <h3 className="font-semibold text-blue-800 text-lg mb-2">c) Durée de conservation</h3>
              <p className="text-sm leading-relaxed">
                Les données de compte école sont conservées pendant la durée de l'abonnement et supprimées
                dans un délai raisonnable après résiliation, sauf obligation légale de conservation.
              </p>
            </div>

            {/* Droits */}
            <div>
              <h2 className="font-display font-bold text-2xl text-blue-900 mb-4">
                5. Vos droits
              </h2>
              <p className="leading-relaxed mb-4">
                Conformément à la loi n° 09-08, toute personne dont les données sont traitées dispose des
                droits suivants :
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li><strong>Droit d'information</strong> — être informé du traitement de ses données.</li>
                <li><strong>Droit d'accès</strong> — obtenir communication des données vous concernant.</li>
                <li><strong>Droit de rectification</strong> — faire corriger des données inexactes ou incomplètes.</li>
                <li><strong>Droit d'opposition</strong> — s'opposer au traitement de vos données.</li>
                <li><strong>Droit de suppression</strong> — demander l'effacement de vos données.</li>
              </ul>
              <p className="text-sm mt-4 leading-relaxed">
                Pour exercer ces droits, contactez-nous via la{" "}
                <Link href="/contact" className="text-blue-700 underline hover:text-blue-900">page Contact</Link>{" "}
                ou par téléphone au{" "}
                <a href={`tel:${SITE_CONFIG.owner.phone}`} className="text-blue-700 underline hover:text-blue-900">
                  {SITE_CONFIG.owner.phoneFormatted}
                </a>
                . Toute demande sera traitée dans les meilleurs délais.
              </p>
            </div>

            {/* Cookies */}
            <div>
              <h2 className="font-display font-bold text-2xl text-blue-900 mb-4">
                6. Cookies
              </h2>
              <p className="leading-relaxed text-sm">
                À ce stade du développement, SchoolGate n'utilise aucun cookie de suivi, de publicité
                ni d'analyse comportementale. Seuls des cookies techniques strictement nécessaires au
                fonctionnement du site (session, préférences d'interface) pourront être utilisés. Aucun
                cookie tiers de type Google Analytics ou similaire n'est déposé pour l'instant.
              </p>
            </div>

            {/* Contact */}
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
              <h2 className="font-display font-semibold text-lg text-blue-900 mb-3">
                Questions relatives à la protection des données
              </h2>
              <p className="text-sm text-blue-800 leading-relaxed">
                Pour toute question sur la présente politique ou pour exercer vos droits, contactez le
                responsable du traitement :
              </p>
              <div className="mt-3 space-y-1 text-sm">
                <p className="text-blue-800">
                  <span className="font-medium">{SITE_CONFIG.owner.name}</span> —{" "}
                  {SITE_CONFIG.owner.status}
                </p>
                <a href={`tel:${SITE_CONFIG.owner.phone}`} className="text-blue-700 font-medium hover:underline block">
                  Tél. : {SITE_CONFIG.owner.phoneFormatted}
                </a>
                {/* email à ajouter plus tard */}
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
