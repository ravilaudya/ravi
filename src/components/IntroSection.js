import React from "react";
import { Box, Typography } from "@mui/material";
import profilePic from "../Assets/Ravi.png";

const IntroSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "center",
        // width: "100vw",
        // height: "100vh",
        px: 4,
        py: 2,
        margin: "0 auto",
        // backgroundColor: "#f9f9f9",
      }}
    >
      {/* Left Section */}
      <Box
        component="img"
        src={profilePic} // Replace with the actual image URL or import
        alt="Interactive Designer"
        sx={{
          width: { xs: "100%", md: "40%" },
          maxWidth: 400,
          borderRadius: 2,
        }}
      />

      {/* Right Section */}
      <Box
        sx={{
          textAlign: { xs: "center", md: "left" },
          maxWidth: 500,
          margin: "12px 48px",
        }}
      >
        {/* <Box sx={{ textAlign: "center", marginBottom: "2rem" }}> */}
        <Typography
          variant="subtitle1"
          sx={{
            color: "gray",
            fontWeight: 400,
            fontSize: { xs: "0.9rem", sm: "1rem" },
            textAlign: "center",
            letterSpacing: "2px", // Add letter spacing
          }}
        >
          WELCOME TO MY WORLD
        </Typography>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            marginTop: "0.5rem",
            fontSize: { xs: "1.8rem", sm: "2.5rem" },
            textAlign: "center",
            letterSpacing: "1.2px", // Add letter spacing
          }}
        >
          Hi, I’m Ravi Laudya
        </Typography>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            fontSize: { xs: "1.2rem", sm: "1.75rem" },
            marginTop: "1rem",
            textAlign: "center",
            letterSpacing: "1.2px", // Add letter spacing
          }}
        >
          a Development Expert.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            marginTop: "1.5rem",
            maxWidth: "600px",
            marginX: "auto",
            textIndent: 50,
            fontSize: { xs: "0.9rem", sm: "1rem" },
            lineHeight: 1.6,
          }}
        >
          I am a technology expert with over 19 years of experience in software
          architecture, design, and development utilizing cloud & AI
          technologies. My expertise lies in building cloud-based applications
          for enterprises, prioritizing scalability, reliability, security, and
          performance. As a former CTO for a startup, I successfully spearheaded
          initiatives that transformed innovative concepts into market-ready
          solutions. I have collaborated with several innovative startups that
          achieved acquisition and went public.
        </Typography>
        {/* </Box> */}
        {/* <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "center", md: "flex-start" },
            gap: 2,
          }}
        >
          <Button variant="contained" color="primary">
            Book a Call
          </Button>
          <Button variant="outlined" color="primary">
            My Works
          </Button>
        </Box> */}
        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "center", md: "flex-start" },
            gap: 1.5,
            mt: 4,
          }}
        >
          {/* Replace with actual icons */}
        </Box>
      </Box>
    </Box>
  );
};

export default IntroSection;
