// src/Components/Home/RecentProjects.jsx
import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";

const projectImages = [
  require("../../Assets/Rectangle 15.png"),
  require("../../Assets/Rectangle 16.png"),
  require("../../Assets/Rectangle 17.png"),
  require("../../Assets/Rectangle 18.png"),
  require("../../Assets/Rectangle 19.png"),
  require("../../Assets/Rectangle 20.png"),
];

const RecentProjects = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#0B0320",
        width: "1380px",
        height: "858px",
        mx: "auto",
        mt: "80px", // mimic top: 3480px if needed
        textAlign: "center",

        py: 5,
      }}
    >
      {/* Title */}
      <Typography
        sx={{
          fontFamily: "Poppins",
          fontWeight: 700,
          fontSize: "30px",
          lineHeight: "56px",
          color: "#FFFFFF",
          mb: 1,
        }}
      >
        Our Recent Projects
      </Typography>

      {/* Subtitle */}
      <Typography
        sx={{
          fontFamily: "Poppins",
          fontWeight: 400,
          fontSize: "14px",
          lineHeight: "26px",
          color: "#FFFFFF",
          maxWidth: "497px",
          mx: "auto",
          marginBottom: 6,
        }}
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </Typography>

      {/* Project Images Grid */}
      <Grid
        container
        spacing={{ xs: 3, md: 4 }}
        justifyContent="center"
        alignItems="center"
      >
        {projectImages.map((img, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              component="img"
              src={img}
              alt={`project-${index}`}
              sx={{
                width: "100%",
                height: "223px",
                objectFit: "cover",
                borderRadius: "18px",
                boxShadow: "0px 4px 20px rgba(0,0,0,0.2)",
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.02)",
                },
              }}
            />
          </Grid>
        ))}
      </Grid>

      {/* SEE ALL Button */}
      <Button
        variant="contained"
        sx={{
          mt: 8,
          px: 4,
          py: 1.2,
          fontFamily: "Poppins",
          fontWeight: 600,
          fontSize: "14px",
          borderRadius: "10px",
          backgroundColor: "#292654",
          color: "#fff",
          textTransform: "uppercase",
          "&:hover": {
            backgroundColor: "#3B3770",
          },
        }}
      >
        SEE ALL
      </Button>
    </Box>
  );
};

export default RecentProjects;
