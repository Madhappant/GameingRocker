import React from 'react';
import { Button, Container, Typography, Box, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import unrealLogo from '../../Assets/unreal 1.png';
import cryLogo from '../../Assets/cry 1.png';
import { useNavigate } from 'react-router-dom';

const floatingAnimation = {
  animate: {
    x: [0, Math.random() * 300 - 150, Math.random() * 300 - 150, 0],
    y: [0, Math.random() * 200 - 100, Math.random() * 200 - 100, 0],
    transition: {
      duration: 8,
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut"
    }
  }
};

const HeroSection = () => {
  const navigate = useNavigate();

  const handleGetDetails = () => {
    navigate('/portfolio'); // Redirect to portfolio or relevant section
  };

  return (
    <Box
      sx={{
        backgroundColor: '#0C031C',
        px: 2,
        py: 10,
        position: 'relative',
        overflow: 'hidden',
        height: '90vh',
        top: 40,
      }}
    >
      {/* Background Animation Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url(https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNnJ6cHRqOGNlb2ZuN2tpaDAzNHQ4Ynk5Nzg4cnVsaWpkYm15YzhvcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/h2GpJK6ljDJJnLDWUA/giphy.gif)`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          zIndex: 0,
          opacity: 0.12,
        }}
      />

      <Container maxWidth={false} sx={{ maxWidth: '1300px', mx: 'auto', position: 'relative', zIndex: 1 }}>
        <Grid container spacing={4} alignItems="center" justifyContent="left">
          {/* Left Content */}
          <Grid item xs={12} md={6}>
            <Typography variant="subtitle2" sx={{ color: '#FFA500', fontWeight: 600 }}>
              Powered by GameRealm Studios
            </Typography>

            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                fontSize: { xs: '2rem', md: '3rem' },
                lineHeight: '155%',
                mt: 2,
                color: '#fff',
              }}
            >
              Creating Immersive <br /> Gaming Experiences <br /> for Every Gamer
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: '#ccc',
                mt: 3,
                maxWidth: 450,
                fontSize: '0.95rem',
                lineHeight: '155%',
              }}
            >
              Explore a curated collection of indie, AAA, and classic games. Whether you’re a developer or gamer, we bring stories to life with cutting-edge engines and creativity.
            </Typography>

            <Button
              variant="contained"
              onClick={handleGetDetails}
              sx={{
                mt: '40px',
                width: '195px',
                height: '53px',
                borderRadius: '40px',
                background: 'linear-gradient(90deg, #FF5B5B 0%, #FF7B00 100%)',
                fontWeight: 600,
                fontSize: '0.95rem',
                textTransform: 'none',
                '&:hover': {
                  background: 'linear-gradient(90deg, #FF7B00 0%, #FF5B5B 100%)',
                },
              }}
            >
              View Portfolio
            </Button>
          </Grid>

          {/* Right Side Floating Logos */}
          <Grid item xs={12} md={6} sx={{ position: 'relative', height: 300 }}>
            <motion.img
              src={cryLogo}
              alt="CryEngine"
              style={{
                height: 60,
                position: 'absolute',
                top: 0,
                left: 0,
              }}
              variants={floatingAnimation}
              animate="animate"
            />

            <motion.img
              src={unrealLogo}
              alt="Unreal Engine"
              style={{
                height: 60,
                position: 'absolute',
                bottom: 0,
                right: 0,
              }}
              variants={floatingAnimation}
              animate="animate"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;
