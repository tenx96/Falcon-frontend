import { Box, Typography } from "@mui/material";
import React from "react";

import { aboutData } from "data/aboutData";

function AboutFalcon({ title, description }) {
  return (
    <Box>
      <Box>
        <Typography component="div" variant="h4" fontWeight="bold" align="center">
          {aboutData.aboutFalcon.title}
        </Typography>
      </Box>
      <Box mt={4}>
        <Typography variant="subtitle1" align="center">
          {aboutData.aboutFalcon.desc}
        </Typography>
      </Box>
    </Box>
  );
}

export default AboutFalcon;
