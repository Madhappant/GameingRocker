import React from "react";
import { Box, Typography, Button } from "@mui/material";

const content = [
  {
    title: "Immersive Game Design That Captivates",
    description:
      "We specialize in creating story-driven, interactive worlds that keep players engaged for hours. Our design team blends stunning visuals with seamless mechanics to deliver unforgettable gameplay.",
    subDescription: "Every pixel is crafted with precision to immerse users completely.",
    image: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZzdteWFic2N3MW9xMjk4eTZ4dDVsZGxicG9vdzU0ODFzdHpsbjNuZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/IO2ICudgtBjby/giphy.gif",
    reverse: false,
  },
  {
    title: "Cross-Platform Development Excellence",
    description:
      "From PC to console to mobile, we build high-performance games optimized for every major platform. Our tech stack ensures smooth playability, responsive controls, and scalable architecture.",
    subDescription: "Unity, Unreal, and custom engines—our team is fluent in them all.",
    image: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZHkwNXMzOG42ZGYyb28yd2gxdDkzYWp1eGYycDhzaDRsNWd4eXpmcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/KnuGX7IV6cnu0/giphy.gif",
    reverse: true,
  },
  {
    title: "Multiplayer Integration & Cloud Sync",
    description:
      "We implement secure, real-time multiplayer features and cloud syncing so players can pick up where they left off—anywhere, anytime. From matchmaking to global leaderboards, we’ve got it covered.",
    subDescription: "Bring players together with zero-lag multiplayer systems.",
    image: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2dqcHMxbnZrcWZ5eGh1aHRwMzNmcXVyM3Vtdno4ZDB4dnpsNHE2MCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/yLTXaltlhwI9i0S3DX/giphy.gif",
    reverse: false,
  },
];

const SectionTwo = () => {
  return (
    <Box
      sx={{
        background: "transparent",
        pt: 10,
        pb: 12,
        color: "#fff",
        position: "relative",
        height: "1800px",
      }}
    >
      {content.map((item, idx) => {
        const topPositions = ["0px", "600px", "1200px"];
        const isReverse = item.reverse;

        return (
          <Box
            key={idx}
            sx={{
              position: "absolute",
              top: topPositions[idx],
              left: 0,
              width: "1300px",
              mx: "auto",
            }}
          >
            <Box
              sx={{
                position: "relative",
                height: "600px",
              }}
            >
              {/* Text Section */}
              <Typography
                sx={{
                  position: "absolute",
                  width: "472px",
                  height: "90px",
                  left: isReverse ? "783px" : "109px",
                  top: "55px",
                  fontFamily: "Poppins",
                  fontWeight: 500,
                  fontSize: "30px",
                  lineHeight: "100%",
                  color: "#FFFFFF",
                }}
              >
                {item.title}
              </Typography>
              <Typography
                sx={{
                  position: "absolute",
                  width: "536px",
                  height: "159px",
                  left: isReverse ? "783px" : "109px",
                  top: "170px",
                  fontFamily: "Poppins",
                  fontWeight: 400,
                  fontSize: "17px",
                  lineHeight: "26px",
                  color: "#CCCCCC",
                }}
              >
                {item.description}
              </Typography>
              <Typography
                sx={{
                  position: "absolute",
                  width: "508px",
                  height: "58px",
                  left: isReverse ? "783px" : "109px",
                  top: "360px",
                  fontFamily: "Poppins",
                  fontWeight: 400,
                  fontSize: "17px",
                  lineHeight: "26px",
                  color: "#CCCCCC",
                }}
              >
                {item.subDescription}
              </Typography>

              <Button
                variant="contained"
                sx={{
                  position: "absolute",
                  width: "177px",
                  height: "50px",
                  left: isReverse ? "783px" : "109px",
                  top: "490px",
                  backgroundColor: "#D80027",
                  color: "#FFFFFF",
                  borderRadius: "2px",
                  fontFamily: "Poppins",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "24px",
                  textTransform: "capitalize",
                  boxShadow: "none",
                  "&:hover": { backgroundColor: "#A00D24" },
                }}
              >
                Read more
              </Button>

              {/* Image Section */}
              <Box
                component="img"
                src={item.image}
                alt={`section-${idx}`}
                sx={{
                  position: "absolute",
                  width: "576px",
                  height: "489px",
                  left: isReverse ? "109px" : "783px",
                  top: "55px",
                  borderRadius: 0,
                }}
              />
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default SectionTwo;
