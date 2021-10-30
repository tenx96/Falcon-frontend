import { Container, Grid, Typography, Button, Box } from "@mui/material";
import ExpandableTypography from "components/ExpandableTypography";
import React from "react";
import "./style.css";
function VipCard({ title, description, image }) {
  return (
    <Grid container>
      <Grid item xs={12} sm={6}>
        <img src={image} alt="some band image" className="artist-img" />
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

          <ExpandableTypography   maxLines={5} color="text.secondary" textAlign="center" component="p" variant="subtitle1" gutterBottom>
            {description}
          </ExpandableTypography>
          <Box
            sx={{
              mt: 4,
            }}
          ></Box>
        </Container>
      </Grid>
    </Grid>
  );
}

export default VipCard;
