// src/Components/Footer.jsx
import React from 'react';
import { Box, Typography, Grid, IconButton, Divider } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#fff', px: { xs: 2, md: 10 }, py: 4 }}>
      {/* Top Section */}

        {/* Grid layout for 4 sections */}
      <Grid container spacing={4} justifyContent="space-between">
        {/* Logo & Description */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography
            sx={{
              fontWeight: 800,
              fontSize: '24px',
              lineHeight: '153.5%',
              color: '#000000',
              mb: 2,
            }}
          >
            LOGO
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
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </Typography>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '24px',
              color: '#000000',
            }}
          >
            @Lorem
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
            About us
          </Typography>
          {['Zeux', 'Portfolio', 'Careers', 'Contact us'].map((item, index) => (
            <Typography
              key={index}
              sx={{
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '30px',
                color: '#000000',
              }}
            >
              {item}
            </Typography>
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
            Contact us
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
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </Typography>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '24px',
              color: '#000000',
            }}
          >
            +908 89097 890
          </Typography>
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
            {[FacebookIcon, InstagramIcon, TwitterIcon, LinkedInIcon].map((Icon, index) => (
              <IconButton
                key={index}
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
      <Divider sx={{ my: 5, borderColor: '#000', width: '1550px' , marginLeft: "-80px"}} />

      {/* Bottom copyright */}
      <Typography
        sx={{
          fontSize: '14px',
          fontWeight: 400,
          fontFamily: 'Poppins',
          color: '#000',
          textAlign: 'center',
        }}
      >
        Copyright ® 2025 prodesigner All rights Reserved
      </Typography>
    </Box>
  );
};

export default Footer;