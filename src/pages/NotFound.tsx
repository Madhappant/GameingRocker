import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Scene3D from '../components/3D/Scene3D';

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg" sx={{ pt: 12, pb: 8 }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '70vh',
          textAlign: 'center',
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
            zIndex: -1,
            opacity: 0.3,
          }}
        >
          <Scene3D cameraPosition={[0, 0, 5]}>
            {/* Floating 404 elements */}
            <mesh position={[-2, 0, 0]} rotation={[0, 0, 0.1]}>
              <boxGeometry args={[1, 2, 0.2]} />
              <meshStandardMaterial
                color="#FF006E"
                emissive="#FF006E"
                emissiveIntensity={0.3}
              />
            </mesh>
            <mesh position={[0, 0, 0]}>
              <torusGeometry args={[0.8, 0.3, 16, 100]} />
              <meshStandardMaterial
                color="#00D4FF"
                emissive="#00D4FF"
                emissiveIntensity={0.3}
              />
            </mesh>
            <mesh position={[2, 0, 0]} rotation={[0, 0, -0.1]}>
              <boxGeometry args={[1, 2, 0.2]} />
              <meshStandardMaterial
                color="#FF006E"
                emissive="#FF006E"
                emissiveIntensity={0.3}
              />
            </mesh>
          </Scene3D>
        </Box>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '6rem', md: '10rem' },
              fontWeight: 700,
              background: 'linear-gradient(45deg, #00D4FF, #FF006E)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 2,
              fontFamily: 'Orbitron',
            }}
          >
            404
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Typography
            variant="h4"
            sx={{
              color: '#FFFFFF',
              mb: 2,
              fontWeight: 600,
            }}
          >
            Game Over!
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: '#B0B0B0',
              mb: 4,
              maxWidth: '600px',
            }}
          >
            Looks like you've wandered into uncharted territory. 
            The page you're looking for doesn't exist in our gaming universe.
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate('/')}
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
              Return Home
            </Button>
            <Button
              variant="outlined"
              size="large"
              onClick={() => navigate('/games')}
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
              Browse Games
            </Button>
          </Box>
        </motion.div>

        {/* Animated particles */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: -1,
          }}
        >
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              style={{
                position: 'absolute',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: '4px',
                height: '4px',
                background: Math.random() > 0.5 ? '#00D4FF' : '#FF006E',
                borderRadius: '50%',
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default NotFound;