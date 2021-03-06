import { Box, CircularProgress } from "@mui/material";
import useColor from "customHooks/useColor";
import React from "react";

function PageLoader() {
  const colors = useColor()

  return (
    <Box
      height="100vh"
      width="100vw"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bgcolor={colors.background.main}
    >
      <CircularProgress color="primary" />
    </Box>
  );
}

export default PageLoader;
