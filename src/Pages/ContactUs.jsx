// pages/Contact.jsx
import React from 'react';
import { Box, CssBaseline } from '@mui/material';
import { motion } from 'framer-motion';

import Navbar from '../Components/Navbar';
import NewsletterSignup from '../Components/NewsletterSignup';
import Footer from '../Components/Footer';
import ContactHero from '../Components/ContactUs/ContactHero';
import ContactForm from '../Components/ContactUs/ContactForm';

// Animation variants
const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const Contact = () => (
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
        <ContactHero />
      </motion.div>

      <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <ContactForm />
      </motion.div>

      <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <NewsletterSignup sx={{ background: "transparent" }} />
      </motion.div>

      <Footer />
    </Box>
  </>
);

export default Contact;
