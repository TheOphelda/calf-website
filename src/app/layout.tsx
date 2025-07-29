

import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Box, Typography } from '@mui/material';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import CookieBanner from '../components/CookieBanner';

// Configuration des métadonnées SEO
export const metadata: Metadata = {
  title: {
    default: "Campus Africain du Leadership au Féminin",
    template: "%s | CALF",
  },
  description: "Formations certifiantes en leadership et développement professionnel pour les femmes africaines. Développez vos compétences en gestion, prise de parole en public et développement personnel.",
  keywords: ["leadership féminin", "formation Afrique", "développement professionnel", "autonomisation des femmes", "formation certifiante"],
  authors: [{ name: "Campus Africain du Leadership au Féminin" }],
  creator: "Campus Africain du Leadership au Féminin",
  publisher: "Campus Africain du Leadership au Féminin",
  formatDetection: {
    email: true,
    telephone: true,
    address: true,
  },
  metadataBase: new URL('https://www.calf-afrique.org'),
  alternates: {
    canonical: '/',
    languages: {
      'fr': '/fr',
      'en': '/en',
    },
  },
  openGraph: {
    title: "Autonomisation des femmes africaines au Leadership",
    description: "Formations en leadership et développement professionnel pour les femmes africaines",
    url: "https://www.calf-afrique.org",
    siteName: "Campus Africain du Leadership au Féminin",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Campus Africain du Leadership au Féminin",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Campus Africain du Leadership au Féminin",
    description: "Formations en leadership et développement professionnel pour les femmes africaines",
    creator: "@CALF_Afrique",
    images: ["/images/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

// Configuration du viewport pour le responsive
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#7B1FA2', // Couleur principale du thème
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        {/* Préchargement des polices critiques */}
        <link
          rel="preload"
          href="/fonts/montserrat-v25-latin-700.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/roboto-v30-latin-regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      
      <body 
        style={{ 
          background: "linear-gradient(to bottom, #f9f7ff, #ffffff)", 
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          margin: 0,
        }}
        className="antialiased text-gray-900"
        itemScope
        itemType="https://schema.org/WebPage"
      >
        <Navbar />
        
        {/* En-tête avec dégradé */}
        <Box
          sx={{
            width: "100%",
            bgcolor: "transparent",
            pt: { xs: 3, md: 4 },
            pb: { xs: 2, md: 3 },
            textAlign: "center",
            background: "linear-gradient(135deg, #6a11cb 0%, rgb(5, 19, 42) 100%)",
            boxShadow: "0 4px 20px rgba(106, 17, 203, 0.2)",
          }}
        >
          <Typography
            component="h1"
            variant="h2"
            sx={{
              fontFamily: '"Montserrat", "Roboto", sans-serif',
              fontWeight: 700,
              letterSpacing: { xs: 0.5, md: 1 },
              color: "white",
              textShadow: "0 2px 8px rgba(73, 71, 71, 0.2)",
              mb: 0,
              fontSize: { xs: "1.4rem", md: "2rem", lg: "2.5rem" },
              lineHeight: 1.2,
              px: 2,
            }}
          >
            CAMPUS AFRICAIN DU LEADERSHIP AU FÉMININ
          </Typography>
          
          <Typography
            variant="subtitle1"
            component="p"
            sx={{
              color: "rgba(255, 255, 255, 0.9)",
              mt: 1,
              fontSize: { xs: "0.9rem", md: "1.1rem" },
              maxWidth: 800,
              mx: "auto",
            }}
          >
            Former les leaders féminines de demain à travers l'Afrique
          </Typography>
        </Box>
        
        {/* Contenu principal */}
        <Box 
          component="main" 
          id="main-content"
          role="main"
          sx={{ 
            flex: 1,
            width: "100%",
            outline: 'none',
            bgcolor: 'background.default',
            py: 4,
          }}
          itemScope
          itemType="https://schema.org/Organization"
        >
          {children}
        </Box>
        
        {/* Pied de page */}
        <Footer />
        
        {/* Bannière de cookies */}
        <CookieBanner />
        
        {/* Script JSON-LD pour le référencement */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'EducationalOrganization',
              name: 'Campus Africain du Leadership au Féminin',
              url: 'https://www.calf-afrique.org',
              logo: 'https://www.calf-afrique.org/logo.png',
              description: 'Formations en leadership et développement professionnel pour les femmes africaines',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Cotonou',
                addressRegion: 'Littoral',
                addressCountry: 'BJ'
              },
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+229 XX XX XX XX',
                contactType: 'customer service',
                email: 'contact@calf-afrique.org',
                availableLanguage: ['French', 'English']
              },
              sameAs: [
                'https://www.facebook.com/calfafrique',
                'https://www.linkedin.com/company/calf-afrique',
                'https://twitter.com/CALF_Afrique'
              ]
            })
          }}
        />
      </body>
    </html>
  );
}


