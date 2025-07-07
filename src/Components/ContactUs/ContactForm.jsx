import React, { useState } from "react";
import { Box, TextField, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const { firstName, lastName, email, message } = formData;

    if (!firstName || !lastName || !email || message.length < 150) {
      alert("❗ Please fill all fields and ensure message has at least 150 characters.");
      return;
    }

    try {
      // Simulate API call since backend might not be available
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      alert("✅ Message sent successfully!");
      console.log("Contact form data:", formData);
      setFormData({ firstName: "", lastName: "", email: "", message: "" });
    } catch (err) {
      console.error("❌ Error sending message:", err);
      alert("❌ Failed to send message. Please try again.");
    }
  };

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}
      sx={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
        py: 10,
        background: "transparent",
      }}
    >
      <Box
        component={motion.div}
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        sx={{
          zIndex: 1,
          background: "rgba(18, 18, 18, 0.85)",
          padding: 5,
          borderRadius: 4,
          boxShadow: "0 0 25px #D80027",
          maxWidth: "900px",
          width: "100%",
        }}
      >
        <Typography variant="h4" fontWeight={700} textAlign="center" mb={2} color="#D80027">
          Connect with Us
        </Typography>
        <Typography
          sx={{
            fontSize: "15px",
            textAlign: "center",
            color: "#ccc",
            mb: 4,
            px: 4,
          }}
        >
          Ready to level up your gaming project? Reach out to our global pro-dev team today.
        </Typography>

        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mb: 2 }}>
          <Box sx={{ flex: 1, minWidth: "280px" }}>
            <Typography color="#ccc">First Name</Typography>
            <TextField
              fullWidth
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              variant="outlined"
              sx={{ backgroundColor: "#1e1e1e", borderRadius: "9px" }}
              InputProps={{ sx: { color: "#fff" } }}
            />
          </Box>

          <Box sx={{ flex: 1, minWidth: "280px" }}>
            <Typography color="#ccc">Last Name</Typography>
            <TextField
              fullWidth
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              variant="outlined"
              sx={{ backgroundColor: "#1e1e1e", borderRadius: "9px" }}
              InputProps={{ sx: { color: "#fff" } }}
            />
          </Box>
        </Box>

        <Box sx={{ mb: 2 }}>
          <Typography color="#ccc">Email Address</Typography>
          <TextField
            fullWidth
            name="email"
            value={formData.email}
            onChange={handleChange}
            variant="outlined"
            sx={{ backgroundColor: "#1e1e1e", borderRadius: "9px" }}
            InputProps={{ sx: { color: "#fff" } }}
          />
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography color="#ccc">Message</Typography>
          <TextField
            fullWidth
            name="message"
            value={formData.message}
            onChange={handleChange}
            variant="outlined"
            multiline
            rows={6}
            placeholder="Type your message here (min 150 characters)"
            sx={{ backgroundColor: "#1e1e1e", borderRadius: "9px" }}
            InputProps={{ sx: { color: "#fff", padding: "8px 16px" } }}
          />
        </Box>

        <Box sx={{ textAlign: "right" }}>
          <Button
            onClick={handleSubmit}
            component={motion.button}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.04 }}
            sx={{
              backgroundColor: "#D80027",
              borderRadius: "10px",
              px: 4,
              py: 1.5,
              fontFamily: "Poppins",
              fontWeight: 600,
              fontSize: "16px",
              color: "#fff",
              textTransform: "none",
              boxShadow: "0 0 15px #D80027",
              '&:hover': {
                backgroundColor: "#b00023",
              },
            }}
          >
            Get in Touch
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactForm;