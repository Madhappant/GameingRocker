// src/Components/Home/ServicesSection.jsx
import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// Icon images
import MobileIcon from "../../Assets/smartphone.png";
import PCIcon from "../../Assets/PC.png";
import PS4Icon from "../../Assets/PS4.png";
import ARVRIcon from "../../Assets/vr-glasses 1.png";
import ARDesignIcon from "../../Assets/VR.png";
import Model3DIcon from "../../Assets/3d-cube 1.png";

const services = [
  { icon: MobileIcon, label: "Mobile Game Development" },
  { icon: PCIcon, label: "PC Game Development" },
  { icon: PS4Icon, label: "PS4 Game Development" },
  { icon: ARVRIcon, label: "AR/VR Solutions" },
  { icon: ARDesignIcon, label: "AR / VR design" },
  { icon: Model3DIcon, label: "3D Modelings" },
];

const ServicesSection = () => {
  return (
    <Box
      sx={{
        width: "1545px",
        height: "696px",
        left: "198px",
        top: "2608px",
        backgroundImage: `url(https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExc2NoYnhvd2M2eTlzMHM2cTVoZWVjempieWVsc2Jiem14czV0MTNzMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/vVwv7I87uB9gZ7avim/giphy.gif)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        textAlign: "center",
        color: "#fff",
        paddingTop: "40px",
        zIndex: 1,
      }}
    >
      {/* Heading */}
      <Typography
        sx={{
          fontFamily: "Poppins",
          fontStyle: "normal",
          fontWeight: 700,
          fontSize: "30px",
          lineHeight: "180%", 
          textAlign: "center",
          color: "#FFFFFF",
          maxWidth: "826px",
          mx: "auto",
          mb: 3,
        }}
      >
        Lorem Ipsum is simply dummy text of the printing <br />
        and typesetting industry.
      </Typography>

      {/* Subheading */}
      <Typography
        sx={{
          fontFamily: "Poppins",
          fontStyle: "normal",
          fontWeight: 400,
          fontSize: "16px",
          lineHeight: "30px", 
          textAlign: "center",
          color: "#FFFFFF",
          maxWidth: "820px",
          mx: "auto",
          mb: 6,
        }}
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s,
      </Typography>

      {/* Services Grid: 3 columns, 2 rows */}
      <Grid
        container
        spacing={12}
        justifyContent="center"
        maxWidth="960px"
        mx="auto"
      >
        {services.map((service, index) => (
          <Grid
            item
            xs={12}
            sm={4}
            md={2}
            key={index}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {/* Icon Circle */}
              <Box
                sx={{
                  width: "65px",
                  height: "65px",
                  borderRadius: "50%",
                  backgroundColor: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: 1.5,
                }}
              >
                <Box
                  component="img"
                  src={service.icon}
                  alt={service.label}
                  sx={{ width: "30px", height: "30px", objectFit: "contain" }}
                />
              </Box>

              {/* Label */}
              <Typography
                sx={{
                  fontSize: "13.8px",
                  fontWeight: 500,
                  fontFamily: "Poppins",
                  textAlign: "center",
                  color: "#fff",
                  mb: 0.7,
                }}
              >
                {service.label}
              </Typography>

              {/* Arrow Icon */}
              <ArrowForwardIcon
                sx={{
                  color: "#FF2E51",
                  fontSize: 18,
                }}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ServicesSection;
