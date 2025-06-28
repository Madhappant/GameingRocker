// import React from "react";
// import {
//   AppBar,
//   Box,
//   Button,
//   Container,
//   Toolbar,
//   Typography,
//   IconButton,
//   Tooltip,
// } from "@mui/material";
// import { Link, useLocation } from "react-router-dom";
// import PersonIcon from "@mui/icons-material/Person";

// const pages = [
//   { label: "Home", path: "/" },
//   { label: "About Us", path: "/about" },
//   { label: "Portfolio", path: "/portfolio" },
//   { label: "News", path: "/news" },
//   { label: "Library", path: "/library" }, // Game library
// ];

// const Navbar = () => {
//   const location = useLocation();

//   return (
//     <AppBar
//       position="fixed"
//       elevation={0}
//       sx={{
//         backgroundColor: "#0C031C",
//         py: 2,
//         zIndex: 1200,
//       }}
//     >
//       <Container maxWidth={false} sx={{ maxWidth: "1500px", mx: "auto" }}>
//         <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
//           {/* Brand Logo */}
//           <Box sx={{ flexGrow: 1 }}>
//             <Typography
//               variant="h6"
//               component={Link}
//               to="/"
//               sx={{
//                 fontWeight: "bold",
//                 fontSize: "20px",
//                 color: "#fff",
//                 ml: 3,
//                 textDecoration: "none",
//                 fontFamily: "Poppins",
//                 "&:hover": { color: "#fff" },
//               }}
//             >
//               GAMEREALM
//             </Typography>
//           </Box>

//           {/* Navigation Links */}
//           <Box sx={{ display: "flex", alignItems: "center", gap: 10 }}>
//             {pages.map((page) => {
//               const isActive = location.pathname === page.path;
//               return (
//                 <Box key={page.label} sx={{ position: "relative" }}>
//                   <Typography
//                     component={Link}
//                     to={page.path}
//                     sx={{
//                       textDecoration: "none",
//                       color: isActive ? "#ffffff" : "#E1E1E1",
//                       fontSize: "14px",
//                       fontWeight: 400,
//                       pb: "4px",
//                       transition: "color 0.3s ease",
//                       "&:hover": { color: "#ffffff" },
//                       position: "relative",
//                     }}
//                   >
//                     {page.label}
//                     {isActive && (
//                       <Box
//                         sx={{
//                           position: "absolute",
//                           bottom: 0,
//                           left: 0,
//                           height: "2px",
//                           width: "100%",
//                           backgroundColor: "#FF9C00",
//                           borderRadius: "2px",
//                         }}
//                       />
//                     )}
//                   </Typography>
//                 </Box>
//               );
//             })}

//             {/* Contact Us Button */}
//             <Button
//               component={Link}
//               to="/contactus"
//               variant="contained"
//               sx={{
//                 backgroundColor: "#D91534",
//                 borderRadius: "6px",
//                 px: 3,
//                 height: "32px",
//                 fontSize: "13px",
//                 fontWeight: 400,
//                 textTransform: "none",
//                 boxShadow: "none",
//                 marginRight: 1,
//                 "&:hover": {
//                   backgroundColor: "#c8122e",
//                 },
//               }}
//             >
//               Contact Us
//             </Button>

//             {/* 👤 Profile/Login Icon */}
//             <Tooltip title="Login or Signup">
//               <IconButton
//                 component="a"
//                 href="/login"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 sx={{
//                   color: "#ffffff",
//                   border: "1px solid #555",
//                   borderRadius: "50%",
//                   mr: 3,
//                 }}
//               >
//                 <PersonIcon />
//               </IconButton>
//             </Tooltip>
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// };

// export default Navbar;


import React from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
  IconButton,
  Tooltip,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports"; // 🎮 Icon

const pages = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "News", path: "/news" },
  { label: "Library", path: "/library" },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: "#0C031C",
        py: 2,
        zIndex: 1200,
      }}
    >
      <Container maxWidth={false} sx={{ maxWidth: "1500px", mx: "auto" }}>
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          {/* Brand Logo */}
          <Box sx={{ flexGrow: 1 }}>
            <Typography
              variant="h6"
              component={Link}
              to="/"
              sx={{
                fontWeight: "bold",
                fontSize: "20px",
                color: "#fff",
                ml: 3,
                textDecoration: "none",
                fontFamily: "Poppins",
                "&:hover": { color: "#fff" },
              }}
            >
              GAMEREALM
            </Typography>
          </Box>

          {/* Navigation Links */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 8 }}>
            {pages.map((page) => {
              const isActive = location.pathname === page.path;
              return (
                <Box key={page.label} sx={{ position: "relative" }}>
                  <Typography
                    component={Link}
                    to={page.path}
                    sx={{
                      textDecoration: "none",
                      color: isActive ? "#ffffff" : "#E1E1E1",
                      fontSize: "14px",
                      fontWeight: 400,
                      pb: "4px",
                      transition: "color 0.3s ease",
                      "&:hover": { color: "#ffffff" },
                      position: "relative",
                    }}
                  >
                    {page.label}
                    {isActive && (
                      <Box
                        sx={{
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          height: "2px",
                          width: "100%",
                          backgroundColor: "#FF9C00",
                          borderRadius: "2px",
                        }}
                      />
                    )}
                  </Typography>
                </Box>
              );
            })}

            {/* Demo Game Icon */}
            <Tooltip title="Play Demo Games">
              <IconButton
                component={Link}
                to="/demo-games"
                sx={{
                  color: "#ffffff",
                  border: "1px solid #555",
                  borderRadius: "50%",
                  p: 1,
                  "&:hover": {
                    backgroundColor: "#1a1a2f",
                  },
                }}
              >
                <SportsEsportsIcon />
              </IconButton>
            </Tooltip>

            {/* Contact Us Button */}
            <Button
              component={Link}
              to="/contactus"
              variant="contained"
              sx={{
                backgroundColor: "#D91534",
                borderRadius: "6px",
                px: 3,
                height: "32px",
                fontSize: "13px",
                fontWeight: 400,
                textTransform: "none",
                boxShadow: "none",
                "&:hover": {
                  backgroundColor: "#c8122e",
                },
              }}
            >
              Contact Us
            </Button>

            {/* Profile/Login Icon */}
            <Tooltip title="Login or Signup">
              <IconButton
                component="a"
                href="/login"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: "#ffffff",
                  border: "1px solid #555",
                  borderRadius: "50%",
                  mr: 3,
                }}
              >
                <PersonIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
