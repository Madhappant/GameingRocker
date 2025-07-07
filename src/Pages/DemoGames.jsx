import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
  Chip,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Rating,
} from '@mui/material';
import { motion } from 'framer-motion';
import CloseIcon from '@mui/icons-material/Close';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import DownloadIcon from '@mui/icons-material/Download';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const demoGames = [
  {
    id: 1,
    title: 'Cyber Strike 2077',
    genre: 'Action/FPS',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400',
    description: 'Experience the future of combat in this cyberpunk shooter.',
    playTime: '15 min demo',
    size: '2.1 GB',
    features: ['Multiplayer', 'Ray Tracing', 'VR Support'],
    gameUrl: 'https://example.com/cyber-strike-demo',
  },
  {
    id: 2,
    title: 'Dragon Realm',
    genre: 'RPG/Fantasy',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400',
    description: 'Embark on an epic quest in a magical world full of dragons.',
    playTime: '30 min demo',
    size: '3.5 GB',
    features: ['Single Player', 'Open World', 'Character Customization'],
    gameUrl: 'https://example.com/dragon-realm-demo',
  },
  {
    id: 3,
    title: 'Speed Racer X',
    genre: 'Racing',
    rating: 4.4,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400',
    description: 'High-speed racing with customizable vehicles and tracks.',
    playTime: '10 min demo',
    size: '1.8 GB',
    features: ['Multiplayer', 'Custom Tracks', 'Vehicle Tuning'],
    gameUrl: 'https://example.com/speed-racer-demo',
  },
  {
    id: 4,
    title: 'Space Odyssey',
    genre: 'Sci-Fi/Adventure',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=400',
    description: 'Explore the cosmos in this immersive space adventure.',
    playTime: '20 min demo',
    size: '2.9 GB',
    features: ['Single Player', 'Exploration', 'Crafting'],
    gameUrl: 'https://example.com/space-odyssey-demo',
  },
  {
    id: 5,
    title: 'Puzzle Master',
    genre: 'Puzzle',
    rating: 4.2,
    image: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400',
    description: 'Challenge your mind with innovative puzzle mechanics.',
    playTime: '5 min demo',
    size: '500 MB',
    features: ['Single Player', 'Brain Training', 'Level Editor'],
    gameUrl: 'https://example.com/puzzle-master-demo',
  },
  {
    id: 6,
    title: 'Battle Arena',
    genre: 'MOBA',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400',
    description: 'Team-based strategic combat in epic battlegrounds.',
    playTime: '25 min demo',
    size: '4.2 GB',
    features: ['Multiplayer', 'Team Strategy', 'Ranked Matches'],
    gameUrl: 'https://example.com/battle-arena-demo',
  },
];

