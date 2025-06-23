// // src/Components/Navbar.jsx
// import React from 'react';
// import { AppBar, Box, Button, Container, Toolbar, Typography } from '@mui/material';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';

// const navVariants = {
//   hidden: { y: -80, opacity: 0 },
//   visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 60, delay: 0.2 } },
// };

// const linkHover = {
//   whileHover: { scale: 1.05, color: '#ffffff' },
//   transition: { duration: 0.3 },
// };

// const buttonHover = {
//   whileHover: { scale: 1.05 },
//   transition: { duration: 0.3 },
// };

// const Navbar = () => {
//   return (
//     <motion.div
//       initial="hidden"
//       animate="visible"
//       variants={navVariants}
//     >
//       <AppBar position="static" elevation={0} sx={{ backgroundColor: '#0C031C', py: 1 }}>
//         <Container maxWidth={false} sx={{ maxWidth: '1500px', mx: 'auto' }}>
//           <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
//             {/* Logo */}
//             <Box sx={{ flexGrow: 1 }}>
//               <Typography
//                 variant="h6"
//                 component="div"
//                 sx={{ fontWeight: 'bold', color: '#fff', ml: 3 }}
//               >
//                 LOGO
//               </Typography>
//             </Box>

//             {/* Navigation Links */}
//             <Box
//               sx={{
//                 display: 'flex',
//                 alignItems: 'center',
//                 gap: 13,
//               }}
//             >
//               {['Home', 'About us', 'Portfolio', 'News'].map((text) => (
//                 <motion.div key={text} {...linkHover}>
//                   <Typography
//                     component={Link}
//                     to={`/${text.replace(/\s+/g, '').toLowerCase()}`}
//                     sx={{
//                       textDecoration: 'none',
//                       color: '#E1E1E1',
//                       fontSize: '14px',
//                       fontWeight: 400,
//                       transition: 'color 0.3s ease',
//                     }}
//                   >
//                     {text}
//                   </Typography>
//                 </motion.div>
//               ))}

//               {/* Contact Button */}
//               <motion.div {...buttonHover}>
//                 <Button
//                   component={Link}
//                   to="/contactus"
//                   variant="contained"
//                   sx={{
//                     backgroundColor: '#D91534',
//                     borderRadius: '6px',
//                     px: 3,
//                     height: '32px',
//                     fontSize: '13px',
//                     fontWeight: 400,
//                     marginRight: '48px',
//                     textTransform: 'none',
//                     boxShadow: 'none',
//                     transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
//                     '&:hover': {
//                       backgroundColor: '#c8122e',
//                     },
//                   }}
//                 >
//                   Contact us
//                 </Button>
//               </motion.div>
//             </Box>
//           </Toolbar>
//         </Container>
//       </AppBar>
//     </motion.div>
//   );
// };

// export default Navbar;

// src/Components/Navbar.jsx
import React from 'react';
import { AppBar, Box, Button, Container, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const navVariants = {
  hidden: { y: -80, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 60, delay: 0.2 } },
};

const linkHover = {
  whileHover: { scale: 1.05, color: '#ffffff' },
  transition: { duration: 0.3 },
};

const buttonHover = {
  whileHover: { scale: 1.05 },
  transition: { duration: 0.3 },
};

const pages = [
  { label: 'Home', path: '/' },
  { label: 'About us', path: '/about' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'News', path: '/news' },
];

const Navbar = () => {
  return (
    <motion.div initial="hidden" animate="visible" variants={navVariants}>
      <AppBar position="static" elevation={0} sx={{ backgroundColor: '#0C031C', py: 2 }}>
        <Container maxWidth={false} sx={{ maxWidth: '1500px', mx: 'auto' }}>
          <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
            {/* Logo */}
            <Box sx={{ flexGrow: 1 }}>
              <Typography
                variant="h6"
                component={Link}
                to="/"
                sx={{
                  fontWeight: 'bold',
                  color: '#fff',
                  ml: 3,
                  textDecoration: 'none',
                  '&:hover': { color: '#fff' },
                }}
              >
                LOGO
              </Typography>
            </Box>

            {/* Navigation Links */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 13 }}>
              {pages.map((page) => (
                <motion.div key={page.label} {...linkHover}>
                  <Typography
                    component={Link}
                    to={page.path}
                    sx={{
                      textDecoration: 'none',
                      color: '#E1E1E1',
                      fontSize: '14px',
                      fontWeight: 400,
                      transition: 'color 0.3s ease',
                      '&:hover': { color: '#ffffff' },
                    }}
                  >
                    {page.label}
                  </Typography>
                </motion.div>
              ))}

              {/* Contact Button */}
              <motion.div {...buttonHover}>
                <Button
                  component={Link}
                  to="/contactus"
                  variant="contained"
                  sx={{
                    backgroundColor: '#D91534',
                    borderRadius: '6px',
                    px: 3,
                    height: '32px',
                    fontSize: '13px',
                    fontWeight: 400,
                    marginRight: '48px',
                    textTransform: 'none',
                    boxShadow: 'none',
                    '&:hover': {
                      backgroundColor: '#c8122e',
                    },
                  }}
                >
                  Contact us
                </Button>
              </motion.div>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </motion.div>
  );
};

export default Navbar;
