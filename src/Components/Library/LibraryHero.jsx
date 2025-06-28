import React from "react";
import { Box, Typography, Container } from "@mui/material";
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

const LibraryHero = ({
  heading = "Explore Top Games",
  subtitle = "Dive into the latest and most-played titles in the global gaming arena. Discover your next adventure."
}) => {
  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #0F0F0F 0%, #1A1A1A 100%)",
        color: "#FFFFFF",
        py: { xs: 10, md: 14 },
        textAlign: "center",
        mx: "auto",
        mt: 6,
        position: "relative",
        overflow: "hidden",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* 🔁 Background GIF Overlay */}
      <Box
        component="img"
        src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExYnZucmNpazhwZzRmeThqcGh2Z25mMGFvbW9xbXB3cW1nYmJkenMxZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/zqihZZ5Qny4q4/giphy.gif"
        alt="hero-gaming-bg"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: 0.15,
          zIndex: 0,
        }}
      />

      <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
        {/* 🎮 Icon */}
        <Box mb={2} display="flex" justifyContent="center">
          <SportsEsportsIcon sx={{ fontSize: 50, color: "#DC7000" }} />
        </Box>

        {/* 🧭 Breadcrumb */}
        <Typography
          sx={{
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "200%",
            mb: 1,
            color: "#ccc",
          }}
        >
          Home <span style={{ color: "#DC7000" }}> &gt; Library</span>
        </Typography>

        {/* 🖋 Heading */}
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: { xs: "28px", md: "36px" },
            lineHeight: "150%",
            mb: 2,
            color: "#fff",
          }}
        >
          {heading}
        </Typography>

        {/* 🗒 Subtitle */}
        <Typography
          sx={{
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "180%",
            color: "#aaa",
            maxWidth: 600,
            mx: "auto",
            mb: 4,
          }}
        >
          {subtitle}
        </Typography>
      </Container>
    </Box>
  );
};

export default LibraryHero;
