// src/Components/HeroSection.jsx
import React from 'react';
import { Button, Container, Typography, Box, Grid } from '@mui/material';
import unrealLogo from '../../Assets/unreal 1.png';
import cryLogo from '../../Assets/cry 1.png';

const HeroSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#0C031C',
        px: 2,
        py: 10,
        position: 'relative',
        overflow: 'hidden',
        height: '80vh',
      }}
    >
      {/* Full cover background image */}
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
          {/* Left Text Block */}
          <Grid item xs={12} md={6}>
            <Typography variant="subtitle2" sx={{ color: '#FFA500', fontWeight: 600,lineHeight: '155%', }}>
              Proved By prodesigner
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
              Work that we <br /> produce for our <br /> clients
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
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry’s standard.
            </Typography>

             <Button
              variant="contained"
              sx={{
                mt: '40px',
                width: '195px',
                height: '53px',
                borderRadius: '40px',
                background: 'linear-gradient(90deg, #FF5B5B 0%, #FF7B00 100%)',
                fontWeight: 600,
                fontSize: '0.95rem',
                textTransform: 'none',
              }}
            >
              Get more details
            </Button>
          </Grid>

          {/* Right Logos */}
          <Grid item xs={12} md={6} sx={{ textAlign: 'center' }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: 4,
                mt: 2,
              }}
            >
              <Box component="img" src={cryLogo} alt="CryEngine" sx={{ height: 40 }} />
              <Box component="img" src={unrealLogo} alt="Unreal Engine" sx={{ height: 40 }} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;
