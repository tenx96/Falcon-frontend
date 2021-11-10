import "./footer.css";

import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useHistory } from "react-router";
import { ROUTE_ABOUT } from "routes/About";
import { ROUTE_HOME } from "routes/Home";
function About() {
  const history = useHistory();

  return (
    <Box>
      <Box display="flex" justifyContent="center">
        <Button
          onClick={() => {
            history.push(ROUTE_ABOUT);
          }}
          sx={{
            color: "white",
          }}
          variant="text"
        >
          About us
        </Button>

        <Button
          onClick={() => {
            history.push(ROUTE_HOME)
            window.scrollTo(0,0)
          }}
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
