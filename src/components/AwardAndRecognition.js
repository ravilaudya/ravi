import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import { awardsData } from "./dummy";

const AwardAndRecognition = () => {
  return (
    <Box
      sx={{ mb: { xs: 2, sm: 4 }, mt: { xs: 2, sm: 4 }, px: { xs: 2, sm: 4 } }}
    >
      <section id="award">
        <Typography
          variant="h5"
          fontWeight="bold"
          sx={{
            mb: { xs: 3, sm: 4 },
            textAlign: { xs: "center", sm: "left" },
            fontSize: { xs: "1.5rem", sm: "2rem" },
          }}
        >
          Awards & Recognitions
        </Typography>
        <Grid
          container
          spacing={4}
          justifyContent="center"
          sx={{
            display: "grid",
            mt: 3,
            gridTemplateColumns: {
              xs: "1fr", // 1 card per row for small screens
              sm: "repeat(2, 1fr)", // 2 cards per row for medium screens
              lg: "repeat(3, 1fr)", // 3 cards per row for large screens
            },
            gap: { xs: 2, sm: 4 }, // Responsive gap
          }}
        >
          {awardsData.map((item, index) => (
            <Card
              key={index}
              sx={{
                textAlign: "center",
                width: "100%",
                minHeight: 200,
                background: "#dae3de",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", // Add shadow
                "&:hover": {
                  boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.3)", // Hover shadow effect
                },
              }}
            >
              <CardContent>
                <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
                  <MilitaryTechIcon
                    sx={{
                      fontSize: { xs: 50, sm: 60 }, // Responsive icon size
                      color: "#98a579",
                    }}
                  />
                </Box>
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: 400,
                    fontSize: { xs: "0.9rem", sm: "1rem" }, // Responsive font size
                  }}
                >
                  {item}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Grid>
      </section>
    </Box>
  );
};

export default AwardAndRecognition;
