import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";

const LibraryGrid = ({ cards = [] }) => {
  return (
    <Grid container spacing={3} mt={4} px={4}>
      {cards.map((item, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Box
            sx={{
              borderRadius: 3,
              overflow: "hidden",
              position: "relative",
              cursor: "pointer",
              transition: "all 0.3s ease-in-out",
              backgroundColor: "#1C1C1C",
              boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0 12px 32px rgba(0,0,0,0.6)",
              },
            }}
          >
            <Box
              sx={{
                position: "relative",
                height: 200,
                overflow: "hidden",
              }}
            >
              <Box
                component="img"
                src={item.img}
                alt={item.title}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "0.3s",
                  filter: "brightness(85%)",
                  "&:hover": {
                    filter: "brightness(105%)",
                  },
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "50%",
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0))",
                }}
              />
            </Box>

            <Box px={3} py={2}>
              <Box display="flex" alignItems="center" gap={1} mb={1}>
                <Button
                  size="small"
                  sx={{
                    background: "#DC7000",
                    color: "white",
                    textTransform: "none",
                    fontSize: 10,
                    px: 1.5,
                    borderRadius: 1,
                    boxShadow: "0px 2px 6px rgba(220,112,0,0.4)",
                  }}
                >
                  {item.author}
                </Button>
                <Typography sx={{ fontSize: 10, color: "#bbb" }}>
                  {item.tag}
                </Typography>
                <Typography sx={{ fontSize: 10, color: "#bbb" }}>
                  {item.time}
                </Typography>
              </Box>
              <Typography
                variant="body2"
                fontWeight="bold"
                sx={{
                  fontSize: 14,
                  color: "#fff",
                  lineHeight: 1.4,
                  minHeight: 40,
                }}
              >
                {item.title}
              </Typography>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default LibraryGrid;
