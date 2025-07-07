import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Link as MuiLink,
  Checkbox,
  FormControlLabel,
  Paper,
  Alert,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    agree: false,
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const err = {};
    if (!formData.username.trim()) err.username = 'Username is required';
    if (!formData.email) {
      err.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      err.email = 'Email is invalid';
    }
    if (!formData.password || formData.password.length < 6) {
      err.password = 'Password must be at least 6 characters';
    }
    if (!formData.agree) {
      err.agree = 'You must agree to Terms & Conditions';
    }
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setErrors({});

    try {
      // Simulate API call since backend might not be available
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // Mock user creation
      const mockUser = {
        id: Date.now(),
        username: formData.username,
        email: formData.email,
      };

      localStorage.setItem('token', 'mock-jwt-token');
      localStorage.setItem('user', JSON.stringify(mockUser));

      navigate('/edit-bio');
    } catch (error) {
      setErrors((prev) => ({ ...prev, apiError: 'Signup failed. Please try again.' }));
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundImage:
          'url(https://wallpapers.com/images/hd/gaming-background-9pvzvkzbd1k0e4c4.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        px: 2,
        py: 5,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ width: '100%', maxWidth: 480 }}
      >
        <Paper
          elevation={12}
          sx={{
            backdropFilter: 'blur(12px)',
            backgroundColor: 'rgba(18, 18, 36, 0.92)',
            borderRadius: 4,
            p: 4,
            boxShadow: '0 0 25px rgba(255, 46, 81, 0.4)',
          }}
        >
          <Typography
            variant="h4"
            textAlign="center"
            fontWeight={700}
            mb={2}
            sx={{
              color: '#FF2E51',
              fontFamily: "'Orbitron', sans-serif",
              textShadow: '0 0 8px #FF2E51',
            }}
          >
            Create Your Account
          </Typography>

          {errors.apiError && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {errors.apiError}
            </Alert>
          )}

          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              error={!!errors.username}
              helperText={errors.username}
              variant="outlined"
              InputLabelProps={{ style: { color: '#bbb' } }}
              InputProps={{ style: { color: '#fff' } }}
              sx={{
                mb: 2,
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: '#555' },
                  '&:hover fieldset': { borderColor: '#FF9C00' },
                  '&.Mui-focused fieldset': { borderColor: '#FF2E51' },
                },
              }}
            />

            <TextField
              fullWidth
              label="Email Address"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
              variant="outlined"
              InputLabelProps={{ style: { color: '#bbb' } }}
              InputProps={{ style: { color: '#fff' } }}
              sx={{
                mb: 2,
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: '#555' },
                  '&:hover fieldset': { borderColor: '#FF9C00' },
                  '&.Mui-focused fieldset': { borderColor: '#FF2E51' },
                },
              }}
            />

            <TextField
              fullWidth
              label="Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              error={!!errors.password}
              helperText={errors.password}
              variant="outlined"
              InputLabelProps={{ style: { color: '#bbb' } }}
              InputProps={{ style: { color: '#fff' } }}
              sx={{
                mb: 2,
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: '#555' },
                  '&:hover fieldset': { borderColor: '#FF9C00' },
                  '&.Mui-focused fieldset': { borderColor: '#FF2E51' },
                },
              }}
            />

            <FormControlLabel
              control={
                <Checkbox
                  name="agree"
                  checked={formData.agree}
                  onChange={handleChange}
                  sx={{ color: '#FF9C00' }}
                />
              }
              label={
                <Typography sx={{ color: '#ccc', fontSize: '14px' }}>
                  I agree to the{' '}
                  <MuiLink sx={{ color: '#FF9C00' }} href="#">
                    Terms & Conditions
                  </MuiLink>
                </Typography>
              }
              sx={{ mb: 2 }}
            />
            {errors.agree && (
              <Typography sx={{ color: '#f44336', fontSize: '13px', mb: 1 }}>
                {errors.agree}
              </Typography>
            )}

            <Button
              fullWidth
              type="submit"
              variant="contained"
              disabled={loading}
              sx={{
                background: 'linear-gradient(90deg, #FF2E51, #FF9C00)',
                color: '#fff',
                textTransform: 'uppercase',
                fontWeight: 700,
                fontFamily: "'Orbitron', sans-serif",
                fontSize: '15px',
                py: 1.4,
                boxShadow: '0 0 20px #FF2E51',
                '&:hover': {
                  background: 'linear-gradient(90deg, #FF9C00, #FF2E51)',
                  boxShadow: '0 0 28px #FF2E51',
                },
              }}
            >
              {loading ? 'Creating Account...' : 'Sign Up'}
            </Button>
          </form>

          <Typography
            sx={{
              mt: 3,
              color: '#bbb',
              textAlign: 'center',
              fontSize: '14px',
              fontFamily: 'Poppins, sans-serif',
            }}
          >
            Already have an account?{' '}
            <MuiLink component={Link} to="/login" sx={{ color: '#FF9C00' }}>
              Log in here
            </MuiLink>
          </Typography>
        </Paper>
      </motion.div>
    </Box>
  );
};

export default Signup;