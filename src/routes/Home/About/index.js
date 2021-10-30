import { Box, Typography } from "@mui/material";
import React from "react";

function AboutFalcon({ title, description }) {
  return (
    <Box>
      <Box>
        <Typography component="div" variant="h4" fontWeight="bold" align="center">
          {title}
        </Typography>
      </Box>
      <Box mt={4}>
        <Typography variant="subtitle1" align="center">
          {description}
        </Typography>
      </Box>
    </Box>
  );
}

export default AboutFalcon;
