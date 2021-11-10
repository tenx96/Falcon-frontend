import { Container, Grid, Typography, Box } from "@mui/material";
import ExpandableTypography from "components/ExpandableTypography";
import React from "react";
import "./style.css";
function VipCard({ title, description, image }) {
  return (
    <Grid className="vip-container" container>
      <Grid sx={{
        overflow : "hidden"
      }} item xs={12} sm={6}>
        <img src={image} alt="some-band-img" className="vip-img" />
      </Grid>

      <Grid  item container alignItems="center" xs={12} sm={6}>
        <Container>
          <Typography
            textAlign="center"
            className="max-lines-4"
            sx={{
              fontWeight: "bold",
              mt: 2,
            }}
            variant="h4"
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
