import React, { useState } from 'react';
import {
  Box,
  Typography,
  Container,
  Paper,
  Chip,
  Grid,
} from '@mui/material';
import { motion } from 'framer-motion';

interface RegionData {
  name: string;
  players: string;
  topGame: string;
  growth: string;
  position: { x: string; y: string };
}

const regionData: RegionData[] = [
  {
    name: 'North America',
    players: '45M',
    topGame: 'Cyber Legends',
    growth: '+12%',
    position: { x: '20%', y: '30%' },
  },
  {
    name: 'Europe',
    players: '38M',
    topGame: 'Neon Warriors',
    growth: '+8%',
    position: { x: '50%', y: '25%' },
  },
  {
    name: 'Asia Pacific',
    players: '72M',
    topGame: 'Digital Realm',
    growth: '+25%',
    position: { x: '75%', y: '40%' },
  },
  {
    name: 'South America',
    players: '18M',
    topGame: 'Quantum Racing',
    growth: '+15%',
    position: { x: '30%', y: '70%' },
  },
  {
    name: 'Africa',
    players: '12M',
    topGame: 'Space Odyssey',
    growth: '+30%',
    position: { x: '55%', y: '65%' },
  },
];

const InteractiveMap: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<RegionData | null>(null);

  return (
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
        Global Gaming Community
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <Paper
            sx={{
              position: 'relative',
              height: '500px',
              background: 'rgba(26, 26, 46, 0.8)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(0, 212, 255, 0.3)',
              borderRadius: 3,
              overflow: 'hidden',
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='20' height='20' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 20 0 L 0 0 0 20' fill='none' stroke='%23333' stroke-width='0.5'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)' /%3E%3C/svg%3E")`,
            }}
          >
            {/* World Map Outline (Simplified) */}
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '80%',
                height: '60%',
                border: '2px solid rgba(0, 212, 255, 0.3)',
                borderRadius: '50px',
                background: 'rgba(0, 212, 255, 0.05)',
              }}
            />

            {/* Region Markers */}
            {regionData.map((region, index) => (
              <motion.div
                key={region.name}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                style={{
                  position: 'absolute',
                  left: region.position.x,
                  top: region.position.y,
                  transform: 'translate(-50%, -50%)',
                  cursor: 'pointer',
                }}
                onClick={() => setSelectedRegion(region)}
                onMouseEnter={() => setSelectedRegion(region)}
              >
                <Box
                  sx={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    background: 'linear-gradient(45deg, #00D4FF, #FF006E)',
                    boxShadow: '0 0 20px rgba(0, 212, 255, 0.8)',
                    animation: 'pulse 2s infinite',
                    '@keyframes pulse': {
                      '0%': {
                        boxShadow: '0 0 20px rgba(0, 212, 255, 0.8)',
                      },
                      '50%': {
                        boxShadow: '0 0 30px rgba(0, 212, 255, 1)',
                      },
                      '100%': {
                        boxShadow: '0 0 20px rgba(0, 212, 255, 0.8)',
                      },
                    },
                  }}
                />
                <Typography
                  variant="caption"
                  sx={{
                    position: 'absolute',
                    top: '25px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    color: '#00D4FF',
                    fontWeight: 600,
                    whiteSpace: 'nowrap',
                    textShadow: '0 0 10px rgba(0, 0, 0, 0.8)',
                  }}
                >
                  {region.players}
                </Typography>
              </motion.div>
            ))}

            {/* Connecting Lines */}
            <svg
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
              }}
            >
              {regionData.map((region, index) => {
                if (index === regionData.length - 1) return null;
                const nextRegion = regionData[index + 1];
                return (
                  <motion.line
                    key={`line-${index}`}
                    x1={region.position.x}
                    y1={region.position.y}
                    x2={nextRegion.position.x}
                    y2={nextRegion.position.y}
                    stroke="rgba(0, 212, 255, 0.3)"
                    strokeWidth="1"
                    strokeDasharray="5,5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: index * 0.5 }}
                  />
                );
              })}
            </svg>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper
            sx={{
              p: 3,
              height: '500px',
              background: 'rgba(26, 26, 46, 0.8)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(0, 212, 255, 0.3)',
              borderRadius: 3,
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: '#00D4FF',
                mb: 3,
                fontWeight: 600,
              }}
            >
              Region Details
            </Typography>

            {selectedRegion ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    color: '#FFFFFF',
                    mb: 2,
                    fontWeight: 600,
                  }}
                >
                  {selectedRegion.name}
                </Typography>

                <Box sx={{ mb: 3 }}>
                  <Typography variant="body2" sx={{ color: '#B0B0B0', mb: 1 }}>
                    Active Players
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{
                      color: '#00D4FF',
                      fontWeight: 700,
                    }}
                  >
                    {selectedRegion.players}
                  </Typography>
                </Box>

                <Box sx={{ mb: 3 }}>
                  <Typography variant="body2" sx={{ color: '#B0B0B0', mb: 1 }}>
                    Most Popular Game
                  </Typography>
                  <Chip
                    label={selectedRegion.topGame}
                    sx={{
                      backgroundColor: 'rgba(255, 0, 110, 0.2)',
                      color: '#FF006E',
                      fontWeight: 600,
                    }}
                  />
                </Box>

                <Box sx={{ mb: 3 }}>
                  <Typography variant="body2" sx={{ color: '#B0B0B0', mb: 1 }}>
                    Growth Rate
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: '#00FF88',
                      fontWeight: 600,
                    }}
                  >
                    {selectedRegion.growth}
                  </Typography>
                </Box>
              </motion.div>
            ) : (
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '60%',
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    color: '#B0B0B0',
                    textAlign: 'center',
                  }}
                >
                  Click on a region marker to view details
                </Typography>
              </Box>
            )}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default InteractiveMap;