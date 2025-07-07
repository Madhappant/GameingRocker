import React from 'react';
import { Box } from '@mui/material';

const logos = [
  { name: '2K Games', alt: '2K Games' },
  { name: 'Assassin\'s Creed', alt: 'Assassin\'s Creed' },
  { name: 'Bloodborne', alt: 'Bloodborne' },
  { name: 'Elden Ring', alt: 'Elden Ring' },
  { name: 'Call of Duty', alt: 'Call of Duty' },
  { name: 'Far Cry 4', alt: 'Far Cry 4' },
  { name: 'GTA VI', alt: 'GTA VI' },
  { name: 'Miles Morales', alt: 'Miles Morales' },
];

const BrandScrollBanner = () => {
  return (
    <Box
      sx={{
        overflow: 'hidden',
        background: 'linear-gradient(90deg, #0f051d 0%, #1B0085 100%)',
        py: { xs: 3, md: 5 },
        position: 'relative',
        borderTop: '1px solid #292654',
        borderBottom: '1px solid #292654',
        '&:hover .scrollTrack': {
          animationPlayState: 'paused',
        },
      }}
    >
      {/* Scrolling Track */}
      <Box
        className="scrollTrack"
        sx={{
          display: 'flex',
          gap: { xs: 5, md: 8 },
          width: 'max-content',
          animation: 'scroll-marquee 35s linear infinite',
          whiteSpace: 'nowrap',
          '@keyframes scroll-marquee': {
            '0%': { transform: 'translateX(0)' },
            '100%': { transform: 'translateX(-50%)' },
          },
        }}
      >
        {[...logos, ...logos].map((logo, index) => (
          <Box
            key={index}
            sx={{
              height: { xs: 40, md: 50 },
              width: 'auto',
              mx: 3,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minWidth: 120,
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: 2,
              px: 2,
              transition: 'transform 0.4s ease, filter 0.4s ease',
              filter: 'brightness(0.8)',
              '&:hover': {
                filter: 'brightness(1.2)',
                transform: 'scale(1.05)',
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
              },
            }}
          >
            <Box
              component="span"
              sx={{
                color: '#fff',
                fontSize: { xs: '12px', md: '14px' },
                fontWeight: 600,
                textAlign: 'center',
                fontFamily: "'Orbitron', sans-serif",
              }}
            >
              {logo.name}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default BrandScrollBanner;