import React, { useEffect } from 'react';
import { Grid, Typography, Paper, Box, Button } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const ResetConfirmation = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Auto redirect to login after 6 seconds
    const timer = setTimeout(() => {
      navigate('/login');
    }, 6000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <Grid container sx={{ minHeight: '100vh' }}>
      {/* Left Section */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          backgroundImage:
            'url(https://wallpapers.com/images/hd/cyberpunk-city-gamer-side-view-8vmyew3oz0dts84e.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          px: 6,
          py: 8,
          color: '#fff',
        }}
      >
        <Typography
          variant="h5"
          fontWeight={700}
          gutterBottom
          sx={{
            color: '#FF2E51',
            fontFamily: "'Orbitron', sans-serif",
            textShadow: '0 0 10px #FF2E51',
          }}
        >
          GAMER ZONE
        </Typography>
        <Typography
          variant="h4"
          fontWeight={700}
          sx={{ fontFamily: "'Orbitron', sans-serif", lineHeight: 1.4 }}
        >
          Online communities <br /> spark creativity.
        </Typography>
        <Typography
          variant="body1"
          mt={2}
          sx={{ color: '#ccc', fontFamily: 'Poppins, sans-serif' }}
        >
          Connect. Play. Evolve.
        </Typography>
      </Grid>

      {/* Right Section */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          backgroundColor: '#0f061d',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          style={{ width: '100%', maxWidth: 420 }}
        >
          <Paper
            elevation={10}
            sx={{
              p: 5,
              borderRadius: 4,
              background: 'rgba(15, 6, 38, 0.9)',
              backdropFilter: 'blur(12px)',
              textAlign: 'center',
              boxShadow: '0 0 25px rgba(255, 46, 81, 0.35)',
            }}
          >
            <Typography
              variant="h5"
              fontWeight={700}
              gutterBottom
              sx={{
                color: '#FF2E51',
                fontFamily: "'Orbitron', sans-serif",
                textShadow: '0 0 6px #FF2E51',
              }}
            >
              Password Reset Sent
            </Typography>

            <Typography
              variant="body2"
              sx={{
                mb: 4,
                color: '#bbb',
                fontFamily: 'Poppins, sans-serif',
              }}
            >
              An unlock code has been sent to your registered email. Follow the
              link to get back into the game.
            </Typography>

            <Box>
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <CheckCircleIcon sx={{ fontSize: 80, color: '#00FFAA' }} />
              </motion.div>
            </Box>

            <Typography
              variant="caption"
              display="block"
              sx={{
                mt: 4,
                color: '#888',
                fontStyle: 'italic',
                fontFamily: 'Poppins',
              }}
            >
              Redirecting to login...
            </Typography>

            <Button
              onClick={() => navigate('/login')}
              variant="contained"
              sx={{
                mt: 3,
                backgroundColor: '#FF2E51',
                textTransform: 'uppercase',
                fontWeight: 700,
                fontSize: '14px',
                fontFamily: "'Orbitron', sans-serif",
                px: 4,
                py: 1.2,
                '&:hover': {
                  backgroundColor: '#e0003f',
                },
              }}
            >
              Go to Login
            </Button>
          </Paper>
        </motion.div>
      </Grid>
    </Grid>
  );
};

export default ResetConfirmation;
