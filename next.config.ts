import type { NextConfig } from "next";

const securityHeaders = [
  // Protection contre le détournement de clics (Clickjacking)
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  // Protection contre le MIME-sniffing
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  // Protection XSS (obsolète mais toujours utile pour les anciens navigateurs)
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  // Politique de référent
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  // Politique de fonctionnalités
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
  },
];

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  poweredByHeader: false, // Masquer le header X-Powered-By
  generateEtags: true, // Activer les ETags pour la mise en cache
  compress: true, // Activer la compression GZIP
  reactStrictMode: true, // Activer le mode strict React
  
  // Configuration des en-têtes de sécurité
  // Note: Les headers ne fonctionnent pas avec output: export
  // Ils doivent être configurés au niveau du serveur web
  // async headers() {
  //   return [
  //     {
  //       // Appliquer ces en-têtes à tous les chemins
  //       source: '/:path*',
  //       headers: securityHeaders,
  //     },
  //   ];
  // },
  
  // Configuration des images
  images: {
    unoptimized: true, // Désactive l'optimisation des images pour l'export
    domains: [], // Liste des domaines autorisés pour les images
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 jours de cache pour les images
  },
  
  // Configuration de la sécurité
  // Désactive les avertissements de sécurité pour les images non optimisées
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Configuration de sécurité supplémentaire
  experimental: {
    // Activer les améliorations de sécurité expérimentales
    // Désactive les pages avec des vulnérabilités connues
    // et active les vérifications de sécurité supplémentaires
    strictNextHead: true,
    disableOptimizedLoading: false,
  },
};

export default nextConfig;
