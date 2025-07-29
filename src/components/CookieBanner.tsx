'use client';

import { useState } from 'react';
import { Paper, Box, Button, IconButton, Typography } from '@mui/material';
import { Close } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';

const CookieBanner = () => {
  const [cookiesAccepted, setCookiesAccepted] = useState(false);

  if (cookiesAccepted) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          position: "fixed",
          bottom: 24,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 1500,
          width: "90%",
          maxWidth: 600,
        }}
      >
        <Paper
          elevation={8}
          sx={{
            px: 3,
            py: 2.5,
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            gap: 2,
            bgcolor: "#1a064f",
            color: "white",
            borderRadius: 3,
          }}
        >
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="body2" sx={{ fontWeight: 500 }}>
              Nous utilisons des cookies pour améliorer votre expérience
            </Typography>
            <Typography variant="caption" sx={{ opacity: 0.8, mt: 0.5, display: "block" }}>
              En continuant, vous acceptez notre politique de cookies.
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 1 }}>
            <Button
              size="small"
              variant="outlined"
              color="inherit"
              onClick={() => setCookiesAccepted(true)}
              sx={{ 
                borderRadius: 2, 
                fontWeight: 600,
                borderColor: "rgba(255,255,255,0.3)",
                "&:hover": { 
                  borderColor: "white", 
                  bgcolor: "rgba(255,255,255,0.1)" 
                }
              }}
            >
              Paramètres
            </Button>
            <Button
              size="small"
              variant="contained"
              color="primary"
              onClick={() => setCookiesAccepted(true)}
              sx={{ 
                borderRadius: 2, 
                fontWeight: 600,
                bgcolor: "white",
                color: "#1a064f",
                "&:hover": { bgcolor: "#f5f5f5" }
              }}
            >
              J'accepte
            </Button>
            <IconButton
              size="small"
              color="inherit"
              onClick={() => setCookiesAccepted(true)}
              aria-label="Fermer la bannière cookies"
              sx={{ ml: 1 }}
            >
              <Close fontSize="small" />
            </IconButton>
          </Box>
        </Paper>
      </motion.div>
    </AnimatePresence>
  );
};

export default CookieBanner;