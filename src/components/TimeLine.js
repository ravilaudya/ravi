import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experienceData } from "../utility/personalData";
import { Typography } from "@mui/material";

function Timeline({ isDarkMode }) {
  // Dynamic styles for light and dark mode
  const styles = {
    container: {
      color: isDarkMode ? "white" : "black",
      fontFamily: "'Courier Prime', monospace",
    },
    paragraph: {
      color: isDarkMode ? "black" : "rgb(39, 40, 34)",
    },
    heading: {
      color: isDarkMode ? "black" : "rgb(39, 40, 34)",
    },
    date: {
      color: isDarkMode ? "white" : "rgb(39, 40, 34)",
    },
    iconStyle: {
      background: "#1d77d1",
      color: "#fff",
    },
  };

  return (
    <div id="history" style={styles.container}>
      <div className="items-container">
        <VerticalTimeline>
          {experienceData.map((data, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              date={
                <span style={{ color: styles.date.color, fontWeight: "bold" }}>
                  {data.timePeriod}
                </span>
              }
              iconStyle={styles.iconStyle}
              icon={<FontAwesomeIcon icon={faBriefcase} />}
              contentStyle={{
                background: isDarkMode ? "#fff" : "#f9f9f9",
                color: styles.paragraph.color,
              }}
              contentArrowStyle={{
                borderRight: `7px solid ${isDarkMode ? "#333" : "#f9f9f9"}`,
              }}
            >
              <Typography variant="h5" sx={{ color: styles.heading.color }}>
                {`${data.designation}, ${data.company}, ${data.workLocation}`}
              </Typography>
              <Typography sx={{ color: styles.paragraph.color }}>
                {data.rolesAndResp[0]}
              </Typography>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
