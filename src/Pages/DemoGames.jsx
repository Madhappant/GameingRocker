import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Grid,
  Dialog,
  Slide,
} from "@mui/material";
import { motion } from "framer-motion";
import Navbar from "../Components/Navbar";
import NewsletterSignup from "../Components/NewsletterSignup";
import Footer from "../Components/Footer";

const gamesList = [
  { id: 1, title: "Fortzone Royale", description: "Battle and survive in this online royale shooter." },
  { id: 2, title: "Count Masters", description: "Lead your stickman army and conquer the enemies!" },
  { id: 3, title: "Offroad Master", description: "Ride rugged terrain in this extreme biking challenge." },
  { id: 4, title: "Gaz to the Moon", description: "Blast your way to the moon in this wacky driving game!" },
  { id: 5, title: "Rally Racer Dirt", description: "Burn through dirt tracks in high-speed rally races." },
  { id: 6, title: "Pixel Warfare", description: "Multiplayer FPS with pixelated action!" },
  { id: 7, title: "Steve's World", description: "Jump, run, and explore in this Minecraft-style adventure." },
  { id: 8, title: "Gangster City", description: "Explore the open world and rise through mafia ranks." },
  { id: 9, title: "Samurai's Shadow", description: "Strike down enemies as a silent warrior in the shadows." },
];

const gameEmbeds = {
  1: "https://www.crazygames.com/embed/fortzone-battle-royale-xkd",
  2: "https://www.crazygames.com/embed/count-masters-stickman-games",
  3: "https://www.crazygames.com/embed/mx-offroad-master",
  4: "https://www.crazygames.com/embed/gaz-to-the-moon",
  5: "https://www.crazygames.com/embed/rally-racer-dirt",
  6: "https://www.crazygames.com/embed/pixel-warfare",
  7: "https://www.crazygames.com/embed/steve-s-world",
  8: "https://www.crazygames.com/embed/gangster-crimes-online-6-mafia-city",
  9: "https://www.crazygames.com/embed/samurai-s-shadow-qtn",
};

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DemoGames = () => {
  const [activeGame, setActiveGame] = useState(null);
  const [timeLeft, setTimeLeft] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    let timer;
    if (activeGame && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (activeGame && timeLeft === 0) {
      setGameOver(true);
    }
    return () => clearInterval(timer);
  }, [activeGame, timeLeft]);

  const formatTime = (sec) => {
    const m = Math.floor(sec / 60).toString().padStart(2, "0");
    const s = (sec % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  const handleClose = () => {
    setActiveGame(null);
    setGameOver(false);
    setTimeLeft(0);
  };

  return (
    <Box
      sx={{
        background: "radial-gradient(circle at center, #0a0a1f 30%, #070320 100%)",
        color: "#fff",
        fontFamily: "'Poppins', sans-serif",
        minHeight: "100vh",
      }}
    >
      <Navbar />

      <Container sx={{ pt: 14, pb: 6, maxWidth: "1500px" }}>
        <Typography variant="h3" gutterBottom sx={{ fontWeight: "bold", mb: 1 }}>
          🎮 Play Free Online Games
        </Typography>
        <Typography variant="subtitle1" sx={{ mb: 6, maxWidth: "800px", color: "#ccc" }}>
          Discover top-quality online games you can play right now in your browser. No download required. Each game offers a free 5-minute demo session!
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {gamesList.map((game) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={game.id}>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Card
                  sx={{
                    height: "100%",
                    background: activeGame && activeGame !== game.id ? "#292b4d" : "#1c1e4c",
                    opacity: activeGame && activeGame !== game.id ? 0.4 : 1,
                    color: "#fff",
                    borderRadius: "20px",
                    boxShadow: "0 6px 20px rgba(0,0,0,0.5)",
                  }}
                >
                  <CardContent>
                    <Typography variant="h6" sx={{ mb: 1, color: "#FF9C00" }}>
                      {game.title}
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 2, color: "#ddd" }}>
                      {game.description}
                    </Typography>
                    <Button
                      variant="outlined"
                      fullWidth
                      disabled={!!activeGame && activeGame !== game.id}
                      sx={{
                        color: "#8AB4F8",
                        borderColor: "#8AB4F8",
                        fontWeight: "bold",
                        fontSize: "13px",
                        borderRadius: "12px",
                        "&:hover": {
                          backgroundColor: "#8AB4F820",
                          borderColor: "#8AB4F8",
                        },
                      }}
                      onClick={() => {
                        setActiveGame(game.id);
                        setTimeLeft(300);
                        setGameOver(false);
                      }}
                    >
                      ▶ Start Demo
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Dialog
        fullScreen
        open={!!activeGame}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            backgroundColor: "#000",
            color: "#fff",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            p: 4,
          }}
        >
          <Typography variant="h4" gutterBottom sx={{ color: "#FF9C00" }}>
            {gamesList.find((g) => g.id === activeGame)?.title}
          </Typography>

          {gameOver ? (
            <Box textAlign="center">
              <Typography variant="h6" gutterBottom>
                ⏱ Your 5-minute demo has ended!
              </Typography>
              <Typography gutterBottom>Pay $2.99 to continue playing.</Typography>
              <Button
                variant="contained"
                sx={{ backgroundColor: "#FF5C5C", mt: 2, borderRadius: "8px" }}
                onClick={() => alert("Payment flow not implemented.")}
              >
                Pay Now
              </Button>
              <Button onClick={handleClose} sx={{ mt: 2, color: "#fff" }}>
                Close Game
              </Button>
            </Box>
          ) : (
            <>
              <Box
                sx={{
                  width: "100%",
                  height: "60%",
                  backgroundColor: "#121342",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 2,
                  mb: 2,
                }}
              >
                {gameEmbeds[activeGame] ? (
                  <iframe
                    src={gameEmbeds[activeGame]}
                    title={gamesList.find((g) => g.id === activeGame)?.title}
                    width="100%"
                    height="100%"
                    style={{ border: "none", borderRadius: "12px" }}
                    allow="gamepad *;"
                    allowFullScreen
                  />
                ) : (
                  <Typography>Game could not be loaded.</Typography>
                )}
              </Box>
              <Typography variant="body1" sx={{ color: "#8AB4F8" }}>
                ⏳ Time Left: {formatTime(timeLeft)}
              </Typography>
              <Button onClick={handleClose} sx={{ mt: 2, color: "#fff" }}>
                Exit Demo
              </Button>
            </>
          )}
        </Box>
      </Dialog>

      <Box sx={{ width: "100%", backgroundColor: "transparent", py: 6 }}>
        <NewsletterSignup />
      </Box>

      <Box sx={{ width: "100%", backgroundColor: "#07061F" }}>
        <Footer />
      </Box>
    </Box>
  );
};

export default DemoGames;
