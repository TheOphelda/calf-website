"use client";

// Imports optimisés pour le tree-shaking
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Image from 'next/image';

interface PresentationComponentProps {
  image: string;
  overline: string;
  title: string;
  description: string;
  button: {
    text: string;
  };
      href:string;

  stat: {
    value: string;
  };
  reverse?:false
}

export default function PresentationComponent({
  image,
  overline,
  title,
  description,
  button,
  href,
  reverse
}: PresentationComponentProps) {
  return (
    <Box
      sx={{
        py: { xs: 6, md: 6 },
        px:  { xs: 22, md: 6 },
        backgroundColor: "white",

      }}
    >
     <Box
  sx={{
    display: "flex",
    flexDirection: reverse ? "row-reverse" : "row",
  }}
>
        
        <Box sx={{ flex: 1, minWidth: 0 }}>
          <Stack spacing={2} sx={{ maxWidth: 480, mx: { xs: "auto", md: 0 } }}>
            <Typography
              variant="overline"
              sx={{
                color: "#f43f5e",
                fontWeight: 700,
                letterSpacing: 2,
              }}
            >
              {overline}
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 800,
                color: "#232946",
                mb: 1,
                fontSize: { xs: "1.5rem", md: "2.1rem" },
              }}
            >
              {title}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#6b7280",
                mb: 2,
                lineHeight: 1.7,
                fontSize: { xs: "1rem", md: "1.1rem" },
              }}
            >
              {description}
            </Typography>
            <Button
                              href={href}

              variant="contained"
              sx={{
                bgcolor: "rgb(37, 3, 59)",
                color: "#fff",
                fontWeight: 700,
                px: 3,
                py: 1.2,
                borderRadius: 2,
                textTransform: "none",
                mt: 1,
                width: "fit-content",
                fontSize: { xs: "0.95rem", md: "1rem" },
                "&:hover": {
                  bgcolor: "rgba(37, 3, 59, 0.9)",
                },
              }}
            >
              {button.text}
            </Button>
          </Stack>
        </Box>
        <Box
          sx={{
            position: "relative",
            flex: 1,
            width: "100%",
            minWidth: 0,
            mb: { xs: 4, md: 0 },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              overflow: "hidden",
              width: { xs: "100%", sm: 120, md: 400 },
              height: { xs: 220, sm: 260, md: 340 },
                            boxShadow: "0 4px 4px rgba(229, 215, 215, 0.61)",
              position: "relative",
            }}
          >
            <Image
              src={image}
              alt={title || "Image de présentation"}
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy"
              quality={85}
              placeholder="blur"
              blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+Cjwvc3ZnPg=="
             
        
            />
          </Box>
        
        </Box>
      </Box>


    </Box>
  );
}
