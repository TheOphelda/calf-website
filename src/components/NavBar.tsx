'use client';

import { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Container,
  Divider,
  Drawer,
  List,
  ListItem,
  useScrollTrigger,
} from '@mui/material';
import {
  Close,
  Menu,
  AccountCircle,
} from '@mui/icons-material';

import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  
  // S'assurer que le code ne s'exécute que côté client
  useEffect(() => {
    setMounted(true);
    
    // Nettoyage lors du démontage du composant
    return () => setMounted(false);
  }, []);
  
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  
  const navItems = [
    { 
      label: "Qui sommes-nous", 
      path: "/qui-sommes-nous",
    },
    { 
      label: "Formations techniques", 
      path: "/formation-technique",
    },
    { 
      label: "Formations leadership", 
      path: "/formation-leadership",
    },
    { 
      label: "Soutien", 
      path: "/soutien",
    }
  ];

  // Utiliser useScrollTrigger uniquement côté client
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  // Rendre le même contenu côté serveur et client pour éviter l'hydratation
  const isClient = mounted;

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          bgcolor: "white",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
          py: 1,
        }}
        elevation={0}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ 
            justifyContent: "space-between", 
            px: 0,
            position: "relative"
          }}>
            <Box 
              component={Link} 
              href="/" 
              sx={{ 
                display: "flex", 
                alignItems: "center",
                textDecoration: "none",
                mr: 4
              }}
            >
              <Box
                sx={{
                  width: 50,
                  height: 50,
                  bgcolor: "#F3E5F5",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  overflow: "hidden",
                  mr: 2
                }}
              >
                <Image 
                  src="/assets/images/logo.png" 
                  alt="Logo" 
                  width={50}
                  height={50}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }} 
                />
              </Box>

              <Box>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    fontWeight: 800, 
                    color: "#1a064f",
                    lineHeight: 1.1
                  }}
                >
                  CALF
                </Typography>
                <Typography 
                  variant="caption" 
                  sx={{ 
                    color: "#6b7280",
                    fontSize: "0.7rem"
                  }}
                >
                  Campus Africain du Leadership au Féminin
                </Typography>
              </Box>
            </Box>

            <Box sx={{ 
              display: { xs: "none", md: "flex" }, 
              alignItems: "center",
              gap: 2
            }}>
             
              <Button 
                variant="contained" 
                component={Link}
                href="/contact" 
                sx={{ 
                  fontWeight: 600, 
                  bgcolor: "#6a11cb",
                  "&:hover": { bgcolor: "#2575fc" },
                  borderRadius: 50,
                  px: 3,
                  py: 1,
                  boxShadow: "0 4px 15px rgba(106, 17, 203, 0.3)",
                  textTransform: "none"
                }}
              >
                Contact
              </Button>
            </Box>

            <IconButton
              sx={{ 
                display: { xs: "flex", md: "none" },
                color: "#6a11cb"
              }}
              onClick={isClient ? handleDrawerToggle : undefined}
              disabled={!isClient}
            >
              <Menu />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {isClient && (
        <Drawer
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          sx={{
            "& .MuiDrawer-paper": {
              width: "100%",
              maxWidth: 320,
              bgcolor: "#1a064f",
              color: "white"
            }
          }}
        >
          <Box sx={{ p: 2, display: "flex", justifyContent: "flex-end" }}>
            <IconButton onClick={handleDrawerToggle} sx={{ color: "white" }}>
              <Close />
            </IconButton>
          </Box>
          <Box sx={{ px: 3, py: 2, display: "flex", alignItems: "center", mb: 3 }}>
            <AccountCircle sx={{ fontSize: 40, mr: 2 }} />
            <Typography variant="h6">Espace membre</Typography>
          </Box>
          <List>
            {navItems.map((item, index) => (
              <Box key={index}>
                <ListItem 
                  sx={{ 
                    py: 1.5,
                    "&:hover": { bgcolor: "rgba(255,255,255,0.1)" }
                  }}
                >
                  <Button
                    component={Link}
                    href={item.path}
                    fullWidth
                    sx={{ 
                      justifyContent: "flex-start", 
                      fontWeight: 500,
                      color: "white",
                      textAlign: "left"
                    }}
                  >
                    {item.label}
                  </Button>
                </ListItem>
                <Divider sx={{ borderColor: "rgba(255,255,255,0.1)", my: 1 }} />
              </Box>
            ))}
            
            <ListItem sx={{ py: 2, justifyContent: "center" }}>
              <Button
                variant="contained"
                component={Link}
                href="/contact"
                fullWidth
                sx={{
                  bgcolor: "white",
                  color: "#1a064f",
                  fontWeight: 600,
                  borderRadius: 2,
                  py: 1.5,
                  "&:hover": { bgcolor: "#f5f5f5" }
                }}
              >
                Contactez-nous
              </Button>
            </ListItem>
          </List>
        </Drawer>
      )}
    </>
  );
};

export default Navbar;

