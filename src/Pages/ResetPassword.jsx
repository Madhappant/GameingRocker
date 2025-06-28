import React, { useState } from 'react';
import {
  Typography,
  TextField,
  Button,
  Box,
  Paper,
} from '@mui/material';
import { motion } from 'framer-motion';

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (email) =>
    /\S+@\S+\.\S+/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setError('Email is required');
    } else if (!validateEmail(email)) {
      setError('Enter a valid email address');
    } else {
      setError('');
      console.log('📩 Reset link sent to:', email);
      // TODO: Connect to backend reset endpoint
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundImage:
          'url(https://wallpapers.com/images/hd/gaming-neon-blue-cyberpunk-background-6u1jzdzgvn3c8xtf.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        px: 2,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ width: '100%', maxWidth: 500 }}
      >
        <Paper
          elevation={10}
          sx={{
            p: 4,
            borderRadius: 4,
            backgroundColor: 'rgba(12, 3, 28, 0.88)',
            backdropFilter: 'blur(12px)',
            boxShadow: '0 0 25px rgba(0,255,255,0.2)',
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: '#00FFFF',
              fontWeight: 700,
              mb: 2,
              textAlign: 'center',
              fontFamily: "'Orbitron', sans-serif",
              textShadow: '0 0 8px #00FFFF',
            }}
          >
            Reset Password
          </Typography>

          <Typography
            sx={{
              color: '#ccc',
              mb: 4,
              textAlign: 'center',
              fontSize: '15px',
              fontFamily: 'Poppins, sans-serif',
            }}
          >
            Enter your email address and we'll send you instructions to reset
            your password.
          </Typography>

          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Email Address"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={!!error}
              helperText={error}
              InputLabelProps={{ style: { color: '#bbb' } }}
              InputProps={{
                style: { color: '#fff' },
              }}
              sx={{
                mb: 3,
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#00FFFF',
                  },
                  '&:hover fieldset': {
                    borderColor: '#FF9C00',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#FF9C00',
                  },
                },
              }}
            />

            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                background: 'linear-gradient(90deg, #00FFFF, #FF2E51)',
                textTransform: 'uppercase',
                fontWeight: 700,
                fontSize: '15px',
                fontFamily: "'Orbitron', sans-serif",
                py: 1.4,
                color: '#fff',
                boxShadow: '0 0 18px #00FFFF',
                '&:hover': {
                  background: 'linear-gradient(90deg, #FF2E51, #00FFFF)',
                  boxShadow: '0 0 28px #00FFFF',
                },
              }}
            >
              Send Reset Link
            </Button>
          </form>
        </Paper>
      </motion.div>
    </Box>
  );
};

export default ResetPassword;
