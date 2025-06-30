import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Dialog,
  Slide,
} from "@mui/material";
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

const duplicatedGames = [...gamesList, ...gamesList];

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
  const scrollRef = useRef(null);
  const scrollInterval = useRef(null);
  const isDragging = useRef(false);
  const dragStart = useRef(0);
  const scrollLeftStart = useRef(0);

  useEffect(() => {
    if (activeGame && timeLeft > 0) {
      const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
      return () => clearInterval(timer);
    } else if (activeGame && timeLeft === 0) {
      setGameOver(true);
    }
  }, [activeGame, timeLeft]);

  const stopAutoScroll = React.useCallback(() => clearInterval(scrollInterval.current), []);
  
  const startAutoScroll = React.useCallback(() => {
    stopAutoScroll();
    scrollInterval.current = setInterval(() => {
      if (!scrollRef.current) return;
      scrollRef.current.scrollLeft += 1;
      const scrollWidth = scrollRef.current.scrollWidth / 2;
      if (scrollRef.current.scrollLeft >= scrollWidth) {
        scrollRef.current.scrollLeft = 0;
      }
    }, 20);
  }, [stopAutoScroll]);

  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll();
  }, [startAutoScroll, stopAutoScroll]);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    dragStart.current = e.clientX;
    scrollLeftStart.current = scrollRef.current.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    const walk = dragStart.current - e.clientX;
    scrollRef.current.scrollLeft = scrollLeftStart.current + walk;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
  };

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
    <Box sx={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}>
      <Box sx={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100vh", zIndex: -2 }}>
        <iframe
          src="https://www.youtube.com/embed/VQRLujxTm3c?autoplay=1&mute=1&controls=0&loop=1&playlist=VQRLujxTm3c&modestbranding=1"
          title="GTA VI Trailer"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          style={{ width: "100%", height: "100%", objectFit: "cover", pointerEvents: "none" }}
        />
      </Box>

      <Box sx={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100vh", backgroundColor: "rgba(0, 0, 0, 0.65)", backdropFilter: "blur(3px)", zIndex: -1 }} />

      <Box sx={{ position: "relative", zIndex: 1, fontFamily: "'Orbitron', sans-serif", color: "#fff" }}>
        <Navbar />
        <Container sx={{ pt: 14, pb: 6 }}>
          <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2 }}>
            🎮Demo Games to Play
          </Typography>
          <Typography sx={{ mb: 4, maxWidth: "800px", color: "#ccc" }}>
            Try 5-minute free demos of trending online games — fast, fierce, and free to play!
          </Typography>

          <Box
            ref={scrollRef}
            onMouseEnter={stopAutoScroll}
            onMouseLeave={() => {
              handleMouseLeave();
              startAutoScroll();
            }}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            sx={{
              width: "1550px",
              maxWidth: "100%",
              mx: "auto",
              display: "flex",
              overflowX: "auto",
              gap: 3,
              px: 1,
              py: 2,
              scrollSnapType: "x mandatory",
              scrollbarWidth: "none",
              "&::-webkit-scrollbar": { display: "none" },
              cursor: "grab",
              scrollBehavior: "auto",
            }}
          >
            {duplicatedGames.map((game, index) => (
              <Box
                key={`${game.id}-${index}`}
                sx={{
                  width: 300,
                  height: 180,
                  background: "rgba(255,255,255,0.06)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 3,
                  flexShrink: 0,
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0 0 10px #00ffe0",
                  },
                }}
              >
                <Card sx={{ height: "100%", background: "transparent", color: "#fff", borderRadius: 3, boxShadow: "none" }}>
                  <CardContent>
                    <Typography variant="subtitle1" sx={{ fontWeight: "bold", color: "#00FFE0", mb: 1, textShadow: "0 0 4px #00FFE0" }}>
                      {game.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#ccc", fontSize: "0.8rem", height: "3rem" }}>
                      {game.description}
                    </Typography>
                    <Button
                      variant="outlined"
                      size="small"
                      fullWidth
                      disabled={!!activeGame && activeGame !== game.id}
                      sx={{
                        mt: 1,
                        color: "#00FFE0",
                        borderColor: "#00FFE0",
                        fontWeight: 600,
                        fontSize: "12px",
                        borderRadius: "10px",
                        "&:hover": {
                          backgroundColor: "#00FFE020",
                          borderColor: "#00FFE0",
                          boxShadow: "0 0 12px #00FFE0",
                        },
                      }}
                      onClick={() => {
                        setActiveGame(game.id);
                        setTimeLeft(300);
                        setGameOver(false);
                      }}
                    >
                      ▶ Demo
                    </Button>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>
        </Container>

        <Dialog fullScreen open={!!activeGame} onClose={handleClose} TransitionComponent={Transition}>
          <Box sx={{ width: "100%", height: "100%", backgroundColor: "#000", color: "#fff", display: "flex", flexDirection: "column", alignItems: "center", p: 4 }}>
            <Typography variant="h4" gutterBottom sx={{ color: "#FF9C00" }}>
              {gamesList.find((g) => g.id === activeGame)?.title}
            </Typography>

            {gameOver ? (
              <Box textAlign="center">
                <Typography variant="h6" gutterBottom>
                  ⏱ Your 5-minute demo has ended!
                </Typography>
                <Typography gutterBottom>Pay $2.99 to continue playing.</Typography>
                <Button variant="contained" sx={{ backgroundColor: "#FF5C5C", mt: 2, borderRadius: "8px" }} onClick={() => alert("Payment flow not implemented.")}>Pay Now</Button>
                <Button onClick={handleClose} sx={{ mt: 2, color: "#fff" }}>Close Game</Button>
              </Box>
            ) : (
              <>
                <Box sx={{ width: "100%", height: "60%", backgroundColor: "#121342", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 2, mb: 2 }}>
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
                <Button onClick={handleClose} sx={{ mt: 2, color: "#fff" }}>Exit Demo</Button>
              </>
            )}
          </Box>
        </Dialog>

        <Box sx={{ py: 6 }}>
          <NewsletterSignup />
        </Box>
        <Box sx={{ backgroundColor: "#07061F" }}>
          <Footer />
        </Box>
      </Box>
    </Box>
  );
};

export default DemoGames;