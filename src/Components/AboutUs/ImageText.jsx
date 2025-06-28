import React from "react";
import { Box, Typography } from "@mui/material";

const ImageText = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#E5E5E5",
        minHeight: "80vh",
        padding: "60px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontFamily: "Poppins, sans-serif",
        flexWrap: "wrap",
      }}
    >
      {/* Image Column */}
      <Box
        component="img"
        sx={{
          width: { xs: "100%", md: "500px" },
          height: "422px",
          objectFit: "cover",
          borderRadius: "12px",
          marginLeft: { xs: 0, md: "70px" },
          marginBottom: { xs: 4, md: 0 },
        }}
        src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNXg0bmE1NDRvZmw4dTNoYzNxNGcwNzhkN3FoMjY1ZXI1OWp2bGw3byZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/4OV1bLOIWwIXRxpXlN/giphy.gif"
        alt="Game development scene"
      />

      {/* Text Column */}
      <Box
        sx={{
          maxWidth: "586px",
          paddingLeft: { xs: 0, md: "40px" },
          paddingRight: { xs: 0, md: "60px" },
          marginRight: { xs: 0, md: "204px" },
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontSize: "18px",
            fontWeight: 500,
            color: "#000000",
            paddingBottom: "12px",
            textTransform: "uppercase",
            letterSpacing: "1px",
          }}
        >
          Who We Are
        </Typography>

        <Typography
          variant="h4"
          sx={{
            fontSize: "30px",
            fontWeight: 700,
            color: "#000000",
            lineHeight: "158%",
            marginBottom: "16px",
          }}
        >
          Crafting Next-Gen Game Experiences
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontSize: "18px",
            fontWeight: 400,
            lineHeight: "180%",
            color: "#333333",
          }}
        >
          At ProDesigner Studios, we specialize in building immersive gaming worlds that captivate audiences and push technical boundaries. From mobile and PC titles to console and VR/AR experiences, our cross-platform expertise delivers visually stunning, performance-optimized games loved by players worldwide.
        </Typography>
      </Box>
    </Box>
  );
};

export default ImageText;
