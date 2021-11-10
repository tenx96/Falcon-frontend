import React from "react";
import "./sponsors.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Typography, Box, useMediaQuery, useTheme } from "@mui/material";

function SponsorCard({ image, title }) {
  const theme = useTheme();
  const smdAndDown = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className="d-flex justify-content-center align-items-center flex-column">
      <Box>
        <LazyLoadImage style={{
          width : "100px"
        }} src={image} effect="blur" />
      </Box>
      <Typography
        textAlign="center"
        color="text.secondary"
        sx={{
          mt: 1,
        }}
        variant="caption"
      >
        {title}
      </Typography>
    </div>
  );
}

export default SponsorCard;
// .sponsor-card {
//   height: 150px;
//   width: auto;
//   object-fit: contain;
// }
