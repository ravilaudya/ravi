import React, { useState } from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { motion } from "framer-motion";
import {
  authorshipData,
  membershipsData,
  mentorsData,
  judgingData,
  reviewsData,
} from "../utility/personalData";
import SectionThoughts from "./SectionThoughts";

// const cardVariants = {
//   hidden: { opacity: 0, y: 50 },
//   visible: { opacity: 1, y: 0 },
// };

const accordionVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

// const Section = ({ title, data }) => {
//   return (
//     <Grid container spacing={3} justifyContent="flex-start">
//       {data.map((item, index) => (
//         <Grid item xs={12} sm={6} md={4} key={index}>
//           <motion.div
//             variants={cardVariants}
//             initial="hidden"
//             animate="visible"
//             exit="hidden"
//             transition={{
//               duration: 1,
//               delay: index * 0.2,
//             }}
//           >
//             <Card
//               sx={{
//                 width: "100%",
//                 maxWidth: "380px",
//                 height: "400px",
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "space-between",
//                 boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
//                 transition: "transform 0.3s, box-shadow 0.3s",
//                 "&:hover": {
//                   transform: "scale(1.03)",
//                   boxShadow: "0 6px 20px rgba(0, 0, 0, 0.2)",
//                 },
//                 margin: "0 auto",
//                 position: "relative",
//                 overflow: "hidden",
//               }}
//             >
//               <CardMedia
//                 component="img"
//                 image={item.image}
//                 alt={item.title}
//                 sx={{
//                   height: "180px",
//                   objectFit: "cover",
//                   width: "100%",
//                 }}
//               />
//               <CardContent
//                 sx={{
//                   flexGrow: 1,
//                   display: "flex",
//                   flexDirection: "column",
//                   justifyContent: "space-between",
//                   paddingBottom: "16px",
//                 }}
//               >
//                 <Box>
//                   <Typography
//                     variant="body2"
//                     sx={{
//                       textTransform: "uppercase",
//                       fontWeight: "bold",
//                       color: "gray",
//                       mb: 1,
//                     }}
//                   >
//                     {item.tagline}
//                   </Typography>
//                   <Typography
//                     variant="h6"
//                     sx={{
//                       fontSize: { xs: "1rem", sm: "1.25rem" },
//                       mb: 1,
//                       fontWeight: "bold",
//                     }}
//                   >
//                     {item.title}
//                   </Typography>
//                   <Typography
//                     variant="body2"
//                     sx={{
//                       color: "text.secondary",
//                       fontSize: { xs: "0.875rem", sm: "1rem" },
//                       lineHeight: 1.5,
//                       mb: 2,
//                       overflow: "hidden",
//                       textOverflow: "ellipsis",
//                       display: "-webkit-box",
//                       WebkitBoxOrient: "vertical",
//                       WebkitLineClamp: 3,
//                     }}
//                   >
//                     {item.description}
//                   </Typography>
//                 </Box>
//                 <Button
//                   variant="contained"
//                   href={item.link || "#"}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   sx={{
//                     fontWeight: "bold",
//                     backgroundColor: "primary.main",
//                     color: "white",
//                     "&:hover": {
//                       backgroundColor: "primary.dark",
//                     },
//                     position: "absolute",
//                     bottom: "16px",
//                     width: "calc(100% - 32px)",
//                     left: "16px",
//                     textTransform: "none",
//                     letterSpacing: "1.2px",
//                   }}
//                 >
//                   Read Article
//                 </Button>
//               </CardContent>
//             </Card>
//           </motion.div>
//         </Grid>
//       ))}
//     </Grid>
//   );
// };

const articleData = [
  { id: "authorship", title: "Authorship", data: authorshipData },
  { id: "membership", title: "Membership", data: membershipsData },
  { id: "mentors", title: "Mentors", data: mentorsData },
  { id: "judging", title: "Judging", data: judgingData },
  { id: "reviews", title: "Reviews", data: reviewsData },
];
const ThoughtLeadership = () => {
  const [expanded, setExpanded] = useState({
    authorship: true,
    membership: false,
    mentors: false,
    judging: false,
    reviews: false,
  });

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded((prev) => ({
      ...prev,
      [panel]: isExpanded,
    }));
  };

  return (
    <Box
      sx={{
        px: { xs: 2, sm: 4, md: 6 },
        py: 4,
        minHeight: "100vh",
      }}
    >
      {articleData.map(({ id, title, data }, index) => (
        <motion.div
          key={id}
          variants={accordionVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Accordion
            expanded={expanded[id]}
            onChange={handleAccordionChange(id)}
            sx={{ mb: 2, mt: 2 }} // Margin bottom between each accordion
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                {title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <SectionThoughts title={title} data={data} />
            </AccordionDetails>
          </Accordion>
        </motion.div>
      ))}
    </Box>
  );
};

export default ThoughtLeadership;
