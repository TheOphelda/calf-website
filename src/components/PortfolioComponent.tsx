"use client";

import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';

// Composants Material-UI optimisés
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Skeleton from '@mui/material/Skeleton';

// Chargement dynamique des icônes pour réduire la taille du bundle initial
const FacebookIcon = dynamic(
  () => import('@mui/icons-material/Facebook'),
  { loading: () => <Skeleton variant="circular" width={24} height={24} />, ssr: false }
);

const TwitterIcon = dynamic(
  () => import('@mui/icons-material/Twitter'),
  { loading: () => <Skeleton variant="circular" width={24} height={24} />, ssr: false }
);

const LinkedInIcon = dynamic(
  () => import('@mui/icons-material/LinkedIn'),
  { loading: () => <Skeleton variant="circular" width={24} height={24} />, ssr: false }
);

const PinterestIcon = dynamic(
  () => import('@mui/icons-material/Pinterest'),
  { loading: () => <Skeleton variant="circular" width={24} height={24} />, ssr: false }
);

const AccountTreeIcon = dynamic(
  () => import('@mui/icons-material/AccountTree'),
  { loading: () => <Skeleton variant="rectangular" width={24} height={24} />, ssr: false }
);

const SchoolIcon = dynamic(
  () => import('@mui/icons-material/School'),
  { loading: () => <Skeleton variant="rectangular" width={24} height={24} />, ssr: false }
);

const CampaignIcon = dynamic(
  () => import('@mui/icons-material/Campaign'),
  { loading: () => <Skeleton variant="rectangular" width={24} height={24} />, ssr: false }
);

const GavelIcon = dynamic(
  () => import('@mui/icons-material/Gavel'),
  { loading: () => <Skeleton variant="rectangular" width={24} height={24} />, ssr: false }
);

import Image from "next/image";
import team from "@/data/portfolio.json";

type SocialIconKey = 'facebook' | 'twitter' | 'pinterest' | 'linkedin';

// Type assertion for social icons
const socialIcons = {
  facebook: <FacebookIcon fontSize="small" />,
  twitter: <TwitterIcon fontSize="small" />,
  pinterest: <PinterestIcon fontSize="small" />,
  linkedin: <LinkedInIcon fontSize="small" />,
};

const poles = [
  {
    title: "Direction Générale",
    icon: <AccountTreeIcon />,
    description: "Pilotage stratégique du CALF assuré par la fondatrice Sokhna NDIAYE.",
  },
  {
    title: "Pôle Pédagogique",
    icon: <SchoolIcon />,
    description: "Conception, coordination et qualité des programmes de formation (Dr Korka SALL).",
  },
  {
    title: "Pôle Développement",
    icon: <CampaignIcon />,
    description: "Partenariats, levée de fonds et communication.",
  },
  {
    title: "Pôle Administratif",
    icon: <GavelIcon />,
    description: "Gestion des ressources humaines, logistique et cadre juridique.",
  },
];

export default function TeamPresentation() {
  return (
    <Box sx={{ bgcolor: "#fafafa", py: 10, px: 2 }}>
      {/* Titre équipe */}
      <Box sx={{ textAlign: "center", mb: 8 }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            fontSize: { xs: "1.8rem", md: "2.2rem" },
            color: "#1a1a1a",
            mb: 1,
          }}
        >
          L’équipe CALF
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#444",
            maxWidth: 600,
            mx: "auto",
            fontSize: "1rem",
          }}
        >
          Découvrez les femmes et hommes qui incarnent l’esprit du Campus Africain du Leadership au Féminin.
        </Typography>
      </Box>

      {/* Cartes de membres */}
      <Stack
        direction="row"
        spacing={4}
        flexWrap="wrap"
        justifyContent="center"
        alignItems="stretch"
      >
        {team.map((person) => (
          <Box
            key={person.name}
            sx={{
              width: 480,
              bgcolor: "#fff",
              border: "1px solid #e0e0e0",
              borderRadius: 2,
              p: 3,
              mb: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              transition: "0.2s",
              "&:hover": {
                borderColor: "#ccc",
              },
            }}
          >
            <Box
              sx={{
                width: 80,
                height: 80,
                borderRadius: "50%",
                overflow: "hidden",
                mb: 2,
              }}
            >
              <Image
                src={person.avatar}
                alt={`Photo de ${person.name}`}
                width={160}
                height={160}
                sizes="(max-width: 768px) 80px, 160px"
                loading="lazy"
                quality={85}
                placeholder="blur"
                blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+Cjwvc3ZnPg=="
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </Box>
            <Typography variant="subtitle1" sx={{ fontWeight: 600, color: "#222", mb: 0.5 }}>
              {person.name}
            </Typography>
            <Typography variant="body2" sx={{ color: "#666", mb: 2 }}>
              {person.title}
            </Typography>
            <Typography variant="body2" sx={{ color: "#555", fontSize: "0.9rem", mb: 2 }}>
              {person.description}
            </Typography>
            <Stack direction="row" spacing={1}>
              {person.socials.map((s: { icon: string; url: string }, i) => (
                <IconButton
                  key={i}
                  href={s.url}
                  target="_blank"
                  size="small"
                  sx={{
                    color: "#666",
                    "&:hover": { color: "#000" },
                  }}
                >
                  {socialIcons[s.icon as SocialIconKey]}
                </IconButton>
              ))}
            </Stack>
          </Box>
        ))}
      </Stack>

      {/* Section pôles */}
      <Box sx={{ mt: 10, textAlign: "center" }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            color: "#1a1a1a",
            mb: 4,
          }}
        >
          Les pôles du CALF
        </Typography>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, gap: 3, justifyContent: 'center' }}>
          {poles.map((pole, index) => (
            <Box key={index} sx={{ width: '100%' }}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  bgcolor: "#fff",
                  border: "1px solid #ddd",
                  borderRadius: 3,
                  textAlign: "center",
                  height: "100%",
                  transition: "0.3s",
                  "&:hover": {
                    borderColor: "#fb5607",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                  },
                }}
              >
                <Box sx={{ fontSize: 40, color: "#fb5607", mb: 1 }}>{pole.icon}</Box>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                  {pole.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "#555", fontSize: "0.9rem" }}>
                  {pole.description}
                </Typography>
              </Paper>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
