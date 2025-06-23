// src/components/CallToActionSection.js
import React from 'react';
import { Box, Typography, Button } from '@mui/material';

function CallToActionSection() {
  return (
    <Box sx={{ textAlign: 'center', color: '#ffffff' }}>
      <Typography
        variant="h2"
        sx={{ fontFamily: 'Rubik', fontSize: { xs: '24px', md: '31px' }, lineHeight: '58.1px' }}
      >
        Ready to Build Your Next Game?
      </Typography>
      <Button
        variant="contained"
        color="primary"
        sx={{
          mt: 3,
          bgcolor: '#ffffff1c',
          borderRadius: '10px',
          fontFamily: 'Rubik',
          fontSize: '20px',
          fontWeight: 500,
          width: '139px',
          height: '57px',
          textTransform: 'none',
          '&:hover': { bgcolor: '#ffffff2c' },
        }}
      >
        Get Started
      </Button>
    </Box>
  );
}

export default CallToActionSection;