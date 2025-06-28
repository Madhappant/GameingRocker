import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// Icons
import MobileIcon from "../../Assets/smartphone.png";
import PCIcon from "../../Assets/PC.png";
import PS4Icon from "../../Assets/PS4.png";
import ARVRIcon from "../../Assets/vr-glasses 1.png";
import ARDesignIcon from "../../Assets/VR.png";
import Model3DIcon from "../../Assets/3d-cube 1.png";

// Define available services
const services = [
  { icon: MobileIcon, label: "Mobile Game Development" },
  { icon: PCIcon, label: "PC Game Development" },
  { icon: PS4Icon, label: "PS4 Game Development" },
  { icon: ARVRIcon, label: "AR/VR Experiences" },
  { icon: ARDesignIcon, label: "Immersive UI/UX Design" },
  { icon: Model3DIcon, label: "3D Modeling & Assets" },
];

const ServicesSection = () => {
  const handleServiceClick = (label) => {
    alert(`More info coming soon for: ${label}`);
    // In real app: navigate(`/services/${label.toLowerCase().replace(/\s+/g, '-')}`)
  };

  return (
    <Box
      sx={{
        width: "100%",
        backgroundImage: `url(https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExc2NoYnhvd2M2eTlzMHM2cTVoZWVjempieWVsc2Jiem14czV0MTNzMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/vVwv7I87uB9gZ7avim/giphy.gif)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        textAlign: "center",
        color: "#fff",
        py: { xs: 8, md: 10 },
        px: { xs: 2, md: 6 },
      }}
    >
      {/* Heading */}
      <Typography
        sx={{
          fontFamily: "Poppins",
          fontWeight: 700,
          fontSize: "30px",
          lineHeight: "150%",
          maxWidth: "820px",
          mx: "auto",
          mb: 2,
        }}
      >
        Services Tailored for Modern Game Development
      </Typography>

      {/* Subheading */}
      <Typography
        sx={{
          fontFamily: "Poppins",
          fontWeight: 400,
          fontSize: "16px",
          lineHeight: "28px",
          color: "#DDDDDD",
          maxWidth: "760px",
          mx: "auto",
          mb: 6,
        }}
      >
        From mobile apps to immersive VR worlds, our game studio builds experiences
        that captivate players across platforms with cutting-edge visuals and performance.
      </Typography>

      {/* Services Grid */}
      <Grid
        container
        spacing={5}
        justifyContent="center"
        maxWidth="1000px"
        mx="auto"
      >
        {services.map((service, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={index}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Box
              onClick={() => handleServiceClick(service.label)}
              sx={{
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                },
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
                  fontSize: "14px",
                  fontWeight: 500,
                  fontFamily: "Poppins",
                  textAlign: "center",
                  color: "#fff",
                  mb: 0.7,
                }}
              >
                {service.label}
              </Typography>

              {/* Arrow */}
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
