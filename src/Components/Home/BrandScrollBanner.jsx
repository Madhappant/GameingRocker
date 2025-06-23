// import React from 'react';
// import { Box } from '@mui/material';

// const logos = [
//   '../../Assets/2K-Logo-3.svg',
//   '../../Assets/Assassins-Creed-Logo-2.svg',
//   '../../Assets/Bloodborne-Logo-SVG_002.svg',
//   '../../Assets/Elden-Ring-Logo.svg',
//   '../../Assets/Call_of_Duty_logo-1.svg',
//   '../../Assets/Far-Cry-4-Logo-2.svg',
//   '../../Assets/Grand-Theft-Auto-VI-PNG_005.png',
//   '../../Assets/Miles-Morales-Logo-SVG_015.svg',
  
// ];

// const BrandScrollBanner = () => {
//   return (
//     <Box
//       sx={{
//         overflow: 'hidden',
//         backgroundColor: '#0B0820',
//         py: 4,
//         borderTop: '1px solid #1E1B37',
//         borderBottom: '1px solid #1E1B37',
//       }}
//     >
//       <Box
//         sx={{
//           display: 'inline-flex',
//           gap: 8,
//           animation: 'scroll-left 30s linear infinite',
//           whiteSpace: 'nowrap',
//           '@keyframes scroll-left': {
//             '0%': { transform: 'translateX(0)' },
//             '100%': { transform: 'translateX(-50%)' },
//           },
//           '&:hover': {
//             animationPlayState: 'paused',
//           },
//         }}
//       >
//         {[...logos, ...logos].map((logo, index) => (
//           <Box
//             key={index}
//             component="img"
//             src={logo}
//             alt={`Brand ${index}`}
//             sx={{
//               height: 45,
//               mx: 4,
//               objectFit: 'contain',
//               filter: 'invert(1)', // white color
//               opacity: 0.8,
//               transition: 'transform 0.3s ease, opacity 0.3s ease',
//               '&:hover': {
//                 transform: 'scale(1.1)',
//                 opacity: 1,
//               },
//             }}
//           />
//         ))}
//       </Box>
//     </Box>
//   );
// };

// export default BrandScrollBanner;

// src/Components/Home/BrandScrollBanner.jsx
import React from 'react';
import { Box } from '@mui/material';

const logos = [
  '/Assets/2K-Logo-3.svg',
  '/Assets/Assassins-Creed-Logo-2.svg',
  '/Assets/Bloodborne-Logo-SVG_002.svg',
  '/Assets/Elden-Ring-Logo.svg',
  '/Assets/Call_of_Duty_logo-1.svg',
  '/Assets/Far-Cry-4-Logo-2.svg',
  '/Assets/Grand-Theft-Auto-VI-SVG_007.svg',
  '/Assets/Miles-Morales-Logo-SVG_015.svg',
];

const BrandScrollBanner = () => {
  return (
    <Box
      sx={{
        overflow: 'hidden',
        backgroundColor: '#1B0085',
        py: 4,
        position: 'relative',
        '&:hover .scrollTrack': {
          animationPlayState: 'paused',
        },
      }}
    >
      <Box
        className="scrollTrack"
        sx={{
          display: 'flex',
          gap: 6,
          animation: 'scroll-left 10s linear infinite', // slowed down
          whiteSpace: 'nowrap',
          '@keyframes scroll-left': {
            '0%': { transform: 'translateX(0)' },
            '100%': { transform: 'translateX(-50%)' },
          },
        }}
      >
        {[...logos, ...logos].map((logo, index) => (
          <Box
            key={index}
            component="img"
            src={logo}
            alt={`Brand ${index}`}
            sx={{
              height: 50,
              mx: 3,
              objectFit: 'contain',
              transition: 'all 0.5s ease-in-out',
              filter: 'brightness(0) invert(1)',
              '&:hover': {
                filter: 'brightness(1)',

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
