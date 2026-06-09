import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "export" retiré — Server Actions + Prisma nécessitent un runtime Node.js
  // Vercel déploie automatiquement en mode Node.js (pas besoin de config spéciale)
};

export default nextConfig;
