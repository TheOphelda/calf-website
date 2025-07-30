
'use client';
import Image from "next/image";

import React, { useState, useEffect } from 'react';
import { 
  Box, Typography, Button, Container, Paper, TextField, 
  Card, useTheme, Link
} from '@mui/material';
import { motion } from 'framer-motion';
import { 
  CheckCircle, Business, Groups, VolunteerActivism, Public, 
  School, Diversity3, TrendingUp, Handshake, Favorite
} from '@mui/icons-material';

const SupportPage = () => {
  const theme = useTheme();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < theme.breakpoints.values.md);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, [theme.breakpoints.values.md]);

  const waysToSupport = [
    {
      title: "Entreprises",
      description: "Recrutez des talents féminins qualifiés dans vos secteurs stratégiques et valorisez votre engagement RSE. Nos programmes forment des femmes leaders prêtes à contribuer immédiatement à votre croissance.",
      icon: <Business sx={{ fontSize: 40 }} />,
      color: "#5e17eb"
    },
    {
      title: "Collectivités",
      description: "Accueillez le CALF dans votre commune pour développer des programmes d'accompagnement local. Nous créons des écosystèmes favorables à l'entrepreneuriat féminin et au leadership communautaire.",
      icon: <Public sx={{ fontSize: 40 }} />,
      color: "#c533ff"
    },
    {
      title: "ONG & Institutions",
      description: "Nouez des partenariats stratégiques avec le CALF pour amplifier notre impact collectif. Ensemble, nous pouvons créer des programmes structurants pour l'autonomisation des femmes à l'échelle continentale.",
      icon: <Groups sx={{ fontSize: 40 }} />,
      color: "#ff6b9c"
    },
    {
      title: "Philanthropes",
      description: "Investissez dans l'avenir de l'Afrique en soutenant la formation et l'accompagnement de femmes leaders. Votre soutien permet de créer un effet multiplicateur dans les communautés locales.",
      icon: <VolunteerActivism sx={{ fontSize: 40 }} />,
      color: "#ff9e6d"
    }
  ];

const partners = [
  { src: "/assets/images/image.png", alt: "Partenaire 1" },
  { src: "/assets/images/image.png", alt: "Partenaire 2" },
  { src: "/assets/images/image.png", alt: "Partenaire 3" },
  { src: "/assets/images/image.png", alt: "Partenaire 4" },

];

 

  return (
    <Box sx={{ overflowX: 'hidden' }}>
   
      <Box sx={{
            background: "linear-gradient(135deg, #6a11cb 0%,rgb(5, 19, 42) 100%)",
        color: 'white',
        py: 10,
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center'
      }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            
            
            <Typography variant="h5" sx={{
              fontWeight: 400,
              mb: 4,
              fontSize: isMobile ? '1.1rem' : '1.5rem',
              opacity: 0.95,
              maxWidth: 800,
              mx: 'auto'
            }}>
              Le Campus Africain du Leadership au Féminin (CALF) cultive une nouvelle génération de femmes leaders qui transforment leurs communautés. 
              Votre soutien crée un effet multiplicateur qui bénéficie à des milliers de personnes.
            </Typography>
           
          </motion.div>
        </Container>
      </Box>

   

    
      <Box sx={{ py: 10, background: 'linear-gradient(to bottom, #ffffff 0%, #f0e9ff 100%)' }}>
        <Container maxWidth="lg">
          <Box sx={{ 
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: 6,
            alignItems: 'center'
          }}>
            <Box>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <Typography variant="h3" sx={{
                  fontWeight: 800,
                  mb: 3,
                  color: '#1a064f'
                }}>
                  Pourquoi soutenir le leadership féminin en Afrique ?
                </Typography>
                
                <Box sx={{ 
                  bgcolor: 'rgba(94, 23, 235, 0.05)',
                  p: 4,
                  borderRadius: 4,
                  mb: 4
                }}>
                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: '#5e17eb' }}>
                    Un investissement à fort impact social
                  </Typography>
                  <Typography sx={{ mb: 2, color: '#4a4458' }}>
                    Chaque femme formée au leadership devient un agent de transformation dans sa communauté. 
                    Nos études montrent qu'une femme leader impacte en moyenne <Box component="span" sx={{ fontWeight: 700 }}>12 personnes</Box> 
                    dans son entourage direct, créant ainsi un effet multiplicateur.
                  </Typography>
                </Box>
                
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: '#1a064f' }}>
                  Des bénéfices économiques tangibles
                </Typography>
                <Typography sx={{ mb: 3, color: '#4a4458' }}>
                  Les entreprises fondées par nos diplômées génèrent en moyenne <Box component="span" sx={{ fontWeight: 700 }}>3,2 emplois</Box> 
                  dans leurs deux premières années d'activité. Investir dans le leadership féminin, c'est stimuler 
                  la création d'emplois et l'innovation économique.
                </Typography>
                
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: '#1a064f' }}>
                  Un levier pour l'égalité des chances
                </Typography>
                <Typography sx={{ color: '#4a4458' }}>
                  En formant des femmes leaders, nous brisons les plafonds de verre et créons des modèles inspirants 
                  pour les générations futures. Notre programme a déjà permis à <Box component="span" sx={{ fontWeight: 700 }}>76%</Box> 
                  de nos bénéficiaires d'accéder à des postes décisionnels.
                </Typography>
              </motion.div>
            </Box>
            
            {/* Deuxième colonne de la grille */}
            <Box>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Box
                  component="img"
                  src="/assets/images/team.jpg"
                  alt="Impact du leadership féminin"
                  sx={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: 2,
                    boxShadow: 3
                  }}
                />
              </motion.div>
            </Box>
          </Box>
        </Container>
      </Box>

      <Box sx={{ py: 10, bgcolor: '#f9f5ff' }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="h3" sx={{
              textAlign: 'center',
              fontWeight: 800,
              mb: 2,
              color: '#1a064f'
            }}>
              Comment contribuer à notre mission ?
            </Typography>
            <Typography variant="h6" sx={{
              textAlign: 'center',
              maxWidth: 800,
              mx: 'auto',
              mb: 8,
              color: '#4a4458',
              fontSize: '1.2rem'
            }}>
              Le Campus Africain du Leadership au Féminin vous offre plusieurs modalités d'engagement 
              pour soutenir l'émergence du leadership féminin en Afrique
            </Typography>
          </motion.div>

       <Box sx={{
         display: 'grid',
         gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
         gap: 3,
         justifyContent: 'center',
         width: '100%',
         maxWidth: '1200px',
         mx: 'auto',
         px: { xs: 2, sm: 3 }
       }}>
         {waysToSupport.map((way, index) => (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
      >
        <Box
          sx={{
            textAlign: 'center',
            p: 3,
            border: `1px solid #e5e7eb`,
            borderRadius: 3,
            height: '100%',
            bgcolor: 'white',
            transition: 'all 0.25s ease',
            '&:hover': {
              borderColor: way.color,
              bgcolor: '#f9f9ff',
            },
          }}
        >
          <Box
            sx={{
              width: 48,
              height: 48,
              bgcolor: `${way.color}22`,
              color: way.color,
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mx: 'auto',
              mb: 2,
            }}
          >
            {way.icon}
          </Box>

          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: 600,
              mb: 1,
              color: '#1a064f',
              fontSize: '1rem',
            }}
          >
            {way.title}
          </Typography>

          <Typography sx={{ color: '#4a4458', fontSize: '0.9rem' }}>
            {way.description}
          </Typography>
        </Box>
      </motion.div>
    ))}
    </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default SupportPage;