const DemoGames = () => {
  const [selectedGame, setSelectedGame] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  const handleGameClick = (game) => {
    setSelectedGame(game);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedGame(null);
  };

  const handlePlayDemo = (gameUrl) => {
    window.open(gameUrl, '_blank');
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <Box
      sx={{
        background: 'linear-gradient(179.5deg, #070320 42.53%, #050D7C 61.57%, #2B36B5 87.08%)',
        minHeight: '100vh',
        color: '#fff',
      }}
    >
      <Navbar />

      {/* Hero Section */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Box
          sx={{
            pt: 15,
            pb: 8,
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <Container maxWidth="md">
            <Box mb={2} display="flex" justifyContent="center">
              <SportsEsportsIcon sx={{ fontSize: 60, color: '#FF2E51' }} />
            </Box>

            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                fontSize: { xs: '32px', md: '48px' },
                mb: 2,
                background: 'linear-gradient(45deg, #FF2E51, #FF9C00)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontFamily: "'Orbitron', sans-serif",
              }}
            >
              Demo Games Arena
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: '16px', md: '18px' },
                color: '#ccc',
                maxWidth: 600,
                mx: 'auto',
                mb: 4,
              }}
            >
              Experience our latest game creations with free playable demos. 
              Test gameplay mechanics, graphics, and features before the full release.
            </Typography>

            <Chip
              label="🎮 6 Demos Available"
              sx={{
                backgroundColor: 'rgba(255, 46, 81, 0.2)',
                color: '#FF2E51',
                fontWeight: 600,
                fontSize: '14px',
              }}
            />
          </Container>
        </Box>
      </motion.div>

      {/* Games Grid */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Container maxWidth="lg" sx={{ pb: 8 }}>
          <Grid container spacing={4}>
            {demoGames.map((game, index) => (
              <Grid item xs={12} sm={6} md={4} key={game.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card
                    sx={{
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: 3,
                      overflow: 'hidden',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      '&:hover': {
                        boxShadow: '0 8px 32px rgba(255, 46, 81, 0.3)',
                        transform: 'translateY(-4px)',
                      },
                    }}
                    onClick={() => handleGameClick(game)}
                  >
                    <Box sx={{ position: 'relative' }}>
                      <CardMedia
                        component="img"
                        height="200"
                        image={game.image}
                        alt={game.title}
                        sx={{ objectFit: 'cover' }}
                      />
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 8,
                          right: 8,
                          backgroundColor: 'rgba(0, 0, 0, 0.7)',
                          borderRadius: 1,
                          px: 1,
                          py: 0.5,
                        }}
                      >
                        <Typography sx={{ fontSize: '12px', color: '#fff' }}>
                          {game.playTime}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)',
                          opacity: 0,
                          transition: 'opacity 0.3s ease',
                          '.MuiCard-root:hover &': { opacity: 1 },
                        }}
                      >
                        <PlayArrowIcon
                          sx={{
                            fontSize: 60,
                            color: '#FF2E51',
                            filter: 'drop-shadow(0 0 10px rgba(255, 46, 81, 0.8))',
                          }}
                        />
                      </Box>
                    </Box>

                    <CardContent sx={{ p: 3 }}>
                      <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 600,
                            color: '#fff',
                            fontSize: '18px',
                          }}
                        >
                          {game.title}
                        </Typography>
                        <Rating
                          value={game.rating}
                          precision={0.1}
                          size="small"
                          readOnly
                          sx={{ color: '#FF9C00' }}
                        />
                      </Box>

                      <Chip
                        label={game.genre}
                        size="small"
                        sx={{
                          backgroundColor: 'rgba(255, 156, 0, 0.2)',
                          color: '#FF9C00',
                          mb: 2,
                          fontSize: '12px',
                        }}
                      />

                      <Typography
                        sx={{
                          color: '#ccc',
                          fontSize: '14px',
                          lineHeight: 1.4,
                          mb: 2,
                        }}
                      >
                        {game.description}
                      </Typography>

                      <Box display="flex" flexWrap="wrap" gap={0.5}>
                        {game.features.slice(0, 2).map((feature, idx) => (
                          <Chip
                            key={idx}
                            label={feature}
                            size="small"
                            variant="outlined"
                            sx={{
                              color: '#fff',
                              borderColor: 'rgba(255, 255, 255, 0.3)',
                              fontSize: '10px',
                            }}
                          />
                        ))}
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </motion.div>

      {/* Game Details Dialog */}
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            backgroundColor: 'rgba(15, 6, 38, 0.95)',
            backdropFilter: 'blur(20px)',
            borderRadius: 3,
            border: '1px solid rgba(255, 255, 255, 0.1)',
          },
        }}
      >
        {selectedGame && (
          <>
            <DialogTitle sx={{ color: '#fff', position: 'relative', pb: 1 }}>
              <Typography variant="h5" fontWeight={600}>
                {selectedGame.title}
              </Typography>
              <IconButton
                onClick={handleCloseDialog}
                sx={{
                  position: 'absolute',
                  right: 8,
                  top: 8,
                  color: '#fff',
                }}
              >
                <CloseIcon />
              </IconButton>
            </DialogTitle>

            <DialogContent>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Box
                    component="img"
                    src={selectedGame.image}
                    alt={selectedGame.title}
                    sx={{
                      width: '100%',
                      height: 250,
                      objectFit: 'cover',
                      borderRadius: 2,
                    }}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <Box display="flex" alignItems="center" gap={2} mb={2}>
                    <Chip
                      label={selectedGame.genre}
                      sx={{
                        backgroundColor: 'rgba(255, 156, 0, 0.2)',
                        color: '#FF9C00',
                      }}
                    />
                    <Rating
                      value={selectedGame.rating}
                      precision={0.1}
                      readOnly
                      sx={{ color: '#FF9C00' }}
                    />
                  </Box>

                  <Typography sx={{ color: '#ccc', mb: 3, lineHeight: 1.6 }}>
                    {selectedGame.description}
                  </Typography>

                  <Box mb={3}>
                    <Typography variant="subtitle2" sx={{ color: '#fff', mb: 1 }}>
                      Game Features:
                    </Typography>
                    <Box display="flex" flexWrap="wrap" gap={1}>
                      {selectedGame.features.map((feature, idx) => (
                        <Chip
                          key={idx}
                          label={feature}
                          size="small"
                          variant="outlined"
                          sx={{
                            color: '#fff',
                            borderColor: 'rgba(255, 255, 255, 0.3)',
                          }}
                        />
                      ))}
                    </Box>
                  </Box>

                  <Box mb={3}>
                    <Typography sx={{ color: '#ccc', fontSize: '14px' }}>
                      <strong>Demo Length:</strong> {selectedGame.playTime}
                    </Typography>
                    <Typography sx={{ color: '#ccc', fontSize: '14px' }}>
                      <strong>Download Size:</strong> {selectedGame.size}
                    </Typography>
                  </Box>

                  <Box display="flex" gap={2}>
                    <Button
                      variant="contained"
                      startIcon={<PlayArrowIcon />}
                      onClick={() => handlePlayDemo(selectedGame.gameUrl)}
                      sx={{
                        background: 'linear-gradient(45deg, #FF2E51, #FF9C00)',
                        color: '#fff',
                        fontWeight: 600,
                        '&:hover': {
                          background: 'linear-gradient(45deg, #FF9C00, #FF2E51)',
                        },
                      }}
                    >
                      Play Demo
                    </Button>
                    <Button
                      variant="outlined"
                      startIcon={<DownloadIcon />}
                      sx={{
                        borderColor: 'rgba(255, 255, 255, 0.3)',
                        color: '#fff',
                        '&:hover': {
                          borderColor: '#FF2E51',
                          backgroundColor: 'rgba(255, 46, 81, 0.1)',
                        },
                      }}
                    >
                      Download
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </DialogContent>
          </>
        )}
      </Dialog>

      <Footer />
    </Box>
  );
};

export default DemoGames;