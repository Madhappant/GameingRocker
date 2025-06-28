import React, { useState } from "react";
import {
  Typography,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Button,
  Grid,
  Paper,
  Box,
  Snackbar,
  Alert,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const interests = [
  "Racing",
  "Shooting",
  "Adventure",
  "Puzzle",
  "Action",
  "Sports",
];

// Styled glowing checkbox
const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
  color: "#FF9C00",
  "&.Mui-checked": {
    color: "#FF2E51",
  },
  "& .MuiSvgIcon-root": {
    transition: "0.3s",
    filter: "drop-shadow(0 0 5px #FF2E51)",
  },
}));

const ChooseInterest = () => {
  const [selected, setSelected] = useState([]);
  const navigate = useNavigate();
  const [snackOpen, setSnackOpen] = useState(false);

  const handleToggle = (interest) => {
    setSelected((prev) =>
      prev.includes(interest)
        ? prev.filter((i) => i !== interest)
        : [...prev, interest]
    );
  };

  const handleSubmit = async () => {
    if (selected.length === 0) {
      alert("Please select at least one interest.");
      return;
    }

    // Simulate an API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Selected interests:", selected);

      // Show confirmation
      setSnackOpen(true);
      navigate("/");
      // Optionally: navigate to next page (e.g., home or dashboard)
      // navigate("/home");
    } catch (err) {
      alert("Failed to save interests.");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage:
          "url(https://images.unsplash.com/photo-1601582583331-94010be5f5d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1650&q=80)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: 2,
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Paper
          elevation={10}
          sx={{
            width: "100%",
            maxWidth: 600,
            p: 5,
            borderRadius: 4,
            background: "rgba(15, 6, 38, 0.9)",
            backdropFilter: "blur(10px)",
            boxShadow: "0 0 30px rgba(255, 46, 81, 0.3)",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: "#FF2E51",
              fontWeight: 700,
              textShadow: "0 0 8px #FF2E51",
              mb: 2,
              fontFamily: "'Orbitron', sans-serif",
            }}
          >
            Choose Your Interests
          </Typography>
          <Typography sx={{ color: "#ccc", mb: 4, fontSize: "16px" }}>
            Select the game genres you love most. We'll recommend awesome games
            based on your vibe.
          </Typography>

          <FormGroup>
            <Grid container spacing={2}>
              {interests.map((interest) => (
                <Grid item xs={6} key={interest}>
                  <FormControlLabel
                    control={
                      <CustomCheckbox
                        checked={selected.includes(interest)}
                        onChange={() => handleToggle(interest)}
                      />
                    }
                    label={
                      <Typography
                        sx={{
                          color: "#fff",
                          fontWeight: 600,
                          fontSize: "15px",
                          fontFamily: "'Orbitron', sans-serif",
                        }}
                      >
                        {interest}
                      </Typography>
                    }
                  />
                </Grid>
              ))}
            </Grid>
          </FormGroup>

          <Button
            variant="contained"
            fullWidth
            sx={{
              mt: 4,
              background: "linear-gradient(90deg, #FF2E51 0%, #FF9C00 100%)",
              color: "#fff",
              textTransform: "uppercase",
              fontWeight: 700,
              fontSize: "16px",
              py: 1.4,
              fontFamily: "'Orbitron', sans-serif",
              boxShadow: "0 0 12px #FF2E51",
              transition: "0.3s",
              "&:hover": {
                background: "linear-gradient(90deg, #FF9C00 0%, #FF2E51 100%)",
                boxShadow: "0 0 20px #FF2E51",
              },
            }}
            onClick={handleSubmit}
          >
            Continue
          </Button>
        </Paper>
      </motion.div>

      <Snackbar
        open={snackOpen}
        autoHideDuration={3000}
        onClose={() => setSnackOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          severity="success"
          variant="filled"
          sx={{ fontFamily: "Poppins" }}
        >
          Interests saved successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ChooseInterest;
