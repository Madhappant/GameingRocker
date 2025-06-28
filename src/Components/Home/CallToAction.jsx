import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function CallToActionSection() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/contactus'); // redirects to contact page
  };

  return (
    <Box
      sx={{
        textAlign: 'center',
        color: '#ffffff',
        py: { xs: 8, md: 10 },
        px: 2,
        background: 'linear-gradient(90deg, #14002b 0%, #1B0085 100%)',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography
          variant="h2"
          sx={{
            fontFamily: 'Rubik',
            fontWeight: 600,
            fontSize: { xs: '28px', md: '36px' },
            lineHeight: { xs: '42px', md: '58px' },
            mb: 2,
          }}
        >
          Ready to Build Your Next Game?
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: '16px', md: '18px' },
            color: '#d1d1d1',
            fontFamily: 'Rubik',
            mb: 4,
          }}
        >
          Whether it’s a mobile hit or a next-gen console experience, we’re here to help you make it real.
        </Typography>

        <Button
          variant="contained"
          onClick={handleClick}
          sx={{
            bgcolor: '#FF2E51',
            borderRadius: '10px',
            fontFamily: 'Rubik',
            fontSize: '16px',
            fontWeight: 500,
            width: '160px',
            height: '50px',
            textTransform: 'none',
            boxShadow: '0 0 12px rgba(255,46,81,0.3)',
            '&:hover': {
              bgcolor: '#e0003f',
            },
          }}
        >
          Get Started
        </Button>
      </motion.div>
    </Box>
  );
}

export default CallToActionSection;
