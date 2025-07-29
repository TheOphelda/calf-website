"use client";

import ServicesCard from "@/components/ServicesComponent";
import { Box, Typography, Container, Stack , Button } from "@mui/material";
import { motion } from "framer-motion";
import serviceInfo from "@/data/service.json";
import presentationInfo from "@/data/presentation.json";
import PresentationComponent from "@/components/PresentationComponent";
import DomaineComponent from "@/components/DomaineComponent";
import TemoignageComponent from "@/components/Temoignage";

export default function AccueilBanner() {
  
  return (
    <div>
      <Box
        sx={{
          position: "relative",
          minHeight: { xs: 480, md: 601 },
          display: "flex",
          alignItems: "center",
          color: "white",

          overflow: "hidden",
          borderBottom: "5px solid rgba(44, 12, 96, 0.21)",
        }}
      >
        <svg
          width="650"
          height="650"
          viewBox="0 0 650 650"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            position: "absolute",
            left: -120,
            top: -80,
            zIndex: 1,
          }}
        >
          <circle cx="325" cy="325" r="250" fill="yellow" fillOpacity="0.07" />
          <circle cx="325" cy="325" r="180" fill="yellow" fillOpacity="0.09" />
          <circle cx="325" cy="325" r="110" fill="yellow" fillOpacity="0.13" />
        </svg>
        <svg
          width="300"
          height="300"
          viewBox="0 0 300 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            position: "absolute",
            right: -80,
            top: 60,
            zIndex: 1,
          }}
        >
          <circle cx="150" cy="150" r="120" fill="yellow" fillOpacity="0.08" />
          <circle
            cx="150"
            cy="150"
            r="90"
            stroke="yellow"
            strokeDasharray="10 10"
            strokeWidth="2"
            fill="none"
            opacity="0.6"
          />
        </svg>

        <Container maxWidth="md" sx={{ zIndex: 2, position: "relative" }}>
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={4}
            alignItems="center"
            justifyContent="space-between"
          >
            <Box flex={4}>
             

<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 0.2 }}
>
  <Typography
    variant="h1" 
    sx={{
      fontWeight: 600,
      width:"85%",
      fontSize: "2.5rem",
      lineHeight: 1.15,
      letterSpacing: { xs: 0, sm: -1 },
      background: "rgb(46, 14, 106) ",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      mb: { xs: 1.5, md: 2.5 },
      maxWidth: "1000px",
      position: "relative",
      '&::after': {
        content: '""',
        position: "absolute",
        bottom: -10,
        left: 0,
        width: "100px",
        height: "5px",
        background: "linear-gradient(90deg, #5e17eb, #c533ff)",
        borderRadius: 3
      }
    }}
  >
    Autonomisation des femmes par la formation professionnelle et le leadership
  </Typography>
</motion.div>

<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 0.4 }}
>
  <Typography
    component="p"
    sx={{
      fontWeight: 400,
      fontSize: { 
        xs: "1rem", 
        sm: "1.15rem", 
        md: "1.35rem" 
      },
      lineHeight: 1.6,
      maxWidth: "700px",
      mb: { xs: 2, md: 4 },
      color: "#4a4458",
      position: "relative",
      pl: 3,
      '&::before': {
        content: '""',
        position: "absolute",
        left: 0,
        top: "0.5em",
        height: "70%",
        width: "3px",
        background: "linear-gradient(to bottom, #c533ff, #5e17eb)",
        borderRadius: 3
      }
    }}
  >
    Découvrez notre impact et rejoignez le Campus Africain du Leadership au Féminin 
    pour l'autonomisation des Femmes.
  </Typography>
   <Button
              variant="contained"
              color="primary"
              sx={{
                px: 4,
                py: 1.5,
                fontSize: "1.1rem",
                fontWeight: 600,
                bgcolor: "#FFD600",
                color: "#1a064f",
                "&:hover": { bgcolor: "#ffc400" },
                boxShadow: "0 4px 15px rgba(255, 214, 0, 0.4)",
                borderRadius: 2,
              }}
            >
              Explorer nos formations 
              </Button>
</motion.div>
            </Box>

            <Box
              flex={1}
              display="flex"
              justifyContent="center"
              alignItems="center"
              sx={{ mt: { xs: 4, md: 0 } }}
            >
              <Box
                component="img"
                src="/assets/images/womanComputer.png"
                alt="Femmes en formation"
                sx={{
                  height: "auto",
                  width: { sm: "0%", md: "100%", xs: "90%" },
                  position: "absolute",
                }}
              />
            </Box>
          </Stack>
        </Container>
        
      </Box>

 
        {presentationInfo.presentations.map((item) => {

          return (
            <PresentationComponent
              key={item.id}
              image={item.image}
              stat={item.stat}
              overline={item.overline}
              title={item.title}
              description={item.description}
              button={item.button}
              href={item.href}
            />
          );
        })}


      <Box>
        <DomaineComponent />
      </Box>
  <Box

           sx={{
          display: "flex",
          
        }}
      >
        {serviceInfo.services.map((info, index) => (
          <ServicesCard
            key={index}
            title={info.title}
            detail={info.description}
            href={info.href}
          />
        ))}
      </Box>
      <Box>
        <TemoignageComponent />
      </Box>

    
    </div>
  );
}
