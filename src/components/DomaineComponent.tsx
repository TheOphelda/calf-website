"use client";

import { Box, Typography, Container } from "@mui/material";
import calfDomains from "@/data/domaine.json";


/*const iconMap = {
  Lightbulb: <EmojiObjectsIcon sx={{ fontSize: 40, color: "#7c3aed" }} />,
  BusinessWoman: <Diversity3Icon sx={{ fontSize: 40, color: "#7c3aed" }} />,
  Chair: <WorkOutlineIcon sx={{ fontSize: 40, color: "#7c3aed" }} />,
  Code: <CodeIcon sx={{ fontSize: 40, color: "#7c3aed" }} />,
};
*/
export default function DomaineComponent() {
  return (
    <Box
      sx={{
        background: "rgb(245, 229, 255)",
        py: { xs: 6, md: 10 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: { xs: 40, md: 60 },
          left: { xs: -80, md: -120 },
          width: { xs: 200, md: 300 },
          height: { xs: 200, md: 300 },
          bgcolor: "rgba(124, 58, 237, 0.12)",
          borderRadius: "50%",
          zIndex: 0,
          animation: "float1 8s ease-in-out infinite",
          "@keyframes float1": {
            "0%, 100%": { transform: "translateY(0)" },
            "50%": { transform: "translateY(30px)" },
          },
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: { xs: -60, md: -80 },
          right: { xs: -60, md: -100 },
          width: { xs: 160, md: 240 },
          height: { xs: 160, md: 240 },
          bgcolor: "rgba(244, 63, 94, 0.10)",
          borderRadius: "50%",
          zIndex: 0,
          animation: "float2 10s ease-in-out infinite",
          "@keyframes float2": {
            "0%, 100%": { transform: "translateY(0)" },
            "50%": { transform: "translateY(-40px)" },
          },
        }}
      />
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Typography
          variant="h4"
          align="center"
          sx={{ fontWeight: 800, mb: 2, color: "#232946" }}
        >
          Les domaines d&apos;impact du CALF
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          sx={{ color: "rgb(20, 6, 29)", mb: 6, maxWidth: 600, mx: "auto" }}
        >
          Viabilité économique et impact social
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 4,
          }}
        >
          {calfDomains.map((item) => (
            <Box
              key={item.title}
              sx={{
                width: 220,
                height:420,
                borderRadius: 3,
                boxShadow: "0 2px 12px 0 rgba(44,62,80,0.06)",
                p: 3,
                display:"flex",
                flexDirection:"column",
                justifyContent:"center",
                border:"2px solid rgba(231, 18, 18, 0.13)",
                textAlign: "center",
                bgcolor: "#fff",
                m: "auto",
                zIndex: 2,
              }}
            >
              <Box sx={{ mb: 2, display: "flex", justifyContent: "center" }}>
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                {item.title}
              </Typography>
              <Typography variant="body2" sx={{ color: "#6b7280" }}>
                {item.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
