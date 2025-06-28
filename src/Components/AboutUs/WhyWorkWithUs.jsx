import React from "react";
import { Box, Typography, Stack } from "@mui/material";

const cardData = [
  {
    tag: "Innovative Design",
    tagColor: "#B000DC1C",
    title: "Immersive UI/UX",
    description:
      "We design with players in mind. Our immersive UI/UX delivers intuitive navigation and visually stunning experiences for every game genre.",
  },
  {
    tag: "Pro Development",
    tagColor: "#DC42001C",
    title: "Optimized Codebase",
    description:
      "Our developers write clean, scalable, and performance-optimized code using modern stacks like Unity, Unreal, and React for cross-platform gaming.",
  },
  {
    tag: "Community Focused",
    tagColor: "#00DC8D1C",
    title: "Active Support",
    description:
      "We believe in building lasting relationships with players. Our active support and feedback loop ensure your voice drives our evolution.",
  },
];

const AboutUsCards = () => {
  return (
    <Box
      sx={{
        position: "relative",
        padding: "60px 40px",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      {/* Heading */}
      <Typography
        variant="h4"
        sx={{
          fontSize: "24px",
          fontWeight: 600,
          lineHeight: "36px",
          marginBottom: "40px",
          textAlign: "center",
          color: "#FFFFFF",
          marginLeft: "40px",
        }}
      >
        Why Work With Us
      </Typography>

      {/* Card Container */}
      <Stack
        direction="row"
        justifyContent="space-between"
        spacing={3}
        sx={{ maxWidth: "1300px", margin: "0 auto", flexWrap: "wrap" }}
      >
        {cardData.map((card, index) => (
          <Box
            key={index}
            sx={{
              backgroundColor: "#FFFFFF",
              width: "388px",
              height: "378px",
              borderRadius: "20px",
              padding: "20px",
              boxShadow: "0px 4px 94px rgba(0, 0, 0, 0.1)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "start",
            }}
          >
            <Typography
              variant="caption"
              sx={{
                backgroundColor: card.tagColor,
                color: "#000000",
                padding: "10px 12px",
                fontSize: "12px",
                fontWeight: 500,
                borderRadius: "8px",
                display: "inline-block",
                width: "fit-content",
                marginBottom: "20px",
                marginTop: "40px",
                marginLeft: "20px",
              }}
            >
              {card.tag}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontSize: "20px",
                fontWeight: 600,
                lineHeight: "38px",
                color: "#000000",
                marginBottom: "30px",
                marginLeft: "20px",
              }}
            >
              {card.title}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontSize: "14px",
                fontWeight: 400,
                lineHeight: "26px",
                color: "#333333",
                marginLeft: "20px",
                marginRight: "10px",
              }}
            >
              {card.description}
            </Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default AboutUsCards;
