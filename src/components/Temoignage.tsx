"use client";

import { Box, Typography, Avatar, Paper, Container } from "@mui/material";
import testimonials from "@/data/testimonials.json";

export default function TestimonialsSection() {
  return (
    <Box sx={{ background: "rgb(255, 255, 255)", py: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 6 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 800,
              color: "rgb(44, 36, 63)",
              mb: 0.5,
              width:"100%",
              fontSize:53,
              textAlign: "center",
              display: "inline-block",
            }}
          >
            Témoignages clients
          </Typography>
          <Box
            sx={{
              height: 4,
              width: 180,
              background:
                "linear-gradient(90deg,rgb(120, 118, 120) 60%, transparent 100%)",
              mt: 0.5,
              ml: 0.5,

            }}
          />
        
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 4,

            justifyContent: { xs: "center", md: "flex-start" },
          }}
        >
          {testimonials.map((item) => (
            <Paper
              key={item.name}
              elevation={0}
              sx={{
                p: 3,
                background: "rgba(36, 58, 94, 0.65)",
                              borderRadius: 3,

                minWidth: 260,
                maxWidth: 360,
                flex: "1 1 260px",
                mx: "auto",
                textAlign: "left",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", mb: 1.5 }}>
                <Avatar
                  src={item.image}
                  alt={item.name}
                  sx={{ width: 48, height: 48, mr: 2 }}
                />
                <Box>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontWeight: 700,
                      color: "rgb(229, 215, 215)",
                      fontSize: "1.05rem",
                    }}
                  >
                    {item.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "rgba(255, 255, 255, 0.58)", fontWeight: 500 }}
                  >
                    {item.age} - {item.city}
                  </Typography>
                </Box>
              </Box>
              <Typography
                variant="body2"
                sx={{
                  color: "rgb(243, 241, 241)",
                  fontSize: "0.98rem",
                  mt: 0.5,
                  mb: 1.5,
                }}
              >
                &quot;{item.testimonial}&quot;
              </Typography>
            </Paper>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
