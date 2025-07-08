import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
  Rating,
  Pagination,
} from '@mui/material';
import { motion } from 'framer-motion';
import { Search, FilterList } from '@mui/icons-material';

interface Game {
  id: number;
  title: string;
  description: string;
  image: string;
  rating: number;
  players: string;
  genre: string;
  price: string;
  releaseDate: string;
}

const Games: React.FC = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [filteredGames, setFilteredGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');
  const [sortBy, setSortBy] = useState('rating');
  const [currentPage, setCurrentPage] = useState(1);
  const gamesPerPage = 9;

  const genres = ['Action RPG', 'FPS', 'Adventure', 'Racing', 'Simulation', 'Fantasy RPG', 'Strategy'];

  useEffect(() => {
    // Simulate API call
    const fetchGames = async () => {
      try {
        const mockGames: Game[] = [
          {
            id: 1,
            title: 'Cyber Legends',
            description: 'Epic cyberpunk adventure in a neon-lit future with advanced AI companions',
            image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400',
            rating: 4.8,
            players: '2.5M',
            genre: 'Action RPG',
            price: '$59.99',
            releaseDate: '2024-01-15',
          },
          {
            id: 2,
            title: 'Neon Warriors',
            description: 'Fast-paced multiplayer combat arena with customizable mechs',
            image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400',
            rating: 4.6,
            players: '1.8M',
            genre: 'FPS',
            price: '$39.99',
            releaseDate: '2024-02-20',
          },
          {
            id: 3,
            title: 'Digital Realm',
            description: 'Explore vast virtual worlds and uncover ancient mysteries',
            image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400',
            rating: 4.9,
            players: '3.2M',
            genre: 'Adventure',
            price: '$49.99',
            releaseDate: '2024-03-10',
          },
          // Add more games...
          {
            id: 4,
            title: 'Quantum Racing',
            description: 'High-speed racing through quantum dimensions',
            image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400',
            rating: 4.7,
            players: '1.2M',
            genre: 'Racing',
            price: '$29.99',
            releaseDate: '2024-04-05',
          },
          {
            id: 5,
            title: 'Space Odyssey',
            description: 'Epic space exploration and combat simulation',
            image: 'https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=400',
            rating: 4.5,
            players: '900K',
            genre: 'Simulation',
            price: '$44.99',
            releaseDate: '2024-05-12',
          },
          {
            id: 6,
            title: 'Mystic Realms',
            description: 'Fantasy adventure with magical creatures and spells',
            image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400',
            rating: 4.4,
            players: '1.5M',
            genre: 'Fantasy RPG',
            price: '$54.99',
            releaseDate: '2024-06-18',
          },
          {
            id: 7,
            title: 'Battle Tactics',
            description: 'Strategic warfare with real-time combat mechanics',
            image: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400',
            rating: 4.3,
            players: '800K',
            genre: 'Strategy',
            price: '$34.99',
            releaseDate: '2024-07-22',
          },
          {
            id: 8,
            title: 'Neon Nights',
            description: 'Cyberpunk detective story in a dystopian city',
            image: 'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=400',
            rating: 4.6,
            players: '1.1M',
            genre: 'Adventure',
            price: '$42.99',
            releaseDate: '2024-08-30',
          },
          {
            id: 9,
            title: 'Mech Assault',
            description: 'Pilot giant mechs in intense PvP battles',
            image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=400',
            rating: 4.7,
            players: '2.1M',
            genre: 'FPS',
            price: '$47.99',
            releaseDate: '2024-09-15',
          },
        ];

        await new Promise(resolve => setTimeout(resolve, 1000));
        setGames(mockGames);
        setFilteredGames(mockGames);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching games:', error);
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  useEffect(() => {
    let filtered = games.filter(game => {
      const matchesSearch = game.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           game.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesGenre = selectedGenre === '' || game.genre === selectedGenre;
      return matchesSearch && matchesGenre;
    });

    // Sort games
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'players':
          return parseFloat(b.players) - parseFloat(a.players);
        case 'price':
          return parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', ''));
        case 'release':
          return new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime();
        default:
          return 0;
      }
    });

    setFilteredGames(filtered);
    setCurrentPage(1);
  }, [games, searchTerm, selectedGenre, sortBy]);

  const paginatedGames = filteredGames.slice(
    (currentPage - 1) * gamesPerPage,
    currentPage * gamesPerPage
  );

  const totalPages = Math.ceil(filteredGames.length / gamesPerPage);

  if (loading) {
    return (
      <Container maxWidth="lg" sx={{ pt: 12 }}>
        <Box sx={{ textAlign: 'center', py: 8 }}>
          <Typography variant="h6" sx={{ color: '#B0B0B0' }}>
            Loading amazing games...
          </Typography>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ pt: 12, pb: 8 }}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography
          variant="h2"
          sx={{
            textAlign: 'center',
            mb: 2,
            background: 'linear-gradient(45deg, #00D4FF, #FF006E)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Game Library
        </Typography>
        <Typography
          variant="h6"
          sx={{
            textAlign: 'center',
            color: '#B0B0B0',
            mb: 6,
          }}
        >
          Discover your next gaming adventure
        </Typography>
      </motion.div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              placeholder="Search games..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              InputProps={{
                startAdornment: <Search sx={{ color: '#B0B0B0', mr: 1 }} />,
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  backgroundColor: 'rgba(26, 26, 46, 0.8)',
                  '& fieldset': {
                    borderColor: 'rgba(0, 212, 255, 0.3)',
                  },
                  '&:hover fieldset': {
                    borderColor: 'rgba(0, 212, 255, 0.6)',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#00D4FF',
                  },
                },
                '& .MuiInputBase-input': {
                  color: '#FFFFFF',
                },
              }}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <FormControl fullWidth>
              <InputLabel sx={{ color: '#B0B0B0' }}>Genre</InputLabel>
              <Select
                value={selectedGenre}
                onChange={(e) => setSelectedGenre(e.target.value)}
                sx={{
                  backgroundColor: 'rgba(26, 26, 46, 0.8)',
                  color: '#FFFFFF',
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'rgba(0, 212, 255, 0.3)',
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'rgba(0, 212, 255, 0.6)',
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#00D4FF',
                  },
                }}
              >
                <MenuItem value="">All Genres</MenuItem>
                {genres.map((genre) => (
                  <MenuItem key={genre} value={genre}>
                    {genre}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={3}>
            <FormControl fullWidth>
              <InputLabel sx={{ color: '#B0B0B0' }}>Sort By</InputLabel>
              <Select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                sx={{
                  backgroundColor: 'rgba(26, 26, 46, 0.8)',
                  color: '#FFFFFF',
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'rgba(0, 212, 255, 0.3)',
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'rgba(0, 212, 255, 0.6)',
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#00D4FF',
                  },
                }}
              >
                <MenuItem value="rating">Rating</MenuItem>
                <MenuItem value="players">Players</MenuItem>
                <MenuItem value="price">Price</MenuItem>
                <MenuItem value="release">Release Date</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={2}>
            <Button
              fullWidth
              variant="outlined"
              startIcon={<FilterList />}
              sx={{
                height: '56px',
                borderColor: '#FF006E',
                color: '#FF006E',
                '&:hover': {
                  borderColor: '#FF006E',
                  backgroundColor: 'rgba(255, 0, 110, 0.1)',
                },
              }}
            >
              Filters
            </Button>
          </Grid>
        </Grid>
      </motion.div>

      {/* Results Count */}
      <Typography
        variant="body1"
        sx={{
          color: '#B0B0B0',
          mb: 3,
        }}
      >
        Showing {filteredGames.length} games
      </Typography>

      {/* Games Grid */}
      <Grid container spacing={4}>
        {paginatedGames.map((game, index) => (
          <Grid item xs={12} sm={6} md={4} key={game.id}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
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
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 8,
                      right: 8,
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

                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
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
                      variant="contained"
                      size="small"
                      sx={{
                        background: 'linear-gradient(45deg, #00D4FF, #0099CC)',
                        '&:hover': {
                          background: 'linear-gradient(45deg, #0099CC, #00D4FF)',
                        },
                      }}
                    >
                      View Details
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      {/* Pagination */}
      {totalPages > 1 && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={(_, page) => setCurrentPage(page)}
            color="primary"
            size="large"
            sx={{
              '& .MuiPaginationItem-root': {
                color: '#FFFFFF',
                borderColor: 'rgba(0, 212, 255, 0.3)',
                '&:hover': {
                  backgroundColor: 'rgba(0, 212, 255, 0.1)',
                },
                '&.Mui-selected': {
                  backgroundColor: '#00D4FF',
                  color: '#000',
                },
              },
            }}
          />
        </Box>
      )}
    </Container>
  );
};

export default Games;