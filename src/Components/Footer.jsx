import React from 'react';
import { Box, Typography, Grid, IconButton, Divider, Link } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#fff', px: { xs: 2, md: 10 }, py: 6 }}>
      <Grid container spacing={4} justifyContent="space-between">
        {/* Brand Logo & Description */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography
            sx={{
              fontWeight: 800,
              fontSize: '24px',
              lineHeight: '153.5%',
              color: '#000000',
              mb: 2,
              fontFamily: 'Poppins',
            }}
          >
            GAMEREALM
          </Typography>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '24px',
              color: '#000000',
              mb: 3,
              maxWidth: '372px',
            }}
          >
            Discover and explore a world of top-tier games. GAMEREALM brings the best of gaming content to your fingertips.
          </Typography>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '24px',
              color: '#000000',
            }}
          >
            contact@gamerealm.com
          </Typography>
        </Grid>

        {/* About Us Section */}
        <Grid item xs={12} sm={6} md={2}>
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: '17px',
              lineHeight: '26px',
              color: '#000000',
              mb: 2,
            }}
          >
            About
          </Typography>
          {['Home', 'Explore Games', 'Careers', 'Contact Us'].map((item, index) => (
            <Link
              key={index}
              href="/"
              underline="none"
              sx={{
                display: 'block',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '30px',
                color: '#000000',
                '&:hover': { textDecoration: 'underline' },
              }}
            >
              {item}
            </Link>
          ))}
        </Grid>

        {/* Contact Section */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: '17px',
              lineHeight: '26px',
              color: '#000000',
              mb: 2,
            }}
          >
            Contact Us
          </Typography>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '24px',
              color: '#000000',
              mb: 2,
              maxWidth: '282px',
            }}
          >
            Got questions or feedback? Reach out to our support team — we're here to help!
          </Typography>
          <Link
            href="tel:+918888888888"
            sx={{
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '24px',
              color: '#000000',
              textDecoration: 'none',
              '&:hover': { textDecoration: 'underline' },
            }}
          >
            +91 88888 88888
          </Link>
        </Grid>

        {/* Social Icons */}
        <Grid item xs={12} sm={6} md={3}>
          <Box
            sx={{
              display: 'flex',
              gap: 2,
              justifyContent: { xs: 'flex-start', md: 'flex-end' },
              alignItems: 'center',
              mt: { xs: 4, md: 10 },
            }}
          >
            {[
              { icon: FacebookIcon, href: 'https://facebook.com' },
              { icon: InstagramIcon, href: 'https://instagram.com' },
              { icon: TwitterIcon, href: 'https://twitter.com' },
              { icon: LinkedInIcon, href: 'https://linkedin.com' },
            ].map(({ icon: Icon, href }, index) => (
              <IconButton
                key={index}
                component="a"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  backgroundColor: '#000',
                  color: '#fff',
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
                  '&:hover': {
                    backgroundColor: '#222',
                  },
                }}
              >
                <Icon fontSize="small" />
              </IconButton>
            ))}
          </Box>
        </Grid>
      </Grid>

      {/* Divider */}
      <Divider sx={{ my: 5, borderColor: '#000' }} />

      {/* Copyright */}
      <Typography
        sx={{
          fontSize: '14px',
          fontWeight: 400,
          fontFamily: 'Poppins',
          color: '#000',
          textAlign: 'center',
        }}
      >
        © 2025 GAMEREALM. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
