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
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Image Column */}
      <Box
        component="img"
        sx={{
          width: "500px",
          height: "422px",
          objectFit: "cover",
          borderRadius: "8px",
          marginLeft: "70px"
        }}
        src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNXg0bmE1NDRvZmw4dTNoYzNxNGcwNzhkN3FoMjY1ZXI1OWp2bGw3byZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/4OV1bLOIWwIXRxpXlN/giphy.gif"
        alt="Character on horseback"
      />

      {/* Text Column */}
      <Box
        sx={{
          maxWidth: "586px",
          maxHeight: "323px",
          left: "721px",
          marginBottom: "118px",
          paddingLeft: "40px",
          marginRight: "204px"
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontSize: "18px",
            fontWeight: 500,
            lineHeight: "202.99999999999997%",
            color: "#000000",
            letterSpacing: "0%",
            paddingY:"14px"
          }}
        >
          lorem ipsum
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: "30px",
            fontWeight: 700,
            lineHeight: "158%",
            color: "#000000",
            letterSpacing: "0%",
            paddingY:"10px"
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: "18px",
            fontWeight: 400,
            lineHeight: "202.99999999999997%",
            color: "#333333",
            letterSpacing: "0%",
            paddingY:"0px",
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries,
        </Typography>
      </Box>
    </Box>
  );
};

export default ImageText;
