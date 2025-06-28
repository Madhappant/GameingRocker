import React from "react";
import { Box, Typography, Grid, Divider, Avatar } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ViewListIcon from "@mui/icons-material/ViewList";

const data = [
  {
    icon: <PersonIcon sx={{ color: "#C8102E" }} />,
    count: "90+",
    label: "Global Clients",
  },
  {
    icon: <LocationOnIcon sx={{ color: "#C8102E" }} />,
    count: "30+",
    label: "Countries Served",
  },
  {
    icon: <ViewListIcon sx={{ color: "#C8102E" }} />,
    count: "50+",
    label: "Games Delivered",
  },
];

const PortfolioHero = () => {
  return (
    <Box sx={{ background: "#0C031C", py: 10, px: 2, top: 40, position: "relative" }}>
      <Box sx={{ maxWidth: "1200px", mx: "auto", textAlign: "center" }}>
        {/* Breadcrumb */}
        <Typography sx={{ color: "#fff", fontSize: 14, mb: 1 }}>
          Home <span style={{ color: "#C8102E" }}>{"> Portfolio"}</span>
        </Typography>

        {/* Title */}
        <Typography
          sx={{
            fontSize: { xs: "24px", md: "32px" },
            fontWeight: 600,
            color: "#fff",
            mb: 1,
          }}
        >
          Explore Our Global Gaming Impact
        </Typography>

        {/* Subtitle */}
        <Typography sx={{ fontSize: 14, color: "#ccc", mb: 5 }}>
          From concept to console, we craft immersive gaming experiences for players worldwide.
        </Typography>

        {/* Stat Box */}
        <Box
          sx={{
            backgroundColor: "#1A1110",
            borderRadius: "12px",
            px: { xs: 1, md: 2 },
            py: { xs: 1, md: 6 },
          }}
        >
          <Grid container justifyContent="space-between" alignItems="center" px={2}>
            {data.map((item, index) => (
              <Grid
                item
                xs={12}
                md={3.5}
                key={index}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  textAlign: "center",
                  position: "relative",
                  px: 9,
                }}
              >
                <Avatar
                  sx={{
                    bgcolor: "#fff",
                    width: 65,
                    height: 65,
                    mb: 1,
                    px: 1,
                  }}
                >
                  {item.icon}
                </Avatar>
                <Box sx={{ flexGrow: 1, textAlign: "center", px: 2 }}>
                  <Typography
                    sx={{ color: "#fff", fontWeight: 600, fontSize: "18px", mb: 1 }}
                  >
                    {item.count}
                  </Typography>
                  <Typography sx={{ color: "#ccc", fontSize: "14px" }}>
                    {item.label}
                  </Typography>
                </Box>

                {/* Divider */}
                {index < 2 && (
                  <Divider
                    orientation="vertical"
                    flexItem
                    sx={{
                      position: "absolute",
                      right: 0,
                      top: "50%",
                      transform: "translateY(-50%)",
                      height: "100px",
                      borderWidth: "1px",
                      borderColor: "#EEEFF2",
                      display: { xs: "none", md: "block" },
                    }}
                  />
                )}
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default PortfolioHero;
