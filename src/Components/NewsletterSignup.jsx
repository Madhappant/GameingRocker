// src/Components/Home/NewsletterSignup.jsx
import React from "react";
import { Box, Typography, InputBase, Button, Paper } from "@mui/material";

const NewsletterSignup = () => {
  return (
    <Box
      sx={{
        px: "135px",
        py: "80px",
        backgroundColor: "transparent",
        color: "#FFFFFF",
      }}
    >
      {/* Heading */}
      <Typography
        sx={{
          fontFamily: "Poppins",
          fontStyle: "normal",
          fontWeight: 600,
          fontSize: "30px",
          lineHeight: "187.5%",
          width: "209px",
          height: "40px",
          mb: 4,
        }}
      >
        Lorem Ipsum
      </Typography>

      {/* Subtext */}
      <Typography
        sx={{
          fontFamily: "Poppins",
          fontStyle: "normal",
          fontWeight: 400,
          fontSize: "16px",
          lineHeight: "187.5%",
          width: "545px",
          height: "57px",
          mb: 8,
        }}
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </Typography>

      {/* Signup Box */}
      <Box
        sx={{
          backgroundColor: "#FFFFFF",
          borderRadius: "12px",
          p: { xs: 3, md: 4 },
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        {/* Left Text */}
        <Box sx={{ mb: { xs: 3, md: 0 } }}>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: "30px",
              lineHeight: "45px",
              width: "303px",
              height: "45px",
              color: "#000000",
              mb: 1,
            }}
          >
            Stay in the loop
          </Typography>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "17px",
              lineHeight: "26px",
              width: "636px",
              height: "52px",
              color: "#000000",
            }}
          >
            Subscribe to receive the latest news and updates about TDA. <br />
            We promise not to spam you!
          </Typography>
        </Box>

        {/* Input + Button */}
        <Paper
          component="form"
          elevation={0}
          sx={{
            display: "flex",
            alignItems: "center",
            height: "48px",
            borderRadius: "12px",
            overflow: "hidden",
            backgroundColor: "#000",
            width: "fit-content",
          }}
        >
          <InputBase
            placeholder="Enter email address"
            sx={{
              pl: 2,
              pr: 2,
              fontSize: "14px",
              color: "#fff",
              fontFamily: "Poppins",
              width: { xs: "180px", sm: "250px" },
            }}
            inputProps={{ "aria-label": "email address" }}
          />
          <Button
            type="submit"
            sx={{
              width: "104.99px",
              height: "37px",
              fontSize: "13px",
              fontWeight: 500,
              fontFamily: "Poppins",
              backgroundColor: "#FF2E51",
              color: "#fff",
              borderRadius: "8px",
              textTransform: "none",
              px: 0,
              minWidth: "unset",
              marginRight: "7px",
              boxShadow: "none",
              "&:hover": {
                backgroundColor: "#e00032",
                boxShadow: "none",
              },
            }}
          >
            Continue
          </Button>
        </Paper>
      </Box>
    </Box>
  );
};

export default NewsletterSignup;
