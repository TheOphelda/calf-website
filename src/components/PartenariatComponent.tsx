import { Box, Typography } from "@mui/material";

type Partner = {
  name: string;
  logo: React.ReactNode; 
};

type PartnersBarProps = {
  text: string;
  partners: Partner[];
};

export function PartnersBar({ text, partners }: PartnersBarProps) {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems:"center",
       marginTop:-5,
      }}
    >
      <Typography
        sx={{
          color: "rgb(255, 255, 255)",
          fontWeight: 500,
          fontSize: { xs: "0.98rem", md: "1.28rem" },
          whiteSpace: "nowrap",
        }}
      >
        {text}
      </Typography>
      <Box
        sx={{
          width: 48,
          height:2,
          bgcolor: "rgb(255, 255, 255)",
          borderRadius: 1,
          mx: 13,
          display: { xs: "none", sm: "block" },
        }}
      />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: { xs: 2, md: 14 },
          flexWrap: "wrap",
        }}
      >
        {partners.map((p) => (
          <Box
    
            key={p.name}
         
            aria-label={p.name}
            sx={{
                bgColor:"rgb(255, 255, 255)",
            }}
          >
            {p.logo}
          </Box>
        ))}
      </Box>
    </Box>
  );
}
