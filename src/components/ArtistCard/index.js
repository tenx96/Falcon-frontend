import { Container, Grid, Typography, Button, Box } from "@mui/material";
import ConfirmationNumberOutlinedIcon from '@mui/icons-material/ConfirmationNumberOutlined';
import React from "react";
import "./ArtistCard.css";
function ArtistCard({ title, description, image }) {
  return (
    <Grid
      container
    >
      <Grid item xs={12} sm={6}>
        <img src={image} alt="some band pic" className="artist-img" />
      </Grid>

      <Grid item xs={12} sm={6}>
        <Container>
          <Typography
          textAlign="center"
            className="max-lines-4"
            sx={{
              fontWeight: "bold",
              mt: 2,
            }}
            variant="h3"
            gutterBottom
            component="p"
            
          >
            {title}
          </Typography>

          <Typography color="text.secondary" textAlign="center" variant="subtitle1" gutterBottom>
            {description}
          </Typography>
          <Box
            sx={{
              mt: 4,mb:3
            }}
          >
            <Grid container justifyContent="center" alignItems="center">
            <Button
              sx={{
                borderRadius: 100,
                mx:1,
                mt:1
              }}
              variant="outlined"
              color="primary"
            >
              View Lineup
            </Button>
            <Button

              startIcon={<ConfirmationNumberOutlinedIcon/>}
              sx={{
                borderRadius: 100,
                mx:1,
                mt:1
              }}
              variant="contained"
              color="primary"
            >
              Book your tickets
            </Button>
            </Grid>
          </Box>
        </Container>
      </Grid>
    </Grid>
  );
}

export default ArtistCard;
