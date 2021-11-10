import { Grid, Typography } from "@mui/material";
import React from "react";
import SponsorCard from "./SponsorCard";
import "./sponsors.css";

import { sponsorsList } from "data/sponsors";

function Sponsors() {
  return (
    <div>
      <Grid container sx={{display:'flex',justifyContent:'center'}} mt={10} >
        <Grid item xs={12} mb={5}>
          <Typography
            textAlign="center"
            variant="h3"
            gutterBottom
            component="div"
            fontWeight="bold"
          >
            Meet our sponsors
          </Typography>
        </Grid>
        {sponsorsList.map((item,index) => (
          <Grid
            key={index}
            item
            mt={3}
            container
            justifyContent="center"
            alignItems="center"
            sm={4}
            md={2}
            xs={6}
            mb={5}
          >
            <SponsorCard image={item.image} title={item.title}/>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Sponsors;
