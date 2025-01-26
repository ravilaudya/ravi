import { Box, IconButton } from "@mui/material";
import React from "react";
import { GitHub, LinkedIn } from "@mui/icons-material";
import XIcon from "@mui/icons-material/X";

const ContactLinks = () => {
  return (
    <Box
      sx={{
        // position: "absolute",
        // bottom: "40px",
        // left: "30%", // Align with the sidebar padding
        // width: "calc(30% - 80px)", // Match sidebar width minus padding
        display: "flex",
        // justifyContent: "center",
        gap: "10px",
      }}
    >
      <IconButton
        component="a"
        href="https://github.com/ravilaudya"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHub fontSize="large" />
      </IconButton>
      <IconButton
        component="a"
        href="https://www.linkedin.com/in/ravilaudya/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedIn fontSize="large" />
      </IconButton>
      <IconButton
        component="a"
        href="https://x.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <XIcon fontSize="medium" />
      </IconButton>
    </Box>
  );
};
export default ContactLinks;
