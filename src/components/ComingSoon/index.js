import React from "react";
import { Box, Typography } from "@mui/material";
import image from "assets/coming-soon.png";
import { height } from "@mui/system";
function ComingSoon() {
  return (
    <Box
      marginTop="64px"
      height="100vh"
      width="100vw"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <iframe src="https://embed.lottiefiles.com/animation/16957"></iframe>
    </Box>
  );
}

export default ComingSoon;
