// import React from "react";
// import { Box, Typography, Divider } from "@mui/material";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import PhoneIcon from "@mui/icons-material/Phone";
// import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";

// const ContactUsHero = () => {
//   return (
//     <Box
//       sx={{
//         background: "transparent",
//         color: "#FFFFFF",
//         py: 10,
//         px: 2,
//         position: "relative",
//         fontFamily: '"Poppins", sans-serif',
//       }}
//     >
//       {/* Ellipse Dot */}
//       <FiberManualRecordIcon
//         sx={{
//           position: "absolute",
//           top: "241px",
//           left: "1305px",
//           color: "#F9D6FF",
//           fontSize: "9px",
//         }}
//       />

//       {/* Breadcrumb */}
//       <Typography
//         sx={{
//           textAlign: "center",
//           fontSize: "16px",
//           fontWeight: 400,
//           lineHeight: "33.36px",
//           mb: 1,
//         }}
//       >
//         Home <span style={{ color: "#DC7000" }}>{">"} Contact us</span>
//       </Typography>

//       {/* Title */}
//       <Typography
//         sx={{
//           textAlign: "center",
//           fontSize: "33px",
//           fontWeight: 600,
//           lineHeight: "59.57px",
//           mb: 2,
//         }}
//       >
//         Lorem Ipsum is simply dummy text of the printing and.
//       </Typography>

//       {/* Subtext */}
//       <Typography
//         sx={{
//           textAlign: "center",
//           fontSize: "16px",
//           fontWeight: 500,
//           lineHeight: "30px",
//           color: "#FFFFFF",
//           maxWidth: 600,
//           mx: "auto",
//         }}
//       >
//         Lorem Ipsum is simply dummy text of the printing and typesetting
//         industry.
//       </Typography>

//       {/* World Map Image */}
//       <Box
//         component="img"
//         src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjc5NjdlaWg1N3Nndm41eTg4MTdycTJ6bGttcWE0eWtnZ2V2Nnp4dCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3ov9jYkVbdGMo6UcG4/giphy.gif" // ✅ make sure this image is placed in public/images folder
//         alt="world map"
//         sx={{
//           width: "1060px",
//           height: "540px",
//           mt: 6,
//           mx: "auto",
//           display: "block",
//           border: "2px solid #00AEEF", // optional: border to match image in screenshot
//           borderRadius: "8px",
//         }}
//       />

//       {/* Footer Info Section */}
//       <Box
//         sx={{
//           mt: 6,
//           display: "flex",
//           justifyContent: "space-between",
//           flexWrap: "wrap",
//           px: { xs: 4, md: 12 },
//           height: "100px",
//         }}
//       >
//         {/* Follow us */}
//         <Box>
//           <Typography
//             sx={{
//               fontSize: "16px",
//               lineHeight: "189.5%",
//               color: "#FFFFFF",
//               mb: 1,
//             }}
//           >
//             Follow us
//           </Typography>
//           <Box
//             sx={{
//               display: "flex",
//               alignItems: "center",
//               gap: 2,
//               height: "80px",
//             }}
//           >
//             <FacebookIcon sx={{ color: "#fff", fontSize: "32px" }} />
//             <InstagramIcon sx={{ color: "#fff", fontSize: "32px" }} />
//             <TwitterIcon sx={{ color: "#fff", fontSize: "32px" }} />
//             <LinkedInIcon sx={{ color: "#fff", fontSize: "32px" }} />
//           </Box>
//         </Box>

//         {/* Divider */}
//         <Divider
//           orientation="vertical"
//           flexItem
//           sx={{ backgroundColor: "#ffffff", mx: 4 }}
//         />

//         {/* Phone */}
//         <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
//           <PhoneIcon sx={{ color: "#ffffff", fontSize: "32px" }} />
//           <Typography sx={{ fontSize: "16px", color: "#ffffff" }}>
//             +94 4444 5555 6
//           </Typography>
//         </Box>

//         {/* Divider */}
//         <Divider
//           orientation="vertical"
//           flexItem
//           sx={{ backgroundColor: "#ffffff", mx: 4 }}
//         />

//         {/* Location */}
//         <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
//           <LocationOnIcon sx={{ color: "#ffffff", fontSize: "32px" }} />
//           <Typography
//             sx={{
//               fontSize: "16px",
//               color: "#ffffff",
//               lineHeight: "24px",
//               fontWeight: 300,
//               maxWidth: "320px",
//             }}
//           >
//             but also the leap into electronic typesetting
//           </Typography>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default ContactUsHero;

