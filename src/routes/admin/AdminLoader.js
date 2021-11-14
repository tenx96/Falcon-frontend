import { Box, CircularProgress } from "@mui/material";
import useColor from "customHooks/useColor";
import React from "react";

function AdminLoader() {
  const colors = useColor()

  return (
    <Box
      height="500px"
      width="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bgcolor={colors.background.main}
    >
      <CircularProgress color="primary" />
    </Box>
  );
}

export default AdminLoader;
