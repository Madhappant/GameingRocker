import React from "react";
import { Box, Typography, Button } from "@mui/material";

const NewsLeftCard = ({ image, author, time, title, content, subcontent }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        width: { xs: "100%", md: "627px" },
        color: "#fff",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* Image */}
      <Box
        component="img"
        src={image}
        alt="news"
        sx={{
          width: "100%",
          height: "295px",
          borderRadius: "20px",
          objectFit: "cover",
        }}
      />

      {/* Author & Time */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 4,
          mb: 2,
          mt: 2,
        }}
      >
        <Button
          size="small"
          sx={{
            width: "164px",
            height: "48px",
            backgroundColor: "#C8102E",
            color: "#fff",
            borderRadius: "0px",
            px: 3,
            textTransform: "none",
            fontSize: "16px",
            lineHeight: "30px",
          }}
        >
          By {author}
        </Button>
        <Typography
          sx={{
            fontSize: "16px",
            lineHeight: "30px",
            color: "#CCCCCC",
          }}
        >
          ⏱ {time}
        </Typography>
      </Box>

      {/* Title */}
      <Typography
        sx={{
          fontSize: "28px",
          fontWeight: 600,
          lineHeight: "44px",
          textShadow: "0px 1px 2px rgba(0,0,0,0.5)",
        }}
      >
        {title || "Exploring Unreal Engine 5: A Revolution in Gaming Visuals"}
      </Typography>

      {/* Description */}
      <Typography
        sx={{
          fontSize: "17px",
          fontWeight: 400,
          lineHeight: "32px",
          color: "#DDDDDD",
        }}
      >
        {content ||
          "Unreal Engine 5’s Nanite and Lumen systems allow devs to build worlds once thought impossible. Here's how it's reshaping game development in 2025 and beyond."}
      </Typography>

      {/* Optional Subcontent */}
      {subcontent && (
        <Typography
          sx={{
            fontSize: "17px",
            fontWeight: 400,
            lineHeight: "32px",
            color: "#BBBBBB",
          }}
        >
          {subcontent}
        </Typography>
      )}
    </Box>
  );
};

export default NewsLeftCard;
