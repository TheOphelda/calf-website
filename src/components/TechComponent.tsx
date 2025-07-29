import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface TechComponentProps {
  icon: React.ReactNode;
  title: string;
}

const TechComponent: React.FC<TechComponentProps> = ({ icon, title }) => {
  return (
    <Box
      sx={{
        bgcolor: "#f0f4ff",
        borderRadius: 4,
        boxShadow: "0 4px 20px rgba(51, 102, 186, 0.1)",
        p: 3,
        minWidth: 180,
        minHeight: 180,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        transition: "all 0.3s ease-in-out",
        cursor: "pointer",
        border: "1px solid rgba(51, 102, 186, 0.1)",
        "&:hover": {
          boxShadow: "0 15px 40px rgba(51, 102, 186, 0.2)",
          transform: "translateY(-8px)",
          bgcolor: "#e6f0ff",
        },
      }}
    >
      <Box
        sx={{
          bgcolor: "#3366ba",
          borderRadius: "50%",
          width: 72,
          height: 72,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: 2.5,
          boxShadow: "0 4px 12px rgba(51, 102, 186, 0.25)",
        }}
      >
        {icon}
      </Box>
      <Typography
        variant="h6"
        sx={{
          fontWeight: 600,
          color: "#1a237e",
          textAlign: "center",
          lineHeight: 1.2,
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default TechComponent;
