// // import React, { useState } from 'react';
// // import {
// //   Box,
// //   Button,
// //   TextField,
// //   Typography,
// //   InputAdornment,
// //   IconButton,
// //   Paper,
// //   Fade,
// //   CircularProgress,
// //   Alert,
// // } from '@mui/material';
// // import { Visibility, VisibilityOff } from '@mui/icons-material';
// // import { Link, useNavigate } from 'react-router-dom';
// // import { motion } from 'framer-motion';


// // const Login = () => {
// //   const [showPassword, setShowPassword] = useState(false);
// //   const [formData, setFormData] = useState({ email: '', password: '' });
// //   const [loading, setLoading] = useState(false);
// //   const [error, setError] = useState('');
// //   const navigate = useNavigate();

// //   const handleChange = (e) => {
// //     setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setLoading(true);
// //     setError('');

// //     // Simulate API call
// //     try {
// //       await new Promise((resolve) => setTimeout(resolve, 2000));

// //       if (formData.email === 'user@gaming.com' && formData.password === 'password123') {
// //         navigate('/'); 
// //       } else {
// //         setError('Invalid email or password');
// //       }
// //     } catch (err) {
// //       setError('Login failed. Please try again.');
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <Box
// //       sx={{
// //         backgroundImage: `url('https://images.unsplash.com/photo-1605902711622-cfb43c44367b')`,
// //         backgroundSize: 'cover',
// //         backgroundPosition: 'center',
// //         minHeight: '100vh',
// //         display: 'flex',
// //         alignItems: 'center',
// //         justifyContent: 'center',
// //         px: 2,
// //       }}
// //     >
// //       <Fade in timeout={600}>
// //         <motion.div
// //           initial={{ opacity: 0, scale: 0.95 }}
// //           animate={{ opacity: 1, scale: 1 }}
// //           transition={{ duration: 0.6 }}
// //         >
// //           <Paper
// //             elevation={12}
// //             sx={{
// //               width: 400,
// //               p: 4,
// //               borderRadius: 4,
// //               backgroundColor: 'rgba(10, 10, 25, 0.92)',
// //               backdropFilter: 'blur(14px)',
// //               boxShadow: '0 0 25px rgba(255, 46, 81, 0.4)',
// //             }}
// //           >
// //             <Typography
// //               variant="h4"
// //               textAlign="center"
// //               fontWeight={700}
// //               gutterBottom
// //               sx={{
// //                 color: '#FF2E51',
// //                 fontFamily: "'Orbitron', sans-serif",
// //                 textShadow: '0 0 8px #FF2E51',
// //               }}
// //             >
// //               Welcome Back, Gamer 🎮
// //             </Typography>

// //             <Typography
// //               variant="body2"
// //               align="center"
// //               sx={{ color: '#aaa', mb: 3, fontFamily: 'Poppins, sans-serif' }}
// //             >
// //               Log in to access your gaming universe
// //             </Typography>

// //             {error && (
// //               <Alert severity="error" sx={{ mb: 2 }}>
// //                 {error}
// //               </Alert>
// //             )}

// //             <form onSubmit={handleSubmit}>
// //               <TextField
// //                 fullWidth
// //                 label="Email"
// //                 name="email"
// //                 type="email"
// //                 variant="outlined"
// //                 value={formData.email}
// //                 onChange={handleChange}
// //                 required
// //                 margin="normal"
// //                 InputLabelProps={{ style: { color: '#bbb' } }}
// //                 InputProps={{ style: { color: '#fff' } }}
// //                 sx={{
// //                   '& .MuiOutlinedInput-root': {
// //                     '& fieldset': { borderColor: '#FF2E51' },
// //                     '&:hover fieldset': { borderColor: '#FF9C00' },
// //                     '&.Mui-focused fieldset': { borderColor: '#FF9C00' },
// //                   },
// //                 }}
// //               />

