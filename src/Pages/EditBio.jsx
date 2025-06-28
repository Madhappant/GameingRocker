import React, { useState } from 'react';
import {
  Typography,
  TextField,
  Button,
  Box,
  Paper,
  Alert,
  Snackbar,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const EditBio = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    username: '',
    bio: '',
  });

  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simulated API request
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // You can replace this with actual API call
      console.log('Bio Updated:', formData);
      navigate('/choose-interest');
      setOpenSnackbar(true);
    } catch (err) {
      alert('Something went wrong.');
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundImage:
          'url(https://images.hdqwalls.com/wallpapers/gaming-city-neon-4k-yj.jpg)',
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
        transition={{ duration: 0.8 }}
        style={{ width: '100%', maxWidth: 550 }}
      >
        <Paper
          elevation={8}
          sx={{
            p: 4,
            borderRadius: 4,
            backgroundColor: 'rgba(15, 6, 38, 0.9)',
            backdropFilter: 'blur(12px)',
            boxShadow: '0 0 30px rgba(255, 46, 81, 0.3)',
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: '#FF2E51',
              fontWeight: 700,
              mb: 2,
              textShadow: '0 0 10px #FF2E51',
              fontFamily: "'Orbitron', sans-serif",
            }}
          >
            Edit Your Bio
          </Typography>
          <Typography
            sx={{ color: '#ccc', mb: 4, fontSize: '16px', fontFamily: 'Poppins, sans-serif' }}
          >
            Let the gaming world know who you are!
          </Typography>

          <form onSubmit={handleSubmit}>
            <TextField
              label="Full Name"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              variant="outlined"
              fullWidth
              InputLabelProps={{ style: { color: '#bbb' } }}
              InputProps={{ style: { color: '#fff' } }}
              sx={{
                mb: 3,
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: '#FF2E51' },
                  '&:hover fieldset': { borderColor: '#FF9C00' },
                  '&.Mui-focused fieldset': { borderColor: '#FF9C00' },
                },
              }}
            />

            <TextField
              label="Username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              variant="outlined"
              fullWidth
              InputLabelProps={{ style: { color: '#bbb' } }}
              InputProps={{ style: { color: '#fff' } }}
              sx={{
                mb: 3,
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: '#FF2E51' },
                  '&:hover fieldset': { borderColor: '#FF9C00' },
                  '&.Mui-focused fieldset': { borderColor: '#FF9C00' },
                },
              }}
            />

            <TextField
              label="Bio"
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              InputLabelProps={{ style: { color: '#bbb' } }}
              InputProps={{ style: { color: '#fff' } }}
              sx={{
                mb: 4,
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: '#FF2E51' },
                  '&:hover fieldset': { borderColor: '#FF9C00' },
                  '&.Mui-focused fieldset': { borderColor: '#FF9C00' },
                },
              }}
            />

            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                background: 'linear-gradient(90deg, #FF2E51, #FF9C00)',
                color: '#fff',
                fontWeight: 700,
                fontSize: '16px',
                textTransform: 'uppercase',
                fontFamily: "'Orbitron', sans-serif",
                py: 1.4,
                boxShadow: '0 0 15px #FF2E51',
                transition: '0.4s',
                '&:hover': {
                  background: 'linear-gradient(90deg, #FF9C00, #FF2E51)',
                  boxShadow: '0 0 20px #FF2E51',
                },
              }}
            >
              Save Changes
            </Button>
          </form>
        </Paper>
      </motion.div>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity="success" variant="filled" sx={{ fontFamily: 'Poppins' }}>
          Bio updated successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default EditBio;
