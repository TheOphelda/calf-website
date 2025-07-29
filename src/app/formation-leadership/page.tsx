"use client";

import { Box, Typography, Container } from "@mui/material";
import FormationsCard from "@/components/FormationsCard";
import formationLeadership from "../../data/formation.json";
import { PartnersBar } from "@/components/PartenariatComponent";
import Image from 'next/image';



const PartnerLogo = ({ name }: { name: string }) => (
  <Box sx={{ position: "relative", width: 48, height: 48, top: 22 }}>
    <Image
      src="/assets/images/logo.png"
      alt={`Logo ${name}`}
      width={64}
      height={64}
      sizes="(max-width: 768px) 48px, 64px"
      loading="lazy"
      quality={85}
      style={{
        objectFit: "contain",
        width: "100%",
        height: "100%"
      }}
    />
  </Box>
);

const partners = [
  {
    name: "Harvard Business School",
    logo: <PartnerLogo name="Harvard Business School" />,
  },
  {
    name: "INSEAD",
    logo: <PartnerLogo name="INSEAD" />,
  },
  {
    name: "MIT Sloan",
    logo: <PartnerLogo name="MIT Sloan" />,
  },
  {
    name: "Stanford GSB",
    logo: <PartnerLogo name="Stanford GSB" />,
  },
];

export default function Leadership() {
  return (
    <Box sx={{ position: "relative", minHeight: "100vh", overflow: "hidden", bgcolor: "#f9fafb" }}>
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
            background: "linear-gradient(135deg, #6a11cb 0%, rgba(5, 19, 42, 0.54) 100%)",
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
            Développez votre <span style={{ color: "#FFD600" }}>Leadership</span> Exceptionnel
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
            Transformez votre potentiel en excellence managériale grâce à nos formations certifiantes
          </Typography>
       
        </Container>
      </Box>

      <Box sx={{ 
        py: 10, 
        background: "linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%)",
        position: "relative"
      }}>
  
 
  
        <Container sx={{ position: "relative", zIndex: 3 }}>
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
              px: 2
            }}
          >
            Rejoignez les entreprises qui nous font déjà confiance
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
              color: "#1a064f",
              mb: 1,
              fontSize: { xs: "2rem", md: "2.5rem" },
            }}
          >
            Nos Formations en Leadership
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
            Des programmes sur mesure conçus par des experts pour développer votre potentiel de leader
          </Typography>
        </Box>
        
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }, gap: 4 }}>
          {formationLeadership.leadership.map((formation, index) => (
            <Box key={index} sx={{ 
              height: "100%",
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "translateY(-5px)",
              }
            }}>
              <FormationsCard
                title={formation.title}
                trainer={formation.trainer}
                target={formation.target}
                objectives={formation.objectives}
                duration={formation.duration}
                location={formation.location}
                price={formation.price}
              />
            </Box>
          ))}
        </Box>
      </Container>

      <Box sx={{ py: 0, bgcolor: "#f8f9fc", textAlign: "center" }}>
        <Container>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              color: "#1a064f",
              mb: 3,
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
                  mr: 1
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