import React, { useState } from "react";
import { Box, Typography, Divider } from "@mui/material";
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
      topGames: ["Free Fire", "PUBG", "Ludo King"],
      installs: 120000,
      users: 95000,
    },
    USA: {
      topGames: ["Call of Duty", "Minecraft", "Fortnite"],
      installs: 150000,
      users: 125000,
    },
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
      }}
    >
      {/* Ellipse 2 */}
      <FiberManualRecordIcon
        sx={{
          position: "absolute",
          top: "241px",
          left: "1305px",
          color: "#F9D6FF",
          fontSize: "9px",
        }}
      />

      {/* Breadcrumb */}
      <Typography sx={{ textAlign: "center", fontSize: "16px", fontWeight: 400, mb: 1 }}>
        Home <span style={{ color: "#DC7000" }}>{">"} Contact us</span>
      </Typography>

      {/* Title */}
      <Typography sx={{ textAlign: "center", fontSize: "33px", fontWeight: 600, mb: 2 }}>
        Lorem Ipsum is simply dummy text of the printing and.
      </Typography>

      {/* Subtitle */}
      <Typography
        sx={{
          textAlign: "center",
          fontSize: "16px",
          fontWeight: 500,
          color: "#FFFFFF",
          maxWidth: 600,
          mx: "auto",
        }}
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </Typography>

      {/* 🌍 GTM MAP BOX */}
      <Box
        sx={{
          width: "1060px",
          height: "538px",
          mt: 6,
          mx: "auto",
          position: "relative",
          borderRadius: "6px",
          backgroundImage: `url(${mapImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* 🔴 MAP POINT - INDIA */}
        <Box
          onMouseEnter={() => setHoveredRegion("India")}
          onMouseLeave={() => setHoveredRegion(null)}
          sx={{
            position: "absolute",
            top: "46.7%",
            left: "68.4%",
            width: "18px",
            height: "18px",
            backgroundColor: "#fff",
            borderRadius: "50%",
            border: "6px solid #D80027",
            cursor: "pointer",
          }}
        />

        {/* 🔵 MAP POINT - USA */}
        <Box
          onMouseEnter={() => setHoveredRegion("USA")}
          onMouseLeave={() => setHoveredRegion(null)}
          sx={{
            position: "absolute",
            top: "38%",
            left: "23%",
            width: "18px",
            height: "18px",
            backgroundColor: "transparent",
            borderRadius: "50%",
            border: "6px solid #D80027",
            cursor: "pointer",
          }}
        />

        {/* 🧾 TOOLTIP */}
        {hoveredRegion && gameStats[hoveredRegion] && (
          <Box
            sx={{
              position: "absolute",
              top: "5%",
              left: "5%",
              backgroundColor: "#fff",
              color: "#000",
              p: 2,
              borderRadius: "8px",
              zIndex: 10,
              boxShadow: 3,
            }}
          >
            <Typography fontWeight={600}>{hoveredRegion} Stats</Typography>
            <Typography variant="body2">
              <strong>Top Games:</strong> {gameStats[hoveredRegion].topGames.join(", ")}
            </Typography>
            <Typography variant="body2">
              <strong>Installs:</strong> {gameStats[hoveredRegion].installs.toLocaleString()}
            </Typography>
            <Typography variant="body2">
              <strong>Users:</strong> {gameStats[hoveredRegion].users.toLocaleString()}
            </Typography>
          </Box>
        )}
      </Box>

      {/* Footer Row */}
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
        {/* Follow us */}
        <Box>
          <Typography sx={{ fontSize: "16px", mb: 1 }}>Follow us</Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, height: "80px" }}>
            <FacebookIcon sx={{ color: "#fff", fontSize: "40px" }} />
            <InstagramIcon sx={{ color: "#fff", fontSize: "40px" }} />
            <TwitterIcon sx={{ color: "#fff", fontSize: "40px" }} />
            <LinkedInIcon sx={{ color: "#fff", fontSize: "40px" }} />
          </Box>
        </Box>

        <Divider orientation="vertical" flexItem sx={{ backgroundColor: "#ffffff", mx: 6 }} />

        {/* Phone */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
          <PhoneIcon sx={{ color: "#ffffff", fontSize: "40px" }} />
          <Typography sx={{ fontSize: "14px", color: "#ffffff" }}>
            +94 4444 5556
          </Typography>
        </Box>

        <Divider orientation="vertical" flexItem sx={{ backgroundColor: "#ffffff", mx: 1 }} />

        {/* Location */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
          <LocationOnIcon sx={{ color: "#ffffff", fontSize: "40px" }} />
          <Typography
            sx={{
              fontSize: "20px",
              color: "#ffffff",
              fontWeight: 300,
              width: "340px",
            }}
          >
            but also the leap into electronic typesetting
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactUsHero;
