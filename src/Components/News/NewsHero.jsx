import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  Container,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const NewsHero = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
    // 👉 TODO: Trigger search or filter logic here
    console.log("Searching for:", e.target.value);
  };

  return (
    <Box
      sx={{
        background: "transparent",
        color: "#FFFFFF",
        py: { xs: 8, md: 12 },
        textAlign: "center",
        mx: "auto",
        top: 40,
      }}
    >
      <Container maxWidth="md">
        {/* Breadcrumb */}
        <Typography
          sx={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "208.5%",
            mb: 1,
          }}
        >
          Home <span style={{ color: "#DC7000" }}> &gt; News</span>
        </Typography>

        {/* Main Heading */}
        <Typography
          sx={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 600,
            fontSize: "33px",
            lineHeight: "180.5%",
            mb: 2,
            width: "948px",
            marginLeft: "-50px",
          }}
        >
          Stay Updated with the Latest Game Dev News & Insights
        </Typography>

        {/* Subheading */}
        <Typography
          sx={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 500,
            fontSize: "16px",
            lineHeight: "187.5%",
            color: "#FFFFFF",
            maxWidth: 609,
            mx: "auto",
            mb: 4,
          }}
        >
          Explore behind-the-scenes features, launch updates, design strategies,
          and expert commentary from the world of interactive entertainment.
        </Typography>

        {/* Search Box */}
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <TextField
            placeholder="Search articles, dev logs, or updates..."
            variant="outlined"
            value={searchValue}
            onChange={handleSearch}
            sx={{
              width: 400,
              height: 49,
              background: "#EFEFEF",
              borderRadius: "8px",
              "& .MuiOutlinedInput-root": {
                padding: "0 10px",
                height: "49px",
                borderRadius: "8px",
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: "#000" }} />
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default NewsHero;
