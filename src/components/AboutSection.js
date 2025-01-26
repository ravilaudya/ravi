import { Box, Typography } from "@mui/material";
import React from "react";

const AboutSection = ({ aboutRef }) => {
  return (
    <Box sx={{ mb: 2 }}>
      <section id="about" ref={aboutRef}>
        <Typography variant="h5" fontWeight={"bold"} sx={{ mb: 1 }}>
          About
        </Typography>
        <Typography
          variant="body1"
          sx={{ letterSpacing: "0.5px", textIndent: "50px" }}
        >
          I am a technology expert with over 19 years of experience in software
          architecture, design, and development utilizing cloud & AI
          technologies. My expertise lies in building cloud-based applications
          for enterprises, prioritizing scalability, reliability, security and
          performance. As a former CTO for a startup, I successfully spearheaded
          initiatives that transformed innovative concepts into market-ready
          solutions. I have collaborated with several innovative startups that
          achieved acquisition and went public.
        </Typography>
      </section>
    </Box>
  );
};

export default AboutSection;
