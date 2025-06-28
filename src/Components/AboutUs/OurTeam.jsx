import React from "react";
import { Box, Typography, Card, CardContent, Avatar } from "@mui/material";
import { styled } from "@mui/system";
import avatar1 from "../../Assets/Bill 1.png";
import avatar2 from "../../Assets/Beverly 1.png";
import avatar3 from "../../Assets/Claudia 1.png";
import avatar4 from "../../Assets/Avatar 1.png";

// Styled Components
const StyledCard = styled(Card)(() => ({
  backgroundColor: "#1C140F",
  borderRadius: "10px",
  textAlign: "center",
  color: "#fff",
  width: "305px",
  height: "273px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
}));

const StyledAvatar = styled(Avatar)(() => ({
  width: "123px",
  height: "123px",
  margin: "15px auto",
}));

// Team data
const team = [
  {
    name: "Bill Travers",
    role: "Chief Executive Officer",
    avatar: avatar1,
  },
  {
    name: "Beverly James",
    role: "Lead Game Designer",
    avatar: avatar2,
  },
  {
    name: "Claudia Mason",
    role: "3D Art Director",
    avatar: avatar3,
  },
  {
    name: "Ethan Knight",
    role: "Technical Director",
    avatar: avatar4,
  },
];

const AboutUsComponent = () => {
  return (
    <Box
      sx={{
        backgroundColor: "transparent",
        padding: "40px",
        textAlign: "center",
        width: "100%",
        maxWidth: "1550px",
        mx: "auto",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          color: "#e0e0e0",
          marginBottom: "40px",
          fontWeight: 500,
          textAlign: "left",
          marginLeft: "65px",
          p: "20px",
        }}
      >
        Meet Our Game Architects
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "35px",
          flexWrap: "wrap",
        }}
      >
        {team.map((member, index) => (
          <StyledCard key={index}>
            <CardContent>
              <StyledAvatar alt={member.name} src={member.avatar} />
              <Typography
                variant="h6"
                sx={{
                  fontSize: "19px",
                  marginBottom: "5px",
                  color: "#FFFFFF",
                  lineHeight: "202.9%",
                  fontWeight: 600,
                }}
              >
                {member.name}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: "16px",
                  color: "#E8E8E8",
                  lineHeight: "203%",
                  fontWeight: 300,
                }}
              >
                {member.role}
              </Typography>
            </CardContent>
          </StyledCard>
        ))}
      </Box>
    </Box>
  );
};

export default AboutUsComponent;
