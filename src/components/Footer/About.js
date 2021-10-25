import "./footer.css";

import React from "react";
import { Box, Button,Typography } from "@mui/material";

function About() {
  return (
    <Box>
      <Box display="flex" justifyContent="center">
        <Button
          sx={{
            color: "white",
          }}
          variant="text"
        >
          About us
        </Button>

        <Button
          sx={{
            color: "white",
          }}
          variant="text"
        >
          Contact
        </Button>

        <Button
          sx={{
            color: "white",
          }}
          variant="text"
        >
          Home
        </Button>
      </Box>
    
    </Box>
  );
}

export default About;
