// src/Components/Portfolio/SectionTwo.jsx
import React from "react";
import { Box, Typography, Button } from "@mui/material";

const content = [
  {
    title: "Lorem Ipsum is simply dummy text dummy text",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
    subDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZzdteWFic2N3MW9xMjk4eTZ4dDVsZGxicG9vdzU0ODFzdHpsbjNuZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/IO2ICudgtBjby/giphy.gif",
    reverse: false,
  },
  {
    title: "Lorem Ipsum is simply dummy text dummy text",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    subDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZHkwNXMzOG42ZGYyb28yd2gxdDkzYWp1eGYycDhzaDRsNWd4eXpmcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/KnuGX7IV6cnu0/giphy.gif",
    reverse: true,
  },
  {
    title: "Lorem Ipsum is simply dummy text dummy text",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    subDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
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
              {/* Text Elements */}
              <Typography
                sx={{
                  position: "absolute",
                  width: "472px",
                  height: "90px",
                  left: isReverse ? "783px" : "109px",
                  top: "55px", 
                  fontFamily: "Poppins",
                  fontStyle: "normal",
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
                  fontStyle: "normal",
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
                  fontStyle: "normal",
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
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "24px",
                  textTransform: "capitalize",
                  boxShadow: "none",
                  "&:hover": { backgroundColor: "#A00D24" },
                  padding: 0,
                }}
              >
                Read more
              </Button>

              {/* Image Element */}
              <Box
                component="img"
                src={item.image}
                alt="Image"
                sx={{
                  position: "absolute",
                  width: "576px",
                  height: "489px",
                  left: isReverse ? "109px" : "783px",
                  top: "55px", 
                  background: `url(${item.image})`,
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