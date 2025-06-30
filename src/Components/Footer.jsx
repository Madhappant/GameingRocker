import React from 'react';
import { Box, Typography, Grid, Divider, Link } from '@mui/material';
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

        {/* Social Icons with Tooltip Animation */}
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
              {
                icon: FacebookIcon,
                href: 'https://facebook.com',
                label: 'Facebook',
                bgColor: '#1877f2',
              },
              {
                icon: InstagramIcon,
                href: 'https://instagram.com',
                label: 'Instagram',
                bgColor: '#e4405f',
              },
              {
                icon: TwitterIcon,
                href: 'https://twitter.com',
                label: 'Twitter',
                bgColor: '#1da1f2',
              },
              {
                icon: LinkedInIcon,
                href: 'https://linkedin.com',
                label: 'LinkedIn',
                bgColor: '#0077b5',
              },
            ].map(({ icon: Icon, href, label, bgColor }, index) => (
              <Box
                key={index}
                sx={{
                  position: 'relative',
                  width: 50,
                  height: 50,
                  borderRadius: '50%',
                  backgroundColor: '#fff',
                  boxShadow: '0 10px 10px rgba(0,0,0,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                  '&:hover': {
                    backgroundColor: bgColor,
                    color: '#fff',
                  },
                  '&:hover .tooltip': {
                    top: '-45px',
                    opacity: 1,
                    pointerEvents: 'auto',
                  },
                }}
                component="a"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Typography
                  className="tooltip"
                  sx={{
                    position: 'absolute',
                    top: 0,
                    fontSize: '14px',
                    background: bgColor,
                    color: '#fff',
                    px: 1,
                    py: '2px',
                    borderRadius: '5px',
                    boxShadow: '0 10px 10px rgba(0, 0, 0, 0.1)',
                    opacity: 0,
                    transition: 'all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                    pointerEvents: 'none',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      height: '8px',
                      width: '8px',
                      background: bgColor,
                      bottom: '-3px',
                      left: '50%',
                      transform: 'translateX(-50%) rotate(45deg)',
                    },
                  }}
                >
                  {label}
                </Typography>
                <Icon fontSize="small" />
              </Box>
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
