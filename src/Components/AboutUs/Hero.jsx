import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";

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
        backgroundColor: "trasnparent",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      {/* Navigation Links (Home > About us) */}
      <Typography
        variant="body2"
        sx={{
          position: "absolute",
          width: "109px",
          height: "25px",
          left: "110px",
          top: "104px",
          fontSize: "16px",
          fontWeight: 400,
          lineHeight: "25px",
          color: "#FFFFFF",
        }}
      >
        Home {">"}
      </Typography>
      <Typography
        variant="body2"
        sx={{
          position: "absolute",
          width: "109px",
          height: "25px",
          left: "176px",
          top: "104px",
          fontSize: "16px",
          fontWeight: 400,
          lineHeight: "25px",
          color: "#FF4040",
          textDecoration: "underline",
        }}
      >
        About us
      </Typography>

      {/* Main Heading (Lorem Ipsum is simply dummy text of the printing and.) */}
      <Typography
        variant="h2"
        sx={{
          position: "absolute",
          width: "425px",
          height: "162px",
          left: "110px",
          top: "207px",
          fontSize: "30px",
          fontWeight: 700,
          lineHeight: "54px",
          color: "#FFFFFF",
        }}
      >
        Lorem Ipsum is simply dummy text of the printing and.
      </Typography>

      {/* Subtext (Lorem Ipsum is simply dummy text of the printing and typesetting industry...) */}
      <Typography
        variant="body1"
        sx={{
          position: "absolute",
          width: "414px",
          height: "95px",
          left: "110px",
          top: "414px",
          fontSize: "15px",
          fontWeight: 400,
          lineHeight: "31px",
          color: "#B0B0B0",
        }}
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s.
      </Typography>

      {/* Button Group (Get in touch) */}
      <Box
        sx={{
          position: "absolute",
          width: "176px",
          height: "47.84px",
          left: "110px",
          top: "576.16px",
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
            fontSize: "15px",
            fontWeight: 500,
            "&:hover": {
              backgroundColor: "#e63c3c",
            },
          }}
        >
          Get in touch →
        </Button>
      </Box>

      {/* Image Section */}
      <Box
        sx={{
          position: "absolute",
          width: "50%",
          right: "0",
          top: "0",
          height: "100vh",
          backgroundImage: `url(${images[currentSlide - 1]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            bottom: "0px",
            // right: "640px",
            color: "#B0B0B0",
            fontSize: "12px",
            lineHeight: "1.2",
            fontFamily: "Arial, sans-serif",
            width: 98,
            height: 67,
            left: "10px",
          }}
        >
          <Typography
            variant="body2"
            onClick={handleSlideChange}
            sx={{
              background: "grey",
              p: "10px",
              color: "black",

              cursor: "pointer",
              "&:hover": {
                color: "#FFFFFF",
              },
            }}
          >
            ← {currentSlide} of 2 →
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
