import React, { useEffect, useState } from 'react';
import { Box, Typography, LinearProgress } from '@mui/material';
import { motion } from 'framer-motion';

const LoadingScreen: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(timer);
          return 100;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 200);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(135deg, #0A0A0F 0%, #1A1A2E 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
      }}
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Typography
          variant="h2"
          sx={{
            background: 'linear-gradient(45deg, #00D4FF, #FF006E)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontFamily: 'Orbitron',
            fontWeight: 700,
            mb: 4,
            textAlign: 'center',
          }}
        >
          GAMING ROCKER
        </Typography>
      </motion.div>

      <Box sx={{ width: '300px', mb: 2 }}>
        <LinearProgress
          variant="determinate"
          value={progress}
          sx={{
            height: 8,
            borderRadius: 4,
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            '& .MuiLinearProgress-bar': {
              background: 'linear-gradient(90deg, #00D4FF, #FF006E)',
              borderRadius: 4,
            },
          }}
        />
      </Box>

      <Typography variant="body2" sx={{ color: '#B0B0B0' }}>
        Loading amazing gaming experience... {Math.round(progress)}%
      </Typography>

      {/* Animated gaming elements */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          position: 'absolute',
          top: '20%',
          right: '20%',
          width: '60px',
          height: '60px',
          border: '3px solid #00D4FF',
          borderRadius: '50%',
          borderTop: '3px solid transparent',
        }}
      />

      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          position: 'absolute',
          bottom: '20%',
          left: '20%',
          width: '40px',
          height: '40px',
          background: 'linear-gradient(45deg, #FF006E, #00D4FF)',
          borderRadius: '8px',
        }}
      />
    </Box>
  );
};

export default LoadingScreen;