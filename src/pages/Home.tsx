import React, { useEffect, useRef } from 'react';
import { Box, Typography, Button, Container, Grid, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Components
import Scene3D from '../components/3D/Scene3D';
import GameController from '../components/3D/GameController';
import GameCard3D from '../components/3D/GameCard3D';
import StatsSection from '../components/StatsSection';
import FeaturedGames from '../components/FeaturedGames';
import InteractiveMap from '../components/InteractiveMap';

gsap.registerPlugin(ScrollTrigger);

const Home: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hero section animations
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current.children,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
        }
      );
    }

    // Stats section scroll animation
    if (statsRef.current) {
      gsap.fromTo(
        statsRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: statsRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }
  }, []);

  const featuredGames = [
    { id: 1, title: 'Cyber Legends', rating: 4.8, players: '2.5M' },
    { id: 2, title: 'Neon Warriors', rating: 4.6, players: '1.8M' },
    { id: 3, title: 'Digital Realm', rating: 4.9, players: '3.2M' },
  ];

  return (
    <Box sx={{ pt: 8 }}>
      {/* Hero Section with 3D Controller */}
      <Box
        ref={heroRef}
        sx={{
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* 3D Background */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 1,
          }}
        >
          <Scene3D cameraPosition={[0, 0, 8]}>
            <GameController
              position={[3, 0, 0]}
              scale={1.5}
              autoRotate
            />
            {/* Floating particles */}
            {Array.from({ length: 50 }).map((_, i) => (
              <mesh
                key={i}
                position={[
                  (Math.random() - 0.5) * 20,
                  (Math.random() - 0.5) * 20,
                  (Math.random() - 0.5) * 20,
                ]}
              >
                <sphereGeometry args={[0.02]} />
                <meshBasicMaterial
                  color={Math.random() > 0.5 ? "#00D4FF" : "#FF006E"}
                  emissive={Math.random() > 0.5 ? "#00D4FF" : "#FF006E"}
                  emissiveIntensity={0.5}
                />
              </mesh>
            ))}
          </Scene3D>
        </Box>

        {/* Hero Content */}
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    background: 'linear-gradient(45deg, #00D4FF, #FF006E)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    mb: 2,
                    fontWeight: 700,
                  }}
                >
                  GAMING ROCKER
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    color: '#B0B0B0',
                    mb: 4,
                    fontWeight: 300,
                  }}
                >
                  Experience the Future of Gaming
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: '#FFFFFF',
                    mb: 4,
                    fontSize: '1.2rem',
                    lineHeight: 1.6,
                  }}
                >
                  Dive into immersive worlds, compete with players globally, 
                  and discover the next generation of interactive entertainment.
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      background: 'linear-gradient(45deg, #00D4FF, #0099CC)',
                      px: 4,
                      py: 1.5,
                      fontSize: '1.1rem',
                      '&:hover': {
                        background: 'linear-gradient(45deg, #0099CC, #00D4FF)',
                        transform: 'translateY(-2px)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    Start Gaming
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    sx={{
                      borderColor: '#FF006E',
                      color: '#FF006E',
                      px: 4,
                      py: 1.5,
                      fontSize: '1.1rem',
                      '&:hover': {
                        borderColor: '#FF006E',
                        backgroundColor: 'rgba(255, 0, 110, 0.1)',
                        transform: 'translateY(-2px)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    Watch Trailer
                  </Button>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Stats Section */}
      <Box ref={statsRef} sx={{ py: 8 }}>
        <StatsSection />
      </Box>

      {/* Featured Games with 3D Cards */}
      <Box sx={{ py: 8, bgcolor: 'rgba(26, 26, 46, 0.5)' }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            sx={{
              textAlign: 'center',
              mb: 6,
              background: 'linear-gradient(45deg, #00D4FF, #FF006E)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Featured Games
          </Typography>
          
          <Box sx={{ height: '400px', mb: 4 }}>
            <Scene3D cameraPosition={[0, 0, 6]} enableControls>
              {featuredGames.map((game, index) => (
                <GameCard3D
                  key={game.id}
                  position={[(index - 1) * 3, 0, 0]}
                  title={game.title}
                  onClick={() => console.log(`Clicked ${game.title}`)}
                />
              ))}
            </Scene3D>
          </Box>

          <Grid container spacing={3}>
            {featuredGames.map((game) => (
              <Grid item xs={12} md={4} key={game.id}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card
                    sx={{
                      background: 'rgba(26, 26, 46, 0.8)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(0, 212, 255, 0.3)',
                      '&:hover': {
                        border: '1px solid rgba(0, 212, 255, 0.8)',
                        boxShadow: '0 8px 32px rgba(0, 212, 255, 0.3)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <CardContent>
                      <Typography variant="h6" sx={{ color: '#00D4FF', mb: 1 }}>
                        {game.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#B0B0B0', mb: 2 }}>
                        Rating: {game.rating}/5 ⭐
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#B0B0B0' }}>
                        {game.players} active players
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Interactive Map Section */}
      <Box sx={{ py: 8 }}>
        <InteractiveMap />
      </Box>

      {/* Featured Games List */}
      <Box sx={{ py: 8 }}>
        <FeaturedGames />
      </Box>
    </Box>
  );
};

export default Home;