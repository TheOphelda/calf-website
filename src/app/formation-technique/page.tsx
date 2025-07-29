"use client";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';

import { PartnersBar } from "@/components/PartenariatComponent";
import FormationsCard from "@/components/FormationsCard";
import TechComponent from "@/components/TechComponent";
import formationTech from "../../data/formation.json";

const partners = [
  {
    name: "Harvard Business School",
    logo: <img src="/assets/images/logo.png" alt="Harvard" style={{ height: 48  , position:"relative" , top:22} } />,
  },
  {
    name: "INSEAD",
    logo: <img src="/assets/images/logo.png" alt="INSEAD" style={{ height: 48 , position:"relative" , top:22}} />,
  },
  {
    name: "MIT Sloan",
    logo: <img src="/assets/images/logo.png" alt="MIT" style={{ height: 48 , position:"relative" , top:22}} />,
  },
  {
    name: "Stanford GSB",
    logo: <img src="/assets/images/logo.png" alt="Stanford" style={{ height: 48, position:"relative" , top:22 }} />,
  },
];


export default function Technique() {
  const theme = useTheme();

  return (
    <Box sx={{ position: "relative", minHeight: "100vh", overflow: "hidden", bgcolor: "#f5f7fa" }}>
      <Box
        sx={{
          position: "relative",
          height: { xs: "60vh", md: "70vh" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 1,
            background: "linear-gradient(135deg,rgb(123, 51, 186) 0%, rgba(10, 31, 68, 0.54) 100%)",
          }}
        />
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
          }}
          src="/assets/images/videoBack.mp4"
        />

        <Container
          sx={{
            position: "relative",
            zIndex: 2,
            px: { xs: 3, md: 4 },
            pt: 8,
            pb: { xs: 8, md: 2 },
            textAlign: "center",
            color: "white",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontWeight: 800,
              fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4rem" },
              lineHeight: 1.1,
              mb: 3,
              textShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
              maxWidth: 900,
              mx: "auto",
            }}
          >
            Maîtrisez les <span style={{ color: "#FFD600" }}>Compétences Techniques</span> de Demain
          </Typography>

          <Typography
            variant="h5"
            sx={{
              fontWeight: 400,
              mb: 4,
              fontSize: { xs: "1.1rem", md: "1.3rem" },
              maxWidth: 700,
              mx: "auto",
              textShadow: "0 1px 2px rgba(0, 0, 0, 0.2)",
            }}
          >
            Nos formations techniques avancées pour booster votre carrière numérique
          </Typography>

         
        </Container>
      </Box>

    

      <Box sx={{ py: 10, bgcolor: "#e4e8f0" }}>
        <Container>
          <Typography
            variant="h5"
            sx={{
              textAlign: "center",
              fontWeight: 600,
              mb: 6,
              color: "#4a5568",
              fontSize: { xs: "1.25rem", md: "1.5rem" },
              maxWidth: 600,
              mx: "auto",
              px: 2,
            }}
          >
            Les leaders technologiques qui nous soutiennent
          </Typography>

        <Box sx={{
              background: "white",
              borderRadius: 4,
              boxShadow: "0 10px 35px rgba(0,0,0,0.05)",
              p: 4,
              overflow: "hidden",
            }}>
              <PartnersBar
              text=""
                             partners={partners}

              />
            </Box>
          </Container>
        </Box>
        

      <Container sx={{ py: 8 }}>
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              color: "#0a1f44",
              mb: 1,
              fontSize: { xs: "2rem", md: "2.5rem" },
            }}
          >
            Nos Formations Techniques
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#4a5568",
              maxWidth: 700,
              mx: "auto",
              fontSize: "1.1rem",
            }}
          >
            Des parcours experts pensés pour vos ambitions numériques
          </Typography>
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' }, gap: 4 }}>
          {formationTech.technical.map((formation, index) => (
            <Box key={index}>
              <Box
                sx={{
                  height: "100%",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                  },
                }}
              >
                <FormationsCard {...formation} />
              </Box>
            </Box>
          ))}
        </Box>
      </Container>

      <Box sx={{ py: 6, bgcolor: "#f8f9fc", textAlign: "center" }}>
        <Container>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              color: "#1a064f",
              mb: 4,
              fontSize: { xs: "1.8rem", md: "2.2rem" },
            }}
          >
            Tous les modules incluent
          </Typography>

          <Box sx={{ 
            mt: 4, 
            display: "flex", 
            justifyContent: "center", 
            flexDirection: "column", 
            gap: 2, 
            alignItems: "center",
            mb: 4
          }}>
            {[
              "Un certificat de participation",
              "Une approche simple, en français ou en wolof selon les profils",
              "Du mentorat post-formation (3 mois)",
              "Des opportunités de mise en réseau ou de micro-financement"
            ].map((item, index) => (
              <Box key={index} sx={{ display: "flex", alignItems: "center" }}>
                <Box sx={{
                  width: 24,
                  height: 24,
                  bgcolor: "#48bb78",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mr: 2
                }}>
                  <Typography variant="body2" sx={{ color: "white", fontWeight: 700 }}>✓</Typography>
                </Box>
                <Typography variant="body2" sx={{ color: "#4a5568" }}>{item}</Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
