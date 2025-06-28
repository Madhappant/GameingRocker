import React from "react";
import { Box, Typography } from "@mui/material";

const CODBanner = () => {
  return (
    <Box sx={{ backgroundColor: "#0C031C", py: 10 }}>
      <Box sx={{ maxWidth: '1300px', mx: 'auto', px: 2, position: 'relative' }}>
        {/* Title */}
        <Typography
          sx={{
            fontFamily: 'Poppins',
            fontWeight: 600,
            fontSize: '35px',
            lineHeight: '66px',
            textAlign: 'center',
            color: '#FFFFFF',
            width: '826px',
            mx: 'auto',
            mb: '80px',
          }}
        >
          Immersive AAA Game Development That Redefines Realism
        </Typography>

        {/* Content Block */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            position: 'relative',
            mb: 4,
          }}
        >
          {/* Text Block */}
          <Box sx={{ width: '545px', paddingY: 3 }}>
            <Typography
              sx={{
                fontFamily: 'Poppins',
                fontWeight: 600,
                fontSize: '30px',
                lineHeight: '56px',
                color: '#FFFFFF',
                mb: 2,
              }}
            >
              Tactical Shooters, Real-Time Action
            </Typography>
            <Typography
              sx={{
                fontFamily: 'Poppins',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '30px',
                color: '#FFFFFF',
              }}
            >
              Our development team specializes in crafting realistic and adrenaline-pumping shooter games inspired by legendary franchises like Call of Duty. From motion capture to photorealistic environments, we bring your action vision to life.
            </Typography>
          </Box>

          {/* Red Dot Overlay */}
          <Box
            sx={{
              width: "196px",
              height: "154px",
              position: "absolute",
              right: "120px",
              top: "120%",
              transform: "translateY(-50%)",
              backgroundImage: "radial-gradient(#FF2E51 3px, transparent 3px)",
              backgroundSize: "20px 20px",
              zIndex: 2,
              opacity: 0.8,
            }}
          />
        </Box>

        {/* Game Image / Cinematic Preview */}
        <Box
          component="img"
          src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZG82d256cWdmMHc0ZW1qdGQ5aDJhbThueHAyam5lN3g2aTdqMDk3NiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/2BNr7wXVEwrJXFug4v/giphy.gif"
          alt="Call of Duty Cinematic"
          sx={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
            zIndex: 1,
            borderRadius: "8px",
            position: "relative",
            boxShadow: "0px 4px 20px rgba(255, 46, 81, 0.3)",
          }}
        />
      </Box>
    </Box>
  );
};

export default CODBanner;
