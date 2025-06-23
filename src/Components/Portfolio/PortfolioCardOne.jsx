// src/Components/Portfolio/PortfolioCardOne.jsx
import React from "react";
import { Box, Typography, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const PortfolioCardOne = () => {
  return (
    <Box
      sx={{
        background: "transparent",
        position: "relative",
        height: "630px", 
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "0px", 
          left: 0,
          width: "1300px",
          mx: "auto",
        }}
      >
        <Box
          sx={{
            position: "relative",
            height: "600px",
          }}
        >
          {/* Image with Play Icon */}
          <Box
            sx={{
              position: "absolute",
              width: "726px",
              height: "489px",
              left: "109px", 
              top: "55px",
              borderRadius: 12,
              overflow: "hidden",
            }}
          >
            <img
              src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExaDZmZzIxd2o1dG9xYmVqdnJvcHNtZjh5ZWNjaTF3cTB2ODFsNXB1MiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/NIg3yxgxKEPo2eGmFL/giphy.gif" 
              alt="Doom"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <PlayCircleOutlineIcon
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                fontSize: 60,
                color: "#fff",
              }}
            />
          </Box>

          {/* Text with Checklist */}
          <Typography
            sx={{
              position: "absolute",
              width: "472px",
              height: "90px",
              left: "953px", 
              top: "55px",
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: "30px",
              lineHeight: "45px",
              color: "#FFFFFF",
            }}
          >
            Lorem Ipsum is simply <br /> dummy text.
          </Typography>
          <Typography
            sx={{
              position: "absolute",
              width: "536px",
              height: "159px",
              left: "953px",
              top: "180px",
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "17px",
              lineHeight: "26px",
              color: "#CCCCCC",
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dummy .
          </Typography>
          <List dense disablePadding sx={{ position: "absolute", width: "536px", left: "953px", top: "380px" }}>
            {[1, 2, 3, 4].map((item, index) => (
              <ListItem key={index} disableGutters sx={{ py: 0.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#00D563", fontSize: 18 }} />
                </ListItemIcon>
                <ListItemText
                  primary="Lorem Ipsum is simply"
                  primaryTypographyProps={{
                    sx: { fontSize: 14, color: "#ccc" },
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default PortfolioCardOne;