import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Link,
  Typography,
} from "@mui/material";
import React from "react";
import "./style.css";
function EventAccordian({
  expanded,
  handleChange,
  images,
  title,
  subtitle,
  desc,
  links,
}) {
  return (
    <Accordion expanded={expanded} onChange={handleChange}>
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Box display="flex" justifyContent="start" alignItems="center">
          <img
            className="accordian-thumbnail"
            src={images[0].imageUrl}
            alt="random-kitten"
          />
          <Box ml={2}>
            <Typography variant="subtitle1">{title}</Typography>
            {subtitle && <Typography variant="caption">{subtitle}</Typography>}
          </Box>
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{desc}</Typography>
        {links && (
          <Box display="flex" justifyContent="end" mt={2}>
            {links.map((item, i) => (
              <Button
                variant="outlined"
                onClick={() => {
                  window.open(item.link, "_blank");
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        )}
      </AccordionDetails>
    </Accordion>
  );
}

export default EventAccordian;
