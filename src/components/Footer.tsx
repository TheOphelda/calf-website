'use client';

import {
  Box,
  Container,
  Grid as MuiGrid,
  Typography,
  Stack,
  IconButton,
  Divider,
} from '@mui/material';
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  Email,
  Phone,
} from '@mui/icons-material';
import Link from 'next/link';

// Composant Grid personnalisé pour éviter les conflits de typage
const Grid = (props: any) => <MuiGrid {...props} />;

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#1a064f',
        color: 'white',
        pt: 4,
        pb: 3,
        fontSize: '0.9rem',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between">
          {/* Colonne 1 : Logo + description + réseaux */}
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Box
                component="img"
                src="/assets/images/logo.png"
                alt="Logo"
                sx={{
                  height: 36,
                  mr: 1.5,
                  filter: 'brightness(0) invert(1)',
                }}
              />
              <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                Campus Leadership
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ opacity: 0.7 }}>
              Autonomisation des femmes africaines par le leadership et la formation.
            </Typography>
            <Stack direction="row" spacing={1.2} sx={{ mt: 2 }}>
              {[Facebook, Twitter, Instagram, LinkedIn].map((Icon, i) => (
                <IconButton
                  key={i}
                  sx={{
                    color: 'white',
                    bgcolor: 'rgba(255,255,255,0.08)',
                    '&:hover': { bgcolor: 'rgba(255,255,255,0.15)' },
                    p: 1,
                  }}
                >
                  <Icon fontSize="small" />
                </IconButton>
              ))}
            </Stack>
          </Grid>

          {/* Colonne 2 : Liens utiles */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="subtitle2" sx={{ fontWeight: 500, mb: 1 }}>
              Liens utiles
            </Typography>
            <Stack spacing={0.7}>
              {[
                { text: 'À propos', href: '/qui-sommes-nous' },
                { text: 'Formations', href: '/formation-leadership' },
                { text: 'Contact', href: '/contact' },
              ].map(({ text, href }) => (
                <Typography
                  key={href}
                  component={Link}
                  href={href}
                  sx={{
                    color: 'white',
                    opacity: 0.8,
                    '&:hover': { textDecoration: 'underline', opacity: 1 },
                    textDecoration: 'none',
                    display: 'block',
                    cursor: 'pointer'
                  }}
                >
                  {text}
                </Typography>
              ))}
            </Stack>
          </Grid>

          {/* Colonne 3 : Contact */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="subtitle2" sx={{ fontWeight: 500, mb: 1 }}>
              Contact
            </Typography>
            <Stack spacing={1}>
              <Box sx={{ display: 'flex', alignItems: 'center', opacity: 0.8 }}>
                <Email sx={{ fontSize: 18, mr: 1 }} />
communication@calfsn.com              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', opacity: 0.8 }}>
                <Phone sx={{ fontSize: 18, mr: 1 }} />
                +221 33 123 45 67
              </Box>
              <Typography variant="body2" sx={{ opacity: 0.6, mt: 1 }}>
                Dakar, Sénégal<br />
                Immeuble Liberté 6 , 3ème étage
              </Typography>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ bgcolor: 'rgba(255,255,255,0.1)', my: 3 }} />

        {/* Bas de page */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 1,
            fontSize: '0.8rem',
            opacity: 0.6,
          }}
        >
          <Typography>
            © 2025 Campus Africain du Leadership au Féminin
          </Typography>
          <Stack direction="row" spacing={2}>
            <Typography
              component={Link}
              href="/politique-de-confidentialite"
              sx={{
                color: 'white',
                textDecoration: 'none',
                '&:hover': { textDecoration: 'underline' },
                cursor: 'pointer',
                display: 'block'
              }}
            >
              Confidentialité
            </Typography>
            <Typography
              component={Link}
              href="/conditions-d-utilisation"
              sx={{
                color: 'white',
                textDecoration: 'none',
                '&:hover': { textDecoration: 'underline' },
                cursor: 'pointer',
                display: 'block'
              }}
            >
              Conditions
            </Typography>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
