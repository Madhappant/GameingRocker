// pages/Portfolio.jsx
import { Box, CssBaseline } from '@mui/material';
import { motion } from 'framer-motion';
import Navbar from '../Components/Navbar';
import NewsletterSignup from '../Components/NewsletterSignup';
import Footer from '../Components/Footer';
import PortfolioHero from '../Components/Portfolio/PortfolioHero';
import SectionTwo from '../Components/Portfolio/SectionTwo';
import PortfolioCardOne from '../Components/Portfolio/PortfolioCardOne';
import Users from '../Components/Portfolio/Users';

// Animation variant
const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

const Portfolio = () => (
  <>
    <CssBaseline />
    <Box
      sx={{
        background: "linear-gradient(179.5deg, #070320 42.53%, #050D7C 61.57%, #2B36B5 87.08%)",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      <Navbar />

      <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <PortfolioHero />
      </motion.div>

      <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <PortfolioCardOne />
      </motion.div>

      <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <SectionTwo />
      </motion.div>

      <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <Users />
      </motion.div>

      <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <NewsletterSignup sx={{ background: "transparent" }} />
      </motion.div>

      <Footer />
    </Box>
  </>
);

export default Portfolio;
