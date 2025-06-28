import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
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
          {/* Game GIF with Play Icon */}
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
              alt="Gameplay preview"
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

          {/* Description Section */}
          <Typography
            sx={{
              position: "absolute",
              width: "472px",
              left: "953px",
              top: "55px",
              fontFamily: "Poppins",
              fontWeight: 500,
              fontSize: "30px",
              lineHeight: "45px",
              color: "#FFFFFF",
            }}
          >
            DOOM: Eternal Inferno
          </Typography>

          <Typography
            sx={{
              position: "absolute",
              width: "536px",
              left: "953px",
              top: "180px",
              fontFamily: "Poppins",
              fontWeight: 400,
              fontSize: "17px",
              lineHeight: "26px",
              color: "#CCCCCC",
            }}
          >
            Experience the ultimate fast-paced, demon-slaying mayhem. Designed
            for thrill seekers and FPS veterans, DOOM: Eternal Inferno pushes
            visuals, speed, and chaos to new heights.
          </Typography>

          {/* Features List */}
          <List
            dense
            disablePadding
            sx={{
              position: "absolute",
              width: "536px",
              left: "953px",
              top: "380px",
            }}
          >
            {[
              "Hyper-fast combat mechanics",
              "Real-time lighting and particle effects",
              "Multiplayer deathmatch and co-op mode",
              "Built with Unreal Engine 5",
            ].map((text, index) => (
              <ListItem key={index} disableGutters sx={{ py: 0.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: "#00D563", fontSize: 18 }} />
                </ListItemIcon>
                <ListItemText
                  primary={text}
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
