import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
  Chip,
  Rating,
} from '@mui/material';
import { motion } from 'framer-motion';
import { PlayArrow, Download, Favorite } from '@mui/icons-material';

interface Game {
  id: number;
  title: string;
  description: string;
  image: string;
  rating: number;
  players: string;
  genre: string;
  price: string;
}

const FeaturedGames: React.FC = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    const fetchGames = async () => {
      try {
        // Mock data - replace with actual API call
        const mockGames: Game[] = [
          {
            id: 1,
            title: 'Cyber Legends',
            description: 'Epic cyberpunk adventure in a neon-lit future',
            image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400',
            rating: 4.8,
            players: '2.5M',
            genre: 'Action RPG',
            price: '$59.99',
          },
          {
            id: 2,
            title: 'Neon Warriors',
            description: 'Fast-paced multiplayer combat arena',
            image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400',
            rating: 4.6,
            players: '1.8M',
            genre: 'FPS',
            price: '$39.99',
          },
          {
            id: 3,
            title: 'Digital Realm',
            description: 'Explore vast virtual worlds and mysteries',
            image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400',
            rating: 4.9,
            players: '3.2M',
            genre: 'Adventure',
            price: '$49.99',
          },
          {
            id: 4,
            title: 'Quantum Racing',
            description: 'High-speed racing through quantum dimensions',
            image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400',
            rating: 4.7,
            players: '1.2M',
            genre: 'Racing',
            price: '$29.99',
          },
          {
            id: 5,
            title: 'Space Odyssey',
            description: 'Epic space exploration and combat',
            image: 'https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=400',
            rating: 4.5,
            players: '900K',
            genre: 'Simulation',
            price: '$44.99',
          },
          {
            id: 6,
            title: 'Mystic Realms',
            description: 'Fantasy adventure with magical creatures',
            image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400',
            rating: 4.4,
            players: '1.5M',
            genre: 'Fantasy RPG',
            price: '$54.99',
          },
        ];

        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate loading
        setGames(mockGames);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching games:', error);
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  if (loading) {
    return (
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', py: 8 }}>
          <Typography variant="h6" sx={{ color: '#B0B0B0' }}>
            Loading amazing games...
          </Typography>
        </Box>
      </Container>
    );
  }

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
        Most Played Games
      </Typography>

      <Grid container spacing={4}>
        {games.map((game, index) => (
          <Grid item xs={12} sm={6} md={4} key={game.id}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
            >
              <Card
                sx={{
                  height: '100%',
                  background: 'rgba(26, 26, 46, 0.8)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(0, 212, 255, 0.3)',
                  borderRadius: 3,
                  overflow: 'hidden',
                  '&:hover': {
                    border: '1px solid rgba(0, 212, 255, 0.8)',
                    boxShadow: '0 12px 40px rgba(0, 212, 255, 0.3)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                <Box sx={{ position: 'relative' }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={game.image}
                    alt={game.title}
                    sx={{
                      filter: 'brightness(0.8)',
                      '&:hover': {
                        filter: 'brightness(1)',
                      },
                      transition: 'filter 0.3s ease',
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 8,
                      right: 8,
                      display: 'flex',
                      gap: 1,
                    }}
                  >
                    <Chip
                      label={game.genre}
                      size="small"
                      sx={{
                        backgroundColor: 'rgba(0, 212, 255, 0.8)',
                        color: '#000',
                        fontWeight: 600,
                      }}
                    />
                  </Box>
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 8,
                      left: 8,
                    }}
                  >
                    <Typography
                      variant="caption"
                      sx={{
                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                        color: '#fff',
                        px: 1,
                        py: 0.5,
                        borderRadius: 1,
                        fontWeight: 600,
                      }}
                    >
                      {game.players} players
                    </Typography>
                  </Box>
                </Box>

                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <Typography
                    variant="h6"
                    sx={{
                      color: '#00D4FF',
                      fontWeight: 600,
                      mb: 1,
                    }}
                  >
                    {game.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      color: '#B0B0B0',
                      mb: 2,
                      flexGrow: 1,
                    }}
                  >
                    {game.description}
                  </Typography>

                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Rating
                      value={game.rating}
                      precision={0.1}
                      readOnly
                      size="small"
                      sx={{
                        '& .MuiRating-iconFilled': {
                          color: '#FFD700',
                        },
                      }}
                    />
                    <Typography
                      variant="body2"
                      sx={{ color: '#B0B0B0', ml: 1 }}
                    >
                      ({game.rating})
                    </Typography>
                  </Box>

                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        color: '#FF006E',
                        fontWeight: 700,
                      }}
                    >
                      {game.price}
                    </Typography>
                    <Button
                      size="small"
                      startIcon={<Favorite />}
                      sx={{
                        color: '#FF006E',
                        '&:hover': {
                          backgroundColor: 'rgba(255, 0, 110, 0.1)',
                        },
                      }}
                    >
                      Wishlist
                    </Button>
                  </Box>

                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Button
                      variant="contained"
                      startIcon={<PlayArrow />}
                      fullWidth
                      sx={{
                        background: 'linear-gradient(45deg, #00D4FF, #0099CC)',
                        '&:hover': {
                          background: 'linear-gradient(45deg, #0099CC, #00D4FF)',
                        },
                      }}
                    >
                      Play
                    </Button>
                    <Button
                      variant="outlined"
                      startIcon={<Download />}
                      sx={{
                        borderColor: '#FF006E',
                        color: '#FF006E',
                        '&:hover': {
                          borderColor: '#FF006E',
                          backgroundColor: 'rgba(255, 0, 110, 0.1)',
                        },
                      }}
                    >
                      Download
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default FeaturedGames;