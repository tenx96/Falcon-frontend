import { Box, Typography } from "@mui/material";
import React from "react";

function AboutFalcon({ data }) {
  return (
    <Box>
      <Box>
        <Typography
          component="div"
          variant="h4"
          fontWeight="bold"
          align="center"
        >
          {data.aboutFalcon.title}
        </Typography>
      </Box>
      <Box mt={4}>
        <Typography color="text.secondary" variant="subtitle1" align="center">
          {data.aboutFalcon.desc}
        </Typography>
      </Box>
    </Box>
  );
}

export default AboutFalcon;
