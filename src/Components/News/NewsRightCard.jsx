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
    author: "John Smash",
    tagColor: "#FF8484",
    time: "0.5min",
    title: "Lorem Ipsum is simply dummy text dummy text ?",
  },
  {
    image: New2,
    author: "Emily Davis",
    tagColor: "#2351F5",
    time: "2min",
    title: "Lorem Ipsum is simply dummy text dummy text ?",
  },
  {
    image: New3,
    author: "Chen Wang",
    tagColor: "#DC7000",
    time: "3min",
    title: "Lorem Ipsum is simply dummy text dummy text ?",
  },
  {
    image: New4,
    author: "Ravi Kumar",
    tagColor: "#C8102E",
    time: "1min",
    title: "Lorem Ipsum is simply dummy text dummy text ?",
  },
  {
    image: New5,
    author: "Anna Smith",
    tagColor: "#2351F5",
    time: "4min",
    title: "Lorem Ipsum is simply dummy text dummy text ?",
  },
  {
    image: New6,
    author: "Takeshi Yamato",
    tagColor: "#DC7000",
    time: "2min",
    title: "Lorem Ipsum is simply dummy text dummy text ?",
  },
  {
    image: New7,
    author: "Lara Stone",
    tagColor: "#DC2D84",
    time: "1.5min",
    title: "Lorem Ipsum is simply dummy text dummy text ?",
  },
];

const NewsRightCard = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
      {rightNews.map((item, index) => (
        <Box key={index} sx={{ display: "flex", gap: 3 }}>
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
            }}
          />
          <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
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
                }}
              >
                {item.author}
              </Button>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: "#FFFFFF",
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                {item.time}
              </Typography>
            </Box>

            <Typography
              sx={{
                marginBottom: "20px",
                fontSize: "23px",
                fontWeight: 600,
                fontFamily: "'Poppins', sans-serif",
                lineHeight: "34px",
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
