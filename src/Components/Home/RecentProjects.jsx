import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

// Replace with actual imported images or optimized CDN links
const projectImages = [
  require("../../Assets/Rectangle 15.png"),
  require("../../Assets/Rectangle 16.png"),
  require("../../Assets/Rectangle 17.png"),
  require("../../Assets/Rectangle 18.png"),
  require("../../Assets/Rectangle 19.png"),
  require("../../Assets/Rectangle 20.png"),
];

const RecentProjects = () => {
  const navigate = useNavigate();

  const handleSeeAll = () => {
    navigate("/portfolio"); // or another dedicated page like "/projects"
  };

  return (
    <Box
      sx={{
        backgroundColor: "#0B0320",
        maxWidth: "1380px",
        mx: "auto",
        py: 8,
        textAlign: "center",
        px: { xs: 2, md: 4 },
      }}
    >
      {/* Title */}
      <Typography
        sx={{
          fontFamily: "Poppins",
          fontWeight: 700,
          fontSize: "30px",
          lineHeight: "56px",
          color: "#FFFFFF",
          mb: 1,
        }}
      >
        Our Recent Projects
      </Typography>

      {/* Subtitle */}
      <Typography
        sx={{
          fontFamily: "Poppins",
          fontWeight: 400,
          fontSize: "14px",
          lineHeight: "26px",
          color: "#CCCCCC",
          maxWidth: "520px",
          mx: "auto",
          mb: 6,
        }}
      >
        Take a look at some of the most exciting and innovative games we've built
        using Unreal Engine, CryEngine, and Unity — optimized for players worldwide.
      </Typography>

      {/* Project Grid */}
      <Grid container spacing={{ xs: 3, md: 4 }} justifyContent="center">
        {projectImages.map((img, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              component="img"
              src={img}
              alt={`project-${index + 1}`}
              sx={{
                width: "100%",
                height: "223px",
                objectFit: "cover",
                borderRadius: "18px",
                boxShadow: "0px 4px 20px rgba(0,0,0,0.2)",
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.02)",
                },
              }}
            />
          </Grid>
        ))}
      </Grid>

      {/* CTA Button */}
      <Button
        onClick={handleSeeAll}
        variant="contained"
        sx={{
          mt: 8,
          px: 4,
          py: 1.5,
          fontFamily: "Poppins",
          fontWeight: 600,
          fontSize: "14px",
          borderRadius: "10px",
          backgroundColor: "#292654",
          color: "#fff",
          textTransform: "uppercase",
          "&:hover": {
            backgroundColor: "#3B3770",
          },
        }}
      >
        SEE ALL
      </Button>
    </Box>
  );
};

export default RecentProjects;