// //               <TextField
// //                 fullWidth
// //                 label="Password"
// //                 name="password"
// //                 type={showPassword ? 'text' : 'password'}
// //                 variant="outlined"
// //                 value={formData.password}
// //                 onChange={handleChange}
// //                 required
// //                 margin="normal"
// //                 InputLabelProps={{ style: { color: '#bbb' } }}
// //                 InputProps={{
// //                   style: { color: '#fff' },
// //                   endAdornment: (
// //                     <InputAdornment position="end">
// //                       <IconButton
// //                         onClick={() => setShowPassword((prev) => !prev)}
// //                         edge="end"
// //                         sx={{ color: '#FF2E51' }}
// //                       >
// //                         {showPassword ? <VisibilityOff /> : <Visibility />}
// //                       </IconButton>
// //                     </InputAdornment>
// //                   ),
// //                 }}
// //                 sx={{
// //                   '& .MuiOutlinedInput-root': {
// //                     '& fieldset': { borderColor: '#FF2E51' },
// //                     '&:hover fieldset': { borderColor: '#FF9C00' },
// //                     '&.Mui-focused fieldset': { borderColor: '#FF9C00' },
// //                   },
// //                 }}
// //               />

// //               <Button
// //                 type="submit"
// //                 variant="contained"
// //                 fullWidth
// //                 disabled={loading}
// //                 sx={{
// //                   mt: 3,
// //                   background: 'linear-gradient(to right, #FF2E51, #FF9C00)',
// //                   fontWeight: 700,
// //                   fontSize: '15px',
// //                   fontFamily: "'Orbitron', sans-serif",
// //                   py: 1.4,
// //                   color: '#fff',
// //                   textTransform: 'uppercase',
// //                   boxShadow: '0 0 15px #FF2E51',
// //                   '&:hover': {
// //                     background: 'linear-gradient(to right, #FF9C00, #FF2E51)',
// //                     boxShadow: '0 0 25px #FF2E51',
// //                   },
// //                 }}
// //               >
// //                 {loading ? <CircularProgress size={24} color="inherit" /> : 'Login'}
// //               </Button>
// //             </form>

// //             <Typography
// //               variant="body2"
// //               align="center"
// //               sx={{ mt: 2, color: '#aaa', fontFamily: 'Poppins, sans-serif' }}
// //             >
// //               Forgot password?{' '}
// //               <Link to="/reset-password" style={{ color: '#FF9C00' }}>
// //                 Reset here
// //               </Link>
// //             </Typography>

// //             <Typography
// //               variant="body2"
// //               align="center"
// //               sx={{ mt: 1, color: '#aaa', fontFamily: 'Poppins, sans-serif' }}
// //             >
// //               New here?{' '}
// //               <Link to="/signup" style={{ color: '#FF2E51' }}>
// //                 Create an account
// //               </Link>
// //             </Typography>
// //           </Paper>
// //         </motion.div>
// //       </Fade>
// //     </Box>
// //   );
// // };

// // export default Login;

// import React, { useState } from 'react';
// import {
//   Box,
//   Button,
//   TextField,
//   Typography,
//   InputAdornment,
//   IconButton,
//   Paper,
//   Fade,
//   CircularProgress,
//   Alert,
// } from '@mui/material';
// import { Visibility, VisibilityOff } from '@mui/icons-material';
// import { Link, useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import axios from 'axios'; // ✅ Import Axios

// const Login = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [formData, setFormData] = useState({ email: '', password: '' });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');

//     try {
//       const response = await axios.post('http://localhost:5000/api/auth/login', {
//         email: formData.email,
//         password: formData.password,
//       });

//       const { token, user } = response.data;

//       // Store the token and user in localStorage
//       localStorage.setItem('token', token);
//       localStorage.setItem('user', JSON.stringify(user));

