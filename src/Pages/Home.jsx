// pages/Home.jsx
import React from 'react';
import { CssBaseline, Box } from '@mui/material';
import { motion } from 'framer-motion';

// Import all the sections
import Navbar from '../Components/Navbar';
import HeroSection from '../Components/Home/HeroSection';
import TrendingGames from '../Components/Home/TrendingGames';
import CODBanner from '../Components/Home/CODBanner';
import ServicesSection from '../Components/Home/ServicesSection';
import RecentProjects from '../Components/Home/RecentProjects';
import NewsletterSignup from '../Components/NewsletterSignup';
import Footer from '../Components/Footer';
import BrandScrollBanner from '../Components/Home/BrandScrollBanner';

// Animation variants
const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const Home = () => {
  return (
    <>
      <CssBaseline />
      <Box sx={{ backgroundColor: '#0b0a1f', minHeight: '100vh', overflowX: 'hidden' }}>
        <Navbar />

        <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <HeroSection />
        </motion.div>

        <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <BrandScrollBanner />
        </motion.div>

        <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <TrendingGames />
        </motion.div>

        <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <CODBanner />
        </motion.div>

        <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <ServicesSection />
        </motion.div>

        <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <RecentProjects />
        </motion.div>

        <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <NewsletterSignup />
        </motion.div>

        <Footer />
      </Box>
    </>
  );
};

export default Home;
