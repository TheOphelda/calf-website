"use client";

import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Button,
  CardActions,
  Stack,
  Chip,
  Avatar,
  IconButton,
  Snackbar,
  Alert,
} from "@mui/material";
import { motion } from "framer-motion";
import {
  Event,
  Schedule,
  LocationOn,
  Share,
  Link as LinkIcon,
} from "@mui/icons-material";
import { useState } from "react";

type FormationCardProps = {
  title: string;
  trainer: string;
  trainerAvatar?: string;
  target: string;
  objectives: string;
  duration: string;
  location: string;
  price: string;
  image?: string;
};

export default function FormationsCard({
  title,
  trainer,
  trainerAvatar,
  target,
  objectives,
  duration,
  location,
  price,
  image = "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
}: FormationCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const handleShare = async () => {
    const shareData = {
      title: title,
      text: `Découvrez cette formation: ${title} par ${trainer}`,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        navigator.clipboard.writeText(window.location.href);
        setSnackbarMessage("Lien copié dans le presse-papiers !");
        setSnackbarOpen(true);
      }
    } catch (err) {
      console.error("Erreur de partage:", err);
      setSnackbarMessage("Échec du partage. Veuillez réessayer.");
      setSnackbarOpen(true);
    }
  };

  return (
    <>
      <Box
        sx={{
          maxWidth: 360,
          width: "100%",
          mx: "auto",
          position: "relative",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
          <Card
            sx={{
              borderRadius: 4,
              overflow: "hidden",
              width: "100%",
              bgcolor: "white",
              boxShadow: "0 8px 24px rgba(0,0,0,0.05)",
              position: "relative",
              zIndex: 1,
              display: "flex",
              flexDirection: "column",
              border: "1px solid rgba(0,0,0,0.05)",
            }}
          >
            {/* En-tête avec image */}
            <Box sx={{ position: "relative" }}>
              <CardMedia
                component="img"
                height="160"
                image={image}
                alt={title}
                sx={{
                  objectFit: "cover",
                  transition: "transform 0.4s ease",
                  transform: isHovered ? "scale(1.05)" : "scale(1)",
                }}
              />
              
              {/* Overlay */}
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "100%",
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 70%)",
                }}
              />
              
              {/* Boutons d'action */}
              <Box
                sx={{
                  position: "absolute",
                  top: 16,
                  right: 16,
                  display: "flex",
                  gap: 1,
                }}
              >
                <IconButton
                  onClick={handleShare}
                  sx={{
                    bgcolor: "rgba(255,255,255,0.9)",
                    "&:hover": { bgcolor: "white" },
                  }}
                >
                  <Share sx={{ color: "#616161" }} />
                </IconButton>
              </Box>
              
              <Box
                sx={{
                  position: "absolute",
                  bottom: 16,
                  right: 16,
                  bgcolor: "rgb(255, 195, 13)",
                  px: 1.5,
                  py: 0.5,
                  borderRadius: 2,
                  display: "flex",
                  alignItems: "center",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: 800,
                  color:"rgb(5, 48, 66)",
                    fontSize: "1.1rem",
                  }}
                >
                  {price}
                </Typography>
              </Box>
            </Box>

            <CardContent sx={{ px: 3, pt: 3, pb: 1, flexGrow: 1 }}>
              {/* Titre */}
              <Typography
                variant="h6"
                fontWeight={800}
                color="#212121"
                sx={{
                  fontSize: "1.18rem",
                  mb: 1.5,
                  minHeight: 56,
                  lineHeight: 1.3,
                  textAlign:"center"
                }}
              >
                {title}
              </Typography>
              
              {/* Public visé */}
        <Box
  sx={{
    bgcolor: "#F3E5F5",
    color: "#7B1FA2",
    fontWeight: 400,
    fontSize: "1rem",
    padding: "8px",
    mb: 2,
    borderRadius: 1,
    textAlign: "center",
    display: "inline-block"
  }}
>
  {`Public :\n${target}`}
</Box>


              
              {/* Formateur */}
              <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 1.5 }}>
                <Avatar
                  src={trainerAvatar}
                  sx={{ 
                    width: 36, 
                    height: 36, 
                    bgcolor: "#7B1FA2",
                    fontSize: "1rem",
                  }}
                >
                  {trainer.charAt(0)}
                </Avatar>
                <Typography variant="body2" fontWeight={600} color="#424242">
                  {trainer}
                </Typography>
              </Stack>
              
              {/* Objectifs */}
              <Typography
                variant="body2"
                color="#616161"
                sx={{
                  mb: 2,
                  lineHeight: 1.5,
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  fontSize: "0.9rem",
                  display:"flex",
                  flexWrap:"wrap"
                }}
              >
                {objectives}
              </Typography>
              
              {/* Détails */}
              <Box
                sx={{
                  bgcolor: "#F8F9FA",
                  borderRadius: 2,
                  p: 2,
                  mb: 2,
                  border: "1px solid rgba(0,0,0,0.03)",
                }}
              >
                <Stack spacing={1.5}>
                  <Stack direction="row" spacing={1.5} alignItems="center">
                    <Schedule
                      fontSize="small"
                      sx={{ color: "#7B1FA2", width: 20 }}
                    />
                    <Typography variant="body2" sx={{ fontWeight: 500 }}>
                      Durée : {duration}
                    </Typography>
                  </Stack>
                  <Stack direction="row" spacing={1.5} alignItems="center">
                    <LocationOn
                      fontSize="small"
                      sx={{ color: "#7B1FA2", width: 20 }}
                    />
                    <Typography variant="body2" sx={{ fontWeight: 500 }}>
                      Lieu : {location}
                    </Typography>
                  </Stack>
                  <Stack direction="row" spacing={1.5} alignItems="center">
                 
                    
                  </Stack>
                </Stack>
              </Box>
            </CardContent>
            
            <CardActions
              sx={{
                px: 3,
                pb: 3,
                justifyContent: "center",
              }}
            >
              <Button
                variant="contained"
                size="medium"
                fullWidth
                sx={{
                  bgcolor: "#7B1FA2",
                  background:
                    "linear-gradient(135deg, #7B1FA2 0%, #4A148C 100%)",
                  "&:hover": {
                    background:
                      "linear-gradient(135deg, #6a1b9a 0%, #38006b 100%)",
                  },
                  borderRadius: 2,
                  textTransform: "none",
                  fontSize: "1rem",
                  px: 2.5,
                  py: 1.2,
                  fontWeight: 700,
                  boxShadow: "0 4px 14px rgba(123,31,162,0.25)",
                }}
              >
                S'inscrire à la formation
              </Button>
            </CardActions>
          </Card>
        </motion.div>
      </Box>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setSnackbarOpen(false)}
          severity="info"
          sx={{ width: "100%" }}
          icon={<LinkIcon />}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </>
  );
}