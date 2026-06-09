import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales de SchoolGate — Éditeur, responsable de la publication et informations légales.",
};

function PageHero() {
  return (
    <section className="bg-gradient-to-br from-blue-950 to-blue-800 text-white py-16 sm:py-20">
      <div className="section-container">
        <nav className="text-sm text-blue-300 mb-6">
          <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
          <span className="mx-2">/</span>
          <span className="text-white">Mentions légales</span>
        </nav>
        <h1 className="text-3xl sm:text-4xl font-display font-bold text-white">
          Mentions légales
        </h1>
        <p className="mt-4 text-blue-200">
          Informations légales relatives au site {SITE_CONFIG.domain}.
        </p>
        <p className="text-blue-300 text-sm mt-2">Dernière mise à jour : juin 2026</p>
      </div>
    </section>
  );
}

function InfoBlock({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="py-4 border-b border-gray-100 last:border-0 grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-4">
      <dt className="text-sm font-semibold text-blue-900 sm:col-span-1">{label}</dt>
      <dd className="text-sm text-gray-700 sm:col-span-2">{children}</dd>
    </div>
  );
}

export default function MentionsLegalesPage() {
  return (
    <>
      <PageHero />

      <section className="py-14 sm:py-20">
        <div className="section-container max-w-3xl space-y-10">

          {/* Éditeur */}
          <div>
            <h2 className="font-display font-bold text-2xl text-blue-900 mb-4">
              1. Éditeur du site
            </h2>
            <div className="card">
              <dl>
                <InfoBlock label="Dénomination">
                  {SITE_CONFIG.name}
                </InfoBlock>
                <InfoBlock label="Éditeur">
                  {SITE_CONFIG.owner.name}
                </InfoBlock>
                <InfoBlock label="Statut juridique">
                  {SITE_CONFIG.owner.status}
                </InfoBlock>
                <InfoBlock label="ICE">
                  {SITE_CONFIG.owner.ice}
                </InfoBlock>
                <InfoBlock label="Téléphone">
                  <a href={`tel:${SITE_CONFIG.owner.phone}`} className="text-blue-700 hover:underline">
                    {SITE_CONFIG.owner.phoneFormatted}
                  </a>
                </InfoBlock>

                <InfoBlock label="Site web">
                  <a href={`https://${SITE_CONFIG.domain}`} className="text-blue-700 hover:underline">
                    {SITE_CONFIG.domain}
                  </a>
                </InfoBlock>
              </dl>
            </div>
          </div>

          {/* Directeur de la publication */}
          <div>
            <h2 className="font-display font-bold text-2xl text-blue-900 mb-4">
              2. Directeur de la publication
            </h2>
            <div className="card">
              <dl>
                <InfoBlock label="Nom">
                  {SITE_CONFIG.owner.name}
                </InfoBlock>
                <InfoBlock label="Qualité">
                  {SITE_CONFIG.owner.status} — Porteur du projet {SITE_CONFIG.name}
                </InfoBlock>
              </dl>
            </div>
          </div>

          {/* Hébergeur */}
          <div>
            <h2 className="font-display font-bold text-2xl text-blue-900 mb-4">
              3. Hébergeur
            </h2>
            <div className="card">
              <dl>
                <InfoBlock label="Société">
                  {SITE_CONFIG.hosting.name}
                </InfoBlock>
                <InfoBlock label="Adresse">
                  {SITE_CONFIG.hosting.address}
                </InfoBlock>
                <InfoBlock label="Site web">
                  <a href={SITE_CONFIG.hosting.website} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">
                    {SITE_CONFIG.hosting.website}
                  </a>
                </InfoBlock>
              </dl>
            </div>
          </div>

          {/* Propriété intellectuelle */}
          <div>
            <h2 className="font-display font-bold text-2xl text-blue-900 mb-4">
              4. Propriété intellectuelle
            </h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              L'ensemble du contenu de ce site — textes, structure, design, logos, visuels et la marque{" "}
              <strong>SchoolGate</strong> — est la propriété exclusive de{" "}
              <strong>{SITE_CONFIG.owner.name}</strong>, {SITE_CONFIG.owner.status},
              ICE&nbsp;: {SITE_CONFIG.owner.ice}.
            </p>
            <p className="text-gray-700 text-sm leading-relaxed mt-3">
              Toute reproduction, représentation, modification, publication, adaptation ou diffusion de
              tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est
              interdite sans l'autorisation écrite préalable de l'éditeur.
            </p>
          </div>

          {/* Protection des données */}
          <div>
            <h2 className="font-display font-bold text-2xl text-blue-900 mb-4">
              5. Protection des données personnelles
            </h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              Le traitement des données à caractère personnel collectées sur ce site est régi par la{" "}
              <strong>loi n° 09-08</strong> relative à la protection des personnes physiques à l'égard du
              traitement des données à caractère personnel (Maroc), sous le contrôle de la{" "}
              <strong>CNDP</strong>.
            </p>
            <div className="mt-3 bg-amber-50 border border-amber-200 rounded-xl p-4">
              <p className="text-sm text-amber-800">
                {SITE_CONFIG.cndp.statusLabel} — Le numéro de déclaration sera indiqué ici dès réception.
                {/* TODO: remplacer par le numéro CNDP dès réception */}
              </p>
            </div>
            <p className="mt-3 text-sm">
              <Link href="/confidentialite" className="text-blue-700 font-medium hover:underline">
                Consulter la politique de confidentialité complète →
              </Link>
            </p>
          </div>

          {/* Limitation de responsabilité */}
          <div>
            <h2 className="font-display font-bold text-2xl text-blue-900 mb-4">
              6. Limitation de responsabilité
            </h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              SchoolGate est une plateforme d'information et de comparaison. Les informations publiées
              par les établissements scolaires relèvent de leur seule responsabilité. SchoolGate s'efforce
              de maintenir les informations disponibles à jour mais ne saurait être tenu responsable des
              erreurs, omissions ou indisponibilités temporaires du service.
            </p>
          </div>

          {/* Droit applicable */}
          <div>
            <h2 className="font-display font-bold text-2xl text-blue-900 mb-4">
              7. Droit applicable
            </h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              Les présentes mentions légales sont régies par le droit marocain. Tout litige relatif à
              l'utilisation du site est soumis à la compétence des juridictions marocaines compétentes.
            </p>
          </div>

          {/* Contact */}
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
            <h2 className="font-display font-semibold text-lg text-blue-900 mb-2">Contact</h2>
            <p className="text-sm text-blue-800">
              Pour toute question relative aux présentes mentions légales :
            </p>
            <div className="mt-2 space-y-1 text-sm">
              <a href={`tel:${SITE_CONFIG.owner.phone}`} className="text-blue-700 font-medium hover:underline block">
                Tél. : {SITE_CONFIG.owner.phoneFormatted}
              </a>
              <Link href="/contact" className="text-blue-700 font-medium hover:underline block">
                Page Contact →
              </Link>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
