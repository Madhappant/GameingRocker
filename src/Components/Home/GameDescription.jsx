import React from 'react';
import { Box, Typography } from '@mui/material';

function GameDescriptionSection() {
  return (
    <Box
      sx={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        px: 2,
        color: '#ffffff',
        background: 'rgba(0, 0, 0, 0.4)', // optional overlay
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontFamily: 'Poppins',
          fontWeight: 700,
          fontSize: { xs: '24px', md: '36px' },
          lineHeight: '1.3',
          mb: 2,
        }}
      >
        Explore Our Latest Game Creations
      </Typography>

      <Typography
        variant="body1"
        sx={{
          fontFamily: 'Poppins',
          fontSize: { xs: '14px', md: '18px' },
          maxWidth: '750px',
          color: '#ccc',
        }}
      >
        From high-octane shooters to immersive open worlds and AR/VR experiences, we bring unforgettable gaming moments to life. Dive into our portfolio of technically advanced, creatively stunning titles built for every platform.
      </Typography>
    </Box>
  );
}

export default GameDescriptionSection;
