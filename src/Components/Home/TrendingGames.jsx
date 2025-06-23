// src/Components/TrendingGames.jsx
import React from 'react';
import { Box, Typography, Grid, Card, CardMedia, CardContent, Button } from '@mui/material';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import game1 from '../../Assets/Rectangle 23.png';
import game2 from '../../Assets/Rectangle 24.png';
import game3 from '../../Assets/Rectangle 25.png';
import game4 from '../../Assets/Rectangle 26.png';

const games = [
  { image: game1, followers: 40 },
  { image: game2, followers: 40 },
  { image: game3, followers: 40 },
  { image: game4, followers: 40 },
];

const TrendingGames = () => {
  return (
    <Box sx={{ backgroundColor: 'transparent', py: 10 }}>
      <Box sx={{ maxWidth: '1300px', mx: 'auto', px: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 5 }}>
          <Typography
            variant="h5"
            sx={{ fontWeight: 700, color: '#fff', fontSize: '24px' }}
          >
            Currently Trending Games
          </Typography>
          <Button
                  variant="contained"
                  sx={{
                    
                    px: 3,
                    py: 1.2,
                    fontFamily: "Poppins",
                    fontWeight: 600,
                    fontSize: "14px",
                    borderRadius: "10px",
                    backgroundColor: "#292654",
                    color: "#fff",
                    textTransform: "uppercase",
                    "&:hover": {
                      backgroundColor: "#3B3770",
                    },
                  }}
                >
                  SEE ALL
                </Button>
        </Box>

        <Grid container spacing={8} justifyContent="center">
          {games.map((game, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  backgroundColor: 'transparent',
                  borderRadius: '20px',
                  boxShadow: '0px 4px 15px rgba(0,0,0,0.3)',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <CardMedia
                  component="img"
                  image={game.image}
                  alt={`Game ${index + 1}`}
                  sx={{
                    width: '100%',
                    height: 287,
                    objectFit: 'cover',
                    borderTopLeftRadius: '20px',
                    borderTopRightRadius: '20px',
                    gap: 4,
                  }}
                />
                <CardContent sx={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 1,
                  py: 2,
                  backgroundColor: 'transparent'
                }}>
                  <WhatshotIcon sx={{ color: '#fff', fontSize: '18px' , background:'transparent'}} />
                  <Typography sx={{ color: '#fff', fontSize: '14px', background: 'transparent' }}>
                    {game.followers} Followers
                  </Typography>
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