//       navigate('/'); // Redirect to homepage or dashboard
//     } catch (err) {
//       if (err.response && err.response.data && err.response.data.message) {
//         setError(err.response.data.message);
//       } else {
//         setError('Login failed. Please try again.');
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Box
//       sx={{
//         backgroundImage: `url('https://images.unsplash.com/photo-1605902711622-cfb43c44367b')`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         minHeight: '100vh',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         px: 2,
//       }}
//     >
//       <Fade in timeout={600}>
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.6 }}
//         >
//           <Paper
//             elevation={12}
//             sx={{
//               width: 400,
//               p: 4,
//               borderRadius: 4,
//               backgroundColor: 'rgba(10, 10, 25, 0.92)',
//               backdropFilter: 'blur(14px)',
//               boxShadow: '0 0 25px rgba(255, 46, 81, 0.4)',
//             }}
//           >
//             <Typography
//               variant="h4"
//               textAlign="center"
//               fontWeight={700}
//               gutterBottom
//               sx={{
//                 color: '#FF2E51',
//                 fontFamily: "'Orbitron', sans-serif",
//                 textShadow: '0 0 8px #FF2E51',
//               }}
//             >
//               Welcome Back, Gamer 🎮
//             </Typography>

//             <Typography
//               variant="body2"
//               align="center"
//               sx={{ color: '#aaa', mb: 3, fontFamily: 'Poppins, sans-serif' }}
//             >
//               Log in to access your gaming universe
//             </Typography>

//             {error && (
//               <Alert severity="error" sx={{ mb: 2 }}>
//                 {error}
//               </Alert>
//             )}

//             <form onSubmit={handleSubmit}>
//               <TextField
//                 fullWidth
//                 label="Email"
//                 name="email"
//                 type="email"
//                 variant="outlined"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 margin="normal"
//                 InputLabelProps={{ style: { color: '#bbb' } }}
//                 InputProps={{ style: { color: '#fff' } }}
//                 sx={{
//                   '& .MuiOutlinedInput-root': {
//                     '& fieldset': { borderColor: '#FF2E51' },
//                     '&:hover fieldset': { borderColor: '#FF9C00' },
//                     '&.Mui-focused fieldset': { borderColor: '#FF9C00' },
//                   },
//                 }}
//               />

//               <TextField
//                 fullWidth
//                 label="Password"
//                 name="password"
//                 type={showPassword ? 'text' : 'password'}
//                 variant="outlined"
//                 value={formData.password}
//                 onChange={handleChange}
//                 required
//                 margin="normal"
//                 InputLabelProps={{ style: { color: '#bbb' } }}
//                 InputProps={{
//                   style: { color: '#fff' },
//                   endAdornment: (
//                     <InputAdornment position="end">
//                       <IconButton
//                         onClick={() => setShowPassword((prev) => !prev)}
//                         edge="end"
//                         sx={{ color: '#FF2E51' }}
//                       >
//                         {showPassword ? <VisibilityOff /> : <Visibility />}
//                       </IconButton>
//                     </InputAdornment>
//                   ),
//                 }}
//                 sx={{
//                   '& .MuiOutlinedInput-root': {
//                     '& fieldset': { borderColor: '#FF2E51' },
//                     '&:hover fieldset': { borderColor: '#FF9C00' },
//                     '&.Mui-focused fieldset': { borderColor: '#FF9C00' },
//                   },
//                 }}
//               />

//               <Button
//                 type="submit"
//                 variant="contained"
//                 fullWidth
//                 disabled={loading}
//                 sx={{
//                   mt: 3,
//                   background: 'linear-gradient(to right, #FF2E51, #FF9C00)',
//                   fontWeight: 700,
//                   fontSize: '15px',
//                   fontFamily: "'Orbitron', sans-serif",
//                   py: 1.4,
//                   color: '#fff',
//                   textTransform: 'uppercase',
//                   boxShadow: '0 0 15px #FF2E51',
//                   '&:hover': {
//                     background: 'linear-gradient(to right, #FF9C00, #FF2E51)',
//                     boxShadow: '0 0 25px #FF2E51',
//                   },
//                 }}
//               >
//                 {loading ? <CircularProgress size={24} color="inherit" /> : 'Login'}
//               </Button>
//             </form>

//             <Typography
//               variant="body2"
//               align="center"
//               sx={{ mt: 2, color: '#aaa', fontFamily: 'Poppins, sans-serif' }}
//             >
//               Forgot password?{' '}
//               <Link to="/reset-password" style={{ color: '#FF9C00' }}>
//                 Reset here
//               </Link>
//             </Typography>

