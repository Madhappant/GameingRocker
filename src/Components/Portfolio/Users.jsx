import React from "react";
import {
  Box,
  Typography,
  Avatar,
  IconButton,
  Container,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const users = [
  {
    name: "Vizeh Robert",
    location: "Warsaw, Poland",
    rating: "4.5",
    review:
      "Working with this studio was an incredible experience. Their attention to detail, fast delivery, and immersive UI/UX game design exceeded our expectations.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    active: true,
  },
  {
    name: "Yessica Christy",
    location: "Shanxi, China",
    rating: "4.7",
    review:
      "They built our multiplayer system from scratch and handled backend integration like pros. The gameplay is smooth and the visuals are stunning.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    active: false,
  },
  {
    name: "Kim Young Jou",
    location: "Seoul, South Korea",
    rating: "4.9",
    review:
      "Incredible team! They transformed our game concept into a full-fledged experience with cross-platform support. Highly recommended for indie developers.",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    active: false,
  },
];

const Users = () => {
  return (
    <Box sx={{ backgroundColor: "#E5E5E5", py: 10 }}>
      <Container sx={{ maxWidth: "1400px" }}>
        {/* Title */}
        <Typography
          variant="h4"
          align="center"
          sx={{
            fontFamily: "'Rubik'",
            fontWeight: 500,
            fontSize: "35px",
            lineHeight: "50px",
            color: "#000000",
            mb: 4,
          }}
        >
          Trusted by Thousands of <br /> Happy Gamers & Clients
        </Typography>

        <Typography
          align="center"
          sx={{
            color: "#7C6161",
            fontSize: 14,
            maxWidth: 600,
            mx: "auto",
            mb: 6,
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          Our clients love the blend of technical expertise and artistic vision
          we bring to each game. See what they’re saying.
        </Typography>

        {/* Testimonial Cards */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 4,
            width: "1350px",
            marginLeft: "-100px",
            flexWrap: "wrap",
          }}
        >
          {users.map((user, index) => (
            <Box
              key={index}
              sx={{
                width: 400,
                height: 230,
                border: `2px solid ${user.active ? "#DC7000" : "#000"}`,
                backgroundColor: user.active ? "#0F0901" : "#fff",
                color: user.active ? "#fff" : "#000",
                borderRadius: "10px",
                px: 3,
                py: 2,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              {/* User Info */}
              <Box display="flex" alignItems="center">
                <Avatar
                  src={user.avatar}
                  alt={user.name}
                  sx={{ width: 48, height: 48, mr: 2 }}
                />
                <Box>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: 16,
                      fontFamily: "'Poppins', sans-serif",
                    }}
                  >
                    {user.name}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: 13,
                      color: user.active ? "#ccc" : "#7D7D7D",
                      fontFamily: "'Poppins', sans-serif",
                    }}
                  >
                    {user.location}
                  </Typography>
                </Box>
                <Box ml="auto" display="flex" alignItems="center">
                  <Typography
                    sx={{
                      fontWeight: 500,
                      fontSize: 15,
                      mr: 0.5,
                      fontFamily: "'Poppins', sans-serif",
                    }}
                  >
                    {user.rating}
                  </Typography>
                  <StarIcon sx={{ fontSize: 18, color: "#FBB040" }} />
                </Box>
              </Box>

              {/* Review */}
              <Typography
                sx={{
                  fontSize: 14,
                  lineHeight: "22px",
                  fontFamily: "'Poppins', sans-serif",
                  mt: 2,
                }}
              >
                {user.review}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Navigation Controls */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: 6,
            px: 1,
            width: "1200px",
          }}
        >
          {/* Dots */}
          <Box display="flex" gap={1}>
            <Box
              sx={{
                width: 40,
                height: 12,
                borderRadius: 6,
                background: "#C8102E",
                marginLeft: "-120px",
              }}
            />
            <Box
              sx={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                background: "#D9D9D9",
              }}
            />
            <Box
              sx={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                background: "#D9D9D9",
              }}
            />
          </Box>

          {/* Arrows */}
          <Box display="flex" gap={3}>
            <IconButton
              sx={{
                background: "#fff",
                border: "2px solid #C8102E",
                width: 48,
                height: 48,
                color: "#C8102E",
              }}
              onClick={() => console.log("Previous Slide")}
            >
              <ArrowBackIcon />
            </IconButton>
            <IconButton
              sx={{
                background: "#C8102E",
                width: 48,
                height: 48,
                color: "#fff",
              }}
              onClick={() => console.log("Next Slide")}
            >
              <ArrowForwardIcon />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Users;
