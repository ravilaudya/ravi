import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material";
import { menuItems } from "../utility/constants";
import { Brightness4, Brightness7 } from "@mui/icons-material";

const Header = ({ darkMode, setDarkMode }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md")); // Check for mobile view

  const handleNavigate = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    if (isMobile) {
      setDrawerOpen(false); // Close the drawer on mobile
    }
  };

  return (
    <AppBar
      position="fixed" // Changed to "fixed" for a sticky header
      color="transparent"
      elevation={0}
      sx={{
        top: 0, // Ensures it sticks to the top
        zIndex: (theme) => theme.zIndex.drawer + 1, // Ensure it stays above other components
        backgroundColor: darkMode ? "#121212" : "#ffffff", // Dynamic background
        transition: "background-color 0.3s ease-in-out",
      }}
    >
      <Toolbar sx={{ justifyContent: "flex-end" }}>
        {/* Desktop Navigation */}
        {!isMobile && (
          <Box sx={{ display: "flex", gap: 3 }}>
            {menuItems.map((item) => (
              <Button
                key={item.id}
                onClick={() => handleNavigate(item.id)} // Call handleNavigate
                sx={{
                  color: "dynamicTextColor",
                  fontSize: "16px",
                  fontWeight: "bold",
                  textTransform: "none",
                  letterSpacing: "1.5px", // Add letter spacing
                }}
              >
                {item.title}
              </Button>
            ))}
            <IconButton color="inherit" onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? <Brightness7 /> : <Brightness4 />}
            </IconButton>
          </Box>
        )}

        {/* Mobile Hamburger Menu */}
        {isMobile && (
          <IconButton
            edge="end"
            color="inherit"
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        )}
      </Toolbar>

      {/* Drawer for Mobile Menu */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box
          sx={{
            width: 250,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          {/* Close Button */}
          <Box display="flex" justifyContent="flex-end" p={2}>
            <IconButton
              onClick={() => setDrawerOpen(false)}
              sx={{ color: "black" }}
            >
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Navigation Links */}
          <List>
            {menuItems.map((item) => (
              <ListItem key={item.id} disablePadding>
                <ListItemButton onClick={() => handleNavigate(item.route)}>
                  <ListItemText
                    primary={item.title}
                    sx={{
                      textAlign: "center",
                      color: "white",
                      letterSpacing: "2px", // Add letter spacing
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          {/* Footer Text in Drawer */}
          <Box p={2}>
            <Typography variant="body2" textAlign="center">
              © 2025 Ravi Laudya
            </Typography>
          </Box>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Header;
