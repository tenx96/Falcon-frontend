import { Container, Grid, Typography, Button, Box } from "@mui/material";
import ConfirmationNumberOutlinedIcon from "@mui/icons-material/ConfirmationNumberOutlined";
import React from "react";
import "./ArtistCard.css";
function ArtistCard({ data }) {
  const { title, subtitle, images } = data;

  return (
    <Container
      maxWidth="sm"
      sx={{
        bgcolor: (theme) => theme.palette.background.paper,
        padding: "30px 35px 20px 35px",
        "&:hover": {
          bgcolor: (theme) => theme.palette.background.hover,
        },
      }}
    >
      <div>
        {images && images.length > 0 && (
          <img
            src={images[0].imageUrl}
            alt="some band pic"
            className="artist-img"
          />
        )}
      </div>
      <div>
        <Typography
          textAlign="start"
          className="max-lines-4"
          sx={{
            fontWeight: "bold",
            mt: 2,
          }}
          variant="h6"
          gutterBottom
          component="p"
        >
          {title}
        </Typography>

        <Typography
          textAlign="start"
          variant="caption"
          gutterBottom
          component="p"
        >
          {subtitle}
        </Typography>
      </div>
    </Container>
  );
}

export default ArtistCard;
