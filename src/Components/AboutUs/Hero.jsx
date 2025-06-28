import React, { useState } from "react";
import { Box, Typography, Button, Tooltip } from "@mui/material";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const images = [
    "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2Z0ZHJmcG80ZDcybGQ0b24zbDI2amNyd2ZuOGM2eWpwOXJhaHJlZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/tm0EbFnFtcG4S0iBEO/giphy.gif",
    "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMTl4eHZnNWM0N3oyaGZyZWdrZjgwNnB1NGl3YjlvY3d1czJiMWs4bCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/YqiO23Q2gfurS/giphy.gif",
  ];

  const handleSlideChange = () => {
    setCurrentSlide((prev) => (prev === 1 ? 2 : 1));
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        fontFamily: "Poppins, sans-serif",
        top: 40,
        backgroundColor: "#0C031C",
      }}
    >
      {/* Breadcrumbs */}
      <Typography
        variant="body2"
        sx={{
          position: "absolute",
          left: 110,
          top: 104,
          fontSize: 16,
          color: "#FFFFFF",
        }}
      >
        Home {">"}
      </Typography>
      <Typography
        variant="body2"
        sx={{
          position: "absolute",
          left: 176,
          top: 104,
          fontSize: 16,
          color: "#FF4040",
          textDecoration: "underline",
        }}
      >
        About us
      </Typography>

      {/* Hero Title */}
      <Typography
        variant="h2"
        sx={{
          position: "absolute",
          left: 110,
          top: 207,
          fontSize: 30,
          fontWeight: 700,
          color: "#FFFFFF",
          width: 425,
          lineHeight: "54px",
        }}
      >
        Building the Future of Immersive Gaming
      </Typography>

      {/* Hero Description */}
      <Typography
        variant="body1"
        sx={{
          position: "absolute",
          left: 110,
          top: 414,
          fontSize: 15,
          fontWeight: 400,
          lineHeight: "31px",
          color: "#B0B0B0",
          width: 414,
        }}
      >
        We design and develop high-performance games across PC, console, mobile, and VR/AR — blending innovative storytelling with cutting-edge visuals.
      </Typography>

      {/* Call to Action Button */}
      <Box
        sx={{
          position: "absolute",
          left: 110,
          top: 576,
        }}
      >
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#FF4040",
            color: "#FFFFFF",
            textTransform: "none",
            padding: "12px 25px",
            borderRadius: "23px",
            fontSize: 15,
            fontWeight: 500,
            "&:hover": {
              backgroundColor: "#e63c3c",
            },
          }}
        >
          Get in touch →
        </Button>
      </Box>

      {/* Image Section (Right) */}
      <Box
        sx={{
          position: "absolute",
          width: "50%",
          right: 0,
          top: 0,
          height: "100vh",
          backgroundImage: `url(${images[currentSlide - 1]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Tooltip title="Click to view next featured project">
          <Box
            onClick={handleSlideChange}
            sx={{
              position: "absolute",
              bottom: "15px",
              left: "15px",
              color: "black",
              background: "rgba(255,255,255,0.7)",
              px: 2,
              py: 1,
              borderRadius: "10px",
              cursor: "pointer",
              fontWeight: 500,
              fontSize: 13,
              "&:hover": {
                background: "#FF4040",
                color: "#fff",
              },
            }}
          >
            ← {currentSlide} of {images.length} →
          </Box>
        </Tooltip>
      </Box>
    </Box>
  );
};

export default Hero;
