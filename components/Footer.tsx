import Link from "next/link";
import Image from "next/image";
import { SITE_CONFIG } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-blue-100 mt-auto">
      {/* Main footer grid */}
      <div className="section-container py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Col 1 — Brand */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.png"
                alt="SchoolGate"
                width={450}
                height={147}
                className="h-36 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-sm text-blue-200 leading-relaxed max-w-xs">
              La plateforme marocaine pour rechercher, comparer et choisir la
              bonne école — avec transparence et simplicité.
            </p>
            <div className="pt-2">
              <span className="badge-coming-soon text-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 inline-block" />
                Lancement bientôt
              </span>
            </div>
          </div>

          {/* Col 2 — Pages */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Navigation
            </h3>
            <ul className="space-y-2">
              {SITE_CONFIG.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-blue-200 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Legal & Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Informations légales
            </h3>
            <ul className="space-y-2 mb-6">
              {SITE_CONFIG.legalNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-blue-200 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-3">
              Contact
            </h3>
            <a
              href={`tel:${SITE_CONFIG.owner.phone}`}
              className="text-sm text-blue-200 hover:text-white transition-colors flex items-center gap-2"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.05 1.22 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z" />
              </svg>
              {SITE_CONFIG.owner.phoneFormatted}
            </a>
            {/* email à ajouter plus tard */}
          </div>
        </div>
      </div>

      {/* Payment logos */}
      <div className="border-t border-blue-800">
        <div className="section-container py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-blue-400">Paiement sécurisé</p>
          <div className="flex items-center gap-2">
            {/* Visa */}
            <div className="bg-white rounded px-2 py-1 h-8 flex items-center justify-center min-w-[48px]">
              <svg viewBox="0 0 48 16" height="16" aria-label="Visa" role="img">
                <text x="0" y="13" fontFamily="Arial, sans-serif" fontStyle="italic" fontWeight="bold" fontSize="15" fill="#1A1F71" letterSpacing="1">VISA</text>
              </svg>
            </div>
            {/* Mastercard */}
            <div className="bg-white rounded px-1.5 py-1 h-8 flex items-center justify-center min-w-[44px]">
              <svg viewBox="0 0 38 24" height="20" aria-label="Mastercard" role="img">
                <circle cx="14" cy="12" r="10" fill="#EB001B" />
                <circle cx="24" cy="12" r="10" fill="#F79E1B" />
                <path d="M19 5.268A9.98 9.98 0 0 1 22.732 12 9.98 9.98 0 0 1 19 18.732 9.98 9.98 0 0 1 15.268 12 9.98 9.98 0 0 1 19 5.268z" fill="#FF5F00" />
              </svg>
            </div>
            {/* CMI */}
            <div className="bg-white rounded px-2 py-1 h-8 flex items-center justify-center min-w-[44px]">
              <svg viewBox="0 0 44 16" height="16" aria-label="CMI" role="img">
                <text x="1" y="13" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="13" fill="#004A97">CMI</text>
              </svg>
            </div>
            {/* UPI */}
            <div className="bg-white rounded px-2 py-1 h-8 flex items-center justify-center min-w-[40px]">
              <svg viewBox="0 0 40 16" height="16" aria-label="UPI" role="img">
                <text x="1" y="13" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="13" fill="#097939">UPI</text>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-blue-900">
        <div className="section-container py-4">
          <p className="text-xs text-blue-300 text-center sm:text-left">
            © 2026 SchoolGate — Tél&nbsp;: {SITE_CONFIG.owner.phoneFormatted}
          </p>
        </div>
      </div>
    </footer>
  );
}
