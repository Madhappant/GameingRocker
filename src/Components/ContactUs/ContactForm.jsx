import { Box, TextField, Typography, Button } from "@mui/material";

const ContactForm = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "1540px",
        height: "1058px",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* 🔁 Background GIF */}
      <Box
        component="img"
        src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExYnl2a3cwdzBzZzdrb3I4NXM0cGljdm42ZHR6cWg3eXJqNGlxdDBjeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/cdMfX3KSHYcewmjDZ5/giphy.gif"
        alt="bg"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      />

      {/* 🔳 All Form Content Inside This Box */}
      <Box sx={{ position: "relative", zIndex: 1, width: "100%" , bottom: "430px" }}>
        {/* Say Hello */}
        <Typography
          sx={{
            position: "absolute",
            width: "135px",
            height: "57px",
            left: "654px",
            top: "54px",
            fontFamily: "Poppins",
            fontWeight: 400,
            fontSize: "30px",
            lineHeight: "189.5%",
            color: "#000000",
          }}
        >
          Say hello
        </Typography>

        {/* Subtext */}
        <Typography
          sx={{
            position: "absolute",
            width: "432px",
            height: "26px",
            left: "505px",
            top: "111px",
            fontFamily: "Poppins",
            fontWeight: 500,
            fontSize: "13px",
            lineHeight: "189.5%",
            textAlign: "center",
            color: "#000000",
          }}
        >
          Lorem Ipsum is simply dummy text of the printing .
        </Typography>

        {/* First Name */}
        <Typography
          sx={{
            position: "absolute",
            left: "385px",
            top: "216px",
            fontFamily: "Poppins",
            fontWeight: 500,
            fontSize: "14px",
            lineHeight: "175.4%",
            letterSpacing: "-0.3px",
            color: "#000000",
          }}
        >
          First Name
        </Typography>
        <TextField
          variant="outlined"
          sx={{
            position: "absolute",
            width: "322px",
            height: "56px",
            left: "385px",
            top: "247px",
            backgroundColor: "#000000",
            borderRadius: "9px",
            input: { color: "#fff", height: "56px", padding: "0 16px" },
          }}
        />

        {/* Last Name */}
        <Typography
          sx={{
            position: "absolute",
            left: "734px",
            top: "216px",
            fontFamily: "Poppins",
            fontWeight: 500,
            fontSize: "14px",
            lineHeight: "175.4%",
            letterSpacing: "-0.3px",
            color: "#000000",
          }}
        >
          Last Name
        </Typography>
        <TextField
          variant="outlined"
          sx={{
            position: "absolute",
            width: "322px",
            height: "56px",
            left: "734px",
            top: "247px",
            backgroundColor: "#000000",
            borderRadius: "9px",
            input: { color: "#fff", height: "56px", padding: "0 16px" },
          }}
        />

        {/* Email */}
        <Typography
          sx={{
            position: "absolute",
            left: "385px",
            top: "323px",
            fontFamily: "Poppins",
            fontWeight: 500,
            fontSize: "14px",
            lineHeight: "175.4%",
            letterSpacing: "-0.3px",
            color: "#000000",
          }}
        >
          Email Address
        </Typography>
        <TextField
          variant="outlined"
          sx={{
            position: "absolute",
            width: "671px",
            height: "56px",
            left: "385px",
            top: "354px",
            backgroundColor: "#000000",
            borderRadius: "9px",
            input: { color: "#fff", height: "56px", padding: "0 16px" },
          }}
        />

        {/* Message */}
        <Typography
          sx={{
            position: "absolute",
            left: "385px",
            top: "430px",
            fontFamily: "Poppins",
            fontWeight: 500,
            fontSize: "14px",
            lineHeight: "175.4%",
            letterSpacing: "-0.3px",
            color: "#000000",
          }}
        >
          Message
        </Typography>
        <TextField
          variant="outlined"
          multiline
          rows={7}
          placeholder="Message"
          sx={{
            position: "absolute",
            width: "671px",
            height: "260px",
            left: "385px",
            top: "458px",
            backgroundColor: "#000000",
            borderRadius: "9px",
            "& .MuiInputBase-root": {
              color: "#fff",
              padding: "8px 16px",
            },
          }}
        />

        {/* Button */}
        <Button
          sx={{
            position: "absolute",
            width: "193px",
            height: "57px",
            left: "863px",
            top: "769px",
            backgroundColor: "#D80027",
            borderRadius: "10px",
            textTransform: "none",
            fontFamily: "Poppins",
            fontWeight: 400,
            fontSize: "16px",
            color: "#000000",
            lineHeight: "204.3%",
            "&:hover": {
              backgroundColor: "#b00023",
            },
          }}
        >
          Get in touch
        </Button>
      </Box>
    </Box>
  );
};

export default ContactForm;