//             <Typography
//               variant="body2"
//               align="center"
//               sx={{ mt: 1, color: '#aaa', fontFamily: 'Poppins, sans-serif' }}
//             >
//               New here?{' '}
//               <Link to="/signup" style={{ color: '#FF2E51' }}>
//                 Create an account
//               </Link>
//             </Typography>
//           </Paper>
//         </motion.div>
//       </Fade>
//     </Box>
//   );
// };

// export default Login;

import React, { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
  Paper,
  Fade,
  CircularProgress,
  Alert,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post('http://localhost:5000/api/auth/login/login', {
        email: formData.email,
        password: formData.password,
      });

      const { token, user } = response.data;

      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));

      navigate('/');
    } catch (err) {
      if (err.response?.data?.message) {
        setError(err.response.data.message);
      } else {
        setError('Login failed. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        backgroundImage: `url('https://images.unsplash.com/photo-1605902711622-cfb43c44367b')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: 2,
      }}
    >
      <Fade in timeout={600}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Paper
            elevation={12}
            sx={{
              width: 400,
              p: 4,
              borderRadius: 4,
              backgroundColor: 'rgba(10, 10, 25, 0.92)',
              backdropFilter: 'blur(14px)',
              boxShadow: '0 0 25px rgba(255, 46, 81, 0.4)',
            }}
          >
            <Typography
              variant="h4"
              textAlign="center"
              fontWeight={700}
              gutterBottom
              sx={{
                color: '#FF2E51',
                fontFamily: "'Orbitron', sans-serif",
                textShadow: '0 0 8px #FF2E51',
              }}
            >
              Welcome Back, Gamer 🎮
            </Typography>

            <Typography
              variant="body2"
              align="center"
              sx={{ color: '#aaa', mb: 3, fontFamily: 'Poppins, sans-serif' }}
            >
              Log in to access your gaming universe
            </Typography>

            {error && (
              <Alert severity="error" sx={{ mb: 2 }}>
                {error}
              </Alert>
            )}

            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                margin="normal"
                InputLabelProps={{ style: { color: '#bbb' } }}
                InputProps={{ style: { color: '#fff' } }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: '#FF2E51' },
                    '&:hover fieldset': { borderColor: '#FF9C00' },
                    '&.Mui-focused fieldset': { borderColor: '#FF9C00' },
                  },
                }}
              />

              <TextField
                fullWidth
                label="Password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                value={formData.password}
                onChange={handleChange}
                required
                margin="normal"
                InputLabelProps={{ style: { color: '#bbb' } }}
                InputProps={{
                  style: { color: '#fff' },
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword((prev) => !prev)}
                        edge="end"
                        sx={{ color: '#FF2E51' }}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{
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
                disabled={loading}
                sx={{
                  mt: 3,
                  background: 'linear-gradient(to right, #FF2E51, #FF9C00)',
                  fontWeight: 700,
                  fontSize: '15px',
                  fontFamily: "'Orbitron', sans-serif",
                  py: 1.4,
                  color: '#fff',
                  textTransform: 'uppercase',
                  boxShadow: '0 0 15px #FF2E51',
                  '&:hover': {
                    background: 'linear-gradient(to right, #FF9C00, #FF2E51)',
                    boxShadow: '0 0 25px #FF2E51',
                  },
                }}
              >
                {loading ? <CircularProgress size={24} color="inherit" /> : 'Login'}
              </Button>
            </form>

            <Typography
              variant="body2"
              align="center"
              sx={{ mt: 2, color: '#aaa', fontFamily: 'Poppins, sans-serif' }}
            >
              Forgot password?{' '}
              <Link to="/reset-password" style={{ color: '#FF9C00' }}>
                Reset here
              </Link>
            </Typography>

            <Typography
              variant="body2"
              align="center"
              sx={{ mt: 1, color: '#aaa', fontFamily: 'Poppins, sans-serif' }}
            >
              New here?{' '}
              <Link to="/signup" style={{ color: '#FF2E51' }}>
                Create an account
              </Link>
            </Typography>
          </Paper>
        </motion.div>
      </Fade>
    </Box>
  );
};

export default Login;
