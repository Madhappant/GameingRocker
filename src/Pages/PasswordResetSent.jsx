import React, { useEffect } from 'react';
import { Box, Typography, Button, Paper } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const PasswordResetSent = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/login');
    }, 6000); // Auto-redirect after 6 seconds

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundImage:
          'url(https://wallpapers.com/images/hd/hd-cyberpunk-gamer-background-u4n3ff05jqxcnx2q.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        px: 2,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ width: '100%', maxWidth: 500 }}
      >
        <Paper
          elevation={10}
          sx={{
            p: 4,
            borderRadius: 4,
            backgroundColor: 'rgba(15, 6, 38, 0.88)',
            backdropFilter: 'blur(10px)',
            textAlign: 'center',
            boxShadow: '0 0 25px rgba(255, 46, 81, 0.4)',
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: '#FF2E51',
              fontWeight: 700,
              mb: 2,
              fontFamily: "'Orbitron', sans-serif",
              textShadow: '0 0 8px #FF2E51',
            }}
          >
            Check Your Email
          </Typography>

          <Typography
            sx={{
              color: '#bbb',
              mb: 4,
              fontSize: '15px',
              fontFamily: 'Poppins, sans-serif',
            }}
          >
            We've sent a reset link to your inbox. Click it to reset your
            password and jump back into the action.
          </Typography>

          <Typography
            sx={{
              color: '#888',
              fontSize: '13px',
              fontStyle: 'italic',
              mb: 2,
              fontFamily: 'Poppins',
            }}
          >
            Redirecting to login...
          </Typography>

          <Button
            variant="contained"
            component={Link}
            to="/login"
            sx={{
              background: 'linear-gradient(90deg, #FF2E51, #FF9C00)',
              color: '#fff',
              fontWeight: 700,
              fontSize: '14px',
              fontFamily: "'Orbitron', sans-serif",
              textTransform: 'uppercase',
              px: 5,
              py: 1.4,
              boxShadow: '0 0 15px #FF2E51',
              '&:hover': {
                background: 'linear-gradient(90deg, #FF9C00, #FF2E51)',
                boxShadow: '0 0 20px #FF2E51',
              },
            }}
          >
            Back to Login
          </Button>
        </Paper>
      </motion.div>
    </Box>
  );
};

export default PasswordResetSent;
