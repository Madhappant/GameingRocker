import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
} from '@mui/material';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import game1 from '../../Assets/Rectangle 23.png';
import game2 from '../../Assets/Rectangle 24.png';
import game3 from '../../Assets/Rectangle 25.png';
import game4 from '../../Assets/Rectangle 26.png';

const games = [
  {
    image: game1,
    title: 'Cyber Strike 2077',
    followers: 124,
  },
  {
    image: game2,
    title: 'Legend of Shadows',
    followers: 98,
  },
  {
    image: game3,
    title: 'BattleZone: Earth',
    followers: 150,
  },
  {
    image: game4,
    title: 'Arena Titans',
    followers: 89,
  },
];

const TrendingGames = () => {
  const handleSeeAll = () => {
    alert('Redirecting to all trending games...');
    // Optional: Add routing here e.g. navigate('/trending')
  };

  return (
    <Box sx={{ backgroundColor: 'transparent', py: 10 }}>
      <Box sx={{ maxWidth: '1300px', mx: 'auto', px: 2 }}>
        {/* Header Row */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 5,
          }}
        >
          <Typography
            variant="h5"
            sx={{ fontWeight: 700, color: '#fff', fontSize: '24px' }}
          >
            Currently Trending Games
          </Typography>
          <Button
            variant="contained"
            onClick={handleSeeAll}
            sx={{
              px: 3,
              py: 1.2,
              fontFamily: 'Poppins',
              fontWeight: 600,
              fontSize: '14px',
              borderRadius: '10px',
              backgroundColor: '#292654',
              color: '#fff',
              textTransform: 'uppercase',
              '&:hover': {
                backgroundColor: '#3B3770',
              },
            }}
          >
            See All
          </Button>
        </Box>

        {/* Game Cards */}
        <Grid container spacing={8} justifyContent="center">
          {games.map((game, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  backgroundColor: 'transparent',
                  borderRadius: '20px',
                  boxShadow: '0px 4px 15px rgba(0,0,0,0.3)',
                  overflow: 'hidden',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.02)',
                  },
                }}
              >
                <CardMedia
                  component="img"
                  image={game.image}
                  alt={game.title}
                  sx={{
                    width: '100%',
                    height: 287,
                    objectFit: 'cover',
                    borderTopLeftRadius: '20px',
                    borderTopRightRadius: '20px',
                  }}
                />
                <CardContent
                  sx={{
                    backgroundColor: '#0b0a1f',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 1,
                    py: 2,
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontWeight: 600,
                      color: '#fff',
                      fontSize: '15px',
                      textAlign: 'center',
                    }}
                  >
                    {game.title}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <WhatshotIcon sx={{ color: '#FF2E51', fontSize: '18px' }} />
                    <Typography
                      sx={{ color: '#fff', fontSize: '14px', fontWeight: 400 }}
                    >
                      {game.followers}+ Followers
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default TrendingGames;
