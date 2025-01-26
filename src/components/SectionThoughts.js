import React from "react";
import { motion } from "framer-motion";
import { Typography, useMediaQuery } from "@mui/material";

function SectionThoughts({ title, data }) {
  const isMobile = useMediaQuery("(max-width:700px)");

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    padding: isMobile ? "5%" : "5% 10%",
    textAlign: "left",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: isMobile ? "repeat(1, 1fr)" : "repeat(3, 1fr)",
    gridGap: isMobile ? "20px" : "30px",
  };

  const projectStyle = {
    textAlign: "left",
    paddingBottom: isMobile ? "5%" : "0",
  };

  const titleStyle = {
    textDecoration: "none",
    transition:
      "color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out",
  };

  return (
    <div className="projects-container" style={containerStyle} id="projects">
      <div className="projects-grid" style={gridStyle}>
        {data.map((project, index) => (
          <motion.div
            key={index}
            className="project"
            style={projectStyle}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <a href={project.link} target="_blank" rel="noreferrer">
              <motion.img
                src={project.image}
                className="zoom"
                alt="thumbnail"
                width="100%"
                style={{ borderRadius: "5px", margin: "0 auto" }}
                whileHover={{ scale: 1.05 }}
              />
            </a>
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              style={titleStyle}
            >
              <Typography
                variant="h5"
                color="dynamicTextColor"
                sx={{ margin: "12px 0" }}
              >
                {project.title}
              </Typography>
            </a>
            <p>{project.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default SectionThoughts;
