"use client";

import {
  Card,
  CardContent,
  Typography,
  Box,
  Stack,
  Link,
} from "@mui/material";
import { motion } from "framer-motion";
import { SvgIconComponent } from '@mui/icons-material';

type ServicesCardProps = {
  title: string;
  detail: string;
  Icon?: SvgIconComponent;
  image?: string;
  href:string;
};

export default function ServicesCard({
  title,
  detail,
  href

}: ServicesCardProps) {
  return (
    <Card
      component={motion.div}
   
      transition={{ type: "spring", stiffness: 320, damping: 24 }}
      elevation={0}
      sx={{
        px: 4,
        py: 2,
        width:'50%',
        bgcolor: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardContent sx={{ p: 0 }}>
        <Stack spacing={2}>
         
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              color: "#4c1d95",
              mb: 1,
              fontSize: "1.18rem",
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            sx={{ 
              color: "#6b7280", 
              mb: 2, 
              fontSize: "1rem",
              lineHeight: 1.6 
            }}
          >
            {detail}
          </Typography>
        </Stack>
      </CardContent>
      <Box sx={{ mt: 1 }}>
        <Link
          href={href}
          underline="none"
          sx={{
            color: "#7c3aed",
            fontWeight: 600,
            fontSize: "1rem",
            transition: "color 0.2s",
            "&:hover": { 
              color: "#5b21b6"
            },
          }}
        >
          En savoir plus &rarr;
        </Link>
      </Box>
    </Card>
  );
}
