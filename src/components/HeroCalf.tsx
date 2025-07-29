"use client";

import { Box, Typography, Stack, Grid, Chip } from "@mui/material";

export default function HeroCALF() {
  return (
    <Box
      sx={{
        background: "#ffffff",
        px: { xs: 2, md: 8 },
        py: { xs: 6, md: 5 },
        minHeight: { md: 480 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={7}>
          <Stack spacing={2}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 800,
                color: "#232946",
                lineHeight: 1.1,
                mt: 2,
                fontSize: { xs: "2rem", md: "2.7rem" },
              }}
            >
              Campus Africain du Leadership au Féminin
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                color: "#1e40af",
                mb: 1,
                fontSize: { xs: "1.3rem", md: "1.8rem" },
              }}
            >
              L’avenir de l’Afrique se construit avec les femmes
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#6b7280",
                width: "100%",
                mb: 2,
                fontSize: { xs: "1rem", md: "1.1rem" },
              }}
            >
              Le Campus Africain du Leadership au Féminin (CALF) est une initiative panafricaine dédiée à l’autonomisation des femmes africaines à travers la formation professionnelle, le développement du leadership et la solidarité. Nous croyons qu’investir dans les femmes, c’est investir dans l’avenir du continent.
            </Typography>
            <Stack direction="row" spacing={2} flexWrap="wrap">
              <Chip
                label="Soutenir"
                sx={{
                  bgcolor: "#e0f2fe",
                  color: "#1e40af",
                  fontWeight: 700,
                  border: "1px solid #bfdbfe",
                }}
              />
              <Chip
                label="Pourquoi un Campus Africain du Leadership au Féminin ?"
                sx={{
                  bgcolor: "#f0fdf4",
                  color: "#065f46",
                  fontWeight: 700,
                  border: "1px solid #bbf7d0",
                }}
              />
            </Stack>
          </Stack>
        </Grid>

        <Grid item xs={12} md={5}>
          <Box
            sx={{
              borderRadius: 4,
              overflow: "hidden",
              width: "100%",
              height: { xs: 220, md: 320 },
              boxShadow: "0 8px 32px 0 rgba(44,62,80,0.08)",
              position: "relative",
              bgcolor: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              component="img"
              src="/assets/images/image.png"
              alt="CALF illustration"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
        </Grid>
      </Grid>

      {/* Plan d'action 2026 */}
      <Box
        sx={{
          position: { md: "absolute" },
          right: { md: 32 },
          bottom: { md: 100 },
          mt: { xs: 4, md: 0 },
          bgcolor: "rgb(35, 6, 77)",
          color: "#fff",
          borderRadius: 3,
          px: 4,
          py: 3,
          width: { xs: "100%", md: "40%" },
          boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
          zIndex: 2,
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
          Plan d’action jusqu’en 2026
        </Typography>
        <Stack spacing={3}>
          <Box>
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
              Janvier 2026
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.88 }}>
              Lancement officiel du CALF avec des partenariats stratégiques.
            </Typography>
          </Box>
          <Box>
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
              300 bourses prévues
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.88 }}>
              Offertes aux femmes sans revenus pour accéder aux formations.
            </Typography>
          </Box>
          <Box>
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
              Fin 2026
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.88 }}>
              Acquisition de locaux permanents pour le Campus CALF.
            </Typography>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}
