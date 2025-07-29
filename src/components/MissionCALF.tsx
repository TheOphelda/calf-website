"use client";

import {
  Box,
  Typography,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemIcon
} from "@mui/material";
import {
  EmojiObjects,
  Group,
  Public,
  School,
  TrendingUp
} from "@mui/icons-material";

export default function MissionValueCALF() {
  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)",
        px: { xs: 2, md: 8 },
        py: { xs: 8, md: 12 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background elements */}
      <Box aria-hidden sx={{
        position: "absolute",
        top: -120,
        right: -120,
        width: 400,
        height: 400,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(251, 86, 7, 0.15) 0%, transparent 70%)",
        zIndex: 0,
        pointerEvents: "none"
      }} />

      <Box aria-hidden sx={{
        position: "absolute",
        bottom: -100,
        left: -100,
        width: 300,
        height: 300,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(123, 31, 162, 0.12) 0%, transparent 70%)",
        zIndex: 0,
        pointerEvents: "none"
      }} />

      <Grid container spacing={6} alignItems="stretch" sx={{ position: "relative", zIndex: 1 }}>
        <Grid item xs={12} md={6}>
          <Typography variant="overline" sx={{
            color: "#fb5607",
            fontWeight: 700,
            letterSpacing: 3,
            mb: 2,
            display: "block",
            fontSize: "0.9rem",
          }}>
            NOTRE MISSION
          </Typography>

          <Typography variant="h3" sx={{
            fontWeight: 800,
            color: "rgba(255, 255, 255, 0.95)",
            mb: 3,
            lineHeight: 1.2,
            fontSize: { xs: "2rem", md: "2.5rem" },
          }}>
            Autonomiser les femmes africaines par la formation, le leadership et l’inclusion
          </Typography>

          <Typography variant="body1" sx={{
            color: "rgba(255, 255, 255, 0.8)",
            mb: 4,
            fontSize: "1.1rem",
            lineHeight: 1.7,
          }}>
            Le CALF accompagne les femmes vers l’indépendance financière et le leadership par des
            formations certifiantes, un mentorat contextualisé, et un réseau panafricain de femmes influentes.
          </Typography>

          <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mt: 4 }}>
            {["Leadership", "Formations techniques", "Mentorat", "Réseau panafricain"].map((item, index) => (
              <Paper key={index} elevation={0} sx={{
                px: 3,
                py: 1.5,
                borderRadius: 20,
                bgcolor: "rgba(251, 86, 7, 0.15)",
                backdropFilter: "blur(4px)",
                border: "1px solid rgba(251, 86, 7, 0.3)"
              }}>
                <Typography variant="body2" sx={{ color: "#ffb4a2", fontWeight: 600 }}>
                  {item}
                </Typography>
              </Paper>
            ))}
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper elevation={0} sx={{
            height: "100%",
            p: 4,
            borderRadius: 4,
            background: "rgba(16, 14, 41, 0.6)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.36)",
          }}>
            <Box sx={{ mb: 5 }}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <TrendingUp sx={{ color: "#fb5607", fontSize: 32, mr: 2 }} />
                <Typography variant="h5" sx={{
                  fontWeight: 700,
                  color: "rgba(255, 255, 255, 0.95)",
                  letterSpacing: 0.5,
                }}>
                  Nos Piliers d'Action
                </Typography>
              </Box>

              <List dense sx={{ pl: 6, mt: 1 }}>
                {[
                  "Renforcer les capacités personnelles et professionnelles des femmes",
                  "Faciliter l’accès à l’autonomisation économique et à l’entrepreneuriat",
                  "Soutenir un leadership inclusif au cœur du développement africain"
                ].map((item, index) => (
                  <ListItem key={index} disableGutters>
                    <ListItemIcon sx={{ minWidth: 28, mt: "4px" }}>
                      <Box sx={{ width: 6, height: 6, borderRadius: "50%", bgcolor: "#fb5607" }} />
                    </ListItemIcon>
                    <ListItemText primary={item} primaryTypographyProps={{
                      sx: { color: "rgba(255, 255, 255, 0.8)", fontSize: "1rem", lineHeight: 1.6 }
                    }} />
                  </ListItem>
                ))}
              </List>
            </Box>

            <Box>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <EmojiObjects sx={{ color: "#fb5607", fontSize: 32, mr: 2 }} />
                <Typography variant="h5" sx={{
                  fontWeight: 700,
                  color: "rgba(255, 255, 255, 0.95)",
                  letterSpacing: 0.5,
                }}>
                  Nos Valeurs Fondamentales
                </Typography>
              </Box>

              <Grid container spacing={3} sx={{ pl: 1, justifyContent: "center" }}>
                {[
                  {
                    icon: <Group fontSize="medium" />,
                    title: "Sororité Active",
                    desc: "Créer des écosystèmes solidaires et bienveillants pour accompagner chaque femme"
                  },
                  {
                    icon: <Public fontSize="medium" />,
                    title: "Inclusion Économique",
                    desc: "Favoriser l’accès à la formation et à l’entrepreneuriat pour toutes"
                  },
                  {
                    icon: <School fontSize="medium" />,
                    title: "Excellence Contextuelle",
                    desc: "Ancrer les formations dans les réalités locales avec des standards internationaux"
                  },
                  {
                    icon: <TrendingUp fontSize="medium" />,
                    title: "Impact Mesurable",
                    desc: "Assurer un suivi des parcours pour une transformation durable"
                  }
                ].map((value, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <Paper elevation={0} sx={{
                      p: 2.5,
                      width: "23rem",
                      height: "100%",
                      borderRadius: 3,
                      background: "rgba(162, 7, 7, 0.03)",
                      border: "1px solid rgba(255, 255, 255, 0.05)",
                      "&:hover": {
                        transform: "translateY(-5px)",
                        background: "rgba(251, 86, 7, 0.08)",
                        borderColor: "rgba(251, 86, 7, 0.2)"
                      }
                    }}>
                      <Box sx={{ display: "flex", alignItems: "center", mb: 1.5 }}>
                        <Box sx={{
                          width: 36,
                          height: 36,
                          borderRadius: "50%",
                          bgcolor: "rgba(251, 84, 7, 0.88)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          mr: 2
                        }}>
                          {value.icon}
                        </Box>
                        <Typography variant="h6" sx={{
                          fontWeight: 700,
                          color: "rgba(255, 255, 255, 0.95)",
                          fontSize: "1.1rem"
                        }}>
                          {value.title}
                        </Typography>
                      </Box>
                      <Typography variant="body2" sx={{
                        color: "rgba(255, 255, 255, 0.7)",
                        pl: 7,
                        lineHeight: 1.6
                      }}>
                        {value.desc}
                      </Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
