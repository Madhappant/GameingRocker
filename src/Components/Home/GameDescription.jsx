// src/components/GameDescriptionSection.js
import React from 'react';
import { Box, Typography } from '@mui/material';

function GameDescriptionSection() {
  return (
    <Box
      sx={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: '#ffffff',
      }}
    >
      <Typography
        variant="h3"
        sx={{ fontFamily: 'Poppins', fontSize: { xs: '20px', md: '35px' }, lineHeight: '65.6px' }}
      >
        Explore Our Latest Game Creations
      </Typography>
    </Box>
  );
}

export default GameDescriptionSection;