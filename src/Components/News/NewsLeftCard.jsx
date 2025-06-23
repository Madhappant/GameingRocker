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
      <Box sx={{ display: "flex", alignItems: "center", gap: 4 , mb: 2 , mt: 2 }}>
        <Button
          size="small"
          sx={{
            width: "164px",
            height: "48px",
            backgroundColor: "#2351F5",
            color: "#fff",
            borderRadius: "0px",
            px: 3,
            textTransform: "none",
            fontSize: "16px",
            lineHeight: "30px",
          }}
        >
          {author}
        </Button>
        <Typography
          sx={{
            fontSize: "16px",
            lineHeight: "30px",
            color: "#FFFFFF",
          }}
        >
          {time}
        </Typography>
      </Box>

      {/* Title */}
      <Typography
        sx={{
          fontSize: "30px",
          fontWeight: 600,
          lineHeight: "45px",
        }}
      >
        {title}
      </Typography>

      {/* Description */}
      <Typography
        sx={{
          fontSize: "17px",
          fontWeight: 400,
          lineHeight: "35px",
          color: "#FFFFFF",
        }}
      >
        {content}
      </Typography>

      {subcontent && (
        <Typography
          sx={{
            fontSize: "17px",
            fontWeight: 400,
            lineHeight: "35px",
            color: "#FFFFFF",
          }}
        >
          {subcontent}
        </Typography>
      )}
    </Box>
  );
};

export default NewsLeftCard;
