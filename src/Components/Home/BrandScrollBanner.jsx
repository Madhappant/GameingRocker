import React from 'react';
import { Box } from '@mui/material';

const logos = [
  { src: '/Assets/2K-Logo-3.svg', alt: '2K Games' },
  { src: '/Assets/Assassins-Creed-Logo-2.svg', alt: 'Assassin\'s Creed' },
  { src: '/Assets/Bloodborne-Logo-SVG_002.svg', alt: 'Bloodborne' },
  { src: '/Assets/Elden-Ring-Logo.svg', alt: 'Elden Ring' },
  { src: '/Assets/Call_of_Duty_logo-1.svg', alt: 'Call of Duty' },
  { src: '/Assets/Far-Cry-4-Logo-2.svg', alt: 'Far Cry 4' },
  { src: '/Assets/Grand-Theft-Auto-VI-SVG_007.svg', alt: 'GTA VI' },
  { src: '/Assets/Miles-Morales-Logo-SVG_015.svg', alt: 'Miles Morales' },
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
            component="img"
            src={logo.src}
            alt={logo.alt}
            sx={{
              height: { xs: 40, md: 50 },
              width: 'auto',
              mx: 3,
              objectFit: 'contain',
              transition: 'transform 0.4s ease, filter 0.4s ease',
              filter: 'brightness(0.8) invert(1) grayscale(1)',
              '&:hover': {
                filter: 'brightness(1) invert(0) grayscale(0)',
                transform: 'scale(1.1)',
              },
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default BrandScrollBanner;
