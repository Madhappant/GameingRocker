import React from "react";
import { Box, Typography, Card, CardContent, Avatar } from "@mui/material";
import { styled } from "@mui/system";
import avatar1 from "../../Assets/Bill 1.png"
import avatar2 from "../../Assets/Beverly 1.png"
import avatar3 from "../../Assets/Claudia 1.png"
import avatar4 from "../../Assets/Avatar 1.png"

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: "#1C140F",
  borderRadius: "10px",
  textAlign: "center",
  color: "#fff",
  width: "305px",
  height: "273px",
  left: "180px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: "123px",
  height: "123px",
  margin: "15px auto",
}));

const AboutUsComponent = () => {
  return (
    <Box
      sx={{
        backgroundColor: "transparent",
        padding: "40px",
        textAlign: "center",
        height: "520px",
        width: "1550px",
      }}
    >
      <Typography
        variant="h4"
        sx={{ color: "#e0e0e0", marginBottom: "40px", fontWeight: 500 , textAlign: "left" , marginLeft:"65px", p:"20px"}}
      >
        Our Team
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "35px",
          flexWrap: "wrap",
        }}
      >
        <StyledCard>
          <CardContent>
            <StyledAvatar alt="John Peter" src={avatar1}/>
            <Typography
                variant="h6"
              sx={{
                fontSize: "19px",
                marginBottom: "5px",
                color: "#FFFFFF",
                lineHeight: "202.99999999999997%",
                letterSpacing: "0%",
                fontWeight: 600,
              }}
            >
              John Peter
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontSize: "16px",
                color: "#E8E8E8",
                lineHeight: "202.99999999999997%",
                letterSpacing: "0%",
                fontWeight: 300,
              }}
            >
              COO
            </Typography>
          </CardContent>
        </StyledCard>
        <StyledCard>
          <CardContent>
            <StyledAvatar alt="John Peter" src={avatar2} />
            <Typography
             variant="h6"
              sx={{
                fontSize: "19px",
                marginBottom: "5px",
                color: "#FFFFFF",
                lineHeight: "202.99999999999997%",
                letterSpacing: "0%",
                fontWeight: 600,
              }}
            >
              John Peter
            </Typography>
            <Typography
               variant="body2"
              sx={{
                fontSize: "16px",
                color: "#E8E8E8",
                lineHeight: "202.99999999999997%",
                letterSpacing: "0%",
                fontWeight: 300,
              }}
            >
              COO
            </Typography>
          </CardContent>
        </StyledCard>
        <StyledCard>
          <CardContent>
            <StyledAvatar alt="John Peter" src={avatar3} />
            <Typography
              variant="h6"
              sx={{
                fontSize: "19px",
                marginBottom: "5px",
                color: "#FFFFFF",
                lineHeight: "202.99999999999997%",
                letterSpacing: "0%",
                fontWeight: 600,
              }}
            >
              John Peter
            </Typography>
            <Typography
               variant="body2"
              sx={{
                fontSize: "16px",
                color: "#E8E8E8",
                lineHeight: "202.99999999999997%",
                letterSpacing: "0%",
                fontWeight: 300,
              }}
            >
              COO
            </Typography>
          </CardContent>
        </StyledCard>
        <StyledCard>
          <CardContent>
            <StyledAvatar alt="John Peter" src={avatar4} />
            <Typography
              variant="h6"
              sx={{
                fontSize: "19px",
                marginBottom: "5px",
                color: "#FFFFFF",
                lineHeight: "202.99999999999997%",
                letterSpacing: "0%",
                fontWeight: 600,
              }}
            >
              John Peter
            </Typography>
            <Typography
               variant="body2"
              sx={{
                fontSize: "16px",
                color: "#E8E8E8",
                lineHeight: "202.99999999999997%",
                letterSpacing: "0%",
                fontWeight: 300,
              }}
            >
              COO
            </Typography>
          </CardContent>
        </StyledCard>
      </Box>
    </Box>
  );
};

export default AboutUsComponent;
