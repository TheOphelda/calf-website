

import type { Metadata } from 'next';
import './globals.css';
import { Box, Typography } from '@mui/material';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import CookieBanner from '../components/CookieBanner';

export const metadata: Metadata = {
  title: "Autonomisation des femmes africaines au Leadership | Campus Africain du Leadership au Féminin",
  description: "Formations en leadership et développement professionnel pour les femmes africaines",
  openGraph: {
    title: "Autonomisation des femmes africaines au Leadership",
    description: "Formations en leadership et développement professionnel pour les femmes africaines",
    url: "https://tonsite.com",
    siteName: "Campus Africain du Leadership au Féminin",
    images: [
      {
        url: "https://tonsite.com/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Autonomisation des femmes africaines au Leadership",
    description: "Formations en leadership et développement professionnel pour les femmes africaines",
    images: ["https://tonsite.com/twitter-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body style={{ 
        background: "linear-gradient(to bottom, #f9f7ff, #ffffff)", 
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        margin: 0,
      }}>
      
        <Box
          sx={{
            width: "100%",
            bgcolor: "transparent",
            pt: { xs: 3, md: 4 },
            pb: { xs: 2, md: 3 },
            textAlign: "center",
            background: "linear-gradient(135deg, #6a11cb 0%,rgb(5, 19, 42) 100%)",
            boxShadow: "0 4px 20px rgba(106, 17, 203, 0.2)",
          }}
        >
          <Typography
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

   
        <Navbar />

        <main style={{ flex: 1 }}>
          {children}
        </main>

        <Footer />

        <CookieBanner />
      </body>
    </html>
  );
}


