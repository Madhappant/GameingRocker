import React from "react";
import { Box, Typography, Button } from "@mui/material";

import New1 from "../../Assets/Rectangle 276 (1).png";
import New2 from "../../Assets/Rectangle 276 (2).png";
import New3 from "../../Assets/Rectangle 276 (3).png";
import New4 from "../../Assets/Rectangle 276 (4).png";
import New5 from "../../Assets/Rectangle 276 (5).png";
import New6 from "../../Assets/Rectangle 276 (6).png";
import New7 from "../../Assets/Rectangle 276.png";

const rightNews = [
  {
    image: New1,
    author: "Game Mechanics",
    tagColor: "#FF8484",
    time: "30 sec read",
    title: "How Next-Gen Consoles Are Redefining Open World Games",
  },
  {
    image: New2,
    author: "Dev Logs",
    tagColor: "#2351F5",
    time: "2 min read",
    title: "Why Indie Games Dominate Steam in 2025",
  },
  {
    image: New3,
    author: "AI Integration",
    tagColor: "#DC7000",
    time: "3 min read",
    title: "How AI is Powering Real-Time NPC Reactions",
  },
  {
    image: New4,
    author: "Multiplayer Trends",
    tagColor: "#C8102E",
    time: "1 min read",
    title: "Cross-Platform Gaming: The New Norm?",
  },
  {
    image: New5,
    author: "Visual FX",
    tagColor: "#2351F5",
    time: "4 min read",
    title: "5 Visual Tricks in Games You Didn’t Notice",
  },
  {
    image: New6,
    author: "eSports News",
    tagColor: "#DC7000",
    time: "2 min read",
    title: "The Rise of FPS Tournaments in Asia",
  },
  {
    image: New7,
    author: "Industry Insights",
    tagColor: "#DC2D84",
    time: "1.5 min read",
    title: "Game Dev Hiring Surge in 2025: What It Means",
  },
];

const NewsRightCard = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
      {rightNews.map((item, index) => (
        <Box key={index} sx={{ display: "flex", gap: 3 }}>
          {/* Image */}
          <Box
            component="img"
            src={item.image}
            alt={item.author}
            sx={{
              width: "195px",
              height: "183px",
              borderRadius: "20px",
              objectFit: "cover",
              marginLeft: "70px",
              boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.3)",
            }}
          />

          {/* Text Section */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            {/* Author & Time */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Button
                size="small"
                sx={{
                  backgroundColor: item.tagColor,
                  color: "#FFFFFF",
                  borderRadius: "10px",
                  fontSize: "14px",
                  fontWeight: 400,
                  fontFamily: "'Poppins', sans-serif",
                  height: "39.9px",
                  px: 2,
                  textTransform: "none",
                  boxShadow: "0px 2px 6px rgba(0,0,0,0.25)",
                }}
              >
                {item.author}
              </Button>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: "#AAAAAA",
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                {item.time}
              </Typography>
            </Box>

            {/* Title */}
            <Typography
              sx={{
                marginBottom: "20px",
                fontSize: "20px",
                fontWeight: 600,
                fontFamily: "'Poppins', sans-serif",
                lineHeight: "30px",
                color: "#FFFFFF",
                maxWidth: "392px",
              }}
            >
              {item.title}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default NewsRightCard;
