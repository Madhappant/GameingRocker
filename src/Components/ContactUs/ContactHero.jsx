import React, { useState } from "react";
import { Box, Typography, Divider, Chip } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import mapImage from "../../Assets/map.png";

const ContactUsHero = () => {
  const [hoveredRegion, setHoveredRegion] = useState(null);

  const gameStats = {
    India: {
      topGames: ["Free Fire", "BGMI", "Valorant"],
      installs: 120000,
      users: 95000,
    },
    USA: {
      topGames: ["Call of Duty", "Minecraft", "Fortnite"],
      installs: 150000,
      users: 125000,
    },
    Germany: {
      topGames: ["Clash Royale", "PUBG", "League of Legends"],
      installs: 95000,
      users: 86000,
    },
    Japan: {
      topGames: ["Genshin Impact", "Monster Hunter", "Fate/Grand Order"],
      installs: 110000,
      users: 99000,
    },
    Brazil: {
      topGames: ["Free Fire", "FIFA", "Clash of Clans"],
      installs: 100000,
      users: 87000,
    },
    Australia: {
      topGames: ["Among Us", "Valorant", "Roblox"],
      installs: 87000,
      users: 81000,
    },
    Canada: {
      topGames: ["Call of Duty", "Rocket League", "Fortnite"],
      installs: 92000,
      users: 88000,
    },
    SouthKorea: {
      topGames: ["Overwatch", "StarCraft", "League of Legends"],
      installs: 108000,
      users: 97000,
    },
  };

  const mapCoordinates = {
    India: { top: "46.7%", left: "68.4%" },
    USA: { top: "38%", left: "23%" },
    Germany: { top: "30%", left: "50%" },
    Japan: { top: "40%", left: "85%" },
    Brazil: { top: "62%", left: "28%" },
    Australia: { top: "75%", left: "90%" },
    Canada: { top: "25%", left: "22%" },
    SouthKorea: { top: "33%", left: "80%" },
  };

  return (
    <Box
      sx={{
        background: "transparent",
        color: "#FFFFFF",
        py: 10,
        px: 2,
        position: "relative",
        fontFamily: '"Poppins", sans-serif',
        top: 40,
      }}
    >
      <FiberManualRecordIcon
        sx={{
          position: "absolute",
          top: "131px",
          left: "1375px",
          color: "#F9D6FF",
          fontSize: "9px",
        }}
      />

      <Typography sx={{ textAlign: "center", fontSize: "16px", fontWeight: 400, mb: 1 }}>
        Home <span style={{ color: "#DC7000" }}>{">"} Contact us</span>
      </Typography>

      <Typography sx={{ textAlign: "center", fontSize: "33px", fontWeight: 700, mb: 2, textTransform: "uppercase", letterSpacing: 1 }}>
        Connect With Gamers Worldwide
      </Typography>

      <Typography
        sx={{
          textAlign: "center",
          fontSize: "16px",
          fontWeight: 500,
          color: "#A0A0A0",
          maxWidth: 600,
          mx: "auto",
        }}
      >
        Join our global community and explore trending games in every region.
      </Typography>

      <Box
        sx={{
          width: "1060px",
          height: "538px",
          mt: 6,
          mx: "auto",
          position: "relative",
          borderRadius: "12px",
          overflow: "hidden",
          backgroundImage: `url(${mapImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {Object.entries(mapCoordinates).map(([region, coords]) => (
          <Box
            key={region}
            onMouseEnter={() => setHoveredRegion(region)}
            onMouseLeave={() => setHoveredRegion(null)}
            sx={{
              position: "absolute",
              top: coords.top,
              left: coords.left,
              width: "18px",
              height: "18px",
              backgroundColor: "#ffffff",
              borderRadius: "50%",
              border: "4px solid #D80027",
              transition: "transform 0.3s",
              cursor: "pointer",
              '&:hover': {
                transform: "scale(1.4)",
                backgroundColor: "#D80027",
              },
            }}
          />
        ))}

        {hoveredRegion && gameStats[hoveredRegion] && (
          <Box
            sx={{
              position: "absolute",
              top: "10%",
              left: "5%",
              backgroundColor: "#1a1a1a",
              color: "#ffffff",
              p: 3,
              borderRadius: "10px",
              zIndex: 10,
              boxShadow: 6,
              width: 280,
            }}
          >
            <Typography fontWeight={600} fontSize="18px" color="#DC7000" mb={1}>
              {hoveredRegion} Stats
            </Typography>
            <Typography variant="body2" mb={1}>
              <strong>Top Games:</strong>
            </Typography>
            <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mb: 1 }}>
              {gameStats[hoveredRegion].topGames.map((game, idx) => (
                <Chip key={idx} label={game} color="primary" variant="outlined" sx={{ fontSize: "12px" }} />
              ))}
            </Box>
            <Typography variant="body2">
              <strong>Installs:</strong> {gameStats[hoveredRegion].installs.toLocaleString()}
            </Typography>
            <Typography variant="body2">
              <strong>Users:</strong> {gameStats[hoveredRegion].users.toLocaleString()}
            </Typography>
          </Box>
        )}
      </Box>

      <Box
        sx={{
          mt: 6,
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          px: { xs: 4, md: 12 },
          height: "100px",
          marginLeft: "-20px",
        }}
      >
        <Box>
          <Typography sx={{ fontSize: "16px", mb: 1 }}>Follow us</Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, height: "80px" }}>
            <FacebookIcon sx={{ color: "#fff", fontSize: "32px" }} />
            <InstagramIcon sx={{ color: "#fff", fontSize: "32px" }} />
            <TwitterIcon sx={{ color: "#fff", fontSize: "32px" }} />
            <LinkedInIcon sx={{ color: "#fff", fontSize: "32px" }} />
          </Box>
        </Box>

        <Divider orientation="vertical" flexItem sx={{ backgroundColor: "#ffffff", mx: 6 }} />

        <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
          <PhoneIcon sx={{ color: "#ffffff", fontSize: "32px" }} />
          <Typography sx={{ fontSize: "14px", color: "#ffffff" }}>
            +91 98765 43210
          </Typography>
        </Box>

        <Divider orientation="vertical" flexItem sx={{ backgroundColor: "#ffffff", mx: 1 }} />

        <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
          <LocationOnIcon sx={{ color: "#ffffff", fontSize: "32px" }} />
          <Typography
            sx={{
              fontSize: "16px",
              color: "#ffffff",
              fontWeight: 300,
              width: "340px",
            }}
          >
            HQ: Level 2, CyberHub, Bengaluru, India
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactUsHero;
