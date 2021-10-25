import { useTheme } from "@mui/material/styles";
import {
  Container,
  Grid,
  Typography,
  Button,
  Box,
  useMediaQuery,
} from "@mui/material";
import {LazyLoadImage} from "react-lazy-load-image-component"

import React from "react";
function TourismCard({ title, description, image, location, right = true }) {
  const content = () => {
    return (
      <Grid item xs={12} sm={6}>
        <Container>
          <Typography
            textAlign="start"
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

          <Typography textAlign="start" variant="body1" gutterBottom>
            {description}
          </Typography>
          <Box
            sx={{
              mt: 4,
            }}
          >
            <Grid
              container
              flexDirection="column"
              justifyContent="center"
              alignItems="start"
            >
              <Typography textAlign="start" variant="body2" gutterBottom>
                Location : {location}
              </Typography>
              <Button
                sx={{
                  mt: 2,
                }}
                variant="outlined"
              >
                Contact now
              </Button>
            </Grid>
          </Box>
        </Container>
      </Grid>
    );
  };

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container>
      {!right && !matches && content()}
      <Grid item xs={12} sm={6}>
        <LazyLoadImage
          effect="blur"
          src={image}
          alt="some band image"
          className="artist-img"
        />
      </Grid>
      {(right || matches) && content()}
    </Grid>
  );
}

export default TourismCard;
