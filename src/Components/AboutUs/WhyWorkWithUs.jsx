import React from "react";
import { Box, Typography, Stack } from "@mui/material";

const AboutUsCards = () => {
  return (
    <Box
      sx={{
        position: "relative",
        padding: "60px 40px",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      {/* Heading */}
      <Typography
        variant="h4"
        sx={{
          width: "267px",
          height: 45,
          fontSize: "24px",
          fontWeight: 600,
          lineHeight: "36px",
          marginBottom: "40px",
          textAlign: "center",
          color: "#FFFFFF",
          marginLeft: "40px",
        }}
      >
        Why work with us
      </Typography>

      {/* Card Container */}
      <Stack
        direction="row"
        justifyContent="space-between"
        spacing={3}
        sx={{ maxWidth: "1300px", margin: "0 auto" }}
      >
        {/* Card 1 */}
        <Box
          sx={{
            backgroundColor: "#FFFFFF",
            width: "388px",
            height: "378px",
            borderRadius: "20px",
            padding: "20px",
            boxShadow: "0px 4px 94px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Typography
            variant="caption"
            sx={{
              backgroundColor: "#B000DC1C",
              color: "#000000",
              padding: "4px 12px",
              width: "140px",
              height: "39px",
              fontSize: "12px",
              fontWeight: 500,
              borderRadius: "8px",
              marginBottom: "20px",
              display: "inline-block",
              textAlign: "center",
              paddingTop: "10px",
              marginTop: "40px",
              marginLeft: "20px",
            }}
          >
            Lorem ipsum
          </Typography>
          <Typography
            variant="h6"
            sx={{
              width: "133px",
              height: "38px",
              fontSize: "20px",
              fontWeight: 600,
              lineHeight: "38px",
              color: "#000000",
              marginBottom: "40px",
              marginLeft: "20px",
            }}
          >
            Lorem Ipsum
          </Typography>
          <Typography
            variant="body2"
            sx={{
              width: "304px",
              height: "108px",
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: "26px",
              color: "#333333",
              marginLeft: "20px",
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </Typography>
        </Box>

        {/* Card 2 */}
        <Box
          sx={{
            backgroundColor: "#FFFFFF",
            width: "388px",
            height: "378px",
            borderRadius: "20px",
            padding: "20px",
            boxShadow: "0px 4px 94px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Typography
            variant="caption"
            sx={{
              backgroundColor: "#DC42001C",
              color: "#000000",
              padding: "4px 12px",
              width: "140px",
              height: "39px",
              fontSize: "12px",
              borderRadius: "8px",
              fontWeight: 500,
              marginBottom: "20px",
              display: "inline-block",
              textAlign: "center",
              paddingTop: "10px",
              marginTop: "40px",
              marginLeft: "20px",
            }}
          >
            Lorem ipsum
          </Typography>
          <Typography
            variant="h6"
            sx={{
              width: "133px",
              height: "38px",
              fontSize: "20px",
              fontWeight: 600,
              lineHeight: "38px",
              color: "#000000",
              marginBottom: "40px",
              marginLeft: "20px",
            }}
          >
            Lorem Ipsum
          </Typography>
          <Typography
            variant="body2"
            sx={{
              width: "304px",
              height: "108px",
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: "26px",
              color: "#333333",
              marginLeft: "20px",
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </Typography>
        </Box>

        {/* Card 3 */}
        <Box
          sx={{
            backgroundColor: "#FFFFFF",
            width: "388px",
            height: "378px",
            borderRadius: "20px",
            padding: "20px",
            boxShadow: "0px 4px 94px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Typography
            variant="caption"
            sx={{
              backgroundColor: "#00DC8D1C",
              color: "#000000",
              padding: "4px 12px",
              width: "140px",
              height: "39px",
              borderRadius: "8px",
              fontSize: "12px",
              fontWeight: 500,
              marginBottom: "20px",
              display: "inline-block",
              textAlign: "center",
              paddingTop: "10px",
              marginTop: "40px",
              marginLeft: "20px",
            }}
          >
            Lorem ipsum
          </Typography>
          <Typography
            variant="h6"
            sx={{
              width: "133px",
              height: "38px",
              fontSize: "20px",
              fontWeight: 600,
              lineHeight: "38px",
              color: "#000000",
              marginBottom: "40px",
              marginLeft: "20px",
            }}
          >
            Lorem Ipsum
          </Typography>
          <Typography
            variant="body2"
            sx={{
              width: "304px",
              height: "108px",
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: "26px",
              color: "#333333",
              marginLeft: "20px",
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default AboutUsCards;
