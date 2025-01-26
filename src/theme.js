// theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    h1: {
      color: "#333333", // Default color for h1
      letterSpacing: "1.2px", // Add letter spacing
    },
    h2: {
      color: "#333333", // Default color for h2
      letterSpacing: "1.2px", // Add letter spacing
    },
    h3: {
      color: "#333333", // Default color for h3
      letterSpacing: "1.2px", // Add letter spacing
    },
    h5: {
      color: "#98A579",
      letterSpacing: "0.8px",
    },
    h6: {
      color: "#ADBF9A",
      fontSize: "1.256rem",
    },

    body1: {
      color: "#171717", // Default color for body1
      letterSpacing: "0.8px",
    },
    body2: {
      color: "#333333", // Default color for body2
      letterSpacing: "0.8px",
    },
  },
  palette: {
    primary: {
      main: "#98a579", // Light beige
    },
    secondary: {
      main: "#ADBF9A", // Pastel blue
    },
    background: {
      default: "#f2f7fc", // Light pastel
    },
    text: {
      primary: "#333333", // Default text color for other components
      secondary: "#666666", // Secondary text color
    },
  },
});

export default theme;
