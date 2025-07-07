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
import axios from "axios";


import Navbar from "../Components/Navbar";
import LibraryHero from "../Components/Library/LibraryHero";
import LibraryGrid from "../Components/Library/LibraryGrid";
import NewsletterSignup from "../Components/NewsletterSignup";
import Footer from "../Components/Footer";

// Image map for game titles
const gameImageMap = {
  "Cyberpunk 2077": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEifz-U0Jtc-USAE93oVGTKxEdaHRRm8YPRX6fWHX4LGwq3maDc6U_DtZAH7ncib2MlWGaLjQogP9rvRyZ83mHbsAVFdpUn4veR-POgrnIdxRNpyT5spDgMg81ifr8aBisKgSsYcr_2DFEbek0GbTj9jaAgjNaFop6B0pOH1RdYJ17zxhQYeoifB5Iv2ThY/s460/cyberpunk-2077-ultimate-pc-cover.jpg",
  "Elder Slayer": "https://1.bp.blogspot.com/-ZDLJ2dsSmqQ/YQ_wMKs9FQI/AAAAAAABM-s/pJQ8ry6H4VUgWdZnHlbzapu4CnoNVuXlACLcBGAsYHQ/s460/elderborn-pc-cover.jpg",
  "Speed Horizon": "https://1.bp.blogspot.com/-akhrT_x4QuA/XVG4g0O-gLI/AAAAAAAA4A0/LtDPq1HDplo_c2N-ccffnnkEX9xHn-i1QCLcBGAs/s1600/forza-horizon-4-pc-cover-www.ovagames.com.jpg",
  "Skyline Rush": "https://blogger.googleusercontent.com/img/a/AVvXsEj2toQUoROV3AeMrYTJr3-noJignl2qWoYDGeSEmX3hxPgqe5p0X3mM8LTjrBXo3xod9YG5s31AKU5vrBouhAzYLcolaE8DEX_g1wv1nRn9TDflB2rPhn76rX2r47EjSsRNNJ7FHVO8lLiIm-mAZBKbuVgZ0mte3OAqctmQsy3JVen4QkpE6njfFlIwljw",
  "Dream Circuit": "https://1.bp.blogspot.com/-A6qhNcj8so4/YMJYOKZezCI/AAAAAAABJ6o/Ic76GQlpqW4IBEupVjjb17x83sbOETEpgCLcBGAsYHQ/s460/drift21-pc-cover.jpg",
  "Inferno Core": "https://blogger.googleusercontent.com/img/a/AVvXsEhWc9Tp75SeLEImY8YqPPUesiEPT-MPILGxO8XD5EoSCrR6xHeYokKv-BJwBxdJJd-nTqi9Sh9zrxU1t-v2vs9_2LJ84lVfJB1NjTVPjD6zeJsXbbPXbcR6i9BasQxrgb7OTZkfU05hLPizBYgNCCd7il28VKPGZ9KOkFW7M5fftI2ci7lHS55GvpB9=s460",
  "Neon Drift": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjbCpTj4yOxRdRQRxwLMh5IMmDqsbw-08TMEO-RthctQ8CQzLNa47TSEsqJaLqpScLQr1L3hfLV10g6k4Iggctn3TZidD4qlSBMcXX305r7wJhCQifT7M2DTZn0DKDzlDwIEEaZWNO8Qq_7ee3JZ39NnOR7oWE3-oa3mUhIye_mhSLy9dCN3DBLiwkzDo4/s460/jdm-japanese-drift-master-pc-cover.jpg",
  "Titan Siege": "https://1.bp.blogspot.com/-acDWgnQQtOQ/Yee6gspz58I/AAAAAAAAAag/ktKqeGxPXScCubHc59jcmtVSZGlCf2GzwCNcBGAsYHQ/s460/tom-clancys-rainbow-six-siege-pc-cover.jpg",
  "Voidwalker Protocol": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEidwU22Rrd2T5VM_YzZI794ko0bjJlvhDzoCoX-3Bdi2riXrKx6HQdMwY0JjqcFk8DoVawxMZXXahKlmQxHi1gMKXMMOLOvmbp2Gr_abhZhYAGlxAfim0Gtv8G4d_QXAxhe4flJI4ef1LpzArVbio4U67XyYAGxrjvFuTkFzzXmySemFTFtLO3Eti3wnpU/s460/the-callisto-protocol-pc-cover.jpg",
  "Blight Reborn": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjBO7cy0yw4teE4m8BzVsMAxS7nzmQm7kKtfdJlsssfDXxMkgjg3f8vKp6_xQ1m3gnUZNN2YlszG8NITGnVkTynRjTlhlteFMIIS5PHsFTinYX8KBxK9L4CKUDXkyLj4ybGoyE97C6n5JztBQu_nhPyItoAKGtBjQDZZR1x_tu13iXdW3yZXVOAucCAPIM/s460/dragon-age-the-veilguard-pc-cover.jpghttps://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjBO7cy0yw4teE4m8BzVsMAxS7nzmQm7kKtfdJlsssfDXxMkgjg3f8vKp6_xQ1m3gnUZNN2YlszG8NITGnVkTynRjTlhlteFMIIS5PHsFTinYX8KBxK9L4CKUDXkyLj4ybGoyE97C6n5JztBQu_nhPyItoAKGtBjQDZZR1x_tu13iXdW3yZXVOAucCAPIM/s460/dragon-age-the-veilguard-pc-cover.jpg",
  "Shadow Circuit": "https://blogger.googleusercontent.com/img/a/AVvXsEh5YHeCPYCsSxVZFNNPUJR6wMJW1jpVpqo-L6SB5O5ePeSrDltPDputJ547f1q0UUqvMaRbUIjYgRNb3pTtEePgaE55a-BmQXgE9YvlluxqoJoojp2rZlFfI5JscAHsR6WmW4QxxohdyPy9H6NTp7KfpKMlaJb8gJigBA5HLreqImv6zS2P2RghBP0yNyg",
  "Echoes of Valor": "https://1.bp.blogspot.com/-KBV3zttu5kA/Y5fWN1a2-5I/AAAAAAABUrQ/gJYl20DlEZwc6Af36w9gOxv4KH7imB-ugCNcBGAsYHQ/s460/chained-echoes-pc-cover.jpg",
  "Turbo Arena": "https://1.bp.blogspot.com/-7cV5dkncboo/YTC3VkPFBcI/AAAAAAABN5I/biLe8dcBxjIsoDYo92reOF-FnLXDcT3vwCLcBGAsYHQ/s460/wrc-10-fia-world-rally-championship-pc-cover.jpg",
  "Cryo Nexus": "https://1.bp.blogspot.com/-kaX_7BEXkQs/YTA6Mlh2X6I/AAAAAAABN3g/gtlzXCFl9kQEzczzpSA5G2XmU_TOMciGgCLcBGAsYHQ/s460/cryostasis-pc-cover.jpg",
  "Ironclad Frontier": "https://1.bp.blogspot.com/-K3owTdUaMUk/XihLttmDC-I/AAAAAAAA80U/B-rSl7v6FhMqzpMJRUeoxEcDOvl8iedigCLcBGAsYHQ/s1600/ironclad-tactics-deluxe-edition-pc-cover.jpg",
  "Plasma Storm": "https://1.bp.blogspot.com/-tuhA__MlQik/Ymw0wRwrxQI/AAAAAAAAB_Y/p2-f8GqqODQcBWQI284a4Sy9mm2a60PewCNcBGAsYHQ/s460/trigon-space-story-pc-cover.jpg",
  "Mystic Harvest": "https://1.bp.blogspot.com/-BdQLOOqkjto/Y93oIvW4ydI/AAAAAAABV0Q/5ByefECxfzUkyIv0AeOaoH69WJx6qbKRQCNcBGAsYHQ/s460/spellforce-conquest-of-eo-pc-cover.jpg",
  "Dragon Shard": "https://3.bp.blogspot.com/-T84xaESh2Hk/W0_zb69WwqI/AAAAAAAAuJg/6qPShxe1ySg69P2PhJk9a4R6XasSaq2cQCLcBGAs/s1600/fable-3-pc-cover-www.ovagames.com.jpg",
  "Rogue Havoc": "https://1.bp.blogspot.com/-Rtn4y81UjMM/YluAwyOl8WI/AAAAAAAAB0Q/Cq1bmAYNifwLl5V9CiyH_C3VaEmXt4bwwCNcBGAsYHQ/s460/rad-pc-cover.jpg",
  "Pixel Clash": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg1qVlNY1wvbwCZZwxjC_KulmuTUMQnV0ttwqgcfucUwlRoPLhPFJDYt2hemsWmsuEJCMYlsgmhogqFMn9LKxNlUbg95xbGMR92SOGcbQshNGkvapNmW08ubZnriQa25PnngF2Nu0DhxBxzYYGf1_E_XIM6urznykvTlpJxQapR228z45c63VGsuWKRaI8/s460/dynasty-warriors-origins-pc-cover.jpg",
  "Galactic Drift": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg4kvyLNpNE3K9dvPW1ZEdK2cLQ4ict7KI21yMLle8oqjH6hG1OVaLI_P_AiXvdv2307kyUOJE3m9Tb6N4oEl4Axnmv58kT0_ApV_MmEvG0pnQKFvnEGzozx_TAEN4ewOTD5VwwvosxC-Z2i8QQtYeXnQyyeE-VCYr8iEOQTVDSNIroycoLZ3iwi_ijBhY/s460/transformers-galactic-trials-pc-cover.jpg",
  "Specter Forge": "https://1.bp.blogspot.com/-lI_C57pc0XA/XmdIlVrA_HI/AAAAAAAA-fs/Fptke6GwlG4WwY6IeXXPKrGUAW89gFnwwCLcBGAsYHQ/s1600/shovel-knight-treasure-trove-pc-cover.jpg",
  "Frozen Dominion": "https://2.bp.blogspot.com/-e84g9oq9X_0/Wqn1mmiRfYI/AAAAAAAArHQ/yiYVL28pliQq_kE_W_Zc81VIbvvzW8WZwCLcBGAs/s1600/frozen-synapse-prime-pc-cover-www.ovagames.com.jpg",
  "Synthwave Siege": "https://1.bp.blogspot.com/-Zj0K9t-kNNc/YiHgp3qGgEI/AAAAAAAAAWk/HI8RasLRSfMLzNCCT3jQxDtkGrKCNcK1gCNcBGAsYHQ/s460/art-of-rally-deluxe-pc-cover.jpg",
  "Toxic Run": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhakhyphenhyphenbVpenLBygjiJ1Fe9Vi6tmBRddgikT3zQC_kZMQXn9x1QMUIUwi1qOwA_mmmDE2VZ1_yFLIGsSP9XFbJxEy-qKaFOY81m5V7ncCGbEndNyPoAG1ZFD_U7HxQ3dISgZX7L4xTRCGnEeoCwfYwpYZid7ALYYREOb8h-ZmRefsORiysAwCrk3oiPOpPU/s460/forever-skies-pc-cover.jpg",
  "Mech Blaster": "https://1.bp.blogspot.com/-c0ZqMtN_IAU/Yk0SgAMrfJI/AAAAAAAABI8/oid4GWttrKEr8DsYWwjm5kcTqRqdBOBKQCNcBGAsYHQ/s460/lego-star-warsthe-skywalker-saga-pc-cover.jpg",
  "Vortex Racers": "https://1.bp.blogspot.com/-b7zM0gMWlRA/X1-9L_x0UxI/AAAAAAABDAw/xV0AzIc7iakLVYmoPbDWwdOT6P03ZfQcACLcBGAsYHQ/s1600/chrono-trigger-pc-cover.jpg",
  "Bloodline Arena": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiG2vXVRCnzZT_Kl_g1jEqY68ytMz7J1cx719ewlCnKNqkUyAhcNoPFsEyzh7qDO81KopPFbfSU_Ca3PxxaTT1xGpu1HHLVW9ggiCZTWbOH9rCa94I3hCcf4_ZA_Rg1xZ2r3ymj3GYRFjyLXNGg9lKE2szWemIdK-JlV0-7Ce-RfaIreOxxAhyTjEXcLyk/s460/v-rising-pc-cover.jpg",
  "Starborne Legacy": "https://1.bp.blogspot.com/-UEkRXOaPWHk/ZPFrWOrV-6I/AAAAAAABYy0/rMvLZIvJ3jcmaQfoHdczjiXgEjYML0X8gCNcBGAsYHQ/s460/starfield-pc-cover.jpg",
  "Project Firestorm": "https://3.bp.blogspot.com/-nd0stT7s-mI/XEYvRHBU_DI/AAAAAAAAyQY/5rJgYenk5JQOXgXn-RCie4kNcN3LQ5SsgCLcBGAs/s1600/war-tech-fighters-pc-cover-www.ovagames.com.jpg",
  "Skybreaker": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEivjNsdB7lqAYa4dhOqlWft7szoXMhFHDCxpIq0TN4Rfh7WISrzP_KOCQdIYV3voB8r_aKN7ppV4HoaiWoWn-1tsV_rnR_d5qO5aMXtGnbs3We2vh_Kw2JXT3FEEDuZO7KJIw-3Frq-wbl3dfX52hsQtvhnGU_vrFVXcq1JDZJJ5E6yhXxu9O1wa86YgTA/s460/gundam-breaker-4-pc-cover.jpg",
  "Crypt Crawler": "https://1.bp.blogspot.com/-Zj3tf8eYyEg/XRxQ7K-z1PI/AAAAAAAA2ZY/wXZIr-1shQYA9viEw-E38yGxdVkywmxlgCLcBGAs/s1600/starcrawlers-pc-cover-www.ovagames.com.jpg",
  "Wraith Runner": "https://1.bp.blogspot.com/-zH1YvXyn8MM/X7KC9IF_CbI/AAAAAAABE28/HtX4ZCITGx44epIUXXynSDecXyt2FjCbQCLcBGAsYHQ/s460/snowrunner-pc-cover.jpg",
  "Cyber Pulse": "https://images-1.gog.com/a34d1c50824a209717bb0c101a2658bb32520f8351faca247fe1ed8f162efc4c.jpg",
};

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
    const fetchGames = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/games");

        // Set image based on title using gameImageMap
        const updatedGames = res.data.map((game) => ({
          ...game,
          img: gameImageMap[game.title] || game.img,
        }));

        setCards(updatedGames);
        setFilteredCards(updatedGames);
      } catch (error) {
        console.error("Error fetching games:", error);
      }
    };
    fetchGames();
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
