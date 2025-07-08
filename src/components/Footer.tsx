import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Divider,
} from '@mui/material';
import {
  Facebook,
  Twitter,
  Instagram,
  YouTube,
  Discord,
  GitHub,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: <Facebook />, url: '#', label: 'Facebook' },
    { icon: <Twitter />, url: '#', label: 'Twitter' },
    { icon: <Instagram />, url: '#', label: 'Instagram' },
    { icon: <YouTube />, url: '#', label: 'YouTube' },
    { icon: <Discord />, url: '#', label: 'Discord' },
    { icon: <GitHub />, url: '#', label: 'GitHub' },
  ];

  const footerLinks = {
    Games: ['Featured Games', 'New Releases', 'Top Rated', 'Free Games'],
    Community: ['Forums', 'Discord', 'Tournaments', 'Leaderboards'],
    Support: ['Help Center', 'Contact Us', 'Bug Reports', 'Feedback'],
    Company: ['About Us', 'Careers', 'Press', 'Partners'],
  };

  return (
    <Box
      component="footer"
      sx={{
        background: 'linear-gradient(135deg, #0A0A0F 0%, #1A1A2E 100%)',
        borderTop: '1px solid rgba(0, 212, 255, 0.3)',
        mt: 8,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{ py: 6 }}>
          {/* Brand Section */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h5"
                sx={{
                  background: 'linear-gradient(45deg, #00D4FF, #FF006E)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontFamily: 'Orbitron',
                  fontWeight: 700,
                  mb: 2,
                }}
              >
                GAMING ROCKER
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: '#B0B0B0',
                  mb: 3,
                  lineHeight: 1.6,
                }}
              >
                Experience the future of gaming with cutting-edge technology,
                immersive worlds, and a global community of passionate gamers.
              </Typography>
              <Box sx={{ display: 'flex', gap: 1 }}>
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={social.label}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <IconButton
                      href={social.url}
                      sx={{
                        color: '#B0B0B0',
                        '&:hover': {
                          color: '#00D4FF',
                          transform: 'translateY(-2px)',
                        },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      {social.icon}
                    </IconButton>
                  </motion.div>
                ))}
              </Box>
            </motion.div>
          </Grid>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <Grid item xs={6} md={2} key={category}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    color: '#00D4FF',
                    fontWeight: 600,
                    mb: 2,
                  }}
                >
                  {category}
                </Typography>
                {links.map((link) => (
                  <Link
                    key={link}
                    href="#"
                    sx={{
                      display: 'block',
                      color: '#B0B0B0',
                      textDecoration: 'none',
                      mb: 1,
                      '&:hover': {
                        color: '#FFFFFF',
                        textDecoration: 'underline',
                      },
                      transition: 'color 0.3s ease',
                    }}
                  >
                    {link}
                  </Link>
                ))}
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ borderColor: 'rgba(0, 212, 255, 0.3)' }} />

        <Box
          sx={{
            py: 3,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 2,
          }}
        >
          <Typography variant="body2" sx={{ color: '#B0B0B0' }}>
            © 2024 Gaming Rocker. All rights reserved.
          </Typography>
          <Box sx={{ display: 'flex', gap: 3 }}>
            <Link
              href="#"
              sx={{
                color: '#B0B0B0',
                textDecoration: 'none',
                '&:hover': { color: '#FFFFFF' },
              }}
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              sx={{
                color: '#B0B0B0',
                textDecoration: 'none',
                '&:hover': { color: '#FFFFFF' },
              }}
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              sx={{
                color: '#B0B0B0',
                textDecoration: 'none',
                '&:hover': { color: '#FFFFFF' },
              }}
            >
              Cookie Policy
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;