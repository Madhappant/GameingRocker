import React, { useState } from "react";
import {
  Box,
  Typography,
  InputBase,
  Button,
  Paper,
  Snackbar,
  Alert,
} from "@mui/material";
import axios from "axios";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [snack, setSnack] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim()) {
      setSnack({
        open: true,
        message: "Please enter a valid email address.",
        severity: "warning",
      });
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/newsletter/subscribe", {
        email,
      });

      setSnack({ open: true, message: res.data.message, severity: "success" });
      setEmail("");
    } catch (err) {
      const msg =
        err.response?.data?.message || "Subscription failed. Please try again!";
      setSnack({ open: true, message: msg, severity: "error" });
    }
  };

  return (
    <Box
      sx={{
        px: { xs: 3, md: 10 },
        py: { xs: 6, md: 10 },
        backgroundColor: "transparent",
        color: "#FFFFFF",
        width: "100%",
      }}
    >
      {/* Heading */}
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: "32px",
          mb: 2,
          fontFamily: "Poppins",
        }}
      >
        Join the GAMEREALM Insider
      </Typography>

      <Typography
        sx={{
          fontSize: "16px",
          mb: 6,
          fontWeight: 400,
          maxWidth: 700,
        }}
      >
        Get exclusive news, game releases, updates, and early access straight to your inbox.
      </Typography>

      {/* Signup Box */}
      <Box
        sx={{
          backgroundColor: "#0B0B0B",
          borderRadius: "12px",
          p: { xs: 3, md: 4 },
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: { xs: "column", md: "row" },
          gap: 3,
        }}
      >
        {/* Left Text */}
        <Box>
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: "24px",
              mb: 1,
              fontFamily: "Poppins",
            }}
          >
            Stay in the loop
          </Typography>
          <Typography sx={{ fontSize: "16px" }}>
            Subscribe to receive top gaming news and the latest GAMEREALM updates.
          </Typography>
        </Box>

        {/* Input + Button */}
        <Paper
          component="form"
          elevation={0}
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            alignItems: "center",
            height: "48px",
            borderRadius: "12px",
            overflow: "hidden",
            backgroundColor: "#FFFFFF",
            width: "fit-content",
          }}
        >
          <InputBase
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{
              pl: 2,
              pr: 2,
              fontSize: "14px",
              color: "#333",
              width: { xs: "180px", sm: "250px" },
            }}
          />
          <Button
            type="submit"
            sx={{
              backgroundColor: "#FF2E51",
              color: "#fff",
              borderRadius: "8px",
              height: "37px",
              fontSize: "13px",
              fontWeight: 500,
              textTransform: "none",
              marginRight: "7px",
              px: 2,
              "&:hover": {
                backgroundColor: "#e00032",
              },
            }}
          >
            Subscribe
          </Button>
        </Paper>
      </Box>

      {/* Snackbar for Feedback */}
      <Snackbar
        open={snack.open}
        autoHideDuration={4000}
        onClose={() => setSnack({ ...snack, open: false })}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          severity={snack.severity}
          onClose={() => setSnack({ ...snack, open: false })}
          sx={{ width: "100%" }}
        >
          {snack.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default NewsletterSignup;
