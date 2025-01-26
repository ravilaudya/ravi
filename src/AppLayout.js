import React, { useState } from "react";
import {
  createTheme,
  ThemeProvider,
  CssBaseline,
  Box,
  Typography,
} from "@mui/material";
import ThoughtLeadership from "./components/ToughtAndLeadership";
import Header from "./components/Header";
import Timeline from "./components/TimeLine";
import Awards from "./components/Awards";
import ContactLinks from "./components/ContactLinks";
import profilePic from "./Assets/Ravi.png";

const AppLayout = () => {
  const [darkMode, setDarkMode] = useState(true);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: { main: "#1d77d1" },
      // primary: { main: "#6a00f4" },
      secondary: { main: "#ffffff" },
      background: {
        default: darkMode ? "#121212" : "#ffffff",
        // default: darkMode ? "#121212" : "#ffffff",
        paper: darkMode ? "#1d1d1d" : "#f5f5f5",
      },
      dynamicTextColor: darkMode ? "#ffffff" : "#272822",
    },
    typography: {
      fontFamily: "'Roboto', sans-serif",
      letterSpacing: "2.2px",
      color: darkMode ? "#ffffff" : "#272822",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "80vh",
          textAlign: "center",
          background: `linear-gradient(135deg, transparent 50%, ${theme.palette.primary.main} 100%)`,
        }}
        id="home"
      >
        <Box
          component="img"
          src={profilePic} // Replace with the actual image URL or import
          alt="Interactive Designer"
          sx={{
            width: "10%",
            maxWidth: 400,
            borderRadius: "50%", // Makes the image circular
            marginRight: 4, // Adds margin to the right of the image
          }}
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <ContactLinks />
          </Box>
          <Typography variant="h2" fontWeight="bold" mt={2}>
            Ravi Laudya
          </Typography>
          <Typography variant="h5" color="text.secondary">
            Development Expert.
          </Typography>
        </Box>
      </Box>
      <Box>
        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign="center"
          letterSpacing={2}
          mt={4}
          mb={2}
          id="articles"
        >
          Articles
        </Typography>
        <ThoughtLeadership />
      </Box>
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign="center"
          letterSpacing={2}
          mt={4}
          mb={2}
          id="experience"
        >
          Experience
        </Typography>
        <Timeline isDarkMode={darkMode} />
      </Box>
      <Box id="awards">
        <Awards />
      </Box>
    </ThemeProvider>
  );
};

export default AppLayout;
