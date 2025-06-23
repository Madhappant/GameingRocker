import React from "react";
import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  Container,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const NewsHero = () => {
  return (
    <Box
      sx={{
        background: "transparent",
        color: "#FFFFFF",
        py: { xs: 8, md: 12 },
        textAlign: "center",
        mx: "auto",
      }}
    >
      <Container maxWidth="md">
        {/* Home > News breadcrumb */}
        <Typography
          sx={{
            fontFamily: "'Poppins', sans-serif",
            fontStyle: "normal",
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
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: "33px",
            lineHeight: "180.5%",
            mb: 2,
            width: "948px",
            marginLeft: "-50px",
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and.
        </Typography>

        {/* Subheading */}
        <Typography
          sx={{
            fontFamily: "'Poppins', sans-serif",
            fontStyle: "normal",
            fontWeight: 500,
            fontSize: "16px",
            lineHeight: "187.5%",
            color: "#FFFFFF",
            maxWidth: 609,
            mx: "auto",
            mb: 4,
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Typography>

        {/* Search Box */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <TextField
            placeholder="Search"
            variant="outlined"
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
