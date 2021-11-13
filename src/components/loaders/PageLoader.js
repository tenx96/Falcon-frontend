import { Box, CircularProgress } from "@mui/material";
import React from "react";

function PageLoader() {
  return (
    <Box
      height="100vh"
      width="100vw"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <CircularProgress color="primary" />
    </Box>
  );
}

export default PageLoader;
