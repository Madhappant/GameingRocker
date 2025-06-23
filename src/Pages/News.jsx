// pages/News.jsx
import { Box, CssBaseline } from '@mui/material';
import { motion } from 'framer-motion';
import Navbar from '../Components/Navbar';
import NewsletterSignup from '../Components/NewsletterSignup';
import Footer from '../Components/Footer';
import NewsHero from '../Components/News/NewsHero';
import NewsLayout from '../Components/News/NewsLayout';

// Animation variant
const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const News = () => (
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
        <NewsHero />
      </motion.div>

      <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <NewsLayout />
      </motion.div>

      <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <NewsletterSignup sx={{ background: "transparent" }} />
      </motion.div>

      <Footer />
    </Box>
  </>
);

export default News;
