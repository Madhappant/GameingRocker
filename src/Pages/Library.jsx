import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Button,
  Pagination,
  TextField,
  InputAdornment,
} from "@mui/material";
import { motion } from "framer-motion";
import SearchIcon from "@mui/icons-material/Search";

import Navbar from "../Components/Navbar";
import LibraryHero from "../Components/Library/LibraryHero";
import LibraryGrid from "../Components/Library/LibraryGrid";
import NewsletterSignup from "../Components/NewsletterSignup";
import Footer from "../Components/Footer";

// Mock data for games since backend might not be available
const mockGames = [
  {
    id: 1,
    title: "Cyberpunk 2077",
    author: "CD Projekt",
    tag: "RPG",
    time: "60+ hours",
    img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEifz-U0Jtc-USAE93oVGTKxEdaHRRm8YPRX6fWHX4LGwq3maDc6U_DtZAH7ncib2MlWGaLjQogP9rvRyZ83mHbsAVFdpUn4veR-POgrnIdxRNpyT5spDgMg81ifr8aBisKgSsYcr_2DFEbek0GbTj9jaAgjNaFop6B0pOH1RdYJ17zxhQYeoifB5Iv2ThY/s460/cyberpunk-2077-ultimate-pc-cover.jpg",
  },
  {
    id: 2,
    title: "Elder Slayer",
    author: "Hyperstrange",
    tag: "Action",
    time: "15 hours",
    img: "https://1.bp.blogspot.com/-ZDLJ2dsSmqQ/YQ_wMKs9FQI/AAAAAAABM-s/pJQ8ry6H4VUgWdZnHlbzapu4CnoNVuXlACLcBGAsYHQ/s460/elderborn-pc-cover.jpg",
  },
  {
    id: 3,
    title: "Speed Horizon",
    author: "Playground Games",
    tag: "Racing",
    time: "30+ hours",
    img: "https://1.bp.blogspot.com/-akhrT_x4QuA/XVG4g0O-gLI/AAAAAAAA4A0/LtDPq1HDplo_c2N-ccffnnkEX9xHn-i1QCLcBGAs/s1600/forza-horizon-4-pc-cover-www.ovagames.com.jpg",
  },
  {
    id: 4,
    title: "Skyline Rush",
    author: "Codemasters",
    tag: "Racing",
    time: "20 hours",
    img: "https://blogger.googleusercontent.com/img/a/AVvXsEj2toQUoROV3AeMrYTJr3-noJignl2qWoYDGeSEmX3hxPgqe5p0X3mM8LTjrBXo3xod9YG5s31AKU5vrBouhAzYLcolaE8DEX_g1wv1nRn9TDflB2rPhn76rX2r47EjSsRNNJ7FHVO8lLiIm-mAZBKbuVgZ0mte3OAqctmQsy3JVen4QkpE6njfFlIwljw",
  },
  {
    id: 5,
    title: "Dream Circuit",
    author: "Carx Technologies",
    tag: "Racing",
    time: "25 hours",
    img: "https://1.bp.blogspot.com/-A6qhNcj8so4/YMJYOKZezCI/AAAAAAABJ6o/Ic76GQlpqW4IBEupVjjb17x83sbOETEpgCLcBGAsYHQ/s460/drift21-pc-cover.jpg",
  },
  {
    id: 6,
    title: "Inferno Core",
    author: "Rebellion",
    tag: "FPS",
    time: "12 hours",
    img: "https://blogger.googleusercontent.com/img/a/AVvXsEhWc9Tp75SeLEImY8YqPPUesiEPT-MPILGxO8XD5EoSCrR6xHeYokKv-BJwBxdJJd-nTqi9Sh9zrxU1t-v2vs9_2LJ84lVfJB1NjTVPjD6zeJsXbbPXbcR6i9BasQxrgb7OTZkfU05hLPizBYgNCCd7il28VKPGZ9KOkFW7M5fftI2ci7lHS55GvpB9=s460",
  },
  {
    id: 7,
    title: "Neon Drift",
    author: "JDM Studios",
    tag: "Racing",
    time: "18 hours",
    img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjbCpTj4yOxRdRQRxwLMh5IMmDqsbw-08TMEO-RthctQ8CQzLNa47TSEsqJaLqpScLQr1L3hfLV10g6k4Iggctn3TZidD4qlSBMcXX305r7wJhCQifT7M2DTZn0DKDzlDwIEEaZWNO8Qq_7ee3JZ39NnOR7oWE3-oa3mUhIye_mhSLy9dCN3DBLiwkzDo4/s460/jdm-japanese-drift-master-pc-cover.jpg",
  },
  {
    id: 8,
    title: "Titan Siege",
    author: "Ubisoft",
    tag: "Tactical",
    time: "40+ hours",
    img: "https://1.bp.blogspot.com/-acDWgnQQtOQ/Yee6gspz58I/AAAAAAAAAag/ktKqeGxPXScCubHc59jcmtVSZGlCf2GzwCNcBGAsYHQ/s460/tom-clancys-rainbow-six-siege-pc-cover.jpg",
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Library = () => {
  const [cards, setCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const cardsPerPage = 8;

  useEffect(() => {
    // Use mock data instead of API call
    setCards(mockGames);
    setFilteredCards(mockGames);
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    const filtered = cards.filter((card) =>
      card.title.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredCards(filtered);
    setPage(1);
  };

  const paginatedCards = filteredCards.slice(
    (page - 1) * cardsPerPage,
    page * cardsPerPage
  );

  return (
    <Box
      sx={{
        background: "linear-gradient(179.5deg, #070320 42.53%, #050D7C 61.57%, #2B36B5 87.08%)",
        minHeight: "100vh",
        overflowX: "hidden",
        color: "white",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <Navbar />

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <LibraryHero
          heading="Your Game Universe"
          subtitle="Discover the hottest titles, latest trends, and your next big adventure in one massive collection."
        />
      </motion.div>

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Container maxWidth={false} sx={{ maxWidth: "1580px", mx: "auto" }}>
          {/* Search Input */}
          <Box display="flex" justifyContent="center" py={8}>
            <TextField
              placeholder="Search games..."
              value={searchTerm}
              onChange={handleSearch}
              variant="outlined"
              sx={{
                width: 400,
                background: "#0C0C2D",
                borderRadius: "8px",
                '& .MuiOutlinedInput-root': {
                  height: "49px",
                  borderRadius: "8px",
                  px: 1,
                  color: "#fff",
                },
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: "#333",
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: "#fff" }} />
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          {/* SEE ALL button */}
          <Box display="flex" justifyContent="center" mt={-2} mb={2} py={2}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#FF5C5C",
                borderRadius: "8px",
                fontSize: "13px",
                fontWeight: "bold",
                textTransform: "uppercase",
                px: 4,
                py: 1.5,
                '&:hover': {
                  backgroundColor: "#ff3d3d",
                },
              }}
            >
              See All Games
            </Button>
          </Box>

          {/* Grid of Cards */}
          <Box sx={{ pb: 4 }}>
            <LibraryGrid cards={paginatedCards} />
          </Box>

          {/* Pagination */}
          <Box display="flex" justifyContent="center" pb={6}>
            <Pagination
              count={Math.ceil(filteredCards.length / cardsPerPage)}
              page={page}
              onChange={(e, value) => setPage(value)}
              color="primary"
              sx={{
                '& .MuiPaginationItem-root': {
                  color: "#fff",
                  borderColor: "#555",
                },
              }}
            />
          </Box>
        </Container>
      </motion.div>

      {/* Newsletter */}
      <Box sx={{ width: "100%", backgroundColor: "transparent", py: 6 }}>
        <NewsletterSignup />
      </Box>

      {/* Footer */}
      <Box sx={{ width: "100%", backgroundColor: "#07061F" }}>
        <Footer />
      </Box>
    </Box>
  );
};

export default Library;