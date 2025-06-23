// src/Components/Home/CODBanner.jsx
import React from "react";
import { Box, Typography } from "@mui/material";
// import codImage from "../../Assets/Rectangle 4.png";


const CODBanner = () => {
  return (
    <Box sx={{ backgroundColor: "#0C031C", py: 10 }}>
      <Box sx={{ maxWidth: '1300px', mx: 'auto', px: 2, position: 'relative' }}>
        {/* Top Heading */}
        <Typography
          sx={{
            fontFamily: 'Poppins',
            fontWeight: 600,
            fontSize: '35px',
            lineHeight: '66px', // 187.5%
            textAlign: 'center',
            color: '#FFFFFF',
            width: '826px',
            mx: 'auto',
            mb: '80px',
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </Typography>

        {/* Text + Dots */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            position: 'relative',
            mb: 4,
          }}
        >
          {/* Left Text */}
          <Box sx={{ width: '545px' , paddingY: 3 }}>
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
              Lorem Ipsum
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
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </Typography>
          </Box>

          {/* Red Dot Grid Overlay - half in and half out of image */}
          <Box
            sx={{
              width: "196px",
              height: "154px",
              position: "absolute",
              right: "120px",
              top: "120%", 
              transform: "translateY(-50%)", 
              backgroundImage: "radial-gradient(red 3px, transparent 3px)",
              backgroundSize: "20px 20px",
              zIndex: 2,
            }}
          />
        </Box>

        {/* COD Image */}
        <Box
          component="img"
          src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZG82d256cWdmMHc0ZW1qdGQ5aDJhbThueHAyam5lN3g2aTdqMDk3NiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/2BNr7wXVEwrJXFug4v/giphy.gif"
          alt="Call of Duty"
          sx={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
            zIndex: 1,
            borderRadius: "8px",
            position: "relative",
          }}
        />
      </Box>
    </Box>
  );
};

export default CODBanner;
